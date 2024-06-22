import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { closeLiveChat } from '../utils/liveChatSlice';
import { useDispatch } from 'react-redux';

const LiveChat = () => {
    const [messages, setMessages] = useState([]);
    const [delayedMessages, setDelayedMessages] = useState([]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        getMessages();
    }, [dispatch]);

    const closeChat = () => {
        dispatch(closeLiveChat());
    };

    const getMessages = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json = await response.json();
        setMessages(json);
        setDelayedMessages(json.slice(0,10));
        //console.log("delayedmesseges",delayedMessages)
        
    };
    

    return (
        <div>
            <div className='sticky top-0'>
            <button
                className='bg-slate-300 w-10 h-6 font-sm font-bold hover:bg-white'
                onClick={() => closeChat()}
            >
                x
            </button>
            </div>
        <div className='m-2 p-2 w-full h-[600px] border border-slate-950 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-slate-50 flex flex-col-reverse'>
            
            {delayedMessages.map((item) => (
                <ChatMessage key={item.id} body={item.body} name={item.name} />
            ))}
        </div>
        <form onSubmit={(e) => {
            e.preventDefault()
            //console.log("on form submit", liveMessege);
        }}>
          <div className='flex'>
              <input type='text' placeholder='Write a comment here...'
                className='ml-2 border w-80 h-7 border-slate-400 pl-3 rounded-md'
                value={delayedMessages}
                onChange={(e) => setDelayedMessages({
                    "name": "sanal",
                    "body": e.target.value,
                "id":5656
            })}
              />
             <button className='bg-slate-900 text-white w-16 ml-5 rounded-lg hover:bg-black'>Send</button>
           </div>
        </form>
        </div>
    );
};

export default LiveChat;


