import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import Foodlist from '../Foodlist/Foodlist';
import  './FoodDisplay.css'

const FoodDisplay = () => {
  // Accessing context using useContext hook
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Dishes</h2>
      </div>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          <Foodlist
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
