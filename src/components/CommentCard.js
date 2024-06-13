import React from 'react';
import { Link } from 'react-router-dom';
// import Testi from './DateTimeModule';

const CommentCard = ({authorChannelUrl, authorDisplayName, publishedAt, textDisplay, authorProfileImageUrl, likeCount }) => {
  return (
    <div className='mt-4'>
      <div className='flex'>
        <div className=''>
           <Link to={authorChannelUrl}><img className='w-11 h-11 rounded-full' alt='logo' src={authorProfileImageUrl}/></Link>
        </div>
        <div>
            <h5 className='text-xs ml-2 font-semibold'>{authorDisplayName} {publishedAt}hours ago</h5>
            <div className=''>
                <h1 className='ml-2 text-sm w-11/12'>{textDisplay}</h1>
            </div>
        </div>
      </div>
      <div className='flex ml-16'>
          <div className=''>
             <button><i class="fa-regular fa-thumbs-up"></i></button>
          </div>
          <h5 className='ml-1 text-sm'>{likeCount} k</h5>
          <div className='ml-4'>
             <button><i class="fa-regular fa-thumbs-down"></i></button>
          </div>
          <button className='ml-3 text-sm font-semibold'>Reply</button>
      </div>
    </div>
  )
}

export default CommentCard;
