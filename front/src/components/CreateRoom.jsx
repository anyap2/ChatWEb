import { useContext, useEffect } from "react"
import { Storage } from "../App"


export default function CreateRoom(props) {

    const { room, setRoom, setList, socket } = useContext(Storage)

    const handleJoin = () => {
        socket.emit("join-room", room, (roomId) =>
            addMessage(`joined room: ${roomId}`))
    }

    const addMessage = (recieved) => {
        setList((prev) => [...prev, recieved])
    }
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <input type="text" onChange={(e) => setRoom(e.target.value)}
                placeholder="name your room..." />
            <button onClick={handleJoin}>
                join
            </button>
        </div>
    )
}