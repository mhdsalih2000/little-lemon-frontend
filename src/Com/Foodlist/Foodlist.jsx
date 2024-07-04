import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Foodlist.css'
import { Prev } from 'react-bootstrap/esm/PageItem'

function Foodlist({id , name , price , description , image}) {
    const [itemCount ,setitemCount] =useState(0)
  return (

   
    <>
    <div className="fooditem">
    <div className='food-item-img-container'>
        <img className='food-item-img' src={image} alt={name} />
        
  <div>
  {itemCount === 0 && (
    <img
      className='add'
      onClick={() => {
        setitemCount(prevCount => prevCount + 1);
      }}
      src={assets.add_icon_white}
      alt="Add Icon"
    />
  )}

  {itemCount !== 0 && (
    <div className='food-item-counter'>
      <img onClick={()=>setitemCount(Prev=>Prev-1)} src= {assets.remove_icon_red} alt="" />
      <p>{itemCount}</p>
      <img onClick={()=>setitemCount(Prev=>Prev+1)} src={assets.add_icon_green} alt="" />
    </div>
  )}
</div>


    </div>
    <div className='food-item-info'>
        <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />

        </div>
        
    </div>
    <p className="food-item-description">{description}</p>
    <p className="food-item-price">${price}</p>
    </div>

    </>
  )
}

export default Foodlist