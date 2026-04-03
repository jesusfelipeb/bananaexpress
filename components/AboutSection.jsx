'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Leaf, Truck, Heart, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselImages = [
    { src: '/about2.jpg', alt: 'Box de verduras armada Banana Express' },
    { src: '/about1.jpg', alt: 'Local de Banana Express en Palermo' },
    { src: '/about3.jpg', alt: 'Banana Express - Listo para vos' },
    { src: '/about4.jpg', alt: 'Bienvenido a tu verdulería Banana Express' },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const nextImage = () => { setIsAutoPlaying(false); setCurrentImage((prev) => (prev + 1) % carouselImages.length); };
  const prevImage = () => { setIsAutoPlaying(false); setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length); };

  const benefits = [
    {
      icon: Leaf,
      title: 'Productos del día',
      description: 'Seleccionamos todo fresco cada mañana. Si algo no te convence, lo reponemos.'
    },
    {
      icon: Truck,
      title: 'Entrega el mismo día',
      description: 'Pedí antes de las 15hs y te lo llevamos hoy. Envío gratis en Palermo y alrededores.'
    },
    {
      icon: DollarSign,
      title: 'Precios de verdulería',
      description: 'Sin comisiones de app ni recargos. El mismo precio que en el local, en tu puerta.'
    },
    {
      icon: Heart,
      title: 'Atención personalizada',
      description: 'Hablás directo con nosotros por WhatsApp. Sin bots, sin esperas, sin vueltas.'
    },
  ];

  return (
    <section id="que-hacemos" className="py-16 sm:py-20 md:py-24 bg-crema">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Título */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-verde-claro font-semibold text-sm mb-2 tracking-wide uppercase">Conocé Banana Express</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gris-titulo mb-3 leading-tight">
            Tu verdulería de confianza en Palermo
          </h2>
          <p className="text-base text-gris-sub max-w-xl mx-auto">
            Box armadas con lo mejor de la semana, directo a tu casa
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Carrusel */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative group">
              <div className="relative h-72 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
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
                      priority={index === 0}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    />
                  </div>
                ))}
              </div>

              {/* Controles */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gris-titulo p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 touch-manipulation"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gris-titulo p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 touch-manipulation"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setIsAutoPlaying(false); setCurrentImage(index); }}
                    className={`transition-all duration-300 rounded-full touch-manipulation ${
                      index === currentImage
                        ? 'w-7 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="w-full lg:w-1/2 order-2">
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-verde-pastel/50 hover:shadow-md hover:border-verde-suave transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-verde-pastel rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-verde-hoja" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm sm:text-base text-gris-titulo mb-0.5">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gris-sub leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
