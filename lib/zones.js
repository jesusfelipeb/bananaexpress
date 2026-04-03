// ============================================================
// DATOS DE ZONAS DE COBERTURA
// Cada zona tiene su contenido único para SEO y conversión
// ============================================================

export const ZONES = {
  palermo: {
    slug: 'delivery-palermo',
    name: 'Palermo',
    fullName: 'Palermo, CABA',
    title: 'Delivery de Frutas y Verduras en Palermo',
    metaDescription: 'Frutas y verduras frescas a domicilio en Palermo. Box armadas con envío gratis y entrega el mismo día. Pedí por WhatsApp o comprá online.',
    heroText: 'Somos tu verdulería de barrio en Palermo. Estamos en Paraguay 3490, entre Guise y Coronel Díaz, y llevamos Box de frescura a tu puerta todos los días.',
    landmarks: 'Plaza Italia, Jardín Botánico, Plaza Serrano, Parque Las Heras',
    subZones: 'Palermo Soho, Palermo Hollywood, Palermo Chico, Palermo Viejo',
    deliveryTime: 'En Palermo entregamos en menos de 2 horas desde que confirmás tu pedido.',
    testimonial: {
      name: 'Valentina R.',
      neighborhood: 'Palermo Soho',
      text: 'Increíble servicio. Pedí la Box Familiar el lunes y llegó al mediodía. Todo fresco y bien armado. No vuelvo más al super.',
      initials: 'VR',
    },
    mapCenter: '-34.5858,-58.4057',
  },
  belgrano: {
    slug: 'delivery-belgrano',
    name: 'Belgrano',
    fullName: 'Belgrano, CABA',
    title: 'Delivery de Frutas y Verduras en Belgrano',
    metaDescription: 'Delivery de verduras y frutas frescas en Belgrano. Box armadas desde $11.156 con envío gratis. Entrega el mismo día. Sin app, sin registros.',
    heroText: 'Llevamos frutas y verduras frescas hasta Belgrano todos los días. Desde nuestro local en Palermo, tu Box llega el mismo día con envío gratis.',
    landmarks: 'Barrio Chino, Plaza Belgrano, Barrancas de Belgrano, Av. Cabildo',
    subZones: 'Belgrano C, Belgrano R, Bajo Belgrano',
    deliveryTime: 'Pedidos antes de las 15hs llegan el mismo día a Belgrano.',
    testimonial: {
      name: 'Agustín T.',
      neighborhood: 'Belgrano',
      text: 'Todo es por WhatsApp, sin aplicaciones ni cuentas. Rápido, fresco y a domicilio. Difícil pedirle más.',
      initials: 'AT',
    },
    mapCenter: '-34.5627,-58.4562',
  },
  recoleta: {
    slug: 'delivery-recoleta',
    name: 'Recoleta',
    fullName: 'Recoleta, CABA',
    title: 'Delivery de Frutas y Verduras en Recoleta',
    metaDescription: 'Verdulería a domicilio en Recoleta. Box de frutas y verduras frescas con envío gratis y entrega el mismo día. Pedí por WhatsApp.',
    heroText: 'Recoleta está a minutos de nuestro local. Recibí tu Box de frescura el mismo día, con productos seleccionados a mano cada mañana.',
    landmarks: 'Cementerio de Recoleta, Plaza Francia, Av. Alvear, Facultad de Derecho',
    subZones: 'Recoleta, Barrio Norte',
    deliveryTime: 'Entregamos en Recoleta el mismo día para pedidos hasta las 15hs.',
    testimonial: {
      name: 'Luciana B.',
      neighborhood: 'Recoleta',
      text: 'Me hicieron una box personalizada para una dieta específica. Se bancaron todo, sin problema. Diez puntos.',
      initials: 'LB',
    },
    mapCenter: '-34.5875,-58.3935',
  },
  'villa-crespo': {
    slug: 'delivery-villa-crespo',
    name: 'Villa Crespo',
    fullName: 'Villa Crespo, CABA',
    title: 'Delivery de Frutas y Verduras en Villa Crespo',
    metaDescription: 'Frutas y verduras frescas a domicilio en Villa Crespo. Box armadas con envío gratis. Entrega el mismo día desde Palermo.',
    heroText: 'Villa Crespo es uno de nuestros barrios favoritos. Estamos muy cerca y tu Box llega rapidísimo, siempre con productos del día.',
    landmarks: 'Av. Corrientes, Av. Scalabrini Ortiz, Parque Centenario, Outlet de Villa Crespo',
    subZones: 'Villa Crespo',
    deliveryTime: 'Por la cercanía con nuestro local, los pedidos en Villa Crespo llegan en menos de 1 hora.',
    testimonial: {
      name: 'Martín G.',
      neighborhood: 'Villa Crespo',
      text: 'Súper fácil pedirle por WhatsApp. En menos de 2 minutos ya tenía mi pedido confirmado. La atención es excelente.',
      initials: 'MG',
    },
    mapCenter: '-34.5988,-58.4380',
  },
  colegiales: {
    slug: 'delivery-colegiales',
    name: 'Colegiales',
    fullName: 'Colegiales, CABA',
    title: 'Delivery de Frutas y Verduras en Colegiales',
    metaDescription: 'Delivery de verdulería en Colegiales. Box de frutas y verduras frescas con envío gratis y entrega el mismo día. Sin app, directo por WhatsApp.',
    heroText: 'Colegiales también está en nuestra zona de cobertura. Recibí productos frescos del día con envío gratis, directo desde nuestro local en Palermo.',
    landmarks: 'Av. Álvarez Thomas, Estación Colegiales, Plaza Mafalda',
    subZones: 'Colegiales',
    deliveryTime: 'Entregamos en Colegiales el mismo día para pedidos confirmados antes de las 15hs.',
    testimonial: {
      name: 'Diego F.',
      neighborhood: 'Colegiales',
      text: 'Las verduras duran un montón más que las del super. El envío gratis es un plus enorme.',
      initials: 'DF',
    },
    mapCenter: '-34.5742,-58.4492',
  },
};

export function getZoneBySlug(slug) {
  const key = slug.replace('delivery-', '');
  return ZONES[key] || null;
}

export function getAllZoneSlugs() {
  return Object.values(ZONES).map((z) => z.slug);
}
