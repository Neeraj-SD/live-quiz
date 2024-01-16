export type ValidSubmissions = 0 | 1 | 2 | 3;

const QUESTION_TIMEOUT_S = 5;

let universalQuestionId = 0;

interface Question {
    questionId: number;
    question: string;
    options: {
        val: string
    }[];
    answer: ValidSubmissions;
    startTime: number;
}

interface User {
    id: string;
    name: string;
    points: number;
}

export class Quiz {
    private quizId: string;
    public roomId: string;
    private running:boolean;
    private questions: (Question)[];
    private currentState: 'not_started' | 'running' | 'leaderboard' | 'ended';
    private currentQuestion: number;
    private users: (User)[];

    constructor(roomId: string) {
        this.running = false;
        this.roomId = roomId;
        this.quizId = '';
        this.questions = [];
        this.users = [];
        this.currentState = 'not_started';
        this.currentQuestion = 0;
    }

    public start() {
        this.running = true;
        this.currentState = 'running';
        this.setActiveQuestion(this.questions[0]);
    }

    public addQuestion(question: Question) {

        this.questions.push({...question, questionId: universalQuestionId++});
        console.log("Question added: "+this.questions)
    }

    public setActiveQuestion(question: Question) {
        question.startTime = new Date().getTime();
        this.currentState = 'running';

        //! Send problem with IO call

        setTimeout(() => {

            //! Send the leaderboard to the users
            
            this.currentState = 'leaderboard';

        }, 
        QUESTION_TIMEOUT_S * 1000);

    }

    public next() {
        this.currentQuestion++;
        const question = this.questions[this.currentQuestion];

        if(question) {
            this.setActiveQuestion(question);
        }
        else {
            this.currentQuestion--;
            this.currentState = 'ended';
            // End of quiz -> handler
        }

    }

    public getLeaderboard() {
        this.users.sort((a, b) => a.points < b.points ? 1: -1).slice(0, 20);
    }

    public status() {
        if(this.currentState == 'not_started') {
            return {type: 'not_started'};
        }

        if(this.currentState == 'leaderboard') {
            // Send the leaderboard
            return {type: 'leaderboard', leaderboard: this.getLeaderboard()};
        }

        if(this.currentState == 'ended') {
            return {type: 'ended', leaderboard: this.getLeaderboard()};
        }

        if(this.currentState == 'running') {
            return {
                type: 'running',
                question: this.questions[this.currentQuestion]
            }
        }

    }

    private generateRandomId(length: number): string {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';
        var charLength = chars.length;
        var result = '';
        for ( var i = 0; i < length; i++ ) {
           result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;  
    }

    public addUser(name: string) {
        const id = this.generateRandomId(7);
        this.users.push({
            id,
            name,
            points: 0
        });
        return id;
    }

    public submit(userId: string, questionId: number, answer: ValidSubmissions) {

        // Check if user already answered
        const user = this.users.find(_ => _.id === userId);
        const question = this.questions.find(_ => _.questionId === questionId);

        if(!user || !question) {
            console.log('Question or user not found');
        }

        if(question?.answer === answer) {
            user!.points = (1000 - (500 * (new Date().getTime() - question.startTime) / (QUESTION_TIMEOUT_S * 1000)));
        }
       
    }



}