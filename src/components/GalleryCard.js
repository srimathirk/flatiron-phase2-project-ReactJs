import React from 'react'

function GalleryCard({card}) {
    const{images,category} = card;
  return (
    <div>
        <div className="image">
            <img src={images} alt=""/>
        </div>
        <div className="content">
            <div className='header'>{category}</div>
        </div>

    </div>
  )
}

export default GalleryCard