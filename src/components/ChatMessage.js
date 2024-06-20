import React from 'react';

const ChatMessage = ({name, id, body}) => {
  return (
    <div className='flex m-2 p-2'>
      <img className='w-8 h-8 rounded-2xl' alt='logo' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'/>
      <div>
        <h1 className='text-xs ml-2 font-semibold'>{name}</h1>
        <h4 className='text-sm ml-2'>{body.slice(0,50)}</h4>
      </div>
    </div>
  )
}

export default ChatMessage
