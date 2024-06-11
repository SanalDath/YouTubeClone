import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import RelatedVideoCard from './RelatedVideoCard';

const RelatedVideos = () => {
    const [video, setVideo] = useState([])
    useEffect(() => {
        getVideos()
    }, []);
    const getVideos = async () => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=IN&key=AIzaSyA7jPwS6iNFgX3kAmGzH0hwJBRg0Nmh-Nw");
        const json = await data?.json()
        setVideo(json.items);
        //console.log(json);
        //console.log(video);
    }
  return (
    <div>
      {video.length > 0 && video.map(videos => (<Link to={"/watch?v="+ videos.id}><RelatedVideoCard key={videos.id} snippet={videos.snippet} statistics={videos.statistics}/></Link>))}
    </div>
  )
}

export default RelatedVideos;
