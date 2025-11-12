"use client";

import styles from "./NavBar.module.css";
import Image from "next/image";
import { ActiveLink } from "../active-link/ActiveLink";
import mainLogo from "../../public/images/Main.png";
import { useState } from "react";

const navItems = [
  { path: "/inicio", text: "inicio" },
  { path: "/excuse-me", text: "excuse me?" },
  { path: "/musica", text: "música" },
  { path: "/redes", text: "redes" },
];

export const NavBar = () => {
  const iconSize = 25;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <span className={styles.artistName}>XqsMi</span>
      </div>

      <div className={`${styles.sections} ${isOpen ? styles.active : ""}`}>
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} onClick={closeMenu} {...navItem} />
        ))}
      </div>

      <div className={styles.space}>
        <span className={styles.close} onClick={toggleMenu}>
          <Image
            className={styles.logo}
            src={mainLogo}
            alt="XqsMi Logo"
            width={iconSize}
            height={iconSize}
          />
        </span>
      </div>
    </nav>
  );
};
