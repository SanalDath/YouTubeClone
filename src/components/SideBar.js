import React from 'react';
import { useSelector } from 'react-redux';
import SideBarToggle from './SideBarToggle';
import { Link } from 'react-router-dom';

const SideBar = () => {
  
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); //Subscribe to a specific part of appslice

  if(!isMenuOpen) return <SideBarToggle/>;//doing early return

  return (
    <div className='p-5 shadow-lg w-52'>
      <ul className=''>
        <Link to={"/"}><li className='font-bold'>Home</li></Link>
        <li className='font-bold'>Shorts</li>
        <li className='font-bold'>Subscriptions</li>
      </ul>
      <hr></hr>
      <div>
        <ul className=''>
          <li className='font-bold'>Your Channel</li>
          <li className='font-bold'>History</li>
          <li className='font-bold'>Playlists</li>
          <li className='font-bold'>Your Videos</li>
          <li className='font-bold '>Watch Later</li>
          <li className='font-bold'>Liked Videos</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
