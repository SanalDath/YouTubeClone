import React from 'react';
import { useState, useEffect } from 'react';
import { YOUTUBE_MOSTPOPULAR_API } from './data/constants';

const VideoInfo = ({params}) => {
    //console.log(params)
   // const [result , setResult ] = useState()
    const [videos, setVideos] = useState([]);
  useEffect(() => {
      getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_MOSTPOPULAR_API);
    const json = await data?.json();
    //console.log(json);
    // console.log(json?.items);
    // console.log(json.items[0]?.snippet);
    setVideos(json?.items);
    }
    const res = videos.filter(video => video.id === params);
    //setResult(res);
    console.log("res", res)
    //console.log("res.snippet",res[0].snippet?.title)
  return (
    <div className=''>
        <div className=''>
            <h1 className='font-bold text-2xl mt-2'>{res[0]?.snippet?.title}</h1>
        </div>
        <div className='mt-4 flex'>
            <img className='w-8 h-8 rounded-2xl' alt='sub' src={res[0]?.snippet?.thumbnails?.standard?.url}/>
            <div className='ml-5'>
               <h2 className='font-bold text-sm'>{res[0]?.snippet?.channelTitle}</h2>
               <h5 className='text-xs '>{} subscribers</h5>
            </div>
            <div className='ml-10'>
                <button className='w-28 h-9 bg-red-600 rounded-2xl text-white'>subscribe</button>
            </div>
            <div className=''>
                <button className=''>{Math.floor(res[0]?.statistics?.likeCount/1000)}</button>
            </div>
        </div>
      
    </div>
  )
}

export default VideoInfo;
