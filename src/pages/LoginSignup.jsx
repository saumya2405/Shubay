import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign In</h1>
            <div className="loginsignup-fields">
            <input type="text" placeholder='Enter Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
            </div>
        </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already Have an account? <span>Login Here</span></p>
      <div className="loginsignup-agree">
      <input type="checkbox" name='' id='' />
      <p className='me'>By Continuing, i agree to the terms of use and privacy policy </p>
      </div>
      
    </div>
  )
}

export default LoginSignup
