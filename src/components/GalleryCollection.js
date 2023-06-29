import React from 'react'
import GalleryCard from './GalleryCard'

function GalleryCollection({collections , onDelete, onUpdate}) {
  return (
    <div className='imageGallery'>
        {collections.map((card,index)=>(<GalleryCard key={index} card={card} onDelete={onDelete} onUpdate={onUpdate}/>))}
    </div>
  )
}

export default GalleryCollection