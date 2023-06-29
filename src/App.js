import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GalleryCollection from "./components/GalleryCollection";
import "./App.css";

function App() {
  const [collections, setCollections] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3041/gallery`).then((r)=>r.json())
    .then((gallery)=>{setCollections(gallery);});
  },[]);
  return (
    <div className="App">
      <Header />
      <GalleryCollection collections={collections}/>
    </div>
  );
}

export default App;
