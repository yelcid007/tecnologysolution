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
    <div className="product-page">
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <h1>
            <span className="highlight">Monitores</span> de Seguridad
          </h1>
          <p>
            Pantallas profesionales para monitoreo en tiempo real
          </p>
        </div>

        <div className="product-info">
          <h2>
            Características de nuestros <span className="highlight">monitores</span>
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="icon">👁️</div>
              <h3>Alta Definición</h3>
              <p>Imágenes nítidas y claras</p>
            </div>
            <div className="info-item">
              <div className="icon">⏰</div>
              <h3>24/7</h3>
              <p>Diseñados para operación continua</p>
            </div>
            <div className="info-item">
              <div className="icon">📺</div>
              <h3>Multi-vista</h3>
              <p>Visualiza múltiples cámaras simultáneamente</p>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image monitors">
                <span>🖥️</span>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20monitores"
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
