import React, { useEffect, useState } from 'react';
import { YOUTUBE_MOSTPOPULAR_API } from './data/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
      getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_MOSTPOPULAR_API);
    const json = await data?.json();
     //console.log(json);
     //console.log(json?.items);
    // console.log(json.items[0]?.snippet);
    setVideos(json?.items);
    

      return <div>videoo</div>
  }
  return (
    <div className='flex flex-wrap '>
      {videos.length > 0 && videos.map(video => (
        <Link to={"/watch?v="+ video.id}><VideoCard key={video.id} snippet={video.snippet} statistics={video.statistics}/></Link>
      ))}
    </div>
  )
}

export default VideoContainer;
