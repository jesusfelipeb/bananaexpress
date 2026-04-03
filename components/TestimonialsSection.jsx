'use client';

import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const testimonials = [
  {
    name: 'Valentina R.',
    neighborhood: 'Palermo Soho',
    rating: 5,
    text: 'Increíble servicio! Pedí la Box Familiar el lunes y llegó al mediodía. Todo fresco y bien armado. La palta perfecta, la lechuga crocante. No vuelvo más al super.',
    emoji: '🥑',
  },
  {
    name: 'Martín G.',
    neighborhood: 'Villa Crespo',
    rating: 5,
    text: 'Súper fácil pedirle por WhatsApp. En menos de 2 minutos ya tenía mi pedido confirmado. La atención es excelente y los productos de primera calidad.',
    emoji: '🍅',
  },
  {
    name: 'Carolina M.',
    neighborhood: 'Palermo Hollywood',
    rating: 5,
    text: 'Empecé con la Box Parejas y ya no puedo parar. Llega todo el mismo día y el precio es muy conveniente. Lo recomendé a toda mi familia.',
    emoji: '🍊',
  },
  {
    name: 'Diego F.',
    neighborhood: 'Colegiales',
    rating: 5,
    text: 'La mejor decisión que tomé fue empezar a comprarles. Las verduras duran un montón más que las del super. El envío gratis es un plus enorme.',
    emoji: '🥦',
  },
  {
    name: 'Luciana B.',
    neighborhood: 'Recoleta',
    rating: 5,
    text: 'Me hicieron una box personalizada porque necesitaba productos específicos para una dieta. Se bancaron todo, sin problema. Diez puntos.',
    emoji: '🍋',
  },
  {
    name: 'Agustín T.',
    neighborhood: 'Belgrano',
    rating: 5,
    text: 'Lo que más me gustó es que todo es por WhatsApp, sin aplicaciones ni cuentas. Rápido, fresco y a domicilio. Difícil pedirle más.',
    emoji: '🍌',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const whatsappLink = getWhatsAppLink();

  return (
    <section id="testimonios" className="py-16 md:py-20 bg-green-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span>Lo que dicen nuestros clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            +200 familias ya eligieron Banana Express ❤️
          </h2>
          <p className="text-lg text-gray-500">
            Estos son algunos de nuestros clientes satisfechos en Palermo y alrededores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.neighborhood}</p>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:scale-105 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Hacé tu pedido ahora
          </a>
          <p className="text-sm text-gray-400 mt-3">Recibís tu Box hoy mismo en Palermo</p>
        </div>
      </div>
    </section>
  );
}
