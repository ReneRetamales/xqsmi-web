import type { Metadata } from "next";
import ReactPlayer from "react-player";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Inicio",
  description: "Página de inicio de XqsMi",
  keywords: ["Página de inicio", "XqsMi"],
};

const linkItems = [
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

export default function InicioPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Ya puedes escuchar Flores Y Perdones!</h1>

        <ReactPlayer
          className={styles.player}
          src="https://www.youtube.com/watch?v=l1c62LuLg7I"
          controls={true}
          playing={false}
          width="100%"
          height="62.5%"
          fallback={<div>Cargando...</div>}
        />

        <div className={styles.links}>
          {linkItems.map((linkItem) => (
            <a
              className={styles.navLink}
              key={linkItem.url}
              href={linkItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkItem.text}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
