import React from "react";

function GalleryCard({ card, onDelete, onUpdate }) {
  const { images, description, views } = card;

  function handleDelete() {
    fetch(`http://localhost:3041/gallery/${card.id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then(() => onDelete(card));
  }
  function handleUpdateClick(){
    fetch(`http://localhost:3041/gallery/${card.id}`, {
    method: "PATCH",
    headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(
        {views: views +1}
      )
  })
    .then((r) => r.json())
    .then(() => onUpdate(card.id));
}
  return (
    <div>
      <div className="image">
        <img src={images} alt="" />
      </div>
      <div className="content">
        <div className="Descripiton">{description}</div>
        <div>
          <button className="emoji-button delete" onClick={handleDelete}>
            🗑
          </button>
        </div>
        <div> <button className="View-btn" onClick={handleUpdateClick}>👀</button></div>
      </div>
    </div>
  );
}

export default GalleryCard;
