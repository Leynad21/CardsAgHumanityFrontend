import React, { useEffect, useState } from 'react'
import ChatBox from '../../features/chat/ChatBox'
import { useChats } from '../../features/chat/useChats'
import io from "socket.io-client"

const ENDPOINT = "http://localhost:5000/"

let socket

const RoomPage = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const [sockedConnected, setSockedConnected] = useState(false)

    console.log(user);
    const { chats, isLoading: isChatLoading } = useChats();

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit("setup", user.user)
        socket.on('connection', () => { setSockedConnected(true) })
    }, [])

    useEffect(() => {

        !isChatLoading && (
            socket.emit('join chat', chats[0].chatName)
        )
    }, [chats])


    return (
        <div className=' grid grid-cols-2 h-[100vh]'>
            <div className="bg-red-100">Game</div>
            <div className="bg-blue-100">
                {!isChatLoading && <ChatBox
                    chat={chats[0]}
                    isChatLoading={isChatLoading}
                />}
            </div>
            <div className="bg-blue-100">Cards Display</div>
            <div className="bg-red-100">Cards Actions</div>

        </div>
    )
}

export default RoomPage