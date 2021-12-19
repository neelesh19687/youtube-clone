import React, { useEffect, useState } from 'react'
import { Avatar2 } from './Avatar2'
import logo from '../images/logoyt.png';
import './ComponentCss/subfeed.css'
import { onAuthStateChanged } from '@firebase/auth';
import { auth,db } from '../Firebase';
import { collection, doc, getDocs } from 'firebase/firestore';

export const Subfeed = ({ feed }) => {

const[user,SetUser]=useState({});
const[isSignedIn,SetisSignedIn]=useState(false)
onAuthStateChanged(auth,(user)=>{
    if(user){
        SetUser(user);
        SetisSignedIn(true)
    }
});

const getSubscriptions= async()=>{
    const Subref=collection(db,`channels/${user.uid}/subscriptions`);
    const tempsubData = await getDocs(Subref)
}


useEffect(()=>{

})


    return (
        <div>
            <h2>{feed}</h2>
            <hr />
            <div className="subscribedChannels">
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                 <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div> <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
                <div className="individualSubscribedChannelCArd">
                    <Avatar2 image={logo} username={'Subscribed'} />
                    <p>ChannelName</p>
                </div>
            </div>
            <hr />
            <div className="mainPage">

            </div>

        </div>
    )
}
