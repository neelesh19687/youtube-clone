import React, { useEffect, useState } from 'react'
import thumbnail from '../images/testthumbnail.jpg';
import './ComponentCss/seachVidCard.css';
import { Link } from 'react-router-dom';
import { db } from '../Firebase';
import { Avatar3 } from './Avatar3';
import { doc,getDoc } from 'firebase/firestore';
import test from "../images/testthumbnail.jpg";
export const SeachVidCard = ({views,title,id,description,thumbnail,channelId}) => {
  
  const[channelData,SetChannelData]=useState({});
 console.log("id:=>",id);
 console.log("title:=>",title);

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
             <div className="cardmb-3" style={{maxWidth: '700px',marginBottom:'1.5rem'}}>
            <div className="row g-0">
              <div className="col-md-4">
                  <Link to={`/video/${id}`}>
                <img style={{width:'234px',height:'155px'}} src={thumbnail} className="img-fluid rounded-start" alt="..."/>
                  </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <Link  to={`/video/${id}`}>
                    <h5 className="card-title SearchVidCarTitle">{title}</h5>
                </Link>    
                  <p className="card-text"style={{fontSize:'smaller',color:"rgb(123,145,161)",marginBottom:'0.1rem'}} ><small >{views} views<strong>·</strong>3 mins ago</small></p>
                <Link className="vidCardChannelLink" to={{
                        pathname: `/channelPage/${channelId}/channelhome`,
                        
                        }}> <Avatar3 username="jnfkan" image={channelData.profilePic?channelData.profilePic:test} /></Link>
                        <Link to={`/channelPage/${channelId}/channelhome`}>
                     <small className='channelNameinsideVidCard'>{channelData.channelName?channelData.channelName:'loading....'}</small> 
                    </Link>
                  <p className="card-text" style={{fontSize:'x-small'}}>{(description.length>127)?(description.substring(0,127)+'....'):description}</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
    )
}
