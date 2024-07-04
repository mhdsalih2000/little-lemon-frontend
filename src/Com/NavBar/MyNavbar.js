import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

function MyNavbar({setShowLogin}) {

  const [menu, sermenu]= useState("home")

  return (
    <div className= "navbar">
      <img src={assets.logo}  alt="Logo" />
      <ul className='navbar-menu'>
        <li onClick={()=> sermenu('home')} className={menu === 'home'?'active':''}>home</li>
        <li onClick={()=> sermenu('menu')} className={menu === 'menu'?'active':''}>menu</li>
        <li onClick={()=> sermenu('mobile app')} className={menu === 'mobile app'?'active':''}>Mobile app</li>
        <li onClick={()=> sermenu('contact us')} className={menu === 'contact us'?'active':''}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='serch'/>
        <div className='navbar-serch-icon'>
          <img src={assets.basket_icon} alt=''/>
          <div className='dot'></div>
        </div>
        <div><button onClick={()=>setShowLogin(true)}>signin</button></div>

      </div>
    </div>
  )
}

export default MyNavbar