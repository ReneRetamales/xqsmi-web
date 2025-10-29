import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import youtubeLogo from "../../../public/images/YouTube.png";
import instagramLogo from "../../../public/images/Instagram.png";
import tiktokLogo from "../../../public/images/TikTok.png";
import threadsLogo from "../../../public/images/Threads.png";

export const metadata: Metadata = {
  title: "XqsMi | Redes",
  description: "Página de redes de XqsMi",
  keywords: ["Página de redes", "XqsMi"],
};

const socialItems = [
  {
    url: "https://www.youtube.com/@xqsmiofficial",
    text: "youtube",
    image: youtubeLogo,
  },
  {
    url: "https://www.instagram.com/xqsmiofficial/",
    text: "instagram",
    image: instagramLogo,
  },
  {
    url: "https://www.tiktok.com/@xqsmiofficial",
    text: "tiktok",
    image: tiktokLogo,
  },
  {
    url: "https://www.threads.com/@xqsmiofficial?hl=es-la",
    text: "threads",
    image: threadsLogo,
  },
];

export default function RedesPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <div className={styles.logo}>
          {socialItems.map((socialItem) => (
            <a
              className={styles.socialLink}
              key={socialItem.url}
              href={socialItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.socialLogo}
                src={socialItem.image}
                alt={socialItem.text}
              />
              <div>{socialItem.text}</div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
