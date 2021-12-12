import React from 'react';
import './ComponentCss/channelVidCard.css';
import thumbnail from '../images/testthumbnail.jpg';
import { Link } from 'react-router-dom';

export const ChannelVidCard = () => {
    return (
        <div>
            <div class="cardmb-3 channelVidcard" style={{maxWidth: '500px'}}>
            <div class="row g-0">
              <div class="col-md-4">
                  <Link to="/video">
                <img src={thumbnail} class="img-fluid rounded-start" alt="..."/>
                  </Link>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                <Link to="/video">
                    <h5 class="card-title channelVidCarTitle">Video 7</h5>
                </Link>    
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <p class="card-text"><small class="text-muted">400m views <strong>.</strong> 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
         <hr />
        </div>
    )
}
