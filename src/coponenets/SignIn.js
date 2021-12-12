import React,{useState} from 'react'
import './ComponentCss/signin.css'
import brandImg from '../images/account.svg'
import logo from '../images/logoyt.png'
export const SignIn = () => {
    const[userPic,SetuserPic]=useState(null);
    const[userName,SetUserName]=useState('');
    const[regEmail,SetregEmail]=useState('');
    const[regpass,SetRegPass]=useState('');
    const[reRegPass,SetReRegPass]=useState('');

const handleSignUp=()=>{
    console.log('signed up')
}
   

      
    return (

        <div>


            <div className="SignUpForm">
                <div className="SingUpFormContainer">


                    <div className="SignForm">
                        <img style={{ objectFit: 'contain', width: '10rem' }} src={logo} alt="" />


                        <h4>Create your Youtube Account</h4>
                        <p>to continue to YouTube
                        </p>

                        <form className="signUpdetailForm">
                            <input autoComplete={true} onChange={(e) => SetUserName(e.target.value)} className='inputSignUpdetailForm' placeholder="Enter Your Username.." type="text" />
                            <input autoComplete={true} onChange={(e) => SetregEmail(e.target.value)} className='inputSignUpdetailForm' placeholder="Enter Your Email.." type="email" />
                            <input onChange={(e) => SetRegPass(e.target.value)} className='inputSignUpdetailForm' placeholder="Enter Password" type="password" />
                            <input onChange={(e) => SetReRegPass(e.target.value)} className='inputSignUpdetailForm' placeholder="confirm Password " type="password" />
                            <input className='custom-file-input' type="file" name="" />
                            <button onClick={(e) => { handleSignUp(e) }} className="btn-primary inputSignUpdetailFormBtnSubmit" >SignUp</button>
                        </form>

                        {/**  */}

                    </div>
                    <div className="brandIamgeAtSignUpForm">

                        <img src={brandImg} alt="" />
                        <h6 style={{ marginLeft: '4rem' }}>Your Data Is Sequere With Us</h6>
                      

                    </div>
                </div>
            </div>

        </div>

    )
}
