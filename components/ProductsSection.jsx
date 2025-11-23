import React from 'react';
// Importamos el componente de Tarjeta que acabamos de crear
import ProductCard from './ProductCard'; 
import { FaWhatsapp } from "react-icons/fa";

// Definimos los datos de las Boxes de Banana Express
const productBoxes = [
  {
    title: "Box Semanal Esencial",
    description: "La selección ideal para cubrir las necesidades básicas de 1 o 2 personas durante la semana. Frescura y variedad garantizada.",
    price: "$7.500 ARS",
    content: "Papas, Cebollas, Zanahorias, Tomates, 1 kg de Manzanas, Naranjas.",
  },
  {
    title: "Box Familiar Completa",
    description: "Una caja generosa diseñada para familias. Incluye una amplia gama de verduras y frutas de estación.",
    price: "$12.900 ARS",
    content: "Incluye la Box Esencial + Palta, Limones, Hojas Verdes, Pimientos, Bananas.",
  },
  {
    title: "Box Fit & Smoothie",
    description: "Especialmente pensada para quienes buscan una alimentación más ligera, jugos y batidos saludables.",
    price: "$9.200 ARS",
    content: "Frutas de alto valor nutritivo: Banana, Kiwi, Frutillas, Espinaca, Jengibre, Arándanos.",
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Nuestros Productos Box 📦
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Elige la Box que mejor se adapta a tus hábitos y recíbela en tu domicilio de Palermo.
        </p>

        {/* Grid de Tarjetas de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productBoxes.map((box, index) => (
            <ProductCard 
              key={index}
              title={box.title}
              description={box.description}
              price={box.price}
              content={box.content}
            />
          ))}
        </div>

        {/* Llamado a la acción adicional para pedidos personalizados */}
        <div className="text-center mt-16 p-8 bg-green-100 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold text-green-800 mb-3">¿Necesitas algo específico?</h3>
            <p className="text-lg text-gray-700 mb-4">
                Si nuestras boxes no se ajustan a tu necesidad, ¡puedes hacer tu pedido personalizado por WhatsApp!
            </p>
            <a 
                href="https://wa.me/5491167891234?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20personalizado%20de%20frutas%20y%20verduras." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              <FaWhatsapp className="mr-2" />
              Consulta por Pedidos Personalizados
            </a>
        </div>
        
      </div>
    </section>
  );
}