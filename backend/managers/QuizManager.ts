import { Quiz, ValidSubmissions } from "../Quiz";

export class QuizManager {
    
    private quizes: Quiz[];

    constructor() {
        this.quizes = [];
    }

    public getQuiz(roomId: string) {
        return this.quizes.find(_ => _.roomId === roomId);
    }

    public start(roomId: string) {
        const quiz = this.getQuiz(roomId);
        if(!quiz) {return;}
        
        quiz.start();    

    }

    public createQuiz(roomId: string) {
        if(this.getQuiz(roomId)) {
            return;
        }
        this.quizes.push(new Quiz(roomId));
    }


    public createQuestion(roomId: string, question: {
        question: string,
        options: {
            val: string
        }[],
        answer: ValidSubmissions,
    }) {
        const quiz = this.getQuiz(roomId);
        if(!quiz) {return;}

        quiz.addQuestion(
            {...question,
                questionId: 0,
                startTime: new Date().getTime(),
            }
        )

    }
  

    public status(roomId: string) {
        const quiz = this.getQuiz(roomId);
        if(!quiz) {return;}
        
        return quiz.status();

    }

}