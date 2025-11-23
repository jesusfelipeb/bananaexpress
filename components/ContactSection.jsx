import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const whatsappNumber = '5491125017092'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola, quiero contactarme con Banana Express.`;

  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Contáctanos y Encuéntranos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Columna de Información de Contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Información Directa</h3>
            
            <div className="space-y-6">
              
              {/* Dirección Física */}
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-green-500 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-gray-700">Visítanos en Palermo:</h4>
                  <p className="text-gray-600">
                    Calle Paraguay (entre Coronel Díaz y Guise)
                  </p>
                  <p className="text-sm text-gray-500">
                    ¡Te esperamos en nuestro local físico!
                  </p>
                </div>
              </div>

              {/* Email de Contacto */}
              <div className="flex items-start">
                <FaEnvelope className="text-green-500 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-gray-700">Correo Electrónico:</h4>
                  <p className="text-gray-600">contacto@bananaexpress.com.ar</p>
                </div>
              </div>

              {/* WhatsApp Principal */}
              <div className="flex items-start">
                <FaWhatsapp className="text-green-500 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg text-gray-700">Pedidos y Consultas:</h4>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    +54 9 11 6789-1234 (Haz click para chatear)
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Columna de Mapa (Placeholder) */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex items-center justify-center h-full min-h-[300px]">
            <span className="text-lg text-gray-500">
              [Espacio para mapa de Google Maps o imagen de ubicación en Palermo]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}