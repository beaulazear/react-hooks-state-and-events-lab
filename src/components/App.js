import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [color, setColor] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  let appClass = color ? "App dark" : "App light"
  let appBtn = color ? "Light Mode" : "Dark Mode"

  function handleClick() {

    setColor((color) => !color)

  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appBtn}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
