import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. IMPORTAR el componente flotante
import WhatsAppButton from "../components/WhatsAppButton"; 

// 2. Definición de fuentes (ya la tenías)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 3. Metadatos (ajustados al idioma español)
export const metadata = {
  title: "Banana Express | Box de Verdulería en Palermo",
  description: "Simplifica tu compra: Entrega de frutas y verduras frescas en Box a domicilio en Palermo, CABA.",
};

export default function RootLayout({ children }) {
  return (
    // 4. Asegúrate de cambiar la etiqueta lang a "es"
    <html lang="es"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Aquí se renderiza el contenido de la página (Header, Hero, etc. de page.js) */}
        <main className="min-h-screen">
            {children}
        </main>

        {/* 5. EL BOTÓN FLOTANTE: Se mantiene visible en todas las páginas */}
        <WhatsAppButton />

        {/* 6. EL FOOTER: Información legal y de ubicación */}
        
      </body>
    </html>
  );
}