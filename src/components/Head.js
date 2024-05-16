import React from 'react';
import { hamlogo } from './assets/hamburgerIcon'; 
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {
  
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
  dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col sticky top-0 bg-slate-50 '>
        <div className='flex col-span-1'>
            <img className='w-10 h-10' alt='logo' onClick={() => toggleMenuHandler()} src={hamlogo}/>
            <img className='w-28 h-12 ml-5' alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'/>
        </div>
        <div className='my-5 ml-32 col-span-10'>
            <input className="border border-zinc-950 w-96 h-9  rounded-l-full" type='text'/>
            <button className="bg-slate-300 rounded-r-full h-9 w-12">S</button>
        </div>
        <div className='col-span-1'>
          <img className='w-8 h-8' alt="logo" src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg"/>
        </div>
    </div>
  )
}

export default Head;
