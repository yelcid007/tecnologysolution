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
    <div className="product-page">
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <h1>
            <span className="highlight">DVRs</span> y Sistemas de Grabación
          </h1>
          <p>
            Almacenamiento seguro y confiable para tus cámaras
          </p>
        </div>

        <div className="product-info">
          <h2>
            Características de nuestros <span className="highlight">DVRs</span>
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="icon">🎥</div>
              <h3>Alta Calidad</h3>
              <p>Grabación en Full HD y 4K</p>
            </div>
            <div className="info-item">
              <div className="icon">🌐</div>
              <h3>Acceso Remoto</h3>
              <p>Visualiza grabaciones desde cualquier lugar</p>
            </div>
            <div className="info-item">
              <div className="icon">🔒</div>
              <h3>Seguro</h3>
              <p>Encriptación y protección de datos</p>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image dvrs">
                <span>💾</span>
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
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20DVRs"
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
