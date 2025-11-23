'use client';

import React from 'react';
import { Instagram, MessageCircle, ShoppingBag, Truck, Leaf, ArrowDown, Sparkles } from 'lucide-react';

// Componente para los íconos de redes sociales
const SocialButton = ({ Icon, href, label, platform }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`group relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
      platform === 'instagram' 
        ? 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:shadow-lg hover:shadow-pink-500/50' 
        : 'bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/50'
    }`}
    aria-label={label}
  >
    <Icon className="w-6 h-6 text-white" />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </a>
);

// Componente para las características destacadas
const Feature = ({ Icon, text }) => (
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
    <Icon className="w-5 h-5 text-yellow-300" />
    <span className="text-sm md:text-base font-medium">{text}</span>
  </div>
);

export default function HeroSection() {
  const whatsappNumber = '5491127017092'; 
  const whatsappMessage = encodeURIComponent('Hola! Quiero hacer un pedido de Banana Express 🍌');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section 
      id="inicio" 
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/4.jpg")',
        }}
      ></div>
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-green-900 opacity-40"></div>
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-9xl">🍎</div>
        <div className="absolute top-40 right-20 text-8xl">🥕</div>
        <div className="absolute bottom-20 left-20 text-7xl">🍊</div>
        <div className="absolute bottom-40 right-10 text-9xl">🍌</div>
        <div className="absolute top-1/2 left-1/3 text-6xl">🥬</div>
        <div className="absolute top-1/3 right-1/4 text-7xl">🍅</div>
      </div>

      {/* Efecto de ondas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 text-center z-10">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm md:text-base mb-6 shadow-lg animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>Entrega HOY • Palermo y alrededores</span>
        </div>

        {/* Título Principal con animación de entrada */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-tight animate-fade-in">
          <span className="block">Frutas y Verduras Frescas</span>
          <span className="block text-yellow-300 mt-2">Directo a tu Casa 🏠</span>
        </h1>
        
        {/* Propuesta de valor clara y directa */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 max-w-3xl mx-auto leading-relaxed px-4 text-yellow-300">
          Comprá en 2 minutos por WhatsApp
        </p>
        
        <p className="text-base sm:text-lg md:text-xl font-light mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 text-white/90">
          Sin app, sin registros. Solo elegí tu box, escribinos y lo recibís el mismo día.
        </p>

        {/* CTA SUPER CLARO - Proceso en 3 pasos */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-10 md:mb-12 max-w-4xl mx-auto border-2 border-white/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">¿Cómo funciona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Paso 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 text-green-900 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-4 shadow-xl">
                1
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2">Elegí tu Box</h3>
              <p className="text-sm md:text-base text-white/80">Mirá las opciones más abajo</p>
            </div>

            {/* Paso 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 text-green-900 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-4 shadow-xl">
                2
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2">Escribinos</h3>
              <p className="text-sm md:text-base text-white/80">Por WhatsApp, rápido y fácil</p>
            </div>

            {/* Paso 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 text-green-900 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-4 shadow-xl">
                3
              </div>
              <h3 className="font-bold text-lg md:text-xl mb-2">Recibilo HOY</h3>
              <p className="text-sm md:text-base text-white/80">Entrega el mismo día</p>
            </div>
          </div>

          {/* Botones CTA MEGA CLAROS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5">
            
            {/* Botón primario GIGANTE de WhatsApp */}
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-xl md:text-2xl font-black py-5 md:py-6 px-10 md:px-14 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
            >
              <MessageCircle className="mr-3 h-7 w-7 md:h-8 md:w-8" />
              <span>¡PEDIR POR WHATSAPP!</span>
            </a>
            
            {/* Botón secundario para ver boxes */}
            <a 
              href="#productos" 
              className="w-full sm:w-auto group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white text-white hover:text-green-700 text-lg md:text-xl font-bold py-5 md:py-6 px-8 md:px-12 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-6 w-6 md:h-7 md:w-7" />
              <span>Ver Box Disponibles</span>
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </a>
          </div>
        </div>

        {/* Features destacadas */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12 px-4">
          <Feature Icon={Leaf} text="100% Frescos" />
          <Feature Icon={Truck} text="Entrega Gratis" />
          <Feature Icon={ShoppingBag} text="Sin Mínimo" />
        </div>

        {/* Sección de redes sociales mejorada */}
        <div className="pt-8 md:pt-10 border-t border-white/20 inline-block px-4">
          <p className="text-base md:text-lg font-semibold mb-4 text-white/90">Seguinos en redes:</p>
          <div className="flex justify-center gap-4 md:gap-6">
            <SocialButton 
              Icon={Instagram}
              href="https://instagram.com/bananaexpress" 
              label="@bananaexpress"
              platform="instagram"
            />
            <SocialButton 
              Icon={MessageCircle}
              href={whatsappLink} 
              label="Chat directo"
              platform="whatsapp"
            />
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-xs mb-2 font-medium">Scrolleá para ver las Box</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
        
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </section>
  );
}