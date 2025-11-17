import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import singleCover from "../../../public/images/FloresYPerdonesCover.png";
import epCover from "../../../public/images/EspejismosCover.png";

export const metadata: Metadata = {
  title: "XqsMi | Música",
  description: "Página de música de XqsMi",
  keywords: ["Página de música", "XqsMi"],
};

const linkItemsSingle = [
  {
    url: "https://music.youtube.com/watch?v=qGKZA9kl31o&si=yVF8gLICYQDGqjDP",
    text: "ytmusic",
  },
  {
    url: "https://open.spotify.com/intl-es/track/1zEYL5afjQZ9N8J0aJf2ry?si=792fdfa508744b1c",
    text: "spotify",
  },
  {
    url: "https://music.apple.com/cl/song/flores-y-perdones/1845943167",
    text: "apple music",
  },
  {
    url: "https://tidal.com/track/466605292/u",
    text: "tidal",
  },
];

const linkItemsEp = [
  {
    url: "https://music.youtube.com/watch?v=qGKZA9kl31o&si=yVF8gLICYQDGqjDP",
    text: "ytmusic",
  },
  {
    url: "https://open.spotify.com/intl-es/track/1zEYL5afjQZ9N8J0aJf2ry?si=792fdfa508744b1c",
    text: "spotify",
  },
  {
    url: "https://music.apple.com/cl/song/flores-y-perdones/1845943167",
    text: "apple music",
  },
  {
    url: "https://tidal.com/track/466605292/u",
    text: "tidal",
  },
];

export default function MusicaPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <div className={styles.single}>
          <Image
            className={styles.covers}
            src={singleCover}
            alt="Portada de Single Flores y Perdones"
            width={2048}
            height={2048}
          />

          <div className={styles.text}>
            <div className={styles.title}>
              <span>Flores y Perdones - Sencillo</span>
            </div>

            <div className={styles.links}>
              <div className={styles.subtitle}>
                <span>Escuchar en:</span>
              </div>
              <div className={styles.linkItems}>
                {linkItemsSingle.map((linkItemSingle) => (
                  <a
                    className={styles.navLink}
                    key={linkItemSingle.url}
                    href={linkItemSingle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkItemSingle.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ep}>
          <div className={styles.text}>
            <div className={styles.title}>
              <span>Espejismos - EP</span>
            </div>

            <div className={styles.links}>
              <div className={styles.subtitle}>
                <span>Escuchar en:</span>
              </div>
              <div className={styles.linkItems}>
                {linkItemsEp.map((linkItemEp) => (
                  <a
                    className={styles.navLink}
                    key={linkItemEp.url}
                    href={linkItemEp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkItemEp.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Image
            className={styles.covers}
            src={epCover}
            alt="Portada de EP Espejismos"
            width={2048}
            height={2048}
          />
        </div>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
