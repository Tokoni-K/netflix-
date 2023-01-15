import React from 'react'
import './SignInscreen.css'
import { useRef } from 'react'
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const SignInscreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  
  // register 
  const register = (e) => {
    e.preventDefault();
    navigate ('/')
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=> {console.log(authUser)})
    .catch((error) => {
      alert(error.message)
    })
  }

  // singin 
  const signIn = (e) => {
    e.preventDefault()
    navigate ('/')
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=> {console.log(authUser)})
    .catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className='sign-in-screen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4><span style={{color:'gray'}}>New to Netflix?</span> <span className='sign-up-link' onClick={register}>Sign up now</span> </h4>
      </form>
    </div>
  )
}

export default SignInscreen