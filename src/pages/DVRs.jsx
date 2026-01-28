import '../styles/Products.css';

export default function DVRs() {
  const products = [
    {
      name: "DVR 4 Canales",
      description: "Grabador digital para 4 cámaras",
      features: ["4 canales", "1TB HDD", "H.264+ compresión"]
    },
    {
      name: "DVR 8 Canales",
      description: "Sistema de grabación para medianas instalaciones",
      features: ["8 canales", "2TB HDD", "Acceso remoto"]
    },
    {
      name: "DVR 16 Canales",
      description: "Solución profesional para grandes proyectos",
      features: ["16 canales", "4TB HDD", "Múltiples usuarios"]
    },
    {
      name: "NVR IP",
      description: "Grabador de video en red para cámaras IP",
      features: ["PoE integrado", "4K recording", "Cloud backup"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-tech-cyan">DVRs</span> y Sistemas de Grabación
          </h1>
          <p className="text-xl text-gray-600">
            Almacenamiento seguro y confiable para tus cámaras
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-48 flex items-center justify-center">
                <span className="text-6xl">💾</span>
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
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20DVRs"
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
            Características de nuestros <span className="text-tech-cyan">DVRs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎥</div>
              <h3 className="font-bold text-xl mb-2">Alta Calidad</h3>
              <p className="text-gray-600">Grabación en Full HD y 4K</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-xl mb-2">Acceso Remoto</h3>
              <p className="text-gray-600">Visualiza grabaciones desde cualquier lugar</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-xl mb-2">Seguro</h3>
              <p className="text-gray-600">Encriptación y protección de datos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
