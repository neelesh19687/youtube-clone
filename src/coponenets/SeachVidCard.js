import React from 'react'
import thumbnail from '../images/testthumbnail.jpg';
import './ComponentCss/seachVidCard.css';
import { Link } from 'react-router-dom';
export const SeachVidCard = () => {
    return (
        <div>
             <div class="cardmb-3" style={{maxWidth: '700px'}}>
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
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Uploaded 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
    )
}
