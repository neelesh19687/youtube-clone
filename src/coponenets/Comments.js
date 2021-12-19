
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Avatar2 } from './Avatar2';
import "./ComponentCss/comments.css"
import {PublicComments} from './PublicComments';
import { auth,storage,db } from '../Firebase';
import { doc,addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import defaultProfile from '../images/defaultProfile.svg';
export const Comments = ({image}) => {
    const[signedIn,SetIsSignedIn]=useState(false);
    const[userId,SetuserId]=useState('')
    const { videoId}: { videoId: string } = useParams();
    const [comment,SetComment]=useState('');
    const [comments,SetComments]=useState([]);
    const [user,SetUser]=useState({});
    const [commmented,Setcommented]=useState(false);
    onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log('op')
            SetuserId(user.uid);
            SetIsSignedIn(true);
         
        }
        else{
            SetuserId('');
            SetIsSignedIn(false);
        }
    })
    
    const gettingUserDetails=async()=>{
        console.log('getting USer DAta')
       const tempData= await getDoc(doc(db,`channels/${userId}`));
       SetUser(tempData.data());
       
    }
  
    const getcomments=async()=>{
        console.log('getting comments')
        const tempdata=await getDocs(collection(db,`videos/${videoId}/comments`));
        SetComments(tempdata.docs.map((doc)=>({...doc.data(),id:doc.id})));
   
    }
   useEffect(()=>{
       if(userId!==''){
           gettingUserDetails();
           getcomments();
           console.log('how');
       }


   },[userId])


const FakeingComment=()=>{
    const fakecomment = comment
    if(commmented){
        return(<>
        <PublicComments image={user.profilePic} username={user.channelName} comment={fakecomment} />
        </>)
    }
    else{
        return(<>
        </>)
    }

}

 const addComment=async ()=>{
     Setcommented('')
     if (signedIn) {
         if(comment!==''){

             await addDoc(collection(db, `videos/${videoId}/comments`), {
                 comment:comment,
                 userCommentedId:userId,
                 userPic:user.profilePic,
                 userName:user.channelName
                 
                }).then(()=>{alert("comment added JI");})
            }
            else{
                alert('Can not accept empty comment sorry!')
            }
     }
    else{
        alert('Sign In to comment ')
    }








 }
 let img = defaultProfile;
 let name = 'username';
 
 //console.log(username);
































    return (<>
        <div className="inputcomment">
          <Avatar2 image={user.profilePic?user.profilePic:defaultProfile} username={user.channelName?user.channelName:'username'} />
            <form className="CommentForm"   >
                <input placeholder="Add a public comment ....." type="text" value={comment} onChange={(e)=>{SetComment(e.target.value)}} />
            </form>
                <button onClick={(e)=>{e.preventDefault(); addComment();Setcommented(true)}} className="postComment btn-primary" > Add Comment</button>
        </div>
        <br />

        <FakeingComment/>
        {

      

            comments.map((eachcomment)=>{
                

                   return (<PublicComments image ={eachcomment.userPic?eachcomment.userPic:defaultProfile} username = {eachcomment.userName?eachcomment.userName:'noName'} comment={eachcomment.comment}/> 
                )
            })
        }
     {/*<PublicComments image ={img} username = {name}/>
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
     <PublicComments image ={img} username = {name}/>*/}
</>    )
}
