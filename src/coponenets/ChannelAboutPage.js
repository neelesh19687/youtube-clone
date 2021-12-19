import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import './ComponentCss/channelAboutPage.css'
import { doc,getDoc,collection  } from '@firebase/firestore';
import {db} from '../Firebase';
export const ChannelAboutPage = () => {

    const{channelId}:{channelId:string}=useParams();
    //console.log("from channel ChannelAboutPage "+channelId);
    const channelRef = doc(db,'channels',channelId);


    const [channelData,SetChannelData]=useState({});
    useEffect(()=>{
        const getchannelData= async()=>{
         const tempchanneldata= await getDoc(channelRef);
        
         
         SetChannelData(tempchanneldata.data());
          
         }
         
         getchannelData();
        },[])

    return (
        <>
            


                <div className="container">
                    <div className="descriptionAndLinks">
                        <div className="part1">
                            <h6 className="des"><b>Description</b></h6>
                            <hr />
                            <small className="para1">
                                Hi, <br />
               {channelData.description?channelData.description:"Loading..."}
                            </small>
                        </div>
                        <hr />


                        <div className="part3">
                            <h6 className="det">Details</h6>
                            <h6 className="part31">For Business Enquires:</h6>
                            <button className=" btn btn-secondary part32">VIEW EMAIL ADDRESS</button>

                        </div>
                        <hr />
                        <div className="d1">
                            <strong className="part33">Location : </strong>
                            <small className="part34">India</small>
                        </div>
                        <hr />



                        <div className="part4">
                            <h6 className="link"><b>Links</b></h6>

                            <small className="li"><a href="/">Pratyush youtuber</a></small>
                        </div>
                    </div>


                <div className="part2">
                    <h6 className="st">Stats</h6>
                    <hr />
                    <small>Joined 1 Dec 2003</small>
                    <hr />
                    <small>43434 views</small>
                    <hr />
                    <small><i class="far fa-flag"/></small>
                </div>
                </div>
           
        </>
    )
}
