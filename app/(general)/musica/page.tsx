import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Música",
  description: "Página de música de XqsMi",
  keywords: ["Página de música", "XqsMi"],
};

export default function MusicaPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Música</h1>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
