'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

const localProducts = [
  {
    title: 'Box Individual Esencial',
    description: 'Ideal para 1-2 personas. Lo justo para la semana con frescura garantizada.',
    price: '$11.156 ARS',
    compareAtPrice: '$14.500 ARS',
    content: '1 Lechuga, 1/4kg Zanahoria, 1 Palta, 1/2kg Papa, 1/2 Docena Huevos, 1/2kg Bananas, 1/4kg Mandarinas, 1/4kg Tomate, 1/4kg Cebolla, 1 Morron rojo.',
    image: '/1.jpg',
    tiendanubeUrl: '',
  },
  {
    title: 'Box Parejas',
    description: 'Para 2 personas. Variedad amplia de verduras y frutas de estación.',
    price: '$21.363 ARS',
    compareAtPrice: '$27.800 ARS',
    content: '1 Lechuga, 1 Rucula, 1/2kg Zanahoria, 2 Paltas, 1kg Papa, 1 Docena Huevos, 1kg Bananas, 1/2kg Mandarinas, 1/2kg Tomate, 1/2kg Cebolla, 1/2kg Naranja, 1 Ajo, 1 Morron Rojo.',
    image: '/3.jpg',
    tiendanubeUrl: '',
  },
  {
    title: 'Box Familiar',
    description: 'Para 3-5 personas. La semana completa resuelta con todo lo que necesitás.',
    price: '$35.839 ARS',
    compareAtPrice: '$46.500 ARS',
    content: '2 Lechugas, 1kg Tomates, 1kg Papa, 3 Paltas, 1 Maple Huevos, 1kg Banana, 1kg Mandarina, 1kg Naranja, 1kg Cebolla, 1/2kg Manzana roja, 1/2kg Morron rojo, 1 Ajo, 1 Rucula.',
    image: '/5.jpg',
    tiendanubeUrl: '',
    bestSeller: true,
  },
];

export default function ProductsPage() {
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
        // Usa productos locales
      }
    }
    fetchProducts();
  }, []);

  const storeUrl = process.env.NEXT_PUBLIC_TIENDANUBE_STORE_URL;

  return (
    <main className="relative min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-6xl pt-28">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-verde-claro font-semibold text-sm mb-2 tracking-wide uppercase">Precios de verdulería, no de app</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gris-titulo mb-3">
            Nuestras Box de Frescura
          </h1>
          <p className="text-base text-gris-sub max-w-lg mx-auto">
            Elegí la que mejor se adapta a tu casa y recibila hoy en Palermo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

        {usingTiendanube && storeUrl && (
          <div className="text-center mt-8">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-verde-medio text-verde-medio hover:bg-verde-medio hover:text-white font-bold py-2.5 px-7 rounded-xl transition-all duration-300 text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              Ver tienda completa
            </a>
          </div>
        )}

        <div className="text-center mt-14 p-7 sm:p-8 bg-verde-pastel/40 rounded-2xl border border-verde-suave/30">
          <h3 className="text-xl sm:text-2xl font-bold text-gris-titulo mb-2">
            ¿Necesitás algo específico?
          </h3>
          <p className="text-sm sm:text-base text-gris-sub mb-5">
            Armamos tu pedido personalizado con lo que vos quieras.
          </p>
          <a
            href={getWhatsAppLink('Hola, me gustaría hacer un pedido personalizado de frutas y verduras.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amarillo hover:bg-amarillo/90 text-gris-titulo font-bold py-3 px-7 rounded-xl transition-all duration-300 shadow-md text-sm sm:text-base touch-manipulation"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Pedido Personalizado
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
