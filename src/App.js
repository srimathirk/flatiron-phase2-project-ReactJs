import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GalleryCollection from "./components/GalleryCollection";
import "./App.css";
import GalleryForm from "./components/GalleryForm";

function App() {
  const [collections, setCollections] = useState([]);
  const [showForm,setShowForm] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:3041/gallery`)
      .then((r) => r.json())
      .then((gallery) => {
        setCollections(gallery);
      });
  }, []);

  function handleAddCard(newImage){
    setCollections([...collections,newImage])
  }
  function handleButtonClick() {
    setShowForm((showForm) => !showForm);
  }

  function searchValue(search) {
    setCollections(
      collections.filter((card) =>
        card.description.toLowerCase().includes(search)
      )
    );

   
  }
  return (
    <div className="App">
      <Header searchValue={searchValue} />
      {showForm ? <GalleryForm onAdd={handleAddCard}/> : null}
      <div className="buttonContainer">
        <button onClick={handleButtonClick}>Add Image</button>
      </div>
      <GalleryCollection collections={collections} />
      
    </div>
  );
}

export default App;
