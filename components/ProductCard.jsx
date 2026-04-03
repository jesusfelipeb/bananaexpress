import React from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingCart, Truck } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const ProductCard = ({ title, description, price, compareAtPrice, content, image, tiendanubeUrl }) => {
  const whatsappLink = getWhatsAppLink(`Hola, me gustaría pedir la Box: ${title}. ¿Cuál es el siguiente paso?`);
  const buyUrl = tiendanubeUrl || whatsappLink;
  const isExternal = Boolean(tiendanubeUrl);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col h-full overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative group">
      {/* Badge envío gratis */}
      <div className="absolute top-3 left-3 z-10 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
        <Truck className="w-3 h-3" />
        Envío gratis
      </div>

      {/* Imagen de la Box */}
      {image && (
        <div className="relative h-52 w-full flex-shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={`Box de ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="border-l-4 border-green-500 pl-3 mb-3">
          <h3 className="text-xl font-bold text-green-700">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

        {/* Contenido destacado de la Box */}
        {content && (
          <div className="bg-green-50 p-3 rounded-xl mb-4 border border-green-100">
            <p className="text-xs font-semibold text-green-800 mb-1 uppercase tracking-wide">Incluye:</p>
            <p className="text-xs text-gray-600 leading-relaxed">{content}</p>
          </div>
        )}

        <div className="mt-auto">
          {/* Precio con ancla */}
          <div className="mb-4">
            {compareAtPrice && (
              <p className="text-sm text-gray-400 line-through">{compareAtPrice}</p>
            )}
            <p className="text-3xl font-extrabold text-gray-900">{price}</p>
          </div>

          {/* CTA Principal — Tiendanube o WhatsApp */}
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-green-500/30 text-base"
          >
            {isExternal ? (
              <>
                <ShoppingCart className="w-5 h-5" />
                Comprar ahora
              </>
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                Pedir Box por WhatsApp
              </>
            )}
          </a>

          {/* Link secundario a WhatsApp si hay Tiendanube */}
          {isExternal && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 text-green-600 hover:text-green-700 font-semibold text-sm mt-2 py-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar por WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
