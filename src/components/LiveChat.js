import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { closeLiveChat } from '../utils/liveChatSlice';
import { useDispatch } from 'react-redux';




const LiveChat = () => {
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        getMessages();
    }, []);

    const closeChat = () => {
        dispatch(closeLiveChat())
    }

    const getMessages = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json = await response.json();
        setMessages(json);
    };

    return (
        <div className='m-2 p-2 w-full h-[600px] overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-slate-50'>
            <button
                className='bg-slate-300 w-10 h-6 font-sm font-bold hover:bg-white sticky top-0'
                onClick={() => closeChat()} 
            >
                x
            </button>
            {messages.map((item) => (
                <ChatMessage key={item.id} body={item.body} name={item.name} />
            ))}
        </div>
    );
};

export default LiveChat;

