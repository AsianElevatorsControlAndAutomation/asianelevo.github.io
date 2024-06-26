import React from 'react'
import Link from 'next/link'
import { ContactInformation } from '@/constants/ContactInformation.jsx'

import Gutter from '@/components/Gutter/Gutter.jsx'
import Title from '@/components/Title/Title.jsx'
import ReachUsForm from './ReachUsForm.jsx'

const ReachUsHighlights = () => {
  return (
    <div className='m-10'>
        
        <div className='grid grid-cols-1 md:grid-cols-2'>            
            <div className='hidden md:flex entryAnimateDown'>
                <img src="/ContactUs.svg" alt='contact us' className='w-10/12 mb-2' />
            </div>
            <div>
                {/* <Title title="Contact Us" color='purple' /> */}
                <div className='flex justify-center'>
                    <Title type={2} title="Contact Us" subTitle="Need Further Details?" color="green" />
                </div>
                <ReachUsForm />
            </div>
        </div>
    </div>
  )
}

export default ReachUsHighlights