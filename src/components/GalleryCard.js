import React from 'react'

function GalleryCard({card,onDelete}) {
    const{images,description} = card;

    function handleDelete(){
      fetch(`http://localhost:3041/gallery/${card.id}`,{method:"DELETE"}).then((r)=>r.json()).then(()=>onDelete(card));
      }
  return (
    <div>
        <div className="image">
            <img src={images} alt=""/>
        </div>
        <div className="content">
            <div className='Descripiton'>{description}</div>
         <div>   <button className="emoji-button delete" onClick={handleDelete}>🗑</button> </div>
        </div>

    </div>
  )
}

export default GalleryCard