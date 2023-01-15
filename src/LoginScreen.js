import React from 'react';
import './LoginScreen.css';
import { useState } from 'react';
import SignInscreen from './SignInscreen';

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className='loginscreen'>
            <div className="loginscreen-background">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="login-logo" className='loginscreen-logo' />

                <div className='loginscreen-gadient' >
                    <div className="loginscreen-body">
                        {signIn ? (
                            <SignInscreen />
                        ) : (
                            <>
                                <button className='loginscreen-button' onClick={()=> setSignIn(true)}>Sign In</button>
                                <h1>Unlimited films, Tv programmes and more</h1>
                                <h2>Watch anywhere. Cancel at any time</h2>
                                <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                                <div className="loginscreen-input">
                                    <form >
                                        <button className='loginscreen-button2' onClick={()=> setSignIn(true)}>GET STARTED</button>
                                    </form>
                                </div>
                            </>
                        )
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LoginScreen