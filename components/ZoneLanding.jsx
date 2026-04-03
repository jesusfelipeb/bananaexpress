'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle, ShoppingCart, MapPin, Truck, Clock, Leaf, Star, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';
import ProductCard from './ProductCard';

const localProducts = [
  {
    title: 'Box Individual Esencial',
    description: 'Ideal para 1-2 personas. Lo justo para la semana.',
    price: '$11.156 ARS',
    compareAtPrice: '$14.500 ARS',
    content: '1 Lechuga, 1/4kg Zanahoria, 1 Palta, 1/2kg Papa, 1/2 Docena Huevos, 1/2kg Bananas, 1/4kg Mandarinas, 1/4kg Tomate, 1/4kg Cebolla, 1 Morron rojo.',
    image: '/1.jpg',
    tiendanubeUrl: '',
  },
  {
    title: 'Box Parejas',
    description: 'Para 2 personas. Variedad amplia de estación.',
    price: '$21.363 ARS',
    compareAtPrice: '$27.800 ARS',
    content: '1 Lechuga, 1 Rucula, 1/2kg Zanahoria, 2 Paltas, 1kg Papa, 1 Docena Huevos, 1kg Bananas, 1/2kg Mandarinas, 1/2kg Tomate, 1/2kg Cebolla, 1/2kg Naranja, 1 Ajo, 1 Morron Rojo.',
    image: '/3.jpg',
    tiendanubeUrl: '',
  },
  {
    title: 'Box Familiar',
    description: 'Para 3-5 personas. La semana completa resuelta.',
    price: '$35.839 ARS',
    compareAtPrice: '$46.500 ARS',
    content: '2 Lechugas, 1kg Tomates, 1kg Papa, 3 Paltas, 1 Maple Huevos, 1kg Banana, 1kg Mandarina, 1kg Naranja, 1kg Cebolla, 1/2kg Manzana roja, 1/2kg Morron rojo, 1 Ajo, 1 Rucula.',
    image: '/5.jpg',
    tiendanubeUrl: '',
    bestSeller: true,
  },
];

export default function ZoneLanding({ zone }) {
  const [products, setProducts] = useState(localProducts);
  const whatsappLink = getWhatsAppLink(`Hola, quiero pedir una Box con delivery en ${zone.name}.`);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.products && data.products.length > 0) {
          setProducts(data.products);
        }
      } catch {
        // Usa productos locales
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero de zona */}
      <section className="relative text-white pt-20 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/2.jpg"
            alt={`Delivery de frutas y verduras en ${zone.name}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/65" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center pt-10 sm:pt-14">
          <div className="inline-flex items-center gap-2 bg-amarillo text-gris-titulo px-4 py-2 rounded-full font-bold text-xs sm:text-sm mb-5 shadow-md">
            <MapPin className="w-3.5 h-3.5" />
            <span>Envio gratis en {zone.name}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Frutas y Verduras Frescas<br />
            <span className="text-amarillo">a Domicilio en {zone.name}</span>
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            {zone.heroText}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-black py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 text-base touch-manipulation"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir en {zone.name}
            </a>
            <a
              href="#productos-zona"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 hover:bg-white hover:text-gris-titulo text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-sm touch-manipulation"
            >
              Ver nuestras Box
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Beneficios rápidos */}
      <section className="py-10 bg-verde-pastel/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, text: 'Envio gratis', sub: zone.name },
              { icon: Clock, text: 'Mismo día', sub: 'Pedí antes de las 15hs' },
              { icon: Leaf, text: 'Frescos del día', sub: 'Selección diaria' },
              { icon: Star, text: '+200 familias', sub: 'Ya nos eligen' },
            ].map((b) => (
              <div key={b.text} className="bg-white rounded-xl p-4 text-center shadow-sm border border-verde-pastel/30">
                <b.icon className="w-6 h-6 text-verde-claro mx-auto mb-2" />
                <p className="font-bold text-gris-titulo text-sm">{b.text}</p>
                <p className="text-xs text-gris-sub">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info de zona */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black text-gris-titulo mb-6 text-center">
            Delivery en {zone.name} y alrededores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-crema p-5 rounded-xl">
              <h3 className="font-bold text-gris-titulo text-sm mb-2">Zonas que cubrimos</h3>
              <p className="text-sm text-gris-texto">{zone.subZones}</p>
              <p className="text-xs text-gris-sub mt-2">Cerca de: {zone.landmarks}</p>
            </div>
            <div className="bg-crema p-5 rounded-xl">
              <h3 className="font-bold text-gris-titulo text-sm mb-2">Tiempos de entrega</h3>
              <p className="text-sm text-gris-texto">{zone.deliveryTime}</p>
              <p className="text-xs text-gris-sub mt-2">Lun-Sáb 9 a 20hs · Dom 10 a 18hs</p>
            </div>
          </div>

          {/* Testimonio de la zona */}
          <div className="bg-verde-pastel/20 rounded-xl p-5 border border-verde-suave/30">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-verde-claro rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                {zone.testimonial.initials}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-gris-titulo text-sm">{zone.testimonial.name}</p>
                  <span className="text-xs text-gris-sub">· {zone.testimonial.neighborhood}</span>
                </div>
                <p className="text-sm text-gris-texto italic">&ldquo;{zone.testimonial.text}&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos-zona" className="py-12 sm:py-16 bg-crema">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-verde-claro font-semibold text-sm mb-2 tracking-wide uppercase">Elegí tu Box</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gris-titulo mb-2">
              Box con envio gratis a {zone.name}
            </h2>
            <p className="text-sm text-gris-sub">Precios de verdulería, no de app</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((box, index) => (
              <ProductCard
                key={box.id || index}
                title={box.title}
                description={box.description}
                price={box.price}
                compareAtPrice={box.compareAtPrice}
                content={box.content}
                image={box.image}
                tiendanubeUrl={box.tiendanubeUrl}
                bestSeller={box.bestSeller}
              />
            ))}
          </div>

          {/* Pedido personalizado */}
          <div className="text-center mt-10">
            <a
              href={getWhatsAppLink(`Hola, quiero hacer un pedido personalizado con delivery en ${zone.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amarillo hover:bg-amarillo/90 text-gris-titulo font-bold py-3 px-7 rounded-xl transition-all duration-300 shadow-md text-sm touch-manipulation"
            >
              <MessageCircle className="w-4 h-4" />
              Pedido Personalizado
            </a>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 bg-verde-hoja text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            ¿Listo para recibir tu Box en {zone.name}?
          </h2>
          <p className="text-verde-suave text-sm sm:text-base mb-6">
            Pedí ahora y recibilo hoy mismo. Envio gratis.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-verde-hoja hover:bg-amarillo hover:text-gris-titulo font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 text-sm sm:text-base touch-manipulation"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
