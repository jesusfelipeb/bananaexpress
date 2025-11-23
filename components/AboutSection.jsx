import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="que-hacemos" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          ¿Quiénes Somos y Qué Hacemos?
        </h2>

        {/* Estructura de dos columnas: Texto a la izquierda, Imagen a la derecha */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Columna de Texto */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-green-600 mb-4">
              Banana Express: Tu Socio en Alimentación
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Somos Banana Express, y nuestro compromiso es transformar tu experiencia de compra de frutas y verduras. Nos enfocamos en la venta y distribución de productos frescos de la mejor calidad y a los mejores precios, directamente desde nuestro local en Palermo.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>Complementamos tus hábitos alimenticios con productos frescos y nutritivos.</li>
              <li>Te apoyamos en la labor de tus compras, simplificando el proceso con nuestras prácticas Box.</li>
              <li>Garantizamos calidad desde la selección hasta la entrega a domicilio en Palermo.</li>
            </ul>

            <p className="text-lg text-gray-700 mt-6 font-medium">
              Lo que encontrarás en nuestro sitio: Una forma fácil de elegir la Box perfecta para ti y pedir por WhatsApp de inmediato.
            </p>
          </div>
          
          {/* Columna de Imagen */}
          <div className="md:w-1/2">
            {/* Aquí es donde iría la imagen real de Banana Express (local, frutas, o Box) */}
            <div className="relative h-80 md:h-[600px] rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src="/banana.jpg"
                alt="Local de Banana Express en Palermo"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}