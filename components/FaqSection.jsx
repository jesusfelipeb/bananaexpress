'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, MapPin, Clock, CreditCard, Truck, Package, Leaf } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const faqs = [
  {
    icon: MapPin,
    question: '¿En qué zonas hacen delivery?',
    answer: 'Entregamos en Palermo y barrios aledaños: Villa Crespo, Colegiales, Belgrano, Recoleta y Almagro. ¿No estás seguro si llegamos a tu zona? Consultanos por WhatsApp.',
  },
  {
    icon: Clock,
    question: '¿Cuánto tarda en llegar el pedido?',
    answer: 'Realizamos entregas el mismo día para pedidos recibidos hasta las 15:00 hs. Pedidos posteriores se coordinan para el día siguiente.',
  },
  {
    icon: Package,
    question: '¿Puedo armar mi propia Box?',
    answer: 'Si, además de nuestras Box armadas, podés solicitar una Box personalizada con los productos que necesitás. Solo escribinos por WhatsApp y te cotizamos.',
  },
  {
    icon: CreditCard,
    question: '¿Cuáles son los métodos de pago?',
    answer: 'Aceptamos MercadoPago, transferencia bancaria y efectivo. Podés pagar online a través de nuestra tienda o coordinar el pago por WhatsApp.',
  },
  {
    icon: Truck,
    question: '¿El delivery es gratis?',
    answer: 'Sí, el envío es sin costo adicional para todas las zonas que cubrimos.',
  },
  {
    icon: Leaf,
    question: '¿Cómo sé que los productos son frescos?',
    answer: 'Seleccionamos los productos frescos del día en nuestro local de Palermo. Si algún producto no cumple tus expectativas, te lo reponemos sin problema.',
  },
];

function FaqSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <FaqSchema />
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-verde-claro font-semibold text-sm mb-2 tracking-wide uppercase">Resolvemos tus dudas</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gris-titulo mb-3">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const Icon = faq.icon;
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  openIndex === i ? 'border-verde-suave bg-verde-pastel/20' : 'border-gray-200 hover:border-verde-suave/50'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-3 p-4 text-left transition-colors duration-200"
                  aria-expanded={openIndex === i}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${openIndex === i ? 'text-verde-claro' : 'text-gris-sub'}`} />
                  <span className="font-semibold text-gris-titulo text-sm flex-1 pr-2">{faq.question}</span>
                  {openIndex === i
                    ? <ChevronUp className="w-4 h-4 text-verde-claro flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gris-sub flex-shrink-0" />
                  }
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 pb-4 pl-11 text-gris-texto text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-gris-sub text-sm mb-3">¿Tenés otra pregunta?</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-2.5 px-7 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm touch-manipulation"
          >
            <MessageCircle className="w-4 h-4" />
            Consultanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
