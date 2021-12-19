import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import { db } from '../Firebase'

export const Hrcard = ({img,Id,title,views}) => {
    
    return (
        <div>
            <div class="card " style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <Link to={`/videos/${Id}`}>
                        <img src={img}style={{width:'145px',height:'81px'}} class="img-fluid rounded-start" alt="..."/>
                        </Link>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <Link to={`/video/${Id}`}>
                            <h5 class="card-title">{title}</h5>
                            </Link>
                        
                            <p class="card-text"><small class="text-muted">{views} views <strong>.</strong> 2min ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
