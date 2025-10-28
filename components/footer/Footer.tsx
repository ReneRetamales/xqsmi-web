import Link from "next/link";
import styles from "./Footer.module.css";

const navItems = [
  { url: "https://music.youtube.com/channel/UCKxDEtNl5qBPjFiEsCfZWbg", text: "ytmusic" },
  { url: "https://open.spotify.com/intl-es/artist/0zzc0r0CLFvWCIJE8mvUIw", text: "spotify" },
  { url: "https://music.apple.com/cl/artist/xqsmi/1844206979", text: "applemusic" },
  { url: "https://tidal.com/artist/68061704", text: "tidal" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <span>LogoXM</span>
        </Link>
      </div>

      <div className={styles.copyright}>
        © MMXXVI XqsMi. Todos los derechos reservados.
      </div>

      <div className={styles.links}>
        {navItems.map((navItem) => (
          <a
            key={navItem.url}
            href={navItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            {navItem.text}
          </a>
        ))}
      </div>
    </footer>
  );
};
