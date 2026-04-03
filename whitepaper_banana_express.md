# 🍌 Banana Express — Whitepaper de Producto
**Versión 1.0 — Abril 2026**

---

## Resumen Ejecutivo

Banana Express es un emprendimiento de venta minorista de frutas y verduras frescas con modelo de **combos armados (Box) y delivery el mismo día**, operando en Palermo, CABA. Su propuesta central es eliminar la fricción de la compra semanal de verdulería: sin apps, sin registros, sin demoras — el cliente elige, escribe por WhatsApp y recibe en su casa el mismo día.

El sitio web actúa como el **principal canal de conversión**, transformando visitantes en compradores directos a través de WhatsApp. Este documento describe la arquitectura técnica del proyecto, los objetivos de negocio, y el roadmap de automatización e inteligencia artificial planificado.

---

## 1. El Problema que Resolvemos

Las verdulerías tradicionales presentan barreras que alejan al consumidor urbano moderno:

| Problema | Impacto en el cliente |
|---|---|
| Debo salir a comprar | Pérdida de tiempo, especialmente en lluvia o en días de trabajo |
| Difícil saber qué comprar | No sabe las cantidades, olvida productos |
| Super tiene mala calidad | Frutas y verduras de varios días |
| Las apps de delivery son caras | Comisiones encarecen el precio final |

Banana Express resuelve todo esto con **una sola acción: mandar un WhatsApp**.

---

## 2. Propuesta de Valor

```
Frutas y verduras frescas → armadas en Box → a domicilio → el mismo día → por WhatsApp
```

**Para el cliente:**
- Compra lista en 2 minutos
- Sin downloads, sin registro, sin cuenta
- Precio de verdulería de barrio, no de super ni de app
- Entrega el mismo día en Palermo y alrededores

**Para el negocio:**
- Canal de venta de bajo costo operativo
- Relación directa con el cliente (sin intermediarios)
- Datos propios de preferencias y frecuencia de compra
- Escalabilidad sin fricción (más Box = más empleados, misma plataforma)

---

## 3. Modelo de Negocio

### 3.1 Productos

| Box | Precio | Segmento |
|---|---|---|
| Individual Esencial | $11.156 ARS | 1-2 personas, semana básica |
| Box Parejas | $21.363 ARS | 2 personas, variedad media |
| Box Familiar | $35.839 ARS | 3-5 personas, semana completa |
| Box Personalizada | A cotizar | Pedidos especiales o dietas específicas |

### 3.2 Flujo de Conversión

```mermaid
flowchart LR
    A[👁️ Visita el sitio] --> B[Ve las Box]
    B --> C[Toca el botón WhatsApp]
    C --> D[Chat pre-cargado abre]
    D --> E[Confirma pedido]
    E --> F[🚚 Delivery mismo día]
```

### 3.3 Zona de Cobertura
Palermo CABA y barrios aledaños: Villa Crespo, Colegiales, Belgrano, Recoleta, Almagro.

---

## 4. Stack Tecnológico

### 4.1 Sitio Web (Actual)

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Estilos | Tailwind CSS v4 |
| Iconografía | Lucide React |
| Fuentes | Geist Sans / Geist Mono (Google Fonts) |
| Imágenes | next/image (optimización automática) |
| Hosting | (pendiente deploy — recomendado Vercel) |

### 4.2 Configuración

- **Número único de WhatsApp:** centralizado en [lib/constants.js](file:///home/felipe/Documentos/banana-express/lib/constants.js), un solo punto de edición para toda la app
- **Metadata SEO:** Open Graph, Twitter Card, JSON-LD LocalBusiness, canonical URL
- **Responsive:** mobile-first en todos los componentes

---

## 5. Arquitectura del Sitio Web

La landing page está diseñada con una arquitectura de **conversión secuencial**, donde cada sección empuja al usuario hacia la siguiente acción:

```
┌─────────────────────────────────────────────────────┐
│ HEADER (fijo, scroll-aware, botón WhatsApp siempre) │
├─────────────────────────────────────────────────────┤
│ HERO  → CTA Gigante WhatsApp + proceso 3 pasos      │  ← Captura atención
├─────────────────────────────────────────────────────┤
│ ABOUT → Carrusel de fotos + beneficios              │  ← Genera confianza
├─────────────────────────────────────────────────────┤
│ PRODUCTS → 3 Box cards con foto + precio + CTA      │  ← Decisión de compra
├─────────────────────────────────────────────────────┤
│ TESTIMONIALS → 6 reseñas reales + 200 familias      │  ← Prueba social
├─────────────────────────────────────────────────────┤
│ FAQ → 6 preguntas clave + CTA WhatsApp              │  ← Elimina fricción
├─────────────────────────────────────────────────────┤
│ CONTACT → Info + Google Maps embed                  │  ← Cierra con ubicación
├─────────────────────────────────────────────────────┤
│ FOOTER → Links + CTA final + redes sociales         │  ← Segunda oportunidad
└─────────────────────────────────────────────────────┘
         [Botón WhatsApp flotante — siempre visible]
```

---

## 6. Objetivos de Conversión

El sitio tiene **un solo objetivo primario:** que el usuario abra un chat de WhatsApp con el negocio.

### 6.1 Puntos de Conversión Identificados

1. Botón "¡PEDIR POR WHATSAPP!" en el Hero (primario)
2. Botón "Pedir Box por WhatsApp" en cada ProductCard
3. Botón WhatsApp en Header (desktop y mobile)
4. Botón en la sección About
5. CTA al final de FAQ
6. CTA en ContactSection
7. CTA en Footer
8. **Botón flotante fijo** en toda la página

Cada botón lleva un **mensaje pre-cargado** contextual (ej: "Hola, me gustaría pedir la Box Familiar") para reducir fricción al máximo.

---

## 7. Roadmap de Automatización e IA

### 7.1 Respuestas Automáticas en WhatsApp

> **Objetivo:** que el 80% de las preguntas frecuentes sean respondidas de forma instantánea y automática, sin intervención humana, las 24hs.

**Fase de implementación:**

1. **WhatsApp Business API** — activar cuenta verificada con número dedicado
2. **Mensajes automáticos de bienvenida** — respuesta inmediata al primer contacto del día
3. **Flujos de respuesta rápida:**
   - Horarios → respuesta automática
   - Zonas de entrega → respuesta automática con mapa
   - Precios → respuesta con link al catálogo (sitio web)
   - "Quiero pedir" → derivación al flujo de pedido
4. **Mensaje de ausencia** — fuera del horario de atención, informa horario de reapertura
5. **Confirmación de pedido** — mensaje automático al recibir un pedido confirmado

**Stack técnico sugerido para esta fase:**
- WhatsApp Business API (Meta)
- Webhook propio (Next.js API Route) o plataforma no-code

---

### 7.2 Integración con ManyChat + IA

> **Objetivo:** construir un sistema de atención y ventas conversacional que opere de forma autónoma, aprenda de las interacciones y aumente la tasa de conversión sin aumentar la carga operativa del equipo.

#### Arquitectura de la Integración

```
┌──────────────┐     ┌──────────────────┐     ┌───────────────────┐
│   Cliente    │────▶│  WhatsApp Biz API │────▶│   ManyChat Flow   │
│  WhatsApp   │     │  (Meta Platform)  │     │  (Automatización) │
└──────────────┘     └──────────────────┘     └─────────┬─────────┘
                                                         │
                           ┌─────────────────────────────┼────────────────┐
                           ▼                             ▼                ▼
                  ┌────────────────┐         ┌────────────────┐  ┌───────────────┐
                  │  OpenAI / GPT  │         │   Google Sheet │  │  Notificación │
                  │  (respuestas   │         │  (base pedidos)│  │  al vendedor  │
                  │   inteligentes)│         └────────────────┘  └───────────────┘
                  └────────────────┘
```

#### Funcionalidades Planificadas

| Funcionalidad | Herramienta | Estado |
|---|---|---|
| Flujos de onboarding de nuevos clientes | ManyChat | Planificado |
| Catálogo de Box interactivo en WhatsApp | ManyChat + Catálogo Meta | Planificado |
| Respuesta a consultas de precios/horarios con IA | ManyChat + OpenAI | Planificado |
| Recolección del pedido guiada (qué Box, dirección, pago) | ManyChat Flow | Planificado |
| Registro del pedido en hoja de cálculo | ManyChat + Zapier/Make | Planificado |
| Recordatorio de renovación semanal | ManyChat Broadcast | Planificado |
| Encuesta de satisfacción post-entrega | ManyChat | Planificado |
| Análisis de conversaciones para insights | IA + Analytics | Planificado |

#### Casos de Uso Clave con IA

**Caso 1 — Consulta libre:**
```
Cliente: "Che, qué tienen de verduras esta semana?"
IA:      "¡Hola! Esta semana tenemos lechugas hermosas, tomates de primera,
          paltas perfectas y mucho más. ¿Ves nuestras Box en el sitio?
          [enlace] ¿O querés que te recomiende una según cuántas personas
          son en casa?"
```

**Caso 2 — Pedido guiado:**
```
IA: "¡Genial que quieras pedir! ¿Cuántas personas son en casa?"
Cliente: "Somos 3"
IA: "Te recomiendo la Box Familiar ($35.839). Incluye 2 lechugas, tomates,
     paltas, huevos, bananas y más. ¿Te la enviamos? ¿Cuál es tu dirección?"
```

**Caso 3 — Reactivación:**
```
(7 días sin pedido)
ManyChat: "Hola Valentina! 🥦 Hace una semana que no te vemos.
           Esta semana tenemos paltas increíbles. ¿Renovamos tu Box?"
```

#### Beneficios Proyectados

| Métrica | Antes (manual) | Después (ManyChat + IA) |
|---|---|---|
| Tiempo de respuesta | 5-30 minutos | < 30 segundos |
| Disponibilidad | Horario comercial | 24/7 |
| Capacidad de atención simultánea | 1-2 chats | Ilimitada |
| Tasa de conversión estimada | — | +25-40% proyectado |
| Recompras automatizadas | 0 | Recordatorios semanales |
| Costo operativo de atención | Alto (tiempo humano) | Bajo |

---

## 8. Métricas y KPIs

### 8.1 KPIs del Sitio Web
- **CTR a WhatsApp:** % de visitantes que tocan un botón de WhatsApp
- **Bounce rate:** % de visitas que se van sin interactuar
- **Tiempo en página:** indicador de engagement con el contenido
- **Fuente de tráfico:** orgánico, Instagram, WhatsApp compartido

### 8.2 KPIs del Negocio
- **Pedidos por semana**
- **Ticket promedio** (Box Individual vs Familiar vs Personalizado)
- **Tasa de recompra** (clientes que vuelven en 7 días)
- **Zonas más activas** (para expansión de cobertura)
- **Tiempo de conversión** (desde primer mensaje hasta pedido confirmado)

### 8.3 Herramientas de Medición Recomendadas
- **Vercel Analytics** — tráfico y clics en el sitio
- **ManyChat Analytics** — conversiones en WhatsApp
- **Google Search Console** — rendimiento SEO
- **Google My Business** — reseñas y visibilidad local

---

## 9. SEO y Estrategia de Tráfico

### 9.1 Posicionamiento Orgánico
Palabras clave objetivo:
- "verdulería a domicilio Palermo"
- "box de verduras CABA"
- "frutas y verduras delivery Buenos Aires"
- "delivery verdulería Palermo Hollywood"

### 9.2 Contenido Implementado para SEO
- Title y description optimizados para intención local
- JSON-LD `LocalBusiness` con horarios, dirección y teléfono
- Open Graph para compartir en redes sociales
- FAQ schema (próximo)
- Imágenes con alt text descriptivo
- URL canónica declarada

### 9.3 Estrategia Complementaria
- **Instagram (@bananaexpress.ok):** contenido visual de productos, fotos del local, stories de pedidos
- **Stories con link al sitio:** tráfico directo desde Instagram
- **Google My Business:** reseñas de clientes → ranking local

---

## 10. Estado Actual y Próximos Pasos

### Lo que está construido ✅
- Landing page completa con 8 secciones (Hero, About, Products, Testimonials, FAQ, Contact, Footer)
- WhatsApp Flow integrado en todos los CTAs con número unificado
- Metadata SEO completa (OG, Twitter, JSON-LD, canonical)
- Responsive mobile-first
- Google Maps embed
- Sección de testimonios y FAQ operativas

### Próximos pasos inmediatos 🚀

| Prioridad | Acción |
|---|---|
| 🔴 Alta | Deploy en producción (Vercel) con dominio `bananaexpress.com.ar` |
| 🔴 Alta | Activar WhatsApp Business API y configurar respuestas automáticas básicas |
| 🟡 Media | Integrar ManyChat con flujos de catálogo y onboarding |
| 🟡 Media | Conectar IA (GPT) para respuestas libres en WhatsApp |
| 🟢 Normal | Instalar Vercel Analytics + Google Search Console |
| 🟢 Normal | Google My Business verificado con fotos del local |
| 🟢 Normal | Compresión de imágenes pesadas ([public/2.jpg](file:///home/felipe/Documentos/banana-express/public/2.jpg), [public/4.jpg](file:///home/felipe/Documentos/banana-express/public/4.jpg)) |

---

## 11. Conclusión

Banana Express tiene todos los elementos de un emprendimiento con alto potencial de crecimiento digital:

- **Producto diferenciado** (combos armados, no el modelo clásico de verdulería)
- **Canal de venta de bajo costo** (WhatsApp, sin comisiones de app)
- **Sitio optimizado para conversión** (cada sección lleva al usuario al WhatsApp)
- **Roadmap de automatización claro** (ManyChat + IA para escalar sin aumentar costos operativos)

La combinación de un sitio web bien estructurado + WhatsApp automatizado con IA posiciona a Banana Express para competir efectivamente contra las grandes apps de delivery, con la ventaja del trato cercano y la agilidad de un emprendimiento local.

---

*Documento preparado por el equipo de desarrollo de Banana Express — Abril 2026*

*Stack: Next.js 16 · React 19 · Tailwind CSS v4 · WhatsApp Business API (roadmap) · ManyChat (roadmap)*
