import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Redes",
  description: "Página de redes de XqsMi",
  keywords: ["Página de redes", "XqsMi"],
};

export default function RedesPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Redes</h1>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
