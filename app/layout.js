import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = 'https://bananaexpress.com.ar';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Banana Express | Box de Verdulería a Domicilio en Palermo",
  description: "Frutas y verduras frescas a domicilio en Palermo, CABA. Elegí tu Box por WhatsApp y recibila el mismo día. Sin app, sin registros. ¡Pedí ahora!",
  keywords: ["verdulería a domicilio", "frutas y verduras Palermo", "delivery verduras CABA", "box verdulería", "banana express"],
  openGraph: {
    title: "Banana Express | Frutas y Verduras Frescas a Domicilio",
    description: "Elegí tu Box de frutas y verduras por WhatsApp y recibila el mismo día en Palermo, CABA.",
    url: SITE_URL,
    siteName: "Banana Express",
    images: [{ url: "/2.jpg", width: 1200, height: 630, alt: "Frutas y verduras frescas Banana Express" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banana Express | Box de Verdulería a Domicilio en Palermo",
    description: "Frutas y verduras frescas a domicilio. Pedí por WhatsApp, recibís hoy.",
    images: ["/2.jpg"],
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Banana Express",
    description: "Verdulería con delivery de frutas y verduras frescas en Box a domicilio en Palermo, CABA.",
    url: SITE_URL,
    telephone: "+5491125017092",
    email: "contacto@bananaexpress.com.ar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paraguay 3490",
      addressLocality: "Palermo",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    servesCuisine: "Frutas y Verduras",
    priceRange: "$$",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}