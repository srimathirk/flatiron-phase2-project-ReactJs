import React from 'react'

function Gallery({gallerys,card,onDelete,onUpdate}) {
    const {views}= card
    function handleDelete() {
        fetch(`http://localhost:3041/gallery/${card.id}`, { method: "DELETE" })
          .then((r) => r.json())
          .then(() => onDelete(card));
      }
      function handleUpdateClick() {
        fetch(`http://localhost:3041/gallery/${card.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({views: views +1}),
        })
          .then((r) => r.json())
          .then(() => onUpdate(card.id));
      }
  return (
    <div>
        <h1>Gallery</h1>
        {gallerys.map((card)=>(
            <div key={card.id} >
                <img src={card.images} alt="" />
                <p>{card.category}.</p>
                <div className="content">
        <div className="Descripiton">{card.description}</div>

        <div>
          <button className="emoji-button delete" onClick={handleDelete}>
            🗑
          </button>
          <button className="View-btn" onClick={handleUpdateClick}>
            👀{card.views}
          </button>
        </div>
      </div></div>
                   ))}
        </div>
  )
}

export default Gallery