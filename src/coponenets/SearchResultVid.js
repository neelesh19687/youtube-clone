import React from 'react'
import './ComponentCss/searchResultVid.css';
import {SeachVidCard} from './SeachVidCard';

export const SearchResultVid = () => {
    let SearchItem="Masala Dosa "
    return (
        <>
        <br/>
        <div className="search-item-text">
            
          Showing Results of <strong>{SearchItem}</strong> 
        </div>
        
        <hr />
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>
       <SeachVidCard/>

    </>)
}
