import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GalleryCollection from "./components/GalleryCollection";
import "./App.css";
import GalleryForm from "./components/GalleryForm";
import CategoryFilter from "./components/CategoryFilter";
import Modal from "./components/Modal";
import { Route, Switch } from "react-router-dom";

function App() {
  //let ORIGINALGALLERY;
  const [gallery, setGallery] = useState([]);
  const [originalGallery, setOriginalGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3041//gallery`)
      .then((r) => r.json())
      .then((gallery) => {
        //ORIGINALGALLERY=gallery
        setGallery(gallery);
        setOriginalGallery(gallery);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3041//categories`)
      .then((r) => r.json())
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  const galleryImages = gallery.filter((image) => {
    if (selectedCategory === "ALL") {
      return true;
    } else {
      return image.category === selectedCategory;
    }
  });

  function handleAddCard(newImage) {
    setGallery([...gallery, newImage]);
  }

  function searchValue(search) {
    if (search.trim() === "") {
      if (originalGallery) {
        setGallery([...originalGallery]);
      }
    } else {
      if (originalGallery) {
        setGallery(
          originalGallery.filter((card) =>
            card.description.toLowerCase().includes(search)
          )
        );
      }
    }
  }
  function handleDeleteImageCard(deletedImageCard) {
    const updatedImageCard = gallery.filter(
      (card) => card.id !== deletedImageCard.id
    );
    setGallery(updatedImageCard);
  }
  function handleUpdateViews(cardId) {
    const updatedImageCard = gallery.map((card) => {
      if (card.id === cardId) {
        return { ...card, views: card.views + 1 };
      }
      return card;
    });
    setGallery(updatedImageCard);
  }
  function handleImageSelect(image) {
    setSelectedImage(image);
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setSelectedImage(null);
    setIsModalOpen(false);
  }
  function handlePrevImage(prevImage) {
    setSelectedImage(prevImage);
    setIsModalOpen(true);
  }
  function handleNextImage(nextImage) {
    setSelectedImage(nextImage);
    setIsModalOpen(true);
  }

  //console.log(selectedImage)
  return (
    <div className="App">
      <Header searchValue={searchValue} />

      <Switch>
        <Route path="/new">
          <GalleryForm categories={categories} onAdd={handleAddCard} />
        </Route>
        <Route exact path="/">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategory={setSelectedCategory}
          />
          <GalleryCollection
            gallerys={galleryImages}
            onDelete={handleDeleteImageCard}
            onUpdate={handleUpdateViews}
            onImageSelect={handleImageSelect}
          />
          {selectedImage && isModalOpen && (
            <Modal
              selectedImage={selectedImage}
              images={galleryImages}
              onClose={handleModalClose}
              onPrev={handlePrevImage}
              onNext={handleNextImage}
            />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
