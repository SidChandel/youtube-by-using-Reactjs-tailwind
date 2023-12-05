import React from 'react'

const VideoCard = ({info}) => {
    // const {snippet, statistics} = info;
    // const{thumbnails,channelTitle, title}= snippet;
    // const{viewCount }=statistics;
  return (
    <div className=' p-2  text-left h-auto w-60 m-1 '>
    <img src={info.snippet.thumbnails.medium.url} alt="loading..."  className=''/>
    <ul>
        <li className='font-bold'>{info.snippet.title}</li>
        <li>{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount} Views</li>
    </ul>
    </div>
  )
}

export default VideoCard;
