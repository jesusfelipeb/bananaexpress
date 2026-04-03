'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const faqs = [
  {
    question: '¿En qué zonas hacen delivery?',
    answer: 'Entregamos en Palermo y barrios aledaños: Villa Crespo, Colegiales, Belgrano, Recoleta y Almagro. ¿No estás seguro si llegamos a tu zona? ¡Consultanos por WhatsApp!',
  },
  {
    question: '¿Cuánto tarda en llegar el pedido?',
    answer: 'Realizamos entregas el mismo día para pedidos recibidos hasta las 15:00 hs. Pedidos posteriores se coordinan para el día siguiente. El horario exacto de entrega lo coordinamos por WhatsApp.',
  },
  {
    question: '¿Puedo armar mi propia Box con lo que yo quiera?',
    answer: '¡Por supuesto! Además de nuestras Box armadas, podés solicitar una Box personalizada con los productos que necesitás. Solo escribinos por WhatsApp y te cotizamos.',
  },
  {
    question: '¿Cuáles son los métodos de pago aceptados?',
    answer: 'Aceptamos efectivo, transferencia bancaria y Mercado Pago. Podés pagar online a través de nuestra tienda o coordinar el pago por WhatsApp.',
  },
  {
    question: '¿El delivery es gratis?',
    answer: 'Sí, el envío es sin costo adicional para todas las zonas que cubrimos.',
  },
  {
    question: '¿Cómo sé que los productos son frescos?',
    answer: 'Seleccionamos los productos frescos del día en nuestro local de Palermo. Si algún producto no cumple tus expectativas, te lo reponemos sin problema, tu satisfacción es nuestra prioridad.',
  },
];

// JSON-LD FAQPage Schema para SEO
function FaqSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const whatsappLink = getWhatsAppLink('Hola, tengo una consulta sobre Banana Express.');

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <FaqSchema />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-500">
            Resolvemos tus dudas para que pidas con confianza
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors duration-200"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-green-50 transition-colors duration-200"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                }
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">¿Tenés otra pregunta?</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Consultanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
