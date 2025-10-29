"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ⬅️ Importar useRouter
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter(); // ⬅️ Inicializar el router

  // 💾 Array con todas las alternativas
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

  // 1. Lógica para el cambio de texto aleatorio
  useEffect(() => {
    // ⚙️ Lógica para cambiar el texto cada 150ms de forma aleatoria
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setCurrentTextIndex(randomIndex);
    }, 200);

    // 🧹 Limpieza del intervalo
    return () => clearInterval(intervalId);
  }, []);

  // 2. Lógica para la redirección después de 5 segundos
  useEffect(() => {
    // ⏳ Establecer un temporizador de 5000ms (5 segundos)
    const timerId = setTimeout(() => {
      // Redirigir a la ruta (general)/inicio
      // La ruta para una carpeta (general)/inicio debe ser /general/inicio
      router.push("/inicio");
    }, 5000); // 5000 milisegundos = 5 segundos

    // 🧹 Limpieza del temporizador
    // Es CRUCIAL limpiar el timeout si el componente se desmonta antes
    // de que la redirección se complete (aunque aquí siempre se redirige).
    return () => clearTimeout(timerId);
  }, [router]); // El array de dependencias solo necesita 'router'

  return <div className={styles.intro}>{texts[currentTextIndex]}</div>;
}
