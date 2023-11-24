import React, { useEffect, useState } from 'react'
import { useMessages } from './useMessages'
import { IoIosSend } from "react-icons/io";
import { useSendMessage } from './useSendMessages';
import ScrollableFeed from "react-scrollable-feed"

import MyChatBubble from './MyChatBubble';
import OthersChatBubble from './OthersChatBubble';

const ChatBox = ({ chat, isChatLoading }) => {

    const user = JSON.parse(localStorage.getItem("user"));
    const { messages, isLoading: isMessagesLoading } = useMessages()
    const { sendMessage, isSending } = useSendMessage()

    const [newMessage, setNewMessage] = useState("")

    const handleSendMessage = () => {


        if (newMessage < 1) return

        const messageData = {
            content: newMessage,
            chatId: "655f42b189ec5d9cde817316",
        }

        // Send message to api
        sendMessage(messageData)

        // Reset state
        setNewMessage("")

    }

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }




    if (isMessagesLoading) return <div><span className="loading loading-infinity loading-md"></span></div>;


    return (
        <div className='flex flex-col items-center justify-between py-4 w-[90%] bg-c-bg-variant mx-auto rounded-3xl '>
            {!isChatLoading &&
                <div className='w-11/12 bg-white py-6 flex-grow my-4 rounded-xl'>
                    <div className=' border-b border-black px-4 pb-4 text-xl font-semibold'>
                        {chat.chatName}
                    </div>
                    <div className="px-2 h-[300px]">
                        <ScrollableFeed className='scrollbar-width-none'>
                            {messages && messages.map((message) => (
                                <div key={message._id}>
                                    {user.user === message.sender.username
                                        ?
                                        <MyChatBubble
                                            content={message.content}
                                            createdAt={message.createdAt}
                                            username={message.sender.username}
                                        />
                                        :
                                        <OthersChatBubble
                                            content={message.content}
                                            createdAt={message.createdAt}
                                            username={message.sender.username}
                                        />}
                                </div>
                            ))}
                        </ScrollableFeed>
                    </div>
                </div>
            }
            <div className=' w-11/12 bg-white my-6 rounded-xl flex gap-4 justify-center items-center pr-4'>
                <input type="text" placeholder="Type here" value={newMessage} onChange={handleChange} className=" w-full h-full py-6 rounded-xl " />
                <button onClick={handleSendMessage} ><IoIosSend className=' text-2xl' /></button>
            </div>

        </div>
    )
}

export default ChatBox