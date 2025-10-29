import type { Metadata } from "next";
import Image from "next/image";
import singleCover from "../../../public/images/FloresYPerdonesCover.png";
import epCover from "../../../public/images/EspejismosCover.png";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Música",
  description: "Página de música de XqsMi",
  keywords: ["Página de música", "XqsMi"],
};

const linkItemsSingle = [
  {
    url: "https://music.youtube.com/playlist?list=OLAK5uy_miaT0lDySRrF8gxszGisD0fD0b2hir6XE&si=10JAHddOAx9vBZlY",
    text: "ytmusic",
  },
  {
    url: "https://open.spotify.com/intl-es/track/1zEYL5afjQZ9N8J0aJf2ry?si=d91532ad2f6f4938",
    text: "spotify",
  },
  {
    url: "https://music.apple.com/cl/song/flores-y-perdones/1845943167",
    text: "apple music",
  },
  {
    url: "https://tidal.com/album/466605291/u",
    text: "tidal",
  },
];

const linkItemsEp = [
  {
    url: "https://www.youtube.com/channel/UCZdqgNaM6wYjNcwvOfEqZLg",
    text: "youtube",
  },
  {
    url: "https://music.youtube.com/channel/UCKxDEtNl5qBPjFiEsCfZWbg",
    text: "ytmusic",
  },
  {
    url: "https://open.spotify.com/intl-es/artist/0zzc0r0CLFvWCIJE8mvUIw",
    text: "spotify",
  },
  {
    url: "https://music.apple.com/cl/artist/xqsmi/1844206979",
    text: "apple music",
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
            alt="Flores Y Perdones Cover"
            width={250}
            height={250}
          />

          <div className={styles.text}>
            <div className={styles.title}>
              <span>Flores y Perdones - Sencillo</span>
            </div>

            <div className={styles.links}>
              <div>
                <span>Escuchar en:</span>
              </div>
              <div className={styles.linkItems}>
                {linkItemsSingle.map((linkItem) => (
                  <a
                    key={linkItem.url}
                    href={linkItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navLink}
                  >
                    {linkItem.text}
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
              <div>
                <span>Escuchar en:</span>
              </div>
              <div className={styles.linkItems}>
                {linkItemsSingle.map((linkItem) => (
                  <a
                    key={linkItem.url}
                    href={linkItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navLink}
                  >
                    {linkItem.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Image
            className={styles.covers}
            src={epCover}
            alt="Espejismos Cover"
            width={250}
            height={250}
          />
        </div>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
