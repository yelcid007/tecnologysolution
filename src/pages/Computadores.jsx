import '../styles/Products.css';

export default function Computadores() {
  const products = [
    {
      name: "Computadora Desktop Básica",
      description: "Equipo de escritorio para oficina estándar",
      image: "/images/computadores/computadora-desktop-basica.jpg",
      features: ["Procesador Intel Core i5", "8GB RAM", "SSD 256GB", "Monitor Full HD"]
    },
    {
      name: "Computadora Desktop Profesional",
      description: "Equipo potente para tareas de alto rendimiento",
      image: "/images/computadores/computadora-desktop-profesional.jpg",
      features: ["Procesador Intel Core i7", "16GB RAM", "SSD 512GB", "Monitor 4K"]
    },
    {
      name: "Computadora Portátil Ultraligera",
      description: "Laptop compacta y portátil para movilidad",
      image: "/images/computadores/laptop-ultraligera.jpg",
      features: ["Peso < 1.5kg", "Batería 12 horas", "Procesador potente", "Pantalla FHD"]
    },
    {
      name: "Computadora Gaming",
      description: "Equipo especializado para gaming y edición",
      image: "/images/computadores/computadora-gaming.jpg",
      features: ["Tarjeta gráfica RTX", "Procesador últimaGen", "32GB RAM", "Refrigeración avanzada"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <h1>
            <span className="highlight">Computadores</span> y Equipos de Cómputo
          </h1>
          <p>
            Equipos de alta calidad para todas tus necesidades
          </p>
        </div>

        <div className="product-info">
          <h2>
            ¿Por qué elegir nuestros <span className="highlight">computadores?</span>
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="icon">💻</div>
              <h3>Última Tecnología</h3>
              <p>Equipos de marcas reconocidas y últimas generaciones</p>
            </div>
            <div className="info-item">
              <div className="icon">🛡️</div>
              <h3>Garantía Completa</h3>
              <p>Protección y servicio técnico incluido</p>
            </div>
            <div className="info-item">
              <div className="icon">⚡</div>
              <h3>Alto Rendimiento</h3>
              <p>Optimizados para máxima productividad</p>
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
                <img src={product.image} alt={product.name} />
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
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20computadores"
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
