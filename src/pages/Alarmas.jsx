import '../styles/Products.css';

export default function Alarmas() {
  const products = [
    {
      name: "Alarma Inalámbrica",
      description: "Sistema de alarma sin cables para fácil instalación",
      features: ["Sensores inalámbricos", "Panel táctil", "Notificaciones móviles"]
    },
    {
      name: "Alarma con Sirena",
      description: "Sistema de alarma con sirena de alta potencia",
      features: ["Sirena 120dB", "Batería de respaldo", "Zona configurable"]
    },
    {
      name: "Alarma Anti-intrusión",
      description: "Detectores de apertura y movimiento",
      features: ["Sensores magnéticos", "PIR infrarrojo", "Compatible con app"]
    },
    {
      name: "Alarma GSM",
      description: "Sistema con comunicación celular",
      features: ["Alerta por SMS", "Llamada automática", "Sin línea telefónica"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Sistemas de <span className="text-tech-cyan">Alarmas</span>
          </h1>
          <p className="text-xl text-gray-600">
            Protección inteligente contra intrusos y emergencias
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 h-48 flex items-center justify-center">
                <span className="text-6xl">🚨</span>
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
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20alarmas"
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
            Beneficios de las <span className="text-tech-cyan">alarmas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2">Respuesta Inmediata</h3>
              <p className="text-gray-600">Alerta instantánea ante cualquier intrusión</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔔</div>
              <h3 className="font-bold text-xl mb-2">Disuasión</h3>
              <p className="text-gray-600">Evita robos antes de que ocurran</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold text-xl mb-2">Notificaciones</h3>
              <p className="text-gray-600">Recibe alertas en tu celular al instante</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
