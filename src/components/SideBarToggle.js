import React from 'react';
import { Link } from "react-router-dom"

const SideBarToggle = () => {
  return (
    <div className=''>
      <ul className='w-20'>
        <Link to={"/"}><li className='font-bold flex ml-3 p-3'><i class="fa-solid fa-house"></i></li></Link>
        <li className='text-xs pl-4'>Home</li>
        <li className='font-bold ml-3 p-3 flex'><i class="fa-solid fa-bolt"></i></li>
        <li className='text-xs pl-4'>Shorts</li>
        <li className='font-bold ml-3 p-3 flex'><i class="fa-solid fa-tv"></i></li>
        <li className='text-xs pl-1'>Subscriptions</li>
        <li className='font-bold ml-3 p-3 flex'><i class="fa-solid fa-user"></i></li>
        <li className='text-xs pl-5'>You</li>
      </ul>
    </div>
  )
};

export default SideBarToggle;
