import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Inicio",
  description: "Página de inicio de XqsMi",
  keywords: ["Página de inicio", "XqsMi"],
};

export default function InicioPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido a XqsMi</h1>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
