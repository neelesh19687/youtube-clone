
import React from 'react';
import { Avatar2 } from './Avatar2';
import "./ComponentCss/comments.css"
import {PublicComments} from './PublicComments';

export const Comments = ({image,username}) => {
 const addComment=()=>{
     console.log("comment added woo");
 }
 let img = image;
 let name = username;
 
 console.log(username);
    return (<>
        <div className="inputcomment">
          <Avatar2 image={image} username={username} />
            <form className="CommentForm"   >
                <input placeholder="Add a public comment ....." type="text" />
            </form>
                <button onClick={addComment} className="postComment btn-primary" > Add Comment</button>
        </div>
        <br />
     <PublicComments image ={img} username = {name}/> 
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
     <PublicComments image ={img} username = {name}/>
</>    )
}
