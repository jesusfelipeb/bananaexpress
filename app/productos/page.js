import React from 'react';
// Importamos el componente de Tarjeta de Producto y el Botón de WhatsApp
import ProductCard from '../../components/ProductCard'; 
import WhatsAppButton from '../../components/WhatsAppButton'; 
import Header from '../../components/Header'; // Incluimos el Header para la navegación
import Footer from '@/components/Footer';

// Definimos los datos de las Boxes de Banana Express
// ¡Puedes expandir esta lista cuando necesites más productos!
const productBoxes = [
  {
    title: "Box Individual Esencial",
    description: "La selección ideal para cubrir las necesidades básicas de 1 o 2 personas durante la semana. Frescura y variedad garantizada.",
    price: "$11.156 ARS",
    content: "1 Lechuga, 1/4kg de Zanahoria, 1 Palta, 1/2kg de Papa Cepillada, 1/2 Docena de Huevos, 1/2kg de Bananas, 1/4kg de Mandarinas, 1/4kg de Tomate, 1/4kg de Cebolla, 1 Unidad de Morron rojo.",
  },
  {
    title: "Box Parejas",
    description: "Una caja generosa diseñada para dos personas. Incluye una amplia gama de verduras y frutas de estación.",
    price: "$21.363 ARS",
    content: "1 Lechuga, 1 atado de Rucula, 1/2kg de Zanahoria, 2 Paltas, 1kg de papa cepillada, 1 Docena de Huevos, 1kg de Bananas, 1/2kg de Mandarinas, 1/2kg de Tomate, 1/2kg de Cebolla, 1/2kg de Naranja de jugo, 1 ajo, 1 unidad de Morron Rojo",
  },
  {
    title: "Box Familiar",
    description: "Especialmente pensada para quienes buscan una alimentación más ligera, jugos y batidos saludables.",
    price: "$35.839 ARS",
    content: "2 unidades de Lechuga, 1kg de Tomates, 1kg de Papa cepillada, 3 unidades de Paltas, 1 maple de Huevos grandes, 1kg e Banana, 1kg de Mandarina, 1kg de Naranja de jugo, 1kg de Cebolla, 1/2kg de Manzana roja, 1/2 kg de Morron rojo, 1 Ajo, 1 atado de Rucula.",
  },
];

export default function ProductsPage() {
  const whatsappLinkPersonalizado = "https://wa.me/5491125017092?text=Hola,%20me%20gustaría%20hacer%20un%20pedido%20personalizado%20de%20frutas%20y%20verduras.";

  return (
    // Ya que usamos el Header y Footer en el Layout, aquí solo necesitamos el contenido específico.
    // Sin embargo, si tu Header fue movido a page.js, lo importamos aquí también para mantener la navegación.
    <main className="relative min-h-screen bg-gray-50">
      <Header /> 
      
      <div className="container mx-auto px-4 py-16 max-w-7xl pt-20 my-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-700 mt-4 mb-4">
            Catálogo Completo de Box 🥕🍎
          </h1>
          <p className="text-xl text-gray-600">
            Descubre todas las opciones de Box disponibles para tu domicilio en Palermo.
          </p>
        </header>

        {/* Grid de Tarjetas de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productBoxes.map((box, index) => (
            <ProductCard 
              key={index}
              title={box.title}
              description={box.description}
              price={box.price}
              content={box.content}
              // Aquí podemos añadir una prop para mostrar la imagen si tuvieras una
            />
          ))}
        </div>

        {/* Sección de CTA para Pedidos Personalizados */}
        <div className="text-center mt-16 p-10 bg-yellow-100 rounded-xl shadow-lg border-l-4 border-yellow-500">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            ¿No encuentras tu Box ideal?
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            Arma tu Box a medida. ¡Consúltanos por disponibilidad y precios!
          </p>
          <a 
            href={whatsappLinkPersonalizado} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md"
          >
            Chatear y Personalizar Pedido
          </a>
        </div>
      </div>
      
      {/* El WhatsAppButton flotante ya se renderiza gracias a layout.js */}
      <Footer />
    </main>
  );
}