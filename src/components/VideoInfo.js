import React from 'react';
import { useState, useEffect } from 'react';
import { YOUTUBE_MOSTPOPULAR_API } from './data/constants';
//import Testi from './DateTimeModule';
import CommentSection from './CommentSection';

const VideoInfo = ({params}) => {
    //console.log(params)
    const [showDropDown , setShowDropDown ] = useState(false);
   const [seeMore, setSeeMore] = useState(false);
    const [videos, setVideos] = useState([]);
  useEffect(() => {
      getVideo();
  }, []);
  const getVideo = async () => {
    try {
        const response = await fetch(YOUTUBE_MOSTPOPULAR_API);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const json = await response.json();
        setVideos(json.items);
    } catch (error) {
        console.error('Failed to fetch videos:', error);
    }
};

    const res = videos.filter(video => video.id === params);
    //console.log("res.id",res[0]?.id);
    //setResult(res);
    //console.log("res", res)
    
    //console.log(res[0]?.snippet?.publishedAt);
    //const timeValue = res[0]?.snippet?.publishedAt;
    //console.log("res", timeValue)
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
      };
  return (
    <div className=''>
        <div className=''>
            <h1 className='font-bold text-2xl mt-2 w-5/6'>{res[0]?.snippet?.title}</h1>
        </div>
        <div className='mt-4 flex'>
            <img className='w-8 h-8 rounded-2xl' alt='sub' src={res[0]?.snippet?.thumbnails?.standard?.url}/>
            <div className='ml-5'>
               <h2 className='font-bold text-sm'>{res[0]?.snippet?.channelTitle}</h2>
               <h5 className='text-xs'>{} subscribers</h5>
            </div>
            <div className='ml-9'>
                <button className='w-28 h-9 bg-black rounded-2xl text-white hover:bg-slate-800'>subscribe</button>
            </div>
            <div className='ml-56'>
                <button className='bg-slate-200 w-20 h-9 rounded-l-full hover:bg-slate-300'><i class="fa-regular fa-thumbs-up"></i>  {Math.floor(res[0]?.statistics?.likeCount/1000)}K</button>
                <button className='bg-slate-200 w-16 h-9 rounded-r-full hover:bg-slate-300'><i class="fa-regular fa-thumbs-down"></i></button>
            </div>
            <div className='ml-1'>
                <button className='w-20 h-9 bg-slate-200 rounded-2xl hover:bg-slate-300'><i class="fa-solid fa-share"></i> Share</button>
            </div>
            <div className='ml-3'>
                <button className='w-32 h-9 bg-slate-200 rounded-2xl hover:bg-slate-300'><i class="fa-solid fa-arrow-down"></i> Download</button>
            </div>
            <div className='ml-3'>
                <button className='w-16 h-9 bg-slate-200 rounded-2xl hover:bg-slate-300'><i class="fa-solid fa-ellipsis"></i></button>
            </div>
        </div>
        <div>
        <div className='bg-slate-100 w-11/12'>
               <div className='flex mt-3 bg-slate-100 '>
                  <h1 className='text-sm font-semibold'>{res[0]?.statistics?.viewCount} views </h1>
                  {/* <h2 className='text-sm font-semibold pl-2'><Testi val={timeValue.toString()}/></h2> */}
               </div>
                <h4 className=''>{res[0]?.snippet?.description.slice(0,200)}...</h4>
                <h4 className=''>{seeMore && res[0]?.snippet?.description.slice(200, 1000)}</h4>
                {seeMore? <button onClick={() => {
                    setSeeMore(false)
                }}>show less</button> : <button onClick={() => {
                    setSeeMore(true)
                }}>Show more</button>}
            </div>
            <div className='flex'>
                <h1 className='font-bold text-xl mt-8'>{res[0]?.statistics?.commentCount} Comments</h1>
                <button onClick={toggleDropDown} className='mt-9 ml-8 hover:bg-slate-100 w-24 h-8'>
                    <i class="fa-solid fa-bars-staggered"></i> sort by
                    {<div>
                      {showDropDown && <div className='fixed bg-slate-200'>
                                          <h1 className='text-sm font-semibold'>Top comments</h1>
                                          <h1 className='text-sm font-semibold'>Newest first</h1>
                                       </div>}
                    </div>}
                </button>
            </div>

            
        </div>
      <div>
        <div className='flex'>
        <img className='w-12 h-12' alt="logo" src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg"/>
        <input className="border-b-2 border-zinc-950 w-10/12 h-8 focus:outline-none focus:border-b-2 focus:border-zinc-950 placeholder-gray-500" placeholder='Add a comment...'  type='text'/>
        </div>
        <div className='flex'>
            <div className='mt-2 ml-3'>
               <i class="fa-regular fa-face-smile"></i>
            </div>
            <div className='ml-[48rem]'>
                <button className='w-16 h-9 text-sm bg-slate-200 rounded-2xl hover:bg-slate-300'>cancel</button>
                <button className='ml-3 w-20 h-9 text-sm bg-slate-200 rounded-2xl hover:bg-slate-300'>Comment</button>
            </div>
        </div>
      </div>
      <div>
        <CommentSection id={res[0]?.id}/>
      </div>
    </div>
  )
}

export default VideoInfo;
