# CLAUDE.md — Banana Express

## Proyecto

Banana Express es una landing page de conversión para una verdulería con delivery en Palermo, CABA. El objetivo principal es **vender**: convertir visitantes en compradores a través de WhatsApp y/o la tienda online en Tiendanube.

Doble canal de conversión:
1. **WhatsApp** — pedidos directos con mensaje pre-cargado
2. **Tiendanube** — tienda online con pasarela de pago (MercadoPago, tarjetas, etc.)

---

## Stack Tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.0.1 |
| UI | React | 19.2.0 |
| Estilos | Tailwind CSS | v4 |
| Iconografía | Lucide React | ^0.548.0 |
| Iconos adicionales | react-icons | ^5.5.0 |
| Fuentes | Geist Sans / Geist Mono (next/font/google) |
| Imágenes | next/image (optimización automática) |
| E-commerce | Tiendanube API (productos + checkout) |
| Hosting | Pendiente deploy — Vercel recomendado |

---

## Estructura del Proyecto

```
banana-express/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.js      # API Route: fetch productos de Tiendanube
│   ├── globals.css            # Estilos globales (Tailwind v4 con @import "tailwindcss")
│   ├── layout.js              # RootLayout: metadata SEO, JSON-LD LocalBusiness, fuentes
│   └── page.js                # Página principal: ensambla todas las secciones
├── components/
│   ├── Header.jsx             # Header fijo, scroll-aware, botón WhatsApp, menú mobile
│   ├── HeroSection.jsx        # Hero con CTA principal, proceso 3 pasos, badge urgencia
│   ├── AboutSection.jsx       # Carrusel 4 fotos + beneficios (Frescos, Entrega, Calidad)
│   ├── ProductsSection.jsx    # Productos dinámicos (Tiendanube o fallback local)
│   ├── ProductCard.jsx        # Card: imagen, precio con ancla, CTA Tiendanube/WhatsApp
│   ├── TestimonialsSection.jsx # 6 testimonios + CTA ("+200 familias")
│   ├── FaqSection.jsx         # 6 preguntas con acordeón + FAQ Schema JSON-LD
│   ├── ContactSection.jsx     # Info contacto + Google Maps embed
│   ├── Footer.jsx             # Links, redes, CTA final, horarios, copyright
│   └── WhatsAppButton.jsx     # Botón flotante fijo con tooltip animado
├── lib/
│   ├── constants.js           # UNICA fuente de verdad: WhatsApp, Instagram, email, ubicación
│   └── tiendanube.js          # Integración Tiendanube API: fetch, normalización de productos
├── public/
│   ├── logo.png               # Logo Banana Express
│   ├── 1.jpg - 5.jpg          # Fotos productos/Box (2.jpg y 4.jpg son pesadas)
│   └── about1-4.jpg           # Fotos del local/equipo para carrusel
├── .env.example               # Template de variables de entorno
├── next.config.mjs            # Config Next.js
├── postcss.config.mjs
└── package.json
```

---

## Datos del Negocio (fuente: lib/constants.js)

- **WhatsApp:** +54 9 11 2501-7092
- **Instagram:** @bananaexpress.ok
- **Email:** contacto@bananaexpress.com.ar
- **Dirección:** Paraguay 3490, entre Guise y Coronel Díaz, Palermo, CABA
- **Horarios:** Lun-Sáb 9:00-20:00, Dom 10:00-18:00
- **Dominio planeado:** bananaexpress.com.ar
- **Zona de cobertura:** Palermo, Villa Crespo, Colegiales, Belgrano, Recoleta, Almagro

---

## Integración Tiendanube

### Configuración (variables de entorno en .env.local)
```
TIENDANUBE_STORE_ID=tu_store_id
TIENDANUBE_ACCESS_TOKEN=tu_access_token
NEXT_PUBLIC_TIENDANUBE_STORE_URL=https://tutienda.mitiendanube.com
```

### Flujo de integración
1. `lib/tiendanube.js` consume la API de Tiendanube (v1)
2. `app/api/products/route.js` expone los productos al frontend (cache 5 min)
3. `ProductsSection.jsx` intenta cargar productos de Tiendanube; si falla, usa datos locales
4. `ProductCard.jsx` redirige al producto en Tiendanube (checkout con pasarela de pago) o a WhatsApp como fallback
5. Si Tiendanube está configurado, muestra botón "Ver tienda completa"

### Normalización de productos
Los productos de Tiendanube se normalizan a: `{ id, title, description, price, compareAtPrice, image, tiendanubeUrl, content, available }`

---

## Productos (Box) — Datos locales (fallback)

| Box | Precio | Precio referencia | Segmento | Imagen |
|---|---|---|---|---|
| Individual Esencial | $11.156 ARS | $14.500 ARS | 1-2 personas | /1.jpg |
| Box Parejas | $21.363 ARS | $27.800 ARS | 2 personas | /3.jpg |
| Box Familiar | $35.839 ARS | $46.500 ARS | 3-5 personas | /5.jpg |
| Box Personalizada | A cotizar | — | Especial | — |

---

## Arquitectura de Conversión

La landing sigue un flujo secuencial diseñado para convertir:

```
Header (fijo, WhatsApp siempre visible)
  → Hero (CTA "RECIBÍ TU BOX HOY" + proceso 3 pasos + precio desde)
    → About (confianza: fotos reales + beneficios)
      → Products (decisión: 3 Box con precio ancla + CTA Tiendanube/WhatsApp)
        → Testimonials (prueba social: 6 reseñas, +200 familias)
          → FAQ (elimina objeciones: 6 preguntas + FAQ Schema SEO)
            → Contact (cierre: dirección + mapa)
              → Footer (segunda oportunidad + CTA final)
[Botón WhatsApp flotante con tooltip — siempre visible]
```

### Puntos de conversión
1. Hero: "RECIBÍ TU BOX HOY" (primario)
2. Cada ProductCard: "Comprar ahora" (Tiendanube) o "Pedir Box por WhatsApp"
3. Header: botón WhatsApp (desktop + mobile)
4. About: CTA implícito en el bloque verde
5. FAQ: "Consultanos por WhatsApp"
6. Contact: "Escribinos por WhatsApp"
7. Footer: CTA destacado verde
8. WhatsAppButton flotante fijo con tooltip

---

## SEO Implementado

- **Title/Description** optimizados para intención local (layout.js)
- **JSON-LD LocalBusiness** con dirección, horarios, teléfono (layout.js)
- **JSON-LD FAQPage** con 6 preguntas frecuentes (FaqSection.jsx)
- **Open Graph + Twitter Card** con imagen /2.jpg (layout.js)
- **URL canónica:** https://bananaexpress.com.ar
- **Keywords:** verdulería a domicilio, frutas y verduras Palermo, delivery verduras CABA
- **lang="es"** en html

### SEO pendiente
- Sitemap.xml
- robots.txt
- Compresión de imágenes pesadas (2.jpg, 4.jpg)
- Páginas por zona ("/delivery-palermo", "/delivery-belgrano")

---

## Paleta de Colores (uso actual en Tailwind)

| Uso | Color |
|---|---|
| Primario / CTAs | green-500, green-600, green-700 |
| Acentos / Badges | yellow-300, yellow-400 |
| Texto principal | gray-800, gray-700 |
| Texto secundario | gray-500, gray-600 |
| Fondos secciones | white, gray-50, green-50 |
| Footer | gray-900, gray-950 |
| WhatsApp brand | green-500 |
| Instagram brand | gradiente purple-600 → pink-500 → orange-400 |

---

## Convenciones de Código

- **Componentes:** PascalCase, archivos .jsx en /components
- **Constantes centralizadas:** todo dato de contacto/negocio en lib/constants.js
- **Tiendanube:** toda lógica de API en lib/tiendanube.js
- **Estilos:** Tailwind CSS v4 inline (clases utilitarias), mobile-first
- **Responsive:** breakpoints sm/md/lg/xl con clases condicionales
- **WhatsApp links:** siempre via `getWhatsAppLink(mensaje)` de lib/constants.js
- **Imágenes:** next/image con fill + sizes para optimización
- **'use client'** solo en componentes con estado o efectos
- **Sin dark mode activo** (hay variables CSS pero no se usa en componentes)
- **Idioma del sitio:** Español argentino (vos, tuteo argentino)

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

---

## Roadmap de Automatización (del whitepaper)

### Fase 1 — WhatsApp Business API
- Cuenta verificada, mensajes automáticos de bienvenida
- Respuestas rápidas: horarios, zonas, precios
- Confirmación automática de pedidos

### Fase 2 — ManyChat + IA
- Flujos de onboarding, catálogo interactivo
- Pedido guiado (Box → dirección → pago)
- Respuestas con IA (OpenAI/GPT)
- Recordatorios de recompra semanales

---

## Reglas para Claude

1. **Idioma:** Siempre responder en español.
2. **Objetivo:** Cada cambio debe maximizar la conversión (Tiendanube o WhatsApp). Si no vende, no lo hagas.
3. **WhatsApp links:** Siempre usar `getWhatsAppLink()` de `lib/constants.js`. Nunca hardcodear números.
4. **Datos de negocio:** Siempre sacar de `lib/constants.js`. Un solo punto de verdad.
5. **Tiendanube:** Productos dinámicos vía API. Fallback a datos locales si no está configurado.
6. **Estilos:** Tailwind v4 con clases utilitarias. No crear archivos CSS adicionales.
7. **Mobile-first:** Todo componente debe verse bien en mobile primero.
8. **Imágenes:** Usar next/image con fill y sizes. No `<img>` directo.
9. **No dark mode:** El sitio usa fondo claro. Ignorar prefers-color-scheme en componentes.
10. **Tono del copy:** Español argentino, cercano, directo. Usar "vos" no "tú".
11. **Performance:** Las imágenes 2.jpg y 4.jpg son pesadas. Priorizar compresión.
