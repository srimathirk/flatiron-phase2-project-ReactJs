import React, {useEffect, useState} from "react";

function CategoryFilter({ gallery, setGallery, categories }) {
  
  const [showCategories, setShowCategories] = useState(false);

  const [selectedCategory,setSelectedCategory]=useState("ALL")
  const handleCategory = (category) => {
    setSelectedCategory(category)

    if (category === "ALL") {
      setGallery(gallery);
    } else {
      const filteredGallery = gallery.filter(
        (image) => image.category === category
      );
      setGallery(filteredGallery);
    }
    setShowCategories(false);
  }
    //const selectedCategory = event.target.value;
   
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
            <button onClick={() => handleCategory("ALL")}>
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={selectedCategory === category ? 'active' : ''}
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
