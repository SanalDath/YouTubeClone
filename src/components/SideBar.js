import React from 'react';
import { useSelector } from 'react-redux';
import SideBarToggle from './SideBarToggle';
import { Link } from 'react-router-dom';



const SideBar = () => {
  
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); //Subscribe to a specific part of appslice

  if(!isMenuOpen) return <SideBarToggle/>;//doing early return

  return (
    <div className='p-5 shadow-lg'>
      <ul className=''>
        <Link to={"/"}><li className='font-bold w-48 flex m-1 p-1'><i class="fa-solid fa-house"></i><h1 className='ml-8'>Home</h1></li></Link>
        <li className='font-bold m-1 p-1 flex'><i class="fa-solid fa-bolt"></i><h1 className='ml-8'>Shorts</h1></li>
        <li className='font-bold w-48 m-1 p-1 flex'><i class="fa-solid fa-tv"></i><h1 className='ml-6'>Subscriptions</h1></li>
      </ul>
      <hr></hr>
      <div>
        <ul className=''>
          <li className='m-2 p-2'>You </li>
          <li className='font-bold m-1 p-1 flex'><i class="fa-solid fa-user"></i><h1 className='ml-8'>Your Channel</h1></li>
          <li className='font-bold m-1 p-1 flex'><i class="fa-solid fa-clock-rotate-left"></i><h1 className='ml-8'>History</h1></li>
          <li className='font-bold m-1 p-1 flex'><i class="fa-solid fa-list"></i><h1 className='ml-8'>Playlists</h1></li>
          <li className='font-bold m-1 p-1 flex'><i class="fa-solid fa-circle-play"></i><h1 className='ml-8'>Your Videos</h1></li>
          <li className='font-bold m-1 p-1 flex'><i class="fa-regular fa-clock"></i><h1 className='ml-8'>Watch Later</h1></li>
          <li className='font-bold m-1 p-1 flex'><i class="fa-solid fa-thumbs-up"></i><h1 className='ml-8'>Liked Videos</h1></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
