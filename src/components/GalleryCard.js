import React from "react";

function GalleryCard({ card,image , onDelete, onUpdate ,openModal }) {
  const { images, description,category, views } = card;

  function handleDelete() {
    fetch(`http://localhost:3041/gallery/${image.id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then(() => onDelete(image));
  }
  function handleUpdateClick() {
    fetch(`http://localhost:3041/gallery/${card.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({views : views + 1 } ),
    })
      .then((r) => r.json())
      .then(() => onUpdate(card.id));
  }
  function handleClick(){
    console.log(image)
    openModal(image)
  };
  return (
    <div className="grid-wrapper">
      <div className="image">
        <img src={images} alt={description} onClick={handleClick} />
        
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
