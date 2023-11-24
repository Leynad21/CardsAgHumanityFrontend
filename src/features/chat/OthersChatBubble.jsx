import React from 'react'

const OthersChatBubble = ({ content, createdAt, username }) => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://bordalo.observador.pt/v2/q:84/rs:fill:2000:1121/c:2000:1121:nowe:0:137/plain/https://s3.observador.pt/wp-content/uploads/2023/06/21141521/41071648.jpg" />
                </div>
            </div>
            <div className="chat-header">
                {username}
                <time className="text-xs opacity-50 pl-1">{new Date(createdAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</time>
            </div>
            <div className="chat-bubble">{content}</div>
        </div>
    )
}

export default OthersChatBubble