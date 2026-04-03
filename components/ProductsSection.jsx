'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

// Productos locales (fallback si Tiendanube no está configurado)
const localProducts = [
  {
    title: 'Box Individual Esencial',
    description: 'La selección ideal para cubrir las necesidades básicas de 1 o 2 personas durante la semana. Frescura y variedad garantizada.',
    price: '$11.156 ARS',
    compareAtPrice: '$14.500 ARS',
    content: '1 Lechuga, 1/4kg de Zanahoria, 1 Palta, 1/2kg de Papa Cepillada, 1/2 Docena de Huevos, 1/2kg de Bananas, 1/4kg de Mandarinas, 1/4kg de Tomate, 1/4kg de Cebolla, 1 Unidad de Morron rojo.',
    image: '/1.jpg',
    tiendanubeUrl: '',
  },
  {
    title: 'Box Parejas',
    description: 'Una caja generosa diseñada para dos personas. Incluye una amplia gama de verduras y frutas de estación.',
    price: '$21.363 ARS',
    compareAtPrice: '$27.800 ARS',
    content: '1 Lechuga, 1 atado de Rucula, 1/2kg de Zanahoria, 2 Paltas, 1kg de papa cepillada, 1 Docena de Huevos, 1kg de Bananas, 1/2kg de Mandarinas, 1/2kg de Tomate, 1/2kg de Cebolla, 1/2kg de Naranja de jugo, 1 ajo, 1 unidad de Morron Rojo',
    image: '/3.jpg',
    tiendanubeUrl: '',
  },
  {
    title: 'Box Familiar',
    description: 'Especialmente pensada para familias que buscan una alimentación saludable, variada y sin complicaciones.',
    price: '$35.839 ARS',
    compareAtPrice: '$46.500 ARS',
    content: '2 unidades de Lechuga, 1kg de Tomates, 1kg de Papa cepillada, 3 unidades de Paltas, 1 maple de Huevos grandes, 1kg de Banana, 1kg de Mandarina, 1kg de Naranja de jugo, 1kg de Cebolla, 1/2kg de Manzana roja, 1/2 kg de Morron rojo, 1 Ajo, 1 atado de Rucula.',
    image: '/5.jpg',
    tiendanubeUrl: '',
  },
];

export default function ProductsSection() {
  const [products, setProducts] = useState(localProducts);
  const [usingTiendanube, setUsingTiendanube] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.products && data.products.length > 0) {
          setProducts(data.products);
          setUsingTiendanube(true);
        }
      } catch {
        // Silenciosamente usa productos locales
      }
    }
    fetchProducts();
  }, []);

  const storeUrl = process.env.NEXT_PUBLIC_TIENDANUBE_STORE_URL;

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <ShoppingCart className="w-4 h-4" />
            <span>Precios de verdulería, no de app</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Nuestras Box de Frescura
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Elegí la Box que mejor se adapta a tus hábitos y recibila hoy en tu domicilio
        </p>

        {/* Grid de Tarjetas de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            />
          ))}
        </div>

        {/* Ver tienda completa si Tiendanube está configurado */}
        {usingTiendanube && storeUrl && (
          <div className="text-center mt-10">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-md"
            >
              <ShoppingCart className="w-5 h-5" />
              Ver tienda completa
            </a>
          </div>
        )}

        {/* Llamado a la acción adicional para pedidos personalizados */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-100 to-emerald-50 rounded-2xl shadow-inner border border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-3">
            ¿Necesitás algo específico?
          </h3>
          <p className="text-lg text-gray-700 mb-5">
            Armamos tu pedido personalizado con lo que vos quieras. Solo escribinos.
          </p>
          <a
            href={getWhatsAppLink('Hola, me gustaría hacer un pedido personalizado de frutas y verduras.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3.5 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-yellow-500/30 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Pedido Personalizado por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
