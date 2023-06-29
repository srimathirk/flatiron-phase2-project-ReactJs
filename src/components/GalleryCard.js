import React from 'react'

function GalleryCard({card}) {
    const{images,description} = card;
  return (
    <div>
        <div className="image">
            <img src={images} alt=""/>
        </div>
        <div className="content">
            <div className='Descripiton'>{description}</div>
        </div>

    </div>
  )
}

export default GalleryCard