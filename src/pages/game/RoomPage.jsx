import React, { useEffect, useState } from 'react'
import ChatBox from '../../features/chat/ChatBox'
import { useChats } from '../../features/chat/useChats'
import io from "socket.io-client"

const ENDPOINT = "http://localhost:5000/"

let socket

const RoomPage = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const [socketConnected, setSocketConnected] = useState(false)

    const { chats, isLoading: isChatLoading } = useChats();

    // useEffect(() => {
    //     socket = io(ENDPOINT)
    //     socket.emit("setup", user.user)
    //     socket.on('connection', () => { setSockedConnected(true) })
    // }, [])

    useEffect(() => {
        // Connect to the socket when the component mounts
        socket = io(ENDPOINT);
        socket.emit('setup', user.user);

        // Listen for connection success
        socket.on('connect', () => {
            console.log('Socket connected successfully');
            setSocketConnected(true);
        });

        // Clean up socket connection when component unmounts
        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, [user.user]);


    useEffect(() => {
        if (chats && chats.length > 0) {
            const chatName = chats[0];

            socket.emit('join chat', chatName);
            console.log("Joined Chat:", chatName);
        }

    }, [chats, isChatLoading])


    return (
        <div className=' grid grid-cols-2 h-[100vh]'>
            <div className="bg-red-100">Game</div>
            <div className="bg-blue-100">
                {!isChatLoading && <ChatBox
                    chat={chats[0]}
                    isChatLoading={isChatLoading}
                    socket={socket}
                />}
            </div>
            <div className="bg-blue-100">Cards Display</div>
            <div className="bg-red-100">Cards Actions</div>

        </div>
    )
}

export default RoomPage