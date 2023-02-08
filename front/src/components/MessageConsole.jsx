import { useEffect, useState, useContext } from "react"
import { Storage } from "../App"



export default function MessageConsole() {
    const { message, setMessage, room, setList, socket } = useContext(Storage)
    
    useEffect(() => {
        socket.on("recieve-message", (recieved) => {
            console.log(recieved)
            addMessage(recieved)
        })
        return (() => {
            socket.off("recieve-message")
        })
    }, [])

    const handleClick = () => {
        socket.emit("send-message", message, room)
        addMessage(message)
    }

    const addMessage = (recieved) => {
        setList((prev) => [...prev, recieved])
    }

    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <input type="text" onChange={(e) => setMessage(e.target.value)}
                placeholder="message..." />
            <button onClick={handleClick}>
                send
            </button>
        </div>
    )
}