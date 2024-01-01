"use client"
import React, { useState } from 'react'
import { ContactInformation } from '@/constants/ContactInformation'
import Link from 'next/link'
const ProductImage = props => {
    let images = JSON.parse(props.images)
    let product = props.product
    const [showImg, setShowImg] = useState(0)
    return (
    <div className="md:flex-1 px-4">
        {images.length>0&&
            <>
                <figure className="relative rounded-lg bg-gray-100 max-h-[30rem]">
                    {/* <figure className="rounded-lg bg-gray-100 mb-4 flex justify-center" onClick={()=>setShowImg(showImg+1)}> */}
                        {images[showImg].type==='img'&&
                            <img src={images[showImg].item} alt='' className='rounded-2xl' />
                        }
                        {images[showImg].type==='iframe'&&
                            <iframe src={images[showImg].src} className='h-[30rem] w-full' title={images[showImg].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen />
                            // <iframe width="1280" height="720" src="https://www.youtube.com/embed/xSv8eNjxdPM" title="Asian Smart Elevator IoT Solution" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        }
                    {/* </figure> */}
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={()=>{setShowImg(showImg===0?images.length-1:showImg-1)}}>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={()=>{setShowImg(showImg<images.length-1?showImg+1:0)}}>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    
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
        <span>
            {ContactInformation.social.filter(s=>s.type==='whatsapp').map(info=>(
                <Link href={`${info.url}?text=Hi, I would like to enquire about ${product.replace('+', 'Plus')}`}>
                    <img src={info.image} alt="whatsapp icon" className='h-20 w-full bg-sky-50 pl-2 pr-2 m-1 rounded-3xl' />
                </Link>
            ))}
        </span>
    </div>
    )
}

export default ProductImage