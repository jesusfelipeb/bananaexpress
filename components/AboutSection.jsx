'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2, Leaf, Truck, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array de imágenes para el carrusel
  const carouselImages = [
    {
      src: '/about1.jpg',
      alt: 'Local de Banana Express en Palermo'
    },
    {
      src: '/about2.jpg',
      alt: 'Frutas y verduras frescas seleccionadas'
    },
    {
      src: '/about3.jpg',
      alt: 'Box armadas listas para entregar'
    },
    {
      src: '/about4.jpg',
      alt: 'Equipo de Banana Express'
    }
  ];

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToImage = (index) => {
    setIsAutoPlaying(false);
    setCurrentImage(index);
  };

  const benefits = [
    {
      icon: Leaf,
      title: 'Productos Frescos',
      description: 'Complementamos tus hábitos alimenticios con productos frescos y nutritivos de la mejor calidad.'
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Te apoyamos en la labor de tus compras, simplificando el proceso con nuestras prácticas Box.'
    },
    {
      icon: Heart,
      title: 'Calidad Garantizada',
      description: 'Garantizamos calidad desde la selección hasta la entrega a domicilio en Palermo.'
    }
  ];

  return (
    <section id="que-hacemos" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-8xl">🍎</div>
        <div className="absolute bottom-20 right-10 text-8xl">🥕</div>
        <div className="absolute top-1/2 right-20 text-6xl">🍌</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Título de la sección */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <Leaf className="w-4 h-4" />
            <span>Conocé Banana Express</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-4 leading-tight">
            ¿Quiénes Somos?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Tu verdulería de confianza en Palermo, comprometida con la frescura y calidad
          </p>
        </div>

        {/* Contenedor principal - Mobile First */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          
          {/* Columna de Texto */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            
            {/* Título destacado */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-3 sm:mb-4 leading-tight">
                Tu Aliado en Alimentación Saludable
              </h3>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Somos <span className="font-bold text-green-600">Banana Express</span>, y nuestro compromiso es transformar tu experiencia de compra de frutas y verduras. Nos enfocamos en la venta y distribución de productos frescos de la mejor calidad y a los mejores precios.
              </p>
            </div>

            {/* Beneficios con iconos */}
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-green-100"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Llamado a la acción */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-5 sm:p-6 rounded-2xl text-white shadow-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2">
                    Lo que vas a encontrar acá:
                  </h4>
                  <p className="text-sm sm:text-base text-green-50 leading-relaxed">
                    Una forma fácil de elegir la Box perfecta para vos y pedir por WhatsApp de inmediato. Sin complicaciones, sin esperas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna de Carrusel de Imágenes */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              
              {/* Contenedor del carrusel */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[800px] rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Imágenes */}
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      quality={90}
                      priority={index === 0}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw "
                    />
                  </div>
                ))}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none"></div>
              </div>

              {/* Botones de navegación */}
              <button
                onClick={prevImage}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 active:scale-95 touch-manipulation"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Indicadores de posición */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`transition-all duration-300 rounded-full touch-manipulation ${
                      index === currentImage
                        ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-white'
                        : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>

              {/* Contador de imágenes */}
              <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                {currentImage + 1} / {carouselImages.length}
              </div>
            </div>

            {/* Texto decorativo debajo del carrusel */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-xs sm:text-sm text-gray-500 italic">
                Deslizá para ver más fotos de nuestro local y productos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}