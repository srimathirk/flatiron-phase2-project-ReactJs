import React from "react";

function GalleryCard({ image, onDelete, onUpdate }) {
  const { images, description,category, views } = image;

  function handleDelete() {
    fetch(`http://localhost:3041/gallery/${image.id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then(() => onDelete(image));
  }
  function handleUpdateClick() {
    fetch(`http://localhost:3041/gallery/${image.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ views: views + 1 }),
    })
      .then((r) => r.json())
      .then(() => onUpdate(image.id));
  }
  return (
    <div className="grid-wrapper">
      <div className="image">
        <img src={images} alt=""  />
        
      </div>
      <div className="content">
        <div className="Descripiton">{description}</div>
       
        <div>
          <button className="emoji-button delete" onClick={handleDelete}>
            🗑
          </button>
          <button className="View-btn" onClick={handleUpdateClick}>
            👀{views}
          </button>
        </div>
      
          
        
      </div>
    </div>
  );
}

export default GalleryCard;
