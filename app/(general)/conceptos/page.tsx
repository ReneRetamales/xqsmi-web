import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Conceptos",
  description: "Página de Conceptos de XqsMi",
  keywords: ["Página de Conceptos", "XqsMi"],
};

export default function ConceptosPage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Conceptos</h1>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
