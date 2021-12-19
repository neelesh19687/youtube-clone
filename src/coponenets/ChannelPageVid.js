import React from 'react';
import { useParams } from 'react-router';
import { ChannelVidCard } from './ChannelVidCard';

export const ChannelPageVid = () => {
    const{channelName}:{channelName:string}=useParams();
    //console.log("from channel ChannelPageVid "+channelName);

    return (
        <div>
            <h5>New Upload</h5>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            <ChannelVidCard/>
            
        </div>
    )
}
