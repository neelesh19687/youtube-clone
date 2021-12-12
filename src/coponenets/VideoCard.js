import React,{ useState,useEffect } from 'react';
import test from "../images/testthumbnail.jpg";
import "./ComponentCss/videoCard.css";
import { Avatar2 } from './Avatar2';
import { doc,getDoc,collection  } from '@firebase/firestore';
import {db} from '../Firebase';
 
import { Link } from 'react-router-dom';
export const VideoCard = ({views,channelId,title,id}) => {
    

    const [channelData,SetChannelData]=useState({});
  

        
        
        useEffect(()=>{ 
             if(channelId){

                 const getchannelData= async()=>{
                     const channelRef = doc(db,'channels',channelId);
                     const tempchanneldata= await getDoc(channelRef);
                     
                     
                     SetChannelData(tempchanneldata.data());
                     
                    }
                    
                    getchannelData();
                }
        },[channelId])
        
    

return (
        
           
            <div>
            <div class="card" style={{ width: '14rem' }}>
                <Link to={`video/${id}`} >
                <img src={test} class="card-img-top" alt="here" />
                </Link>
                <div class="card-body vidgridVidCard">
                   
                    <h5 class="card-title vidgridVidCard-title">
                        <Link className="vidCardChannelLink" to={{
                        pathname: `/channelPage/${channelId}/channelhome`,
                        
                        }}> <Avatar2 username="jnfkan" image={channelData.profilePic?channelData.profilePic:test} /></Link>
                         <Link className="vidCardChannelTitle" to={`video/${id}`} >
                        <div className="vid-card-title" >{title?title:"loading...."}</div>   </Link>
                        </h5>
                    
                    <p class="card-text"><small>{views?views:0} views <strong>.</strong> 4 min ago</small></p>

                </div>
            </div>
        </div>
      
      
    )
}
