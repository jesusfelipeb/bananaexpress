'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingBag, Truck, ArrowDown, Leaf, Clock } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export default function HeroSection() {
  const whatsappLink = getWhatsAppLink();
  const [bounceCount, setBounceCount] = useState(0);

  // Badge hace bounce 3 veces y para
  useEffect(() => {
    if (bounceCount >= 3) return;
    const timer = setTimeout(() => setBounceCount(bounceCount + 1), 1000);
    return () => clearTimeout(timer);
  }, [bounceCount]);

  return (
    <section
      id="inicio"
      className="relative text-white min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/2.jpg"
          alt="Frutas y verduras frescas Banana Express"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="container mx-auto px-4 py-8 text-center z-10 relative pt-20 sm:pt-24">

        {/* Badge de urgencia — bounce limitado */}
        <div className={`inline-flex items-center gap-2 bg-amarillo text-gris-titulo px-4 py-2 rounded-full font-bold text-xs sm:text-sm mb-5 sm:mb-6 shadow-lg ${
          bounceCount < 3 ? 'animate-bounce' : ''
        }`}>
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Pedidos hasta las 15hs se entregan HOY</span>
        </div>

        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 tracking-tight leading-tight px-2">
          <span className="block">Frutas y Verduras Frescas</span>
          <span className="block text-amarillo mt-1 sm:mt-2">Directo a tu Casa</span>
        </h1>

        {/* Propuesta de valor con precio */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 max-w-2xl mx-auto text-amarillo-suave">
          Box armadas desde $11.156 con envio gratis
        </p>

        <p className="text-sm sm:text-base md:text-lg font-light mb-8 sm:mb-10 max-w-xl mx-auto text-white/85 leading-relaxed">
          Elegí tu Box, comprá online o escribinos y recibilo hoy mismo en Palermo.
        </p>

        {/* Proceso 3 pasos */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-7 mb-8 sm:mb-10 max-w-3xl mx-auto border border-white/20">
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
            {[
              { step: '1', title: 'Elegí tu Box', sub: 'Mirá las opciones' },
              { step: '2', title: 'Comprá o escribinos', sub: 'Online o WhatsApp' },
              { step: '3', title: 'Recibilo HOY', sub: 'Mismo día en Palermo' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-amarillo text-gris-titulo rounded-full flex items-center justify-center text-lg sm:text-2xl font-black mb-2 sm:mb-3 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-sm sm:text-base mb-0.5">{item.title}</h3>
                <p className="text-[11px] sm:text-xs text-white/70">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center bg-whatsapp hover:bg-whatsapp-hover text-white text-base sm:text-lg font-black py-4 px-8 sm:px-10 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
            >
              <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              PEDIR POR WHATSAPP
            </a>

            <a
              href="#productos"
              className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-gris-titulo text-white text-sm sm:text-base font-bold py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
            >
              <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              Ver nuestras Box
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Features — prueba social + beneficios */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
          {[
            { Icon: Leaf, text: '100% Frescos' },
            { Icon: Truck, text: 'Envio gratis' },
            { Icon: ShoppingBag, text: '+200 familias' },
          ].map((f) => (
            <div key={f.text} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
              <f.Icon className="w-3.5 h-3.5 text-amarillo flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — solo desktop */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block pointer-events-none">
        <ArrowDown className="w-5 h-5 text-white/50" />
      </div>
    </section>
  );
}
