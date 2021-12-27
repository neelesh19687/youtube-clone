
import React, { useEffect, useState } from 'react'
import brandImg from '../images/account.svg'
import logo from '../images/logoyt.png'
import './ComponentCss/SignUp.css';
import { createUserWithEmailAndPassword,onAuthStateChanged,signOut } from 'firebase/auth';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { db,auth,storage } from '../Firebase';
import{collection,setDoc,addDoc,doc} from 'firebase/firestore'
import { ref, uploadBytesResumable,getDownloadURL } from '@firebase/storage';
export const SignUp = () => {
    const[userPicUrl,SetuserPicUrl]=useState('');
    const[userPic,SetuserPic]=useState(null);
    const[userName,SetUserName]=useState('');
    const[regEmail,SetregEmail]=useState('');
    const[regpass,SetRegPass]=useState('');
    const[reRegPass,SetReRegPass]=useState('');
    const [isSignedUp,SetIsSignedUp]=useState(false)
  /*  onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser!== null){

            Setuser(currentUser);SetuserId(currentUser.uid);console.log(userId);
            
        }
    
    })*/
    useEffect(()=>{
        if(userPicUrl!==''){
            
            handleSignUp();
        }

    },[userPicUrl]);


const uploadProfilePic=async(e)=>{
    e.preventDefault();
    const profilePicRef=ref(storage,`profilePics/${userPic.name}`);
    const uploadtaskUserPic = uploadBytesResumable(profilePicRef,userPic);
    uploadtaskUserPic.on('state_changed',(snapshot)=>{console.log('uploading profile pic')},
    (error)=>{ alert(error.message)},()=>{
        getDownloadURL(uploadtaskUserPic.snapshot.ref).then((url) => {
            SetuserPicUrl(url);
            console.log('ProfilePicurl :', url);
    }
    )})
}
    const uploadDataTodb= async (uid)=>{
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        let timestamp = cDay + "/" + cMonth + "/" + cYear;
        if(uid!=null){

            await setDoc(doc(db, "channels", uid), {
                channelName: userName,
                bannerPic:'',
                profilePic:userPicUrl,
                subscriberCount:0,
                channelId:uid,
                userEmail:regEmail,
                description:'',
                bannerPic:'',
                timestamp:timestamp
                
              });
        }

        



    }


   
    const ContinueToYt=()=>{
      if(isSignedUp){
          return(
              <>
              <Link to ='/'>
              <button className="btn-primary">Continue To Youtube</button>
              </Link>
              </>
          )
      }
      else{
          return(<>
          </>)
      }  
    }


    const handleSignUp=async ()=>{
        try{
            
            
            if(regpass===reRegPass){

                const user=   await createUserWithEmailAndPassword(auth,regEmail,regpass);
                console.log(user.user.uid);
                await uploadDataTodb(user.user.uid).then(SetIsSignedUp(true))
            }
            else{
                alert('Confirm password does not matches with the password')
            }
            

        }
            
        catch(error){
                alert(error.message)
            }
           
            
        }



    


    return (
        <div>

           
             <div className="SignUpForm">
                 <div className="SingUpFormContainer">

                 
                <div className="SignForm">
                    <img style={{ objectFit: 'contain', width: '10rem'}}src={logo} alt="" />
                   

                    <h4>Create your Youtube Account</h4>
                    <p>to continue to YouTube
                    </p>
                    
                    <form  className="signUpdetailForm">
                        <input autoComplete={true} onChange={(e)=>SetUserName(e.target.value)} className='inputSignUpdetailForm' placeholder="Enter Your Username.." type="text" />
                        <input autoComplete={true} onChange={(e)=>SetregEmail(e.target.value)} className='inputSignUpdetailForm' placeholder="Enter Your Email.." type="email" />
                        <input onChange={(e)=>SetRegPass(e.target.value)} className='inputSignUpdetailForm' placeholder="Enter Password" type="password" />
                        <input onChange={(e)=>SetReRegPass(e.target.value)} className='inputSignUpdetailForm' placeholder="confirm Password " type="password"/>
                        <input onChange={(e)=>{SetuserPic(e.target.files[0])}} className='custom-file-input' type="file" name="" />
                        <button onClick={(e)=>{uploadProfilePic(e)}}  className="btn-primary inputSignUpdetailFormBtnSubmit" >SignUp</button>
                    </form>

                    {/**  */}    

                </div>
                <div className="brandIamgeAtSignUpForm">
               
                    <img  src={brandImg} alt="" />
                    <h6 style={{marginLeft:'4rem'}}>Your Data Is Sequere With Us</h6>
                    <ContinueToYt/>
                 
                </div>
                </div>
            </div>
     
        </div>
    )
}
