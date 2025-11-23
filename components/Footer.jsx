import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '5491167891234';
  const whatsappMessage = encodeURIComponent('Hola! Quiero hacer un pedido de Banana Express 🍌');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Paraguay y Coronel Díaz',
      subtitle: 'Palermo, CABA',
      link: 'https://maps.google.com/?q=Paraguay+y+Coronel+Diaz+Palermo+CABA',
      action: 'Ver en mapa'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 9 11 6789-1234',
      subtitle: 'Llamanos o escribinos',
      link: `tel:${whatsappNumber}`,
      action: 'Llamar'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@bananaexpress.com.ar',
      subtitle: 'Respondemos en 24hs',
      link: 'mailto:contacto@bananaexpress.com.ar',
      action: 'Enviar email'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun a Sáb: 9:00 - 20:00',
      subtitle: 'Dom: 10:00 - 18:00',
      link: null,
      action: null
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Qué Hacemos', href: '#que-hacemos' },
    { name: 'Nuestras Box', href: '#productos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          
          {/* Columna 1: Sobre Banana Express */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🍌</span>
              <h3 className="text-2xl font-black">
                BANANA <span className="text-yellow-400">EXPRESS</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Tu verdulería de confianza en Palermo. Entregamos box de frutas y verduras frescas directo a tu puerta.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/bananaexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/50"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-green-500 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-green-500/50"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Columna 2: Links rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400"></span>
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-yellow-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 y 4: Información de contacto */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-semibold text-gray-300 mb-1">
                        {item.title}
                      </h5>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white font-medium hover:text-yellow-400 transition-colors text-sm md:text-base break-words"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm md:text-base">
                          {item.content}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA de WhatsApp destacado */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 md:p-8 mb-12 shadow-2xl border-2 border-green-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                ¿Listo para tu Box de Frescura? 📦
              </h3>
              <p className="text-green-50 text-sm md:text-base">
                Hacé tu pedido ahora por WhatsApp y recibilo hoy mismo
              </p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-green-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Copyright y créditos */}
        <div className="text-center space-y-3">
          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} <span className="font-bold text-white">Banana Express</span>. Tu verdulería Box de confianza en Palermo.
          </p>
          <p className="text-gray-500 text-xs md:text-sm flex items-center justify-center gap-1 flex-wrap">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> y mucha frescura 🍎🥕🍌
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 pt-2">
            <a href="#" className="hover:text-yellow-400 transition-colors">Términos y Condiciones</a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">Preguntas Frecuentes</a>
          </div>
        </div>
      </div>

      {/* Barra inferior con gradiente */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-xs md:text-sm font-medium">
            🚚 Envíos gratis en Palermo • 🍃 Productos 100% frescos • ⚡ Entrega el mismo día
          </p>
        </div>
      </div>
    </footer>
  );
}