'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestras Box', href: '#productos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-verde-hoja/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-2.5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-28 h-9 sm:w-36 sm:h-11 md:w-48 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Banana Express"
                fill
                priority
                className={`object-contain transition-all duration-300 ${
                  isScrolled
                    ? 'drop-shadow-sm'
                    : 'brightness-0 invert drop-shadow-md'
                }`}
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 192px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gris-texto hover:text-verde-hoja'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-verde-hoja hover:bg-verde-pastel' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-3 border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm ${
                  isScrolled
                    ? 'text-gris-texto hover:bg-verde-pastel hover:text-verde-hoja'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-6 py-3 rounded-full shadow-lg mt-2 text-sm"
            >
              <MessageCircle size={18} />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
