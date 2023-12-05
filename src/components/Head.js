import React from "react";
import hamburger from "../assets/hamburgerlogo.png";
import youtube from "../assets/youtubelogo.png";
import user from "../assets/usericon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
// import search from "../assets/searchicon.png";

const Head = () => {

  const dispatch= useDispatch();
  const toggleMenuHandeler=()=>{
dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-5 shadow-lg  ">
      <div className="flex  col-span-1 ">
        <img src={hamburger} alt="menu" className="h-8 cursor-pointer" onClick={()=>toggleMenuHandeler()} />
        <img src={youtube} alt="youtube" className=" h-10 mx-2 pb-2" />
      </div>
      <div className="col-span-10   text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-full h-8 p-2 px-4" placeholder="search"
        ></input>
        <button className="border border-gray-400 rounded-r-full  h-8 w-16 bg-gray-200 ">
       🔍
        </button>
      </div>
      <div className="">
        <img src={user} alt="user" className="h-8 col-span-1" />
      </div>
    </div>
  );
};

export default Head;
