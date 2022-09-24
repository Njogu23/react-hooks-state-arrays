import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All')

  
    const newArr = foods.filter(food => {
      if(filterBy === "All") {
        return true
      }else {
        return filterBy === food.cuisine
      }

    })
  

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods,newFood])
   
    console.log(newFood);
  }

  function handleClick(id) {
    const newArray = foods.filter(food => food.id !== id)
    setFoods(newArray)
  }

  function handleBtn(id) {
    const newArray = foods.map(food => { 
      if(food.id === id){
        return {...food,
        heatLevel: food.heatLevel + 1}
      }else {
        return food
      }
    })
    setFoods( newArray)
  }

  const foodList = newArr.map((food) => (
    <>
      <li key={food.id} onClick={() => handleClick(food.id)}>
        {food.name} | Cuisine: {food.cuisine}
        
      </li>
      <p onClick={() => handleBtn(food.id)}> Heat: {food.heatLevel}</p>
    </>
    
  ));

  function handleChange(event) {
    setFilterBy(event.target.value)
  }

  return (
    <>
      <div>
        <button onClick={handleAddFood}>Add New Food</button>
        <ul>{foodList}</ul>
      </div>
      <select name="filter" onClick={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Mexican">Mexican</option>
        <option value="Thai">Thai</option>
      </select>
      
    </>
   
  );
}

export default SpicyFoodList;
