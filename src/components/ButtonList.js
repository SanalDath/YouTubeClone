import React from 'react';
import { buttonName } from './data/buttonName';


const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto py-2 space-x-2 no-scrollbar'>
      {buttonName.map((item) =>
        <button className=' px-4 py-1 bg-gray-200 text-black rounded-full hover:bg-gray-300 focus:outline-none'>{item}</button>
      )}
    </div>
  )
};

export default ButtonList;
