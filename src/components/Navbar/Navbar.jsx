import Link from "next/link";
import React from "react";
import { NavbarItems } from "./NavbarItems";
import styles from "./Navbar.module.css";
import Script from "next/script";
import "./Navbar.scss"

const Navbar = () => (
  <nav className={`${styles.container}`}>
    <Script src="/Scripts/MobileNavbar.jsx" strategy='afterInteractive' />
    <div className="max-w-screen-2xl flex flex-wrap items-center justify-evenly mx-auto p-4">
      <Link href='/' className={`${styles.logo}`}>
        <img src="/logo-white.webp" alt="Asian Elevators Control and Automation Logo" className={styles.logoImg}/>
      </Link>
      <ul className={`${styles.navItems} hidden lg:grid items-center md:grid-cols-6 `}>
      {/* <ul className={`${styles.navItems} grid items-center md:grid-cols-6 grid-cols-2 max-md:w-full `}> */}
          {NavbarItems.map(page=>{
            return(
              <li key={page.id}>
                <Link className={`${styles.navItem} hvr-float hvr-underline-from-left`} href={page.url}>{page.title}</Link>
              </li>
              )
          })}
          <li className={`${styles.button} hvr-float`}>
            <Link href='/reach-us'>
              Reach Us
            </Link>
          </li>
      </ul>
      <div id="myNav" className={styles.overlay}>
        <Link href="#" className={styles.closebtn} id="closeNavbar">X</Link>
        <div className={styles.overlayContent}>
        <ul className={`${styles.navItems} items-center max-md:w-full `}>
          {NavbarItems.map(page=>{
            return(
              <li key={page.id}>
                <Link className={`${styles.navItem} hvr-float hvr-underline-from-left mobileNavItem`} href={page.url}>{page.title}</Link>
              </li>
              )
            })}
        </ul>
          <Link className={`${styles.navItem} hvr-float hvr-underline-from-left mobileNavItem`} href='/reach-us'>Reach Us</Link>
        </div>
      </div>
      <button className="text-3xl cursor-pointer block lg:hidden" id="mobileNavbar">&#9776;</button>
    </div>
  </nav>
)

export default Navbar;
