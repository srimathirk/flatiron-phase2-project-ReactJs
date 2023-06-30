import React from "react";

function GalleryCard({ image, onDelete, onUpdate , onImageSelect }) {
  const { images, description, category, views } = image;

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
  
  //console.log({images})
  return (
    <div className="grid-wrapper" onClick={handleUpdateClick} >
     
      <div className="image">
        <img src={images} alt={description} />
      </div>
      <div className="content">
        <div className="Descripiton">{description}</div>

        <div>
          <button className="emoji-button delete" onClick={handleDelete}>
            🗑
          </button>
          👀{views}
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
