import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "XqsMi | Excuse Me?",
  description: "Página de excuse me? de XqsMi",
  keywords: ["Página de excuse me?", "XqsMi"],
};

export default function ExcuseMePage() {
  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        <span className={styles.title}>XqsMi = Excuse Me</span>
        <span className={styles.text}>
          En realidad, me encontraba sentado frente a la pantalla del
          computador. Estaba disociado.
        </span>
        <span className={styles.text}>
          Fue hace tiempo, incluso mucho antes de pensar en Espejismos. Desde
          hace años quería hacer música solo para mí, como una forma de
          introspección, una terapia personal. No paraba de repetirme que lo
          sentía. Me había dejado de lado por demasiado tiempo.
        </span>
        <span className={styles.text}>
          <div>
            Me levanté, miré por la ventana, encendí un tabaco y, en inglés, me
            dije:
          </div>
          <div>“Excuse me."</div>
          <div>Disculpa. Discúlpame.</div>
          <div>
            Me lo dije a mí mismo porque me abandoné, y no quería volver a
            hacerlo.
          </div>
        </span>
        <span className={styles.text}>
          “Excuse me” resonó en mi cabeza, y fue el único momento en que pude
          abrazarme con sinceridad, sin dureza. No recuerdo mucho más, solo sé
          que XqsMi nació de ese instante de honestidad, cuando dejé de exigirme
          tanto y me acepté como era. Fue un momento de paz. Un agradecimiento
          hacia mí mismo.
        </span>
        <span className={styles.signature}>- XqsMi</span>
      </div>

      <div className={styles.space}></div>
    </div>
  );
}
