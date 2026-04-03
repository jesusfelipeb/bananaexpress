import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, WHATSAPP_NUMBER, EMAIL, LOCATION, SCHEDULE, INSTAGRAM_URL } from '@/lib/constants';

export default function Footer() {
  const whatsappLink = getWhatsAppLink();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: LOCATION.address,
      subtitle: LOCATION.area,
      link: LOCATION.mapsUrl,
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: `+54 9 11 ${WHATSAPP_NUMBER.slice(4, 8)}-${WHATSAPP_NUMBER.slice(8)}`,
      subtitle: 'Llamanos o escribinos',
      link: `tel:+${WHATSAPP_NUMBER}`,
    },
    {
      icon: Mail,
      title: 'Email',
      content: EMAIL,
      subtitle: 'Respondemos en 24hs',
      link: `mailto:${EMAIL}`,
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: SCHEDULE.weekdays,
      subtitle: SCHEDULE.weekends,
      link: null,
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestras Box', href: '#productos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-oscuro text-white">
      <div className="container mx-auto px-4 py-12 sm:py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Sobre Banana Express */}
          <div className="space-y-4">
            <h3 className="text-xl font-black">
              BANANA <span className="text-amarillo">EXPRESS</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu verdulería de confianza en Palermo. Box de frutas y verduras frescas directo a tu puerta.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-whatsapp rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-sm font-bold text-amarillo mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-2.5">
                    <Icon className="w-4 h-4 text-verde-claro mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-gray-400 mb-0.5">{item.title}</h5>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white text-sm hover:text-amarillo transition-colors break-words"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{item.content}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="bg-verde-hoja rounded-xl p-5 sm:p-6 mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black mb-1">¿Listo para tu Box?</h3>
              <p className="text-verde-suave text-sm">Pedí ahora por WhatsApp y recibilo hoy</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-verde-hoja font-bold px-6 py-3 rounded-full hover:bg-amarillo hover:text-gris-titulo transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2 text-sm touch-manipulation"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Banana Express</span>. Tu verdulería de confianza en Palermo.
          </p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-verde-hoja py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/90 text-xs font-medium">
            Envío gratis en Palermo · Productos frescos del día · Entrega el mismo día
          </p>
        </div>
      </div>
    </footer>
  );
}
