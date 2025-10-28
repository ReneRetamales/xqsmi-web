import Link from "next/link";
import styles from "./NavBar.module.css";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/inicio", text: "inicio" },
  { path: "/excuse-me", text: "excuse me?" },
  { path: "/musica", text: "música" },
  { path: "/conceptos", text: "conceptos" },
  { path: "/redes", text: "redes" },
];

export const NavBar = async () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <Link href="/">
          <span>XqsMi</span>
        </Link>
      </div>

      <div className={styles.sections}>
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>

      <div className={styles.space}></div>
    </nav>
  );
};
