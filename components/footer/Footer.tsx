import Link from "next/link";
import Image from "next/image";
import xqsmiLogo from "../../public/images/XMLogo.png";
import ytmusicLogo from "../../public/images/YTMusic.png";
import spotifyLogo from "../../public/images/Spotify.png";
import applemusicLogo from "../../public/images/AppleMusic.png";
import tidalLogo from "../../public/images/Tidal.png";
import styles from "./Footer.module.css";

const navItems = [
  {
    url: "https://music.youtube.com/channel/UCKxDEtNl5qBPjFiEsCfZWbg",
    text: "YouTube Music",
    image: ytmusicLogo,
  },
  {
    url: "https://open.spotify.com/intl-es/artist/0zzc0r0CLFvWCIJE8mvUIw",
    text: "Spotify",
    image: spotifyLogo,
  },
  {
    url: "https://music.apple.com/cl/artist/xqsmi/1844206979",
    text: "Apple Music",
    image: applemusicLogo,
  },
  {
    url: "https://tidal.com/artist/68061704",
    text: "Tidal",
    image: tidalLogo,
  },
];

export const Footer = () => {
  const iconSize = 25;

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={xqsmiLogo}
            alt="XqsMi Logo"
            width={iconSize}
            height={iconSize}
          />
        </Link>
      </div>

      <div className={styles.copyright}>
        Copyright © 2026 XqsMi. All rights reserved.
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
            <Image
              src={navItem.image}
              alt={navItem.text}
              width={iconSize}
              height={iconSize}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};
