import React from 'react'
import './page.scss'
import Gutter from '@/components/Gutter/Gutter'
import { GalleryInformation } from '@/constants/GalleryInformation'
import Title from '@/components/Title/title'
const Gallery = () => {
  return (
    <div className='md:container mx-auto container mb-20'>
        <Gutter />
        <Title title="Gallery" color='red' />
        {/* <div className='Heading'>
            <h1>Gallery</h1>
        </div> */}
        <div className='grid grid-cols-1 Body'>
            {GalleryInformation.map((event, idx)=>(
                <div key={idx} className='eventContainer'>
                    <div className='eventHeading'>
                        <h2>
                            {event.title}
                        </h2>
                    </div>
                    <div className={`grid xs:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-20 eventImageContainer`}>
                        {event.images.map((image, idx2)=>(
                            // <div key={idx2} className={eventImageBox}>
                            //     <img src={`/gallery/${event.folderName}/${image.img}`} alt={image.alt} className={`h-auto max-w-full rounded-lg ${eventImage}`} />
                            // </div>
                            <figure key={idx2} className="blue frame entryAnimateDown">
                                <img src={`/gallery/${event.folderName}/${image.img}`} alt={image.alt} className='entryAnimateUp' />
                                <figcaption>
                                    <h2>{image.alt}</h2>
                                    <span>at <span className="fn">{event.title}</span></span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            ))} 
        </div>    
    </div>
  )
}

export default Gallery