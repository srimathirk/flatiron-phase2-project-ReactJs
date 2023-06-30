import React, { useState } from "react";
import Gallery from "./Gallery";

function CategoryFilter({ categories, selectedCategory, handleCategory ,gallery }) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div>
      <h2>Filter Categories</h2>
      {!showCategories && (
        <button onClick={() => setShowCategories(true)}>Show Categories</button>
      )}
      {showCategories && (
        <div>
          <button onClick={() => setShowCategories(false)}>
            Hide Categories
          </button>
          <div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  handleCategory(category);
                }}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
