import React from 'react'
import './Nav.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate()
    const [handleShow, setHandleShow] = useState(false);

    const transitionNavbar = () => {
        window.scrollY > 100 ? setHandleShow(true) : setHandleShow(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])

    return (
        <nav className={`nav ${handleShow && 'nav-black'}`}>
            <div className="nav-contents">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo"
                className='nav-logo'
                onClick={() => navigate('/')}
                />
                <img src="https://cdn2.vectorstock.com/i/1000x1000/11/41/male-profile-picture-vector-2051141.jpg" alt="netflix-avatar"
                className='nav-avatar'
                onClick={() => navigate('/profile')}
                />
            </div>
            
        </nav>
    )
}

export default Nav