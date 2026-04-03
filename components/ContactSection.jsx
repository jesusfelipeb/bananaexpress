'use client';

import React from 'react';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_NUMBER, EMAIL, LOCATION, SCHEDULE } from '@/lib/constants';

export default function ContactSection() {
  const whatsappLink = getWhatsAppLink('Hola, quiero contactarme con Banana Express.');

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-crema">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-verde-claro font-semibold text-sm mb-2 tracking-wide uppercase">Encontranos</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gris-titulo mb-3">
            Visitanos en Palermo
          </h2>
          <p className="text-base text-gris-sub">
            Podés venir al local o pedí delivery directo a tu casa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info de contacto */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-verde-pastel/30 space-y-5">
            {/* Dirección */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-verde-pastel rounded-lg flex-shrink-0">
                <MapPin className="text-verde-hoja w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gris-titulo text-sm">Dirección</h4>
                <p className="text-gris-texto text-sm">{LOCATION.address}</p>
                <p className="text-xs text-gris-sub">{LOCATION.area}</p>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-verde-pastel rounded-lg flex-shrink-0">
                <Clock className="text-verde-hoja w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gris-titulo text-sm">Horarios</h4>
                <p className="text-gris-texto text-sm">{SCHEDULE.weekdays}</p>
                <p className="text-gris-texto text-sm">{SCHEDULE.weekends}</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-verde-pastel rounded-lg flex-shrink-0">
                <MessageCircle className="text-verde-hoja w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gris-titulo text-sm">WhatsApp</h4>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-verde-medio hover:text-verde-hoja font-semibold text-sm"
                >
                  +{WHATSAPP_NUMBER.slice(0, 2)} 9 {WHATSAPP_NUMBER.slice(2, 4)} {WHATSAPP_NUMBER.slice(4, 8)}-{WHATSAPP_NUMBER.slice(8)}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-verde-pastel rounded-lg flex-shrink-0">
                <Mail className="text-verde-hoja w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gris-titulo text-sm">Email</h4>
                <a href={`mailto:${EMAIL}`} className="text-gris-texto hover:text-verde-medio text-sm">
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-3 px-5 rounded-xl transition-all duration-300 shadow-md text-sm touch-manipulation"
            >
              <MessageCircle className="w-4 h-4" />
              Escribinos por WhatsApp
            </a>
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-2xl shadow-sm border border-verde-pastel/30 overflow-hidden min-h-[350px]">
            <iframe
              title="Ubicación Banana Express — Paraguay 3490, Palermo"
              src={LOCATION.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
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
