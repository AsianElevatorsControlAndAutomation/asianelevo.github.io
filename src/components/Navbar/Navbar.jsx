"use client";

import Link from "next/link";
import React from "react";
import { NavbarItems } from "./NavbarItems";
import styles from "./Navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  // const session = useSession();

  return (
    <nav className={`${styles.container}`}>
      <Link href='/' className={styles.logo}>
        <img src="/logo-white.png" alt="Asian Elevators Control and Automation Logo" className={styles.logoImg}/>
      </Link>
      <div className={styles.navItems}>
        {NavbarItems.map(page=>{
          return(
            <Link className={`${styles.navItem} hvr-float hvr-underline-from-left`} key={page.id} href={page.url}>{page.title}</Link>
          )
        })}
        <button className={`${styles.button} hvr-float`}>
          REACH US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
