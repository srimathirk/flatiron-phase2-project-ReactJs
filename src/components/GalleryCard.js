import React from "react";

function GalleryCard({ image, onDelete, onUpdate , onImageSelect }) {
  const { images, description, views } = image;

  function handleDelete() {
    fetch(`https://flatiron-phase2-project-json-server.onrender.com/gallery/${image.id}`, { method: "DELETE" })
      .then((r) => r.json())
      .then(() => onDelete(image));
  }
  function handleUpdateClick() {
    fetch(`https://flatiron-phase2-project-json-server.onrender.com/gallery/${image.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ views: views + 1 }),
    })
      .then((r) => r.json())
      .then(() => onUpdate(image.id));
  }
  function handleClick(){
    onImageSelect(image)
  }
  //console.log({images})
  return (
    <div className="grid-wrapper" onClick={handleClick}>
      <div className="image">
        <img src={images} alt={description} />
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
