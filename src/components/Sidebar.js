import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  
const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
if(!isMenuOpen) return null;
  return (
    <div className=' w-60 p-2 mx-10 ' >
      <div>
        <ul>
       <Link to={"/"}><li>Home</li></Link> 
        <li>Shorts</li>
        <li>Video</li>
        <li>live</li></ul>
      </div>
     <div ><ul>
      <li className='font-bold'>Subscription</li>
      <li>Music</li>
      <li>Sports</li>
      <li>gameing</li>
      <li>Movie</li>
      </ul></div>
      <div><ul>
        <li className='font-bold'>Watch Later</li>
      <li>Music</li>
      <li>Sports</li>
      <li>gameing</li>
      <li>Movie</li>
        </ul></div>
        <span>&copy;SiddharthChandel </span>
    </div>
  )
}

export default Sidebar;
