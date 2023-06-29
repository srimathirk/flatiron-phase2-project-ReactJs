import React from 'react'
import GalleryCard from './GalleryCard'

function GalleryCollection({collections}) {
  return (
    <div className='imageGallery'>
        {collections.map((card,index)=>(<GalleryCard key={index} card={card}/>))}
    </div>
  )
}

export default GalleryCollection