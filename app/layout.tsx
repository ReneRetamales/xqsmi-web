import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "XqsMi | Sitio Web Oficial",
    template: "%s",
  },
  description:
    "Sitio web oficial de XqsMi. Explora su música, videos, redes y enlaces a todas las plataformas de streaming (Spotify, YouTube Music, Apple Music , Tidal).",
  keywords: [
    "XqsMi",
    "Excuse Me",
    "Música",
    "Artista Chileno",
    "Flores y Perdones",
    "Espejismos",
    "Rock Latino",
    "Rock",
    "Punk",
    "Punk Rock",
    "Rock Punk",
    "Alternativo",
    "Indie",
    "Indie Rock",
    "Pop",
    "Pop Rock",
  ],
  authors: [{ name: "XqsMi" }],
  creator: "XqsMi",

  icons: {
    icon: "/ico/favicon.png",
    shortcut: "/ico/favicon.png",
  },

  openGraph: {
    title: "XqsMi | Sitio Web Oficial",
    description: "Sitio web oficial de XqsMi. Explora su música, videos y más.",
    url: "https://xqsmi-web.vercel.app/",
    siteName: "XqsMi",
    images: [
      {
        url: "../public/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "XqsMi - Música Oficial",
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "XqsMi | Música y Artista Oficial",
    description:
      "Escucha la nueva música de XqsMi, incluyendo 'Flores y Perdones' en todas las plataformas.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
