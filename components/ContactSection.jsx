'use client';

import React from 'react';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_NUMBER, EMAIL, LOCATION } from '@/lib/constants';

export default function ContactSection() {
  const whatsappLink = getWhatsAppLink('Hola, quiero contactarme con Banana Express.');

  return (
    <section id="contacto" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
            Encontranos en Palermo 📍
          </h2>
          <p className="text-lg text-gray-600">
            Podés visitarnos en el local o pedí delivery directo a tu casa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Columna de Información de Contacto */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>

            {/* Dirección */}
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                <MapPin className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Visitanos en Palermo:</h4>
                <p className="text-gray-600">{LOCATION.address}</p>
                <p className="text-sm text-gray-500">{LOCATION.area}</p>
                <a
                  href={LOCATION.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:text-green-700 font-semibold mt-1 inline-block"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                <MessageCircle className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Pedidos y Consultas:</h4>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  +{WHATSAPP_NUMBER.slice(0, 2)} 9 {WHATSAPP_NUMBER.slice(2, 4)} {WHATSAPP_NUMBER.slice(4, 8)}-{WHATSAPP_NUMBER.slice(8)}
                </a>
                <p className="text-sm text-gray-500">Tap para abrir WhatsApp</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                <Mail className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Correo Electrónico:</h4>
                <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-green-600">
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Escribinos por WhatsApp
            </a>
          </div>

          {/* Mapa de Google Maps */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden min-h-[400px]">
            <iframe
              title="Ubicación Banana Express — Paraguay y Coronel Díaz, Palermo"
              src={LOCATION.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}