import React,{useState,useEffect} from 'react';
import './ComponentCss/channelCoverVideo.css';
import { useParams } from 'react-router';
import { doc,getDoc,collection  } from '@firebase/firestore';
import {db} from '../Firebase';
export const ChannelCoverVideo = ({vid}) => {

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
      
      console.log(channelData.channelName,'  from cover Video');



    return (
        <div>
             <div className="cardmb-3" style={{maxWidth: '1200px'}}>
            <div className="row g-0">
              <div className="col-md-4">
               <video src={channelData.coverVid} autoPlay={true} controls controlsList='nodownload' className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-ChannelCoverVideo-title">Video 7</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Uploaded 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
