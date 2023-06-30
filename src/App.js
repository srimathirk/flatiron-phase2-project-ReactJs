import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GalleryCollection from "./components/GalleryCollection";
import "./App.css";
import GalleryForm from "./components/GalleryForm";
import CategoryFilter from "./components/CategoryFilter";
import ImageModal from "./components/ImageModal";
function App() {
  const [gallery, setGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showModal, setShowModal] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const galleryImages = gallery.filter((image) => {
    if (selectedCategory === "ALL") {
      return true;
    } else {
      return image.category === selectedCategory;
    }
    
  });

  const openModal = (image) => {
    if (image) {
      const index = gallery.findIndex((item) => item.id === image.id);
      setCurrentImageIndex(index);
      setShowModal(true);
    }
  };
  
  

  // const closeModal = () => {
  //   setSelectedImage(null);
  //   setModalOpen(false);
  // };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  
  const handleNextImage = () => {
    if (currentImageIndex < gallery.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  

  function handleAddCard(newImage) {
    setGallery([...gallery, newImage]);
  }
  function handleButtonClick() {
    setShowForm((showForm) => !showForm);
  }

  function searchValue(search) {
    setGallery(
      gallery.filter((card) => card.description.toLowerCase().includes(search))
    );
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
  return (
    <div className="App">
      <Header searchValue={searchValue} />
      {showForm ? (
        <GalleryForm categories={categories} onAdd={handleAddCard} />
      ) : null}
      <div className="buttonContainer">
        <button onClick={handleButtonClick}>Add Image</button>
      </div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategory={setSelectedCategory}
        openModal={openModal}
        />
      <GalleryCollection
        gallerys={galleryImages}
        onDelete={handleDeleteImageCard}
        onUpdate={handleUpdateViews}
        openModal={openModal}
      />
     {showModal && (
  <ImageModal
    image={gallery[currentImageIndex]}
    closeModal={() => setShowModal(false)}
    handlePrevImage={handlePrevImage}
    handleNextImage={handleNextImage}
  />
)}

    </div>
  );
}

export default App;
