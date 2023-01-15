import React from 'react'
import './Profilescreen.css'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import Plans from './Plans'

const Profilescreen = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const signout = () => {
        navigate('/login')
        auth.signOut()
    }

    return (
        <div>
            <Nav />
            <div className="profilescreen-body">
                <h3>Edit Profile</h3>
                <div className="profilescreen-info">
                    <img src="https://cdn2.vectorstock.com/i/1000x1000/11/41/male-profile-picture-vector-2051141.jpg" alt="netflix-avatar" 
                    className='profilescreen-avatar'
                    onClick={() => navigate('/')}
                    />
                    <div className="profilescreen-details">
                        <h2>{user.email}</h2>
                        <h4>Plans</h4>
                        <Plans />
                        <div className="profilescreen-plans">
                            <button className='profilescreen-signout'
                                onClick={signout}
                            >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilescreen