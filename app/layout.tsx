import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XqsMi | Sitio Web Oficial",
  description: "Sitio web oficial de XqsMi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
