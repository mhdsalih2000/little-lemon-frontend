import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
import { Prev } from 'react-bootstrap/esm/PageItem'

function Menu({category , setCategory}) {
  return (
   <>
   <div className="explore-menu" id='explore-menu'><h1>Explore Our Menu</h1></div>
   <p className='explore-menu-text'>ndulge in a variety of main course options ranging from traditional favorites to global cuisines. From sizzling stir-fries to comforting pasta dishes, our main course selection promises a delightful dining experience.</p>
   <div className="explore-menu-list">
    {menu_list.map((item,index)=>{
      return(
        <div onClick={()=>setCategory(Prev => Prev===item.menu_name ?"All" : item.menu_name)}  key={index} className="explore-menu-list-item">
          <img className={category ===item.menu_name ? "active":''} src={item.menu_image} alt="" />
          <p>{item.menu_name}</p>
        </div>
      )
    })}
   </div>
   <hr/>
   
   </>
  )
}

export default Menu