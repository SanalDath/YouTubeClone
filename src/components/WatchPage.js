import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import RelatedVideos from './RelatedVideos';
import VideoInfo from './VideoInfo';


const WatchPage = () => {
  const [ searchParams ] = useSearchParams();
  //console.log(searchParams.get("v"));
  const params = searchParams.get("v");
  //console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  
  return (
    <div>
       <div className='flex'>
        <div>
          <iframe className='rounded-lg' width="1000" 
           height="550"
           src={"https://www.youtube.com/embed/"+searchParams.get("v")}
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerPolicy="strict-origin-when-cross-origin"
           allowFullScreen></iframe>
           <div className=''>
            <VideoInfo params={params}/>
          </div>
        </div>
         <div className=' ml-3'>
            <RelatedVideos/>
          </div>
       </div>
    </div>
  )
}

export default WatchPage
