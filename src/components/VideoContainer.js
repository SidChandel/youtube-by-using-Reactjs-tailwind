import React, { useEffect, useState } from 'react'
import { Youtube_video_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideo();
  },[]);
  const getVideo=async()=>{
    const data=await fetch(Youtube_video_API);
    const json=await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  if(videos.length==0)return <Shimmer/>
  return (
    <div className='flex flex-wrap '>
   { videos.map((video)=>(
  <Link to={"/watch?v="+video.id}> <VideoCard key={video.id} info={video}/></Link> 
   ))}
  
    </div>
  )
}

export default VideoContainer;
