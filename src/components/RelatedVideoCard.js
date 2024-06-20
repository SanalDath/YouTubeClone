import React from 'react';
import Testi from './DateTimeModule';


const RelatedVideoCard = ({snippet, statistics}) => {
    //console.log(statistics);
    //console.log(typeof(snippet?.title))
    const videoTitle = snippet.title.slice(0, 45);
    //console.log(videoTitle)
    const timeValue = snippet.publishedAt
  return (
    <div className='flex p-1 m-1'>
      <div className=''>
        <img className="h-28 w-48 rounded-md" alt='thumbnail' src={snippet?.thumbnails?.default?.url}/>
      </div>
          <div className='ml-2 w-80 h-10 mr-8'>
            <h1 className='text-sm font-semibold mt-1 overflow-hidden'>{videoTitle}...</h1>
            <h3 className='text-sm font-semibold text-slate-800 mt-2'>{snippet.channelTitle}</h3>
              <div className='flex mt-2'>
                <h3 className='text-xs'>{statistics.viewCount} . </h3>
                <h4 className='text-xs text-slate-800'> <Testi val={timeValue.toString()}/></h4>
              </div>
         </div>
    </div>
  )
}

export default RelatedVideoCard;
