const io = require("socket.io-client")
// import { io } from "socket.io-client"

socket = io("ws://localhost:3000")

socket.on('join-ack', _ => console.log(_))

