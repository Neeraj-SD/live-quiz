
import { IoManager } from "./managers/IoManager";
import { UserManager } from "./managers/UserManager";

const io = IoManager.getIo();

io.listen(3000);
console.log("Listening for io connections...")

const userManager = new UserManager();

io.on('connection', client => {
    userManager.createUser(client);
    client.emit('join-ack','Hello from server. You are identified as: '+client.id);
    // client.on('event', data => { /* … */ });
    // client.on('disconnect', () => { /* … */ });
});

