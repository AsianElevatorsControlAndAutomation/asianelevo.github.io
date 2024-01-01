import React from 'react'
import Link from 'next/link'
import { ContactInformation } from '@/constants/ContactInformation.jsx'

import Gutter from '@/components/Gutter/Gutter.jsx'
import Title from '@/components/Title/Title.jsx'
// import ReachUsForm from './reachusform.jsx'
import ReachUsForm from '@/components/ReachUsHighlights/ReachUsForm'
import FAQ from '@/components/FAQ/FAQ'


const ReachUs = () => {
  return (
    <div className='md:container mx-auto container'>
        <Gutter />
        <Title title="Reach Us" color='orange' />
        <div className='grid grid-cols-1 md:grid-cols-2'>            
            <div>
                <div className={`text-white-900 font-extrabold`}>Contact Information</div>
                <div className='flex'>
                    <img src='/location.svg' alt="asian elevators location icon" className='w-6' />
                    <Link href="https://maps.app.goo.gl/qHSa4EzUWBPZgymP9" className='hover:underline' target='_blank'>
                    {ContactInformation.address.map((add, idx)=><div key={idx}>{add}</div>)}
                    </Link>
                </div>
                {ContactInformation.email.map((email, idx)=>
                    <div className='flex' key={idx}>
                    <img src='/mail.svg' alt="asian elevators location icon" className='w-6' />
                    <Link href={`mailto:${email}`} className='hover:underline' target='_blank'>
                        {email}
                    </Link>
                    </div>
                )}
                {ContactInformation.contact.map((no, idx)=>
                    <div className='flex' key={idx}>
                    <img src='/call.svg' alt="asian elevators location icon" className='w-6' />
                    <Link href={`tel:${no}`} className='hover:underline block' target='_blank'>
                        {no}
                    </Link>
                    </div>
                )}
            <div className='mt-10'>
                <div className={`text-white-900 font-extrabold`}>Find us on:</div>
                <div className='grid grid-cols-2 max-md:gap-2'>
                    {ContactInformation.social.map((social, idx)=>
                    <div className='flex' key={idx}>
                        <Link href={social.url} className='hover:underline'  target='_blank'>
                            <img src={social.image} alt={`asian elevators ${social.type} icon`} className='h-20 w-full bg-sky-50 pl-2 pr-2 m-1 rounded-3xl' />
                        </Link>
                    </div>
                    )}
                </div>
            </div>
            </div>
            <div>
                <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Need further details? Let us know.</p>
                <ReachUsForm />
            </div>
        </div>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13996.085500661995!2d77.1256422!3d28.7189072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01681cab83d5%3A0xce3ba1a0c164ad81!2sAsian%20Elevators%20Control%20%26%20Automation!5e0!3m2!1sen!2ssg!4v1701504060548!5m2!1sen!2ssg" 
            className='w-full h-96 rounded-3xl mt-10' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <FAQ />
    </div>
  )
}

export default ReachUs