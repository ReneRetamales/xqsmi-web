import styles from "./NavBar.module.css";
import Image from "next/image";
import { ActiveLink } from "../active-link/ActiveLink";
import mainLogo from "../../public/images/Main.png";

const navItems = [
  { path: "/inicio", text: "inicio" },
  { path: "/excuse-me", text: "excuse me?" },
  { path: "/musica", text: "música" },
  // { path: "/conceptos", text: "conceptos" },
  { path: "/redes", text: "redes" },
];

export const NavBar = async () => {
  const iconSize = 25;

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <span className={styles.artistName}>XqsMi</span>
      </div>

      <div className={styles.sections}>
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>

      <div className={styles.space}>
        <span className={styles.close}>
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
