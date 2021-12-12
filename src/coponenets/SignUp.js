
import React, { useEffect, useState } from 'react'
import brandImg from '../images/account.svg'
import logo from '../images/logoyt.png'
import './ComponentCss/SignUp.css';
import { db,auth } from '../Firebase';
import{collection,setDoc,addDoc,doc} from 'firebase/firestore'
import { createUserWithEmailAndPassword,onAuthStateChanged,signOut } from 'firebase/auth';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
export const SignUp = () => {

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

    const uploadDataTodb= async (uid)=>{
        if(uid!=null){

            await setDoc(doc(db, "channels", uid), {
                channelName: userName,
                bannerPic:'',
                profilePic:'',
                subscriberCount:0,
                channelId:'',
                userEmail:regEmail
                
              });
        }

        



    }


    const logout=()=>{
        signOut(auth);
       
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


    const handleSignUp=async (e)=>{
        try{
            
            e.preventDefault();
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
                        <input className='custom-file-input' type="file" name="" />
                        <button onClick={(e)=>{handleSignUp(e)}}  className="btn-primary inputSignUpdetailFormBtnSubmit" >SignUp</button>
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
