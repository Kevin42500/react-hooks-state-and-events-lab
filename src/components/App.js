import React from "react";
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const appClass = false ? "App dark" : "App light"
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;