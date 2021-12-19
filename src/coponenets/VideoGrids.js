import React, { useEffect, useState } from 'react'
import { VideoCard } from "./VideoCard";
import "./ComponentCss/videogrid.css";
import {db} from '../Firebase';
import { getDocs,collection  } from '@firebase/firestore';
export const VideoGrids = ({feed}) => {

 const [videos,SetVideos]=useState([])
const vidRef = collection(db,'videos');
 
 useEffect(()=>{
   const getVideos= async()=>{
    const tempvid= await getDocs(vidRef);
    
    SetVideos(tempvid.docs.map((doc)=>({...doc.data(),id:doc.id})));
     
    }
    
    getVideos();
  
},[])



    return (
        <>
        
        <h2>{feed}</h2>
        <hr/>
       
        <div className="mainPage">
          {videos.map((video)=>{return( <VideoCard thumbnail={video.thumbnailUrl} views ={video.views}channelId={video.channelId} id={video.id} title={video.title} />)})}
           
         
         


        </div>
        </>
    )
}
