import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GalleryCollection from "./components/GalleryCollection";
import "./App.css";
import GalleryForm from "./components/GalleryForm";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [gallery, setGallery] = useState([]);
  const [categories,setCategories] = useState([]);
  const [showForm,setShowForm] = useState(false)
  const [selectedCategory,setSelectedCategory]=useState("ALL")
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3041/gallery`)
      .then((r) => r.json())
      .then((gallery) => {
        setGallery(gallery);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3041/categories`)
      .then((r) => r.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  const galleryImages = gallery.filter((image)=>{
    if(selectedCategory === "ALL"){
      return true;
    } else {
      return image.category === selectedCategory
      }
      setShowCategories(false);

  })
  function handleAddCard(newImage){
    setGallery([...gallery,newImage])
  }
  function handleButtonClick() {
    setShowForm((showForm) => !showForm);
  }

  function searchValue(search) {
    setGallery(
      gallery.filter((card) =>
        card.description.toLowerCase().includes(search)
      )
    );

   
  }
  function handleDeleteImageCard(deletedImageCard){
    const updatedImageCard = (gallery.filter((card)=> card.id !== deletedImageCard.id))
    setGallery(updatedImageCard)
  }
  function handleUpdateViews(cardId){
    const updatedImageCard = gallery.map((card)=>{
      if(card.id === cardId){
        return { ...card, views: card.views + 1}
      }
      return card
    })
    setGallery(updatedImageCard)
  }
  return (
    <div className="App">
      <Header searchValue={searchValue} />
      {showForm ? <GalleryForm categories={categories} onAdd={handleAddCard}/> : null}
      <div className="buttonContainer">
        <button onClick={handleButtonClick}>Add Image</button>
      </div>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} handleCategory={setSelectedCategory} showCategories={showCategories} setShowCategories={setShowCategories}/>
      <GalleryCollection gallerys={galleryImages} onDelete={handleDeleteImageCard} onUpdate={handleUpdateViews}/>
      
    </div>
  );
}

export default App;
