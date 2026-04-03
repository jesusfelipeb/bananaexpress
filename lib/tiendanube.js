// ============================================================
// INTEGRACIÓN TIENDANUBE API
// Configura las variables de entorno en .env.local:
//   TIENDANUBE_STORE_ID=tu_store_id
//   TIENDANUBE_ACCESS_TOKEN=tu_access_token
//   NEXT_PUBLIC_TIENDANUBE_STORE_URL=https://tutienda.mitiendanube.com
// ============================================================

const TIENDANUBE_API_BASE = 'https://api.tiendanube.com/v1';

export function getTiendanubeConfig() {
  return {
    storeId: process.env.TIENDANUBE_STORE_ID,
    accessToken: process.env.TIENDANUBE_ACCESS_TOKEN,
    storeUrl: process.env.NEXT_PUBLIC_TIENDANUBE_STORE_URL || '',
  };
}

export function isTiendanubeConfigured() {
  const { storeId, accessToken } = getTiendanubeConfig();
  return Boolean(storeId && accessToken);
}

/**
 * Fetch genérico a la API de Tiendanube
 */
async function tiendanubeFetch(endpoint) {
  const { storeId, accessToken } = getTiendanubeConfig();

  if (!storeId || !accessToken) {
    throw new Error('Tiendanube no está configurado. Revisá las variables de entorno.');
  }

  const res = await fetch(`${TIENDANUBE_API_BASE}/${storeId}${endpoint}`, {
    headers: {
      'Authentication': `bearer ${accessToken}`,
      'User-Agent': 'BananaExpress/1.0',
      'Content-Type': 'application/json',
    },
    next: { revalidate: 300 }, // Cache 5 minutos
  });

  if (!res.ok) {
    throw new Error(`Tiendanube API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

/**
 * Obtener todos los productos publicados
 */
export async function getProducts() {
  const products = await tiendanubeFetch('/products?published=true&per_page=25');
  return products.map(normalizeProduct);
}

/**
 * Obtener un producto por ID
 */
export async function getProductById(productId) {
  const product = await tiendanubeFetch(`/products/${productId}`);
  return normalizeProduct(product);
}

/**
 * Normaliza un producto de Tiendanube al formato que usa nuestro sitio
 */
function normalizeProduct(product) {
  const variant = product.variants?.[0];
  const image = product.images?.[0];

  return {
    id: product.id,
    title: getLocalizedText(product.name),
    description: getLocalizedText(product.description)?.replace(/<[^>]*>/g, '') || '',
    price: variant?.price ? formatPrice(variant.price) : 'Consultar',
    compareAtPrice: variant?.compare_at_price ? formatPrice(variant.compare_at_price) : null,
    image: image?.src || null,
    tiendanubeUrl: getLocalizedText(product.canonical_url) || '',
    content: '', // Tiendanube no tiene este campo, se puede agregar en la descripción
    available: variant?.stock === null || (variant?.stock > 0),
  };
}

/**
 * Extrae texto localizado (Tiendanube devuelve { es: "texto" })
 */
function getLocalizedText(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field.es || field.en || Object.values(field)[0] || '';
}

/**
 * Formatea precio en formato argentino
 */
function formatPrice(price) {
  const num = parseFloat(price);
  if (isNaN(num)) return price;
  return `$${num.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} ARS`;
}
