import React from 'react'
import './page.scss'
import Gutter from '@/components/Gutter/Gutter'
import { content } from './content.jsx'
const Gallery = () => {
  return (
    <div className='md:container mx-auto container'>
        <Gutter />
        <div className='Heading'>
            <h1>Gallery</h1>
        </div>
        <div className='grid grid-cols-1 Body'>
            {content.map((event, idx)=>(
                <div key={idx} className='eventContainer'>
                    <div className='eventHeading'>
                        {event.title}
                    </div>
                    <div className={`grid xs:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-20 eventImageContainer`}>
                        {event.images.map((image, idx2)=>(
                            // <div key={idx2} className={eventImageBox}>
                            //     <img src={`/gallery/${event.folderName}/${image.img}`} alt={image.alt} className={`h-auto max-w-full rounded-lg ${eventImage}`} />
                            // </div>
                            <figure key={idx2} className="blue frame">
                                <img src={`/gallery/${event.folderName}/${image.img}`} alt={image.alt} />
                                <figcaption>
                                    <h2>She is a Photographer</h2>
                                    <span>by <span className="fn">Alex Spencer</span></span>
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