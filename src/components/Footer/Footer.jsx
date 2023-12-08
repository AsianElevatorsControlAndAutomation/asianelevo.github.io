import React from 'react'
import Link from 'next/link'
import { NavbarItems } from '../Navbar/NavbarItems'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div></div>
        <div className={styles.LinksBox}>
            <div className={styles.Heading}>Links</div>
            <div className={styles.Links}>
                {NavbarItems.map(page=>{
                return(
                    <Link className={`${styles.Link} hvr-forward hvr-underline-from-left`} key={page.id} href={page.url}> 
                    {page.title}
                    </Link>
                )
                })}
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13996.085500661995!2d77.1256422!3d28.7189072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01681cab83d5%3A0xce3ba1a0c164ad81!2sAsian%20Elevators%20Control%20%26%20Automation!5e0!3m2!1sen!2ssg!4v1701504060548!5m2!1sen!2ssg" className={styles.map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Footer