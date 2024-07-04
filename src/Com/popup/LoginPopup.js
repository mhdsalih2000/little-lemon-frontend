import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Loginpopup.css';

import { ACCESS_TOKEN ,REFRESH_TOKEN } from '../../Services/Constend';
import api from '../../Services/api'; 
import axios from 'axios';





function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState('login');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    }
    
  );
};


const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = formData.get('fullname')
    const email = formData.get('email');
    const password = formData.get('password');
    if (currentState === 'login') {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/token/', { email, password });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                console.log('stored data')
                setShowLogin(false);
            } else {
                setShowLogin(true);
            }
        } catch (error) {
            alert(error);
        }
    }
    if (currentState === 'Sign up') {
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/user/register/', { email, password, fullName });
        if (res.status === 201) {
            console.log('stored data');
            setCurrentState('login');
        } else {
            // Handle failure case if needed
            setCurrentState('Sign up');// Update currentState if the request fails
        }
    } catch (error) {
        alert(error);
    }
}

};

  return (
    <div className='loginpopup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className='login-popup-title'>
          <h1>{currentState}</h1>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className='login-popup-input'>
          {currentState === 'login' ? null : <input type='text' name='fullname' placeholder='Your name' value={formData.username} onChange={handleInputChange} required />}

          <input type='email' name='email' placeholder='Your email' value={formData.email} onChange={handleInputChange} required />
          <input type='password' name='password' placeholder='Your password' value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">{currentState === 'Sign up' ? 'Create account' : 'Login'}</button>
        <div className='login-poup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <div>
          {currentState === 'login' ?
            <p>Create a new account? <span onClick={() => setCurrentState('Sign up')}>Click here</span></p> :
            <p>Already have an account? <span onClick={() => setCurrentState('login')}>Login</span></p>}
        </div>
      </form>
    </div>
  );
}

export default LoginPopup;
