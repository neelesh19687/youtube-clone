import React, { useState } from 'react'
import "./ComponentCss/sidemenu.css";
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { signOut } from '@firebase/auth';
export const SideMenu = () => {
const[isSignedOut,setIsSignedOut]=useState(false);
  const logOut=()=>{
    signOut(auth);
setIsSignedOut(true);
alert("signed Out")

  }
  const Toast=()=>{
    if(!isSignedOut){
      return(<></>)

    }
    else{
      return(<>
      <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="d-flex">
    <div className="toast-body">
    Hello, world! This is a toast message.
   </div>
    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
      
      </>)
    }
  }

    
    return (
        <div>
        <div className="flex-shrink-0 p-3  bg-dark " id="sidemenu"  style={{width:'20vw' }}>
   
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <Link to='/'>
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
        <i className="fas fa-home"/> Home 
        </button>
        </Link>
        
      </li>
      <li className="mb-1">
        <Link to="/explorefeed">
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
        <i className="fas fa-compass"/> Explore
        </button>
        </Link>
       
      </li>
      <li className="mb-1">
        <Link to="/subscriptions">
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
        <i className="fas fa-plus-square"/> Subscription
        </button>
        </Link>
        
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle sidemenu-butt align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
        <i className="fas fa-user-alt"/> Account
        </button>
        <div className="collapse" id="account-collapse"  >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li className="link-dark rounded" ><Link to="/signup" >New...</Link></li>
            <li className="link-dark rounded" ><Link to="/signup" >SignIn</Link></li>
           
            <li className="link-dark rounded" style={{color:'white'}} onClick={logOut}>Sign out</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <Toast/>
        </div>
    )
}
