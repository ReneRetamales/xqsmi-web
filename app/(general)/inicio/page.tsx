import React from "react";
import ReactPlayer from "react-player";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Inicio",
  description: "Página de inicio de XqsMi",
  keywords: ["Página de inicio", "XqsMi"],
};

const linkItems = [
  {
    url: "https://www.youtube.com/watch?v=l1c62LuLg7I",
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

export default function InicioPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Ya puedes escuchar Flores Y Perdones!</h1>

        {/* <ReactPlayer
          className={styles.player}
          src="https://www.youtube.com/watch?v=l1c62LuLg7I"
          controls={true}
          width="100%"
          height="65%"
          fallback={<div>Cargando reproductor...</div>}
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
        </div> */}
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
