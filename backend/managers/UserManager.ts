import { Socket } from "socket.io";
const ADMIN_PASSWORD = 'ADMIN_PASSWD';

export class UserManager {

    createUser(socket:Socket) {
        this.eventHandlers(socket);
        console.log('connected to client: '+socket.id);
    }

    private eventHandlers(socket:Socket) { 

        socket.on("join", () => {

        })

        socket.on('join-admin', (data) => {
            if(data.password != ADMIN_PASSWORD) {
                return;
            }

            // create Quiz
            

        })

    }

}