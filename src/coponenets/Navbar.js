import React, { useEffect, useState } from 'react'
import logo from '../images/logoyt.png';
import { Avatar2 } from './Avatar2';
import "./ComponentCss/navbar.css";
import { db,auth } from '../Firebase';
import { getAuth,onAuthStateChanged } from '@firebase/auth';
import { doc,getDoc } from '@firebase/firestore';
import {
  Link
} from "react-router-dom";
export const Navbar = () => {
  const[currentUser,SetcurrentUser]=useState({});
  const [channelData,SetChannelData]=useState({});

onAuthStateChanged(auth,(user)=>{
  if(user){
    SetcurrentUser(user);
    
    

    
  }

})
useEffect(()=>{

console.log(currentUser);

const getchannelData= async(id)=>{
  console.log(id)
  const channelRef = doc(db,'channels',id);
  const tempchanneldata= await getDoc(channelRef);
  if(tempchanneldata){
    SetChannelData(tempchanneldata.data());
  }

}   
if(currentUser.uid!==undefined){
 const call= ()=>{

    getchannelData(currentUser.uid)
  }
  call()
}
    
},[currentUser])







  return (
   
      
  
      
      
    
      <div className="container-fluid">
        <div className="logoa">
          <Link to="/">
            <img className="logo" src={logo} alt="Youtube" />
          </Link>
        </div>

        <div className="search">
          <form  className="d-flex my-2">
            <input className="form-control me-2"   id="inputsearch" type="search" placeholder={channelData.channelName!==undefined?channelData.channelName:'search'} aria-label="Search" />
            <Link to='/searchRes'>
            <button id="search-btn" className="btn btn-outline-success " type="submit"><i class="fas fa-search"></i></button>
            </Link>
          </form>
        </div>
        <div className="userNavbar">

          <i className="fas fa-video createIcon"/>
        <div className="avatar2">
          <Avatar2 className="avatar2" image={(channelData.profilePic===undefined||channelData.profilePic==='')?logo:channelData.profilePic} username="USERNAME" />
        </div>
        </div>
      </div>


  
  )
}
