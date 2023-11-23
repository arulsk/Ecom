import React, { useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';  // Correct import statement
import { auth } from './firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
function Login() {
    const navigate = useNavigate()
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const [passwordErr,setPasswordErr] = useState("")
    const updatePass = (e)=>{
        const pass = e.target.value;
        setPassword(e.target.value)
        if(pass.length < 6){
            setPasswordErr("password contains atleast 6 character")
        }else{
            setPasswordErr("")
        }
    }
    
    const signIn = (e)=>{
       
     e.preventDefault()
     signInWithEmailAndPassword(auth, email, password).then((auth)=>{
        navigate("/")
     })
     .catch(Error=> alert(Error.message))
    }
    const register = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password).then((auth)=>{
            if(auth){
           navigate("/");
            }
        })
        .catch(Error=> alert(Error.message))
       }
  return (
      <div className='login'>
    <Link to = "/"  style={{textDecoration:"none"}} className='login_Logo'>
        <StorefrontIcon fontSize='large' className='header_LogoImg'/> <span>eSHOP</span>
        </Link>
        <div className="signContainer">
            <h2>Sign-in</h2>
            <form onSubmit={signIn}>
                <div>
                <p>E-mail</p>
                <input type='email'  value={email} onChange = {(e)=>setEmail(e.target.value)} required/>
                </div>
                <div>
                <p>Password</p>
                <input type='password' value={password} onChange = {updatePass} required/> <span style={{color:"red"}}>{passwordErr}</span>
                </div>
                <button>Sign In</button>
                </form>
                <div className='condition'>BY signing-in you agree to the eShop Website Condition of Use & Sale. Please see our Cookies Notice and Our Interest-Based Ads Notice</div>
                <button onClick={register}>Create Your EShop Account</button>

        </div>
    </div>
  )
}

export default Login