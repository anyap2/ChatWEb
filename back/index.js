const express = require("express")
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const authController = require("./controllers/authController")
require('dotenv').config()

mongoose.connect('mongodb+srv://CV_project:someNew_Password102938.^@cluster0.owfwbpp.mongodb.net/socketExercize?retryWrites=true&w=majority', {})
    .then(() => console.log('connected successfully'))
    .catch(() => {
        console.log('connection to database fail')
            ((error) => error)
    })

app.use(cors())
app.use(express.json())

app.post('/register', authController.register)
app.post('/login', authController.login)

app.listen(8001, () => console.log("listening on port 8001 "))


const io = require("socket.io")(8000, {
    cors: {
        origin: ['http://localhost:3000']
    },
});

io.on("connection", (socket) => {
    // console.log(socket.id);
    // io.emit("test", "connected");
    socket.on("join-room", (room, callback) => {
        socket.join(room);
        callback(room);
    });
    socket.on("send-message", (message, room) => {
        // socket.join(room);
        if (room == "") {
            io.sockets.emit("recieve-message", message)
        }
        else {
            console.log(message);
            socket.to(room).emit("recieve-message", message)
        }
    });

  
})