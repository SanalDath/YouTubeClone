import React from 'react';
import { Link } from "react-router-dom"

const SideBarToggle = () => {
  return (
    <div className=''>
      <ul className=''>
        <Link to={"/"}><li className='font-bold flex m-3 p-3'><i class="fa-solid fa-house"></i></li></Link>
        <li className='font-bold m-3 p-3 flex'><i class="fa-solid fa-bolt"></i></li>
        <li className='font-bold m-3 p-3 flex'><i class="fa-solid fa-tv"></i></li>
      </ul>
      <hr></hr>
      <div>
        <ul className=''>
          <li className='font-bold m-3 p-3 flex'><i class="fa-solid fa-user"></i></li>
          <li className='font-bold m-3 p-3 flex'><i class="fa-solid fa-clock-rotate-left"></i></li>
          <li className='font-bold m-3 p-3 flex'><i class="fa-solid fa-list"></i></li>
          <li className='font-bold m-3 p-3 flex'><i class="fa-solid fa-circle-play"></i></li>
          <li className='font-bold m-3 p-3 flex'><i class="fa-regular fa-clock"></i></li>
          <li className='font-bold m-3 p-3 flex'><i class="fa-solid fa-thumbs-up"></i></li>
        </ul>
      </div>
    </div>
  )
};

export default SideBarToggle;
