// import React from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter">
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {items.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add more options as needed */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

