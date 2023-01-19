import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setIncart] = useState(false)
  const appClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  function handleClick() {
    setIncart((cartStatus) => !cartStatus)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
