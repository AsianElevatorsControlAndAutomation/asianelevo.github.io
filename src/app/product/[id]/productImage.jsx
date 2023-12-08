"use client"
import React, { useState } from 'react'

const ProductImage = props => {
    let images = JSON.parse(props.images)
    const [showImg, setShowImg] = useState(0)
    return (
    <div className="md:flex-1 px-4">
        {images.length>0&&
            <>
                <figure className="rounded-lg bg-gray-100 max-h-[30rem]">
                    {/* <figure className="rounded-lg bg-gray-100 mb-4 flex justify-center" onClick={()=>setShowImg(showImg+1)}> */}
                        {images[showImg].type==='img'&&
                            <img src={images[showImg].item} alt='' className='rounded-2xl' />
                        }
                        {images[showImg].type==='iframe'&&
                            <iframe src={images[showImg].src} className='h-[30rem] w-full' title={images[showImg].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen />
                            // <iframe width="1280" height="720" src="https://www.youtube.com/embed/xSv8eNjxdPM" title="Asian Smart Elevator IoT Solution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        }
                    {/* </figure> */}
                </figure>
                <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                    {images.map((img, idx)=>
                        <figure key={idx}>
                            {img.type==='img'&&
                                <img src={img.item} alt={''} className={`rounded-2xl ${idx==showImg?'border-4 border-blue-500':''}`} onClick={()=>{setShowImg(idx); window.scroll({top:0, behavior: 'smooth'}) }} />
                            }
                            {img.type==='iframe'&&
                                <img src={'/youtube.svg'} alt={`youtube link to ${img.src}`} className='rounded-2xl' onClick={()=>{setShowImg(idx); window.scroll({top:0, behavior: 'smooth'}) }} />
                            }
                        </figure>
                    )}
                </div>
            </>
        }
    </div>
    )
}

export default ProductImage