'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const WhatsAppButton = () => {
  const whatsappLink = getWhatsAppLink('Hola, me gustaría hacer un pedido de Banana Express.');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setShowTooltip(true), 3000);
    const hide = setTimeout(() => setShowTooltip(false), 8000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5">
      {/* Tooltip */}
      <div
        className={`hidden sm:block bg-white text-gris-titulo text-sm font-semibold px-3.5 py-2 rounded-lg shadow-lg border border-gray-100 transition-all duration-500 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        Escribinos por WhatsApp
      </div>

      {/* Botón */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-whatsapp hover:bg-whatsapp-hover text-white p-3.5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 touch-manipulation whatsapp-pulse"
        aria-label="Contacta a Banana Express por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      <style jsx>{`
        @keyframes whatsapp-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
        }
        .whatsapp-pulse {
          animation: whatsapp-glow 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
