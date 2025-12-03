'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: './' },
    { name: 'Productos Box', href: '/productos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-green-600/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo PNG */}
          <Link 
            href="./" 
            className="flex items-center group"
          >
            <div className="relative w-32 h-10 sm:w-40 sm:h-12 md:w-64 md:h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Banana Express Logo"
                fill
                priority
                className={`object-contain shadow-md rounded-full bg-amber-50/90 py-0.5  ${isScrolled ? 'drop-shadow-stone-500' : 'drop-shadow-white'}`}
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-semibold transition-colors duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-green-300' : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-green-600' : 'bg-yellow-300'
                }`}></span>
              </a>
            ))}
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5491127017092?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20Banana%20Express"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-green-600 hover:bg-green-50' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`font-semibold py-2 px-4 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-green-50 hover:text-green-600' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/5491127017092?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20Banana%20Express"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg mt-2"
            >
              <Phone size={20} />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}