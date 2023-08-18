import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initial state is light mode

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const themeClass = isDarkMode ? 'dark' : 'light';

  // ... Rest of your code ...

  return (
    <div className={`App ${themeClass}`}>
      {/* ... Your components */}
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;

