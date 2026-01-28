import '../styles/Products.css';

export default function Redes() {
  const services = [
    {
      name: "Cableado Estructurado",
      description: "Instalación de red cableada profesional",
      features: ["Cable Cat6/Cat6a", "Certificación de red", "Organización de cableado"]
    },
    {
      name: "Configuración de Red",
      description: "Setup completo de infraestructura de red",
      features: ["Routers y switches", "VLANs", "Segmentación de red"]
    },
    {
      name: "Red Inalámbrica",
      description: "Instalación de WiFi empresarial",
      features: ["Access Points", "Cobertura amplia", "Red mesh"]
    },
    {
      name: "PoE (Power over Ethernet)",
      description: "Alimentación y datos en un solo cable",
      features: ["Switches PoE", "Cámaras IP", "Access Points"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Instalación de <span className="text-tech-cyan">Redes</span>
          </h1>
          <p className="text-xl text-gray-600">
            Infraestructura de red para sistemas de seguridad integrados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 h-48 flex items-center justify-center">
                <span className="text-6xl">🌐</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-tech-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20redes"
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
            Importancia de una buena <span className="text-tech-cyan">infraestructura de red</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2">Velocidad</h3>
              <p className="text-gray-600">Transmisión rápida de video en tiempo real</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔌</div>
              <h3 className="font-bold text-xl mb-2">PoE</h3>
              <p className="text-gray-600">Alimentación y datos en un solo cable</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-xl mb-2">Confiabilidad</h3>
              <p className="text-gray-600">Red estable sin interrupciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
