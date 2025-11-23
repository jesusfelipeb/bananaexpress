import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ title, description, price, content }) => {
  // Configuración de WhatsApp para esta Box específica
  const whatsappNumber = '5491125017092'; 
  const whatsappMessage = encodeURIComponent(`Hola, me gustaría pedir la Box: ${title}. ¿Cuál es el siguiente paso?`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-green-500 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      {/* Contenido destacado de la Box */}
      <div className="bg-gray-50 p-3 rounded mb-4">
        <p className="text-sm font-semibold text-gray-800">Contenido Típico:</p>
        <p className="text-sm text-gray-600">{content}</p>
      </div>

      <div className="mt-auto"> {/* Empuja el precio y el botón hacia abajo */}
        <p className="text-3xl font-extrabold text-gray-900 mb-4">{price}</p>

        {/* CTA Directo a WhatsApp */}
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02]"
        >
          <FaWhatsapp className="mr-2" />
          ¡Pedir Box por WhatsApp!
        </a>
      </div>
    </div>
  );
};

export default ProductCard;