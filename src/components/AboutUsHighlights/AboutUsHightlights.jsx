import React from 'react'
import { AboutUsHighlights as AboutUsInformation } from '@/constants/AboutUsInformation'
import Link from 'next/link'
import Title from '../Title/Title'
import './AboutUsHightlights.css'
const AboutUsHighlights = () => {
  return (
    <div className='p-10'>
        <Title type={2} title="Asian Elevators Control And Automation" subTitle="About" color="purple" />
        <div className='grid grid-cols-6 mt-3'>
            <div className='col-span-6 md:col-span-4 pr-5 entryAnimateRight'>
                {AboutUsInformation.map((element, idx)=>
                    <div key={idx} className='pb-5'>
                        {element}
                    </div>
                )}
                <Link href={'/about-us'} className='glass px-3 py-1 rounded-full hvr-float entryAnimateDown'>View More</Link>
            </div>
            <div className='md-[hvr-grow] hidden md:block md:col-span-2 2xl:col-span-1 entryAnimateLeft'>
                <Link href={'/about-us'}>
                    <img src='/AboutUsHighlight.webp' alt="About Us Asian" className='border rounded-3xl' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutUsHighlights