import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import './ComponentCss/channelBanner.css';
import { doc,getDoc,collection  } from '@firebase/firestore';
import {db} from '../Firebase';

export const ChannelBanner = ({img}) => {

    const{channelId}:{channelId:string}=useParams();
    const channelRef = doc(db,'channels',channelId);


    const [channelData,SetChannelData]=useState({});
    useEffect(()=>{
        const getchannelData= async()=>{
         const tempchanneldata= await getDoc(channelRef);
        
         
         SetChannelData(tempchanneldata.data());
          
         }
         
         getchannelData();
        },[])
        
    //     console.log(channelData.channelName)



    // console.log("from channel Banner "+channelId);
     //const banner_img = {backgroundImage :img}
    return (
        
        <div style={{backgroundImage:`url(${channelData.bannerPic})`}}  className="bannerimg ">
            
        </div>
    )
}
