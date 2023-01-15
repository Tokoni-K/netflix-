import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Profilescreen from './Profilescreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in 
        console.log(userAuth);
        navigate('/');
        dispatch(login({
          uid: userAuth.uid, /* user id */
          email: userAuth.email,
        }));
      } else {
        // logged out
        dispatch(logout)
      }      
    });

    return unsubscribe; 
    // eslint-disable-next-line
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginScreen />}/>
        <Route path='/' element={ user ? <HomeScreen />  : <Navigate to="/login"/>}/>
        <Route path='/profile' element={ user ? <Profilescreen /> : <Navigate to="/login"/>} />
        <Route path='*' element={user ? <HomeScreen />  : <Navigate to="/login"/>} />
      </Routes>
    </div>
  );
}

export default App;
