import React from 'react';
import Testi from './DateTimeModule';



const VideoCard = ({ snippet, statistics }) => {
    // console.log(videos);
    // console.log(videos.info[0].snippet.title)
    
    //console.log(info?.statitics?.viewCount);
    //  const {snippet, statistics } = info;
    // const {channelTitle, title, thumbnails, publishedAt} = snippet;
      const timeValue = snippet.publishedAt;
    // const value = timeValue.toString();
    // const val = value;
     //console.log(typeof(timeValue));
    // console.log(typeof(val));
    return (
      <div className='p-2 m-2'>
        <img className='rounded-lg' alt='logo' src={snippet.thumbnails.medium.url}/>
        <div className='p-1 m-1 flex'>
          <img className='h-8 w-8 rounded-2xl' alt='logo' src={snippet.thumbnails.default.url}/>
          <div>
            <h1 className='font-bold p-1 m-1 w-72 h-8 overflow-hidden'>{snippet.title}</h1>
            <h4 className='text-sm font-bold h-3 w-46 text-slate-900'>{snippet.channelTitle}</h4>
            <div className='flex mt-1'>
              <h2 className='text-xs'>{statistics.viewCount} views</h2>
              <span> . </span>
              <h3 className='text-xs'><Testi val={timeValue.toString()}/></h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default VideoCard;
