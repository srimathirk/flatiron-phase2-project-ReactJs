import React from 'react';

const ImageModal = ({ image, closeModal, handlePrevImage, handleNextImage }) => {
   if (!image) {
    console.log(null)
        return null;
      }
    
    return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={closeModal}>Xgit </button>
        <img src={image.images} alt={image.description} className="modal-image" />
        <div className="modal-nav">
          <button onClick={handlePrevImage}>Prev</button>
          <button onClick={handleNextImage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
