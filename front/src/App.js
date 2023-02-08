import { useState, useEffect, createContext, useContext } from "react"
import Context from "./Context"
import { io } from "socket.io-client"
import CreateRoom from "./components/CreateRoom"
import MessageConsole from "./components/MessageConsole"
import Messages from "./components/Messages"
import Register from "./components/Register"
import Login from "./components/Login"

export const Storage = createContext()

function App() {
  const values = Context()

  return (
    <Storage.Provider value={values}>
      <div >
        <Register/>
        {/* <Login/> */}
        <CreateRoom />
        <Messages />
        <MessageConsole />
      </div>
    </Storage.Provider >
  );
}

export default App;
