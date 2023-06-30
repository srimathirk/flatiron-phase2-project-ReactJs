import React from 'react'
import GalleryCard from './GalleryCard'

function GalleryCollection({gallerys , onDelete, onUpdate}) {
  return (
    <div className='imageGallery'>
        {gallerys.map((image)=>(<GalleryCard key={crypto.randomUUID()} image={image} onDelete={onDelete} onUpdate={onUpdate}/>))}
    </div>
  )
}

export default GalleryCollection