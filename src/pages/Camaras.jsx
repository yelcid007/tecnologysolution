import '../styles/Products.css';

export default function Camaras() {

    {/* Additional Info */}
          

  const products = [
    {
      name: "Cámara IP Domo",
      precio: "$150.000",
      description: "Cámara IP de alta resolución con visión nocturna",
      image: "/images/camaras/camaradomo.webp",
      features: ["1080p Full HD", "Visión nocturna 30m", "Resistente al agua IP66"]
    },
    {
      name: "Cámara Bullet",
      description: "Cámara tipo bullet para exteriores",
      image: "/images/camaras/camarabullet.webp",
      features: ["4MP Ultra HD", "IR 40m", "Detección de movimiento"]
    },
    {
      name: "Cámara PTZ",
      description: "Cámara con movimiento pan-tilt-zoom",
      image: "/images/camaras/camaraptz.webp",
      features: ["Zoom óptico 20x", "Rotación 360°", "Control remoto"]
    },
    {
      name: "Cámara Wifi",
      description: "Cámara inalámbrica para interiores",
      image: "/images/camaras/camarawifi.webp",
      features: ["Conectividad WiFi", "Audio bidireccional", "App móvil"]
    },
    {
      name: "Cámara exterior",
      description: "Cámara inalámbrica para interiores",
      image: "/images/camaras/camaraexterior.webp",
      features: ["Conectividad WiFi", "Audio bidireccional", "App móvil"]
    },
    {
      name: "Cámara micro sd",
      description: "Cámara inalámbrica para interiores",
      image: "/images/camaras/camaramicrosd.webp",
      features: ["Conectividad WiFi", "Audio bidireccional", "App móvil"]
    }
  ];

  return (
    
    <div className="product-page">
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <h1>
            Cámaras de <span className="highlight">Seguridad</span>
          </h1>
          <p>
            Amplia variedad de cámaras para todo tipo de necesidades
          </p>
        </div>

        <div className="product-info">
          <h2>
            ¿Por qué instalar <span className="highlight">cámaras de seguridad?</span>
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="icon">🛡️</div>
              <h3>Protección 24/7</h3>
              <p>Vigilancia continua de tu propiedad día y noche</p>
            </div>
            <div className="info-item">
              <div className="icon">📱</div>
              <h3>Acceso Remoto</h3>
              <p>Visualiza en tiempo real desde tu celular</p>
            </div>
            <div className="info-item">
              <div className="icon">💾</div>
              <h3>Grabación</h3>
              <p>Almacenamiento de evidencia para cualquier eventualidad</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image cameras">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <h2>{product.precio}</h2>
                <br />
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
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20cámaras"
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
