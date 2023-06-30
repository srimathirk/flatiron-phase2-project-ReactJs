import React from 'react'
import GalleryCard from './GalleryCard'

function GalleryCollection({gallery , onDelete, onUpdate}) {
  return (
    <div className='imageGallery'>
        {gallery.map((image)=>(<GalleryCard key={crypto.randomUUID()} image={image} onDelete={onDelete} onUpdate={onUpdate}/>))}
    </div>
  )
}

export default GalleryCollection