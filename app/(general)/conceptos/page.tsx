import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

// Función de desordenado (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  // Creamos una copia del array para no modificar el array original (imageItems)
  const shuffledArray = [...array]; 
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Escoge un elemento restante al azar
    const j = Math.floor(Math.random() * (i + 1)); 
    // Intercambia el elemento actual con el elemento al azar
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export const metadata: Metadata = {
  title: "XqsMi | Conceptos",
  description: "Página de Conceptos de XqsMi",
  keywords: ["Página de Conceptos", "XqsMi"],
};

const imageItems = [
  { id: 1, src: "/images/concepts/1.png", alt: "Imagen conceptual 1" },
  { id: 2, src: "/images/concepts/2.png", alt: "Imagen conceptual 2" },
  { id: 3, src: "/images/concepts/3.png", alt: "Imagen conceptual 3" },
  { id: 4, src: "/images/concepts/4.png", alt: "Imagen conceptual 4" },
  { id: 5, src: "/images/concepts/5.png", alt: "Imagen conceptual 5" },
  { id: 6, src: "/images/concepts/6.png", alt: "Imagen conceptual 6" },
  { id: 7, src: "/images/concepts/7.png", alt: "Imagen conceptual 7" },
  { id: 8, src: "/images/concepts/8.png", alt: "Imagen conceptual 8" },
];

export default function ConceptosPage() {
  // Aplicamos el desordenado
  // Usamos el hook useMemo para desordenar solo una vez por renderizado del componente
  // y no en cada re-render (aunque si es una Server Component, se desordenará en cada solicitud)
  const shuffledImages = shuffleArray(imageItems); 

  return (
    <div className={styles.section}>
      <div className={styles.space}></div>

      <div className={styles.content}>
        {shuffledImages.map((imageItem) => ( // ¡Usamos el array desordenado!
          <div key={imageItem.id} className={styles.concepts}>
            <Image
              className={styles.concept}
              src={imageItem.src}
              alt={imageItem.alt}
              fill
            />
          </div>
        ))}
      </div>

      <div className={styles.space}></div>
    </div>
  );
}