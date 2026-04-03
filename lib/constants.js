// ============================================================
// CONSTANTES GLOBALES DE BANANA EXPRESS
// Editar solo este archivo para actualizar datos de contacto
// ============================================================

export const WHATSAPP_NUMBER = '5491125017092';
export const INSTAGRAM_URL = 'https://www.instagram.com/bananaexpress.ok/';
export const EMAIL = 'contacto@bananaexpress.com.ar';

export const LOCATION = {
  address: 'Paraguay 3490, entre Guise y Coronel Díaz',
  area: 'Palermo, CABA',
  mapsUrl: 'https://maps.google.com/?q=Paraguay+3490+Palermo+CABA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3!2d-58.4057!3d-34.5858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8e0f1bf8f1%3A0x614f98fecf042a36!2sParaguay+3490%2C+Palermo%2C+Buenos+Aires!5e0!3m2!1ses!2sar!4v1712025600000',
};

export const SCHEDULE = {
  weekdays: 'Lun a Sáb: 9:00 – 20:00',
  weekends: 'Dom: 10:00 – 18:00',
};

// Genera links de WhatsApp con mensaje pre-cargado
export function getWhatsAppLink(message = 'Hola! Quiero hacer un pedido de Banana Express 🍌') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
