import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el ícono

const WhatsAppButton = () => {
  const whatsappNumber = '5491125017092'; 
  const whatsappMessage = encodeURIComponent('Hola, me gustaría hacer un pedido de una Box de Banana Express.'); 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      // CLASES CLAVE: fixed (posición fija), bottom-6 right-6 (esquina inferior derecha), z-50 (por encima de todo)
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-full shadow-2xl transition duration-300 flex items-center z-50 transform hover:scale-110"
      aria-label="Contacta a Banana Express por WhatsApp"
      title="Pedir por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;