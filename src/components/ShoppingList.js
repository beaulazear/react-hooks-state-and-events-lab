import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState('')

  
  let newItemArr
  console.log(newItemArr)

  function handleChange(event) {
    console.log(event.target.value)
    setCategory((current) => current = event.target.value )
  }
  
  // newItemArr = items.filter((element) => element.category === selectedCategory)
  if(selectedCategory === ""){
    newItemArr = items
  } else {
    newItemArr = items.filter((element) => element.category === selectedCategory)
  }
  console.log(selectedCategory)
  console.log(items)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItemArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
