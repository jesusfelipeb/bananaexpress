import React from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingCart, Truck } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const ProductCard = ({ title, description, price, compareAtPrice, content, image, tiendanubeUrl, bestSeller }) => {
  const whatsappLink = getWhatsAppLink(`Hola, me gustaría pedir la Box: ${title}.`);
  const buyUrl = tiendanubeUrl || whatsappLink;
  const isExternal = Boolean(tiendanubeUrl);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-verde-pastel/30 flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 relative group">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        <div className="bg-verde-hoja text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Truck className="w-3 h-3" />
          Envio gratis
        </div>
        {bestSeller && (
          <div className="bg-amarillo text-gris-titulo text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            Mas vendida
          </div>
        )}
      </div>

      {/* Imagen */}
      {image && (
        <div className="relative h-48 sm:h-52 w-full flex-shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={`${title} - Banana Express`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gris-titulo mb-1.5">{title}</h3>
        <p className="text-gris-sub mb-3 text-sm leading-relaxed">{description}</p>

        {/* Contenido de la Box */}
        {content && (
          <div className="bg-verde-pastel/40 p-3 rounded-xl mb-4">
            <p className="text-[11px] font-semibold text-verde-hoja mb-1 uppercase tracking-wider">Incluye:</p>
            <p className="text-xs text-gris-texto leading-relaxed">{content}</p>
          </div>
        )}

        <div className="mt-auto">
          {/* Precio */}
          <div className="mb-4">
            {compareAtPrice && (
              <p className="text-sm text-gris-sub line-through">{compareAtPrice}</p>
            )}
            <p className="text-2xl sm:text-3xl font-extrabold text-gris-titulo">{price}</p>
          </div>

          {/* CTA Principal */}
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-3 px-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg text-sm sm:text-base touch-manipulation"
          >
            {isExternal ? (
              <>
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                Comprar ahora
              </>
            ) : (
              <>
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Pedir por WhatsApp
              </>
            )}
          </a>

          {/* Link secundario */}
          {isExternal && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 text-verde-medio hover:text-verde-hoja font-semibold text-xs mt-2 py-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Consultar por WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
