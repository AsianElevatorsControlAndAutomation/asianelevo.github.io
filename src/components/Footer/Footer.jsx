import React from 'react'
import Link from 'next/link'
import { NavbarItems } from '../Navbar/NavbarItems.jsx'
import { ContactInformation } from '@/constants/ContactInformation.jsx'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={`${styles.container} w-full overflow-scroll p-4`}>
      <div className={`grid grid-cols-2 md:grid-cols-3 md:container lg:grid-cols-6 mx-auto`}>
        <div>
          <img src="/logo-white.webp" alt="Asian Elevators Control and Automation Logo" className={styles.logoImg}/>
          <p className='text-sm italic'>
            We are a leading supplier of elevator equipment since 2007. With a skilled team boasting over 35 years of industry experience, we are recognized for our reliability, integrated solutions, and cutting-edge technology.
          </p>
        </div>
        <div className=''>
            <div className={`text-white-900 font-extrabold`}>Quick Links</div>
            <div className='grid grid-cols-1'>
                {NavbarItems.map(page=>{
                return(
                  <div className='flex' key={page.id}>
                    <img src='/right.svg' alt='right bullet point' className='w-6'/>
                    <Link className={`hvr-forward hvr-underline-from-left`} href={page.url}>
                      {page.title}
                    </Link>
                  </div>
                )
                })}
                <div className='flex'>
                  <img src='/right.svg' alt='right bullet point' className='w-6'/>
                  <Link className={`hvr-forward hvr-underline-from-left`} href={'/reach-us'}> 
                  Reach Us
                  </Link>
                </div>
            </div>
        </div>
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
        </div>
        <div className='md:ml-4'>
          <div className={`text-white font-extrabold text-center`}>Location</div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13996.085500661995!2d77.1256422!3d28.7189072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01681cab83d5%3A0xce3ba1a0c164ad81!2sAsian%20Elevators%20Control%20%26%20Automation!5e0!3m2!1sen!2ssg!4v1701504060548!5m2!1sen!2ssg" className={styles.map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='col-span-2 md:ml-4'>
          <div className={`text-white font-extrabold text-center`}>Social Presence</div>
          <div className='grid grid-cols-2 max-md:gap-2'>
            {ContactInformation.social.map((social, idx)=>
              <div className='flex' key={idx}>
                <Link href={social.url} className='hover:underline' target='_blank' >
                  <img src={social.image} alt={`asian elevators ${social.type} icon`} className='h-20 w-full bg-sky-50 pl-2 pr-2 mt-1 rounded-3xl' />
                </Link>
              </div>
            )}
          </div>
        </div>
        </div>
        {/* <div className='md:container mx-auto grid grid-cols-4 max-md:grid-cols-2'>
        {ContactInformation.social.map((social, idx)=>
            <div className='flex' key={idx}>
              <Link href={social.url} className='hover:underline' >
                <img src={social.image} alt={`asian elevators ${social.type} icon`} className='h-20 w-full' />
              </Link>
            </div>
          )}
        </div> */}
        <div className='md:container mx-auto flex justify-between'>
          <div>
            © 2024 Asian Elevators Control And Automation, All Rights Reserved. 
          </div>
          <div>Designed & Developed By <Link href="https://www.amsidd.com" target='_blank' className='text-white-900 font-extrabold italic underline hvr-float'>Siddharth Singh</Link></div>
        </div>
    </div>
  )
}

export default Footer