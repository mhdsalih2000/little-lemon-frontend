import React, { useState } from 'react'
import MyNavbar from '../../Com/NavBar/MyNavbar'
import './Home.css'

import Header from '../../Com/Heder/Header'
import Menu from '../../Com/Menu/Menu'
import FoodDisplay from '../../Com/foodDisplay/FoodDisplay'
function Home() {

  const [category , setCategory] = useState('All')
  return (
    <>
    
    <Header/>
    <Menu  category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    </>
  )
}

export default Home