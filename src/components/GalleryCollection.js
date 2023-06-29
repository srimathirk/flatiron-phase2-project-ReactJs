import React from 'react'
import GalleryCard from './GalleryCard'

function GalleryCollection({collections , onDelete}) {
  return (
    <div className='imageGallery'>
        {collections.map((card,index)=>(<GalleryCard key={index} card={card} onDelete={onDelete}/>))}
    </div>
  )
}

export default GalleryCollection