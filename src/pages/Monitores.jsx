import '../styles/Products.css';

export default function Monitores() {
  const products = [
    {
      name: "Monitor LED 19\"",
      description: "Monitor compacto para visualización básica",
      features: ["Resolución 1366x768", "HDMI/VGA", "Bajo consumo"]
    },
    {
      name: "Monitor LED 24\"",
      description: "Monitor Full HD para mejor visualización",
      features: ["1920x1080 Full HD", "Panel IPS", "Múltiples entradas"]
    },
    {
      name: "Monitor 32\" 4K",
      description: "Pantalla grande con resolución Ultra HD",
      features: ["3840x2160 4K", "HDR", "Ideal para múltiples cámaras"]
    },
    {
      name: "Video Wall",
      description: "Sistema de múltiples pantallas",
      features: ["Configuración modular", "Control centralizado", "Alta disponibilidad"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-tech-cyan">Monitores</span> de Seguridad
          </h1>
          <p className="text-xl text-gray-600">
            Pantallas profesionales para monitoreo en tiempo real
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center">
                <span className="text-6xl">🖥️</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-tech-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20monitores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-tech-cyan hover:bg-tech-turquoise text-black font-bold py-2 px-4 rounded transition-colors"
                >
                  Solicitar Info
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Características de nuestros <span className="text-tech-cyan">monitores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="font-bold text-xl mb-2">Alta Definición</h3>
              <p className="text-gray-600">Imágenes nítidas y claras</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="font-bold text-xl mb-2">24/7</h3>
              <p className="text-gray-600">Diseñados para operación continua</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📺</div>
              <h3 className="font-bold text-xl mb-2">Multi-vista</h3>
              <p className="text-gray-600">Visualiza múltiples cámaras simultáneamente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
