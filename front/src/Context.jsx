import { useEffect, useState } from "react"
import { io } from "socket.io-client"


export default function Context() {
    const [room, setRoom] = useState('')
    const [list, setList] = useState([])
    const [message, setMessage] = useState('')
    const [socket, setSocket] = useState(io("http://localhost:8000"));
    
    return {
        room, setRoom, list, setList, message, setMessage, socket
    }
}
