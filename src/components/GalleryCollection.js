import React from "react";
import GalleryCard from "./GalleryCard";


function GalleryCollection({ gallerys, onDelete, onUpdate  }) {
  return (
    <div className="imageGallery">
      {gallerys.map((card) => {
        //console.log(card)
        if (card && card.images) {
          return (
            <GalleryCard
              key={card.id}
              card={card}
             
        onDelete={onDelete}
        onUpdate={onUpdate}
            />);
          }
          return null;
      
})}
    </div>
  );
}

export default GalleryCollection;
