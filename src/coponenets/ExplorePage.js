import React from 'react'
import { SeachVidCard } from './SeachVidCard';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { db,auth,storage } from '../Firebase';
import { getDocs,collection, query, where, limit, orderBy } from 'firebase/firestore';
export const ExplorePage = () => {
    const[trendingVideo,SetTrendingVideos]=useState([]);
    const vidRef = collection(db,'videos');
    const q = query(vidRef,orderBy('views','desc'),limit(10));
    useEffect(()=>{
        const getVideos= async()=>{
            const tempvid= await getDocs(q);
            console.log(tempvid);
            SetTrendingVideos(tempvid.docs.map((doc)=>({...doc.data(),uid:doc.id})));
             
            }
            
            getVideos();
            console.log(trendingVideo);
    },[])

console.log(trendingVideo);
    return (
        <div>
            <div style={{
                marginTop: '1rem',
                marginLeft: '1rem'
            }} className="explore-item-text">

                <h3>Trending Now  <strong>🔥</strong> </h3>
            </div>

            <hr />
            {trendingVideo.map((video)=>{
                return(<>
                
                <SeachVidCard views={video.views} description={video.description} channelId={video.channelId} thumbnail={video.thumbnailUrl} title={video.title} id={video.uid}/>
                </>)
            })}

        </div>
    )
}
