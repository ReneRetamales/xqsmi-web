"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const texts = [
    "XqsMi",
    "Excuse Me?",
    "Espejismos",
    "Flechas Atrapadas",
    "Siempre Fuiste Tú",
    "Flores Y Perdones",
    "Dulce Lamento",
    "Sin Mirar Atrás",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setCurrentTextIndex(randomIndex);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push("/inicio");
    }, 50000);

    return () => clearTimeout(timerId);
  }, [router]);

  return <div className={styles.intro}>{texts[currentTextIndex]}</div>;
}
