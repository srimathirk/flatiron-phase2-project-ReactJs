import React ,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import GalleryCollection from "./components/GalleryCollection";
import GalleryForm from "./components/GalleryForm";
import CategoryFilter from "./components/CategoryFilter";
import Modal from "./components/Modal";
import Gallery from "./components/Gallery";

function App() {
  const [gallery, setGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  
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
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/add">Add Image</Link>
            </li>
            <li>
              <Link to="/filter">Filter</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<GalleryCollection gallerys={galleryImages} onDelete={handleDeleteImageCard}
        onUpdate={handleUpdateViews}
/>} />
          <Route path="/add" element={<GalleryForm />} />
          <Route path="/filter" element={<CategoryFilter categories={categories} selectedCategory={selectedCategory}
        handleCategory={setSelectedCategory} gallery={galleryImages}/>} />
          <Route path="/modal/:id" element={<Modal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
