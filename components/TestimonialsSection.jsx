'use client';

import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const testimonials = [
  {
    name: 'Valentina R.',
    neighborhood: 'Palermo Soho',
    rating: 5,
    text: 'Increíble servicio. Pedí la Box Familiar el lunes y llegó al mediodía. Todo fresco y bien armado. La palta perfecta, la lechuga crocante. No vuelvo más al super.',
    initials: 'VR',
    color: 'bg-verde-claro',
  },
  {
    name: 'Martín G.',
    neighborhood: 'Villa Crespo',
    rating: 5,
    text: 'Súper fácil pedirle por WhatsApp. En menos de 2 minutos ya tenía mi pedido confirmado. La atención es excelente y los productos de primera calidad.',
    initials: 'MG',
    color: 'bg-amarillo',
  },
  {
    name: 'Carolina M.',
    neighborhood: 'Palermo Hollywood',
    rating: 5,
    text: 'Empecé con la Box Parejas y ya no puedo parar. Llega todo el mismo día y el precio es muy conveniente. Lo recomendé a toda mi familia.',
    initials: 'CM',
    color: 'bg-verde-suave',
  },
  {
    name: 'Diego F.',
    neighborhood: 'Colegiales',
    rating: 4,
    text: 'Las verduras duran un montón más que las del super. El envío gratis es un plus enorme. Solo una vez me llegó una palta medio verde, pero la repusieron al toque.',
    initials: 'DF',
    color: 'bg-naranja/70',
  },
  {
    name: 'Luciana B.',
    neighborhood: 'Recoleta',
    rating: 5,
    text: 'Me hicieron una box personalizada porque necesitaba productos específicos para una dieta. Se bancaron todo, sin problema. Diez puntos.',
    initials: 'LB',
    color: 'bg-verde-claro',
  },
  {
    name: 'Agustín T.',
    neighborhood: 'Belgrano',
    rating: 5,
    text: 'Lo que más me gustó es que todo es por WhatsApp, sin aplicaciones ni cuentas. Rápido, fresco y a domicilio. Difícil pedirle más.',
    initials: 'AT',
    color: 'bg-amarillo',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < count ? 'text-amarillo fill-amarillo' : 'text-gray-200 fill-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const whatsappLink = getWhatsAppLink();

  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-verde-pastel/30">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Counter + título */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-verde-hoja px-4 py-2 rounded-full font-semibold text-sm mb-4 shadow-sm border border-verde-suave/30">
            <Star className="w-4 h-4 fill-amarillo text-amarillo" />
            <span>4.9 promedio en +200 pedidos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gris-titulo mb-3">
            +200 familias ya nos eligen
          </h2>
          <p className="text-base text-gris-sub">
            Clientes reales de Palermo y alrededores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm border border-verde-pastel/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${t.color} rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gris-titulo text-sm">{t.name}</p>
                    <p className="text-xs text-gris-sub">{t.neighborhood}</p>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
              <p className="text-gris-texto text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base touch-manipulation"
          >
            <MessageCircle className="w-5 h-5" />
            Hacé tu pedido ahora
          </a>
          <p className="text-xs text-gris-sub mt-3">Recibís tu Box hoy mismo en Palermo</p>
        </div>
      </div>
    </section>
  );
}
