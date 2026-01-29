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
    <div className="product-page">
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <h1>
            Instalación de <span className="highlight">Redes</span>
          </h1>
          <p>
            Infraestructura de red para sistemas de seguridad integrados
          </p>
        </div>

        <div className="product-info">
          <h2>
            Importancia de una buena <span className="highlight">infraestructura de red</span>
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="icon">⚡</div>
              <h3>Velocidad</h3>
              <p>Transmisión rápida de video en tiempo real</p>
            </div>
            <div className="info-item">
              <div className="icon">🔌</div>
              <h3>PoE</h3>
              <p>Alimentación y datos en un solo cable</p>
            </div>
            <div className="info-item">
              <div className="icon">🛡️</div>
              <h3>Confiabilidad</h3>
              <p>Red estable sin interrupciones</p>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Services Grid */}
        <div className="products-grid">
          {services.map((service, index) => (
            <div key={index} className="product-card">
              <div className="product-image networks">
                <span>🌐</span>
              </div>
              <div className="product-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="product-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20redes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-btn"
                >
                  Solicitar Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
