import React from "react";
import GalleryCard from "./GalleryCard";


function GalleryCollection({ gallerys, onDelete, onUpdate , openModal ,image }) {
  return (
    <div className="imageGallery">
      {gallerys.map((card) => {
        if (card && card.images) {
          return (
            <GalleryCard
              key={card.id}
              card={card}
              image={image}
        onDelete={onDelete}
        onUpdate={onUpdate}
        openModal={openModal}
      />);
          }
          return null;
      
})}
    </div>
  );
}

export default GalleryCollection;
