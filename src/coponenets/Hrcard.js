import React from 'react'
import { Link } from 'react-router-dom'

export const Hrcard = ({img}) => {
    
    return (
        <div>
            <div class="card " style={{maxWidth: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <Link to="/video">
                        <img src={img} class="img-fluid rounded-start" alt="..."/>
                        </Link>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text"><small class="text-muted">666k views <strong>.</strong> 2min ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
