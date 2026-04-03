'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const WhatsAppButton = () => {
  const whatsappLink = getWhatsAppLink('Hola, me gustaría hacer un pedido de una Box de Banana Express.');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:block bg-white text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xl border border-gray-100 transition-all duration-500 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        Escribinos por WhatsApp
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white border-r border-b border-gray-100 rotate-[-45deg]"></div>
      </div>

      {/* Botón */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center transform hover:scale-110 animate-pulse-slow"
        aria-label="Contacta a Banana Express por WhatsApp"
        title="Pedir por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(34, 197, 94, 0);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
