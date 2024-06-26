import React from 'react'
import Title from '../Title/Title'
import Link from 'next/link'
import { ServicesInformation } from '@/constants/ServicesInformation'

const ServicesHighlights = () => {
  return (
    <div>
      <div className='p-10'>
        <Title type={2} title="Services" subTitle="Our" color="orange" />
          {ServicesInformation.map((element, idx)=>
            <div key={idx} className='grid grid-cols-5 mt-3'>
              <div className='col-span-5 md:col-span-2 pr-5 entryAnimateRight'>
                  <img src={element.img} alt={element.title} />
              </div>
              <div className='col-span-5 md:col-span-3 mt-2'>
                  
                <div className='pb-5'>
                  <div className='text-3xl revue pb-2'>
                    <Title type={2} subTitle={element.title} title="" color="blue" />
                  </div>
                  <div className='entryAnimateLeft'>
                    {element.description}
                  </div>
                </div>
                {/* <Link href={'/about-us'} className='glass px-3 py-1 rounded-full hvr-float'>View More</Link> */}
              </div>
          </div>
          )}
        </div>
    </div>
    // </div>
  )
}

export default ServicesHighlights