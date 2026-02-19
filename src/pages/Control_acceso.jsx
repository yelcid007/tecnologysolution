import '../styles/Products.css';

export default function ControlAcceso() {

  const products = [
    {
      name: "Control de Acceso Hikvision DS-K1T320MFX",
      description: "Control de acceso con huella dactilar y tarjeta",
      image: "/images/control_acceso/Control de Acceso Hikvision DS-K1T320MFX.webp",
      features: ["Huella dactilar", "Tarjeta RFID", "Pantalla TFT"]
    },
    {
      name: "Control de Acceso Hikvision DS-K1T343M-WX",
      description: "Control de acceso con reconocimiento facial y WiFi",
      image: "/images/control_acceso/Control de Acceso Hikvision DS-K1T343M-WX.webp",
      features: ["Reconocimiento facial", "WiFi integrado", "Temperatura corporal"]
    },
    {
      name: "Control de Acceso Hikvision DS-K1T804EF",
      description: "Terminal de control con huella y tarjeta",
      image: "/images/control_acceso/CONTROL DE ACCESO HIKVISION DS-K1T804EF.png",
      features: ["Sensor de huella", "Lector de tarjeta", "IP65"]
    },
    {
      name: "Control de Acceso Y Asistencia DS-K1T804F",
      description: "Terminal de control y asistencia Hikvision",
      image: "/images/control_acceso/Control De Acceso Y Asistencia Ds-k1t804f Hikvision.webp",
      features: ["Control horario", "Reportes", "TCP/IP"]
    },
    {
      name: "Terminal Hikvision K1T323",
      description: "Terminal de control de acceso compacto",
      image: "/images/control_acceso/K1T323 Terminal de Control de Acceso Hikvision.jpg",
      features: ["Diseño compacto", "Fácil instalación", "Alta seguridad"]
    },
    {
      name: "Botón No Touch Hikvision DS-K7P07",
      description: "Botón de salida sin contacto",
      image: "/images/control_acceso/Boton No Touch Hikvision DS-K7P07.webp",
      features: ["Sin contacto", "Sensor infrarrojo", "Higiénico"]
    },
    {
      name: "Tag de Control de Acceso RFID",
      description: "Llavero RFID para control de acceso",
      image: "/images/control_acceso/Tag de Control de Acceso RFID.webp",
      features: ["Tecnología RFID", "Resistente", "Compatible Hikvision"]
    },
    {
      name: "Tarjeta de Control Hikvision S50+TK4100",
      description: "Tarjeta inteligente para control de acceso",
      image: "/images/control_acceso/Tarjeta de control de acceso Hikvision S50+TK4100.webp",
      features: ["Doble tecnología", "Alta durabilidad", "Compatible"]
    },
    {
      name: "Terminal Hikvision DS-K1",
      description: "Terminal de control de acceso avanzado",
      image: "/images/control_acceso/hikvisionDsK1.webp",
      features: ["Multimodo", "Pantalla táctil", "Red TCP/IP"]
    },
    
  ];

  return (
    
    <div className="product-page">
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <h1>
            Control <span className="highlight">de acceso</span>
          </h1>
          <p>
            Control inteligente de entradas y salidas con seguridad, monitoreo y gestión en tiempo real.
          </p>
        </div>

        <div className="product-info">
          <h2>
            ¿Por qué instalar <span className="highlight">control de acceso?</span>
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="icon">🔐</div>
              <h3>Acceso Seguro</h3>
              <p>Solo personas autorizadas pueden ingresar, aumentando la protección de tu propiedad.</p>
            </div>
            <div className="info-item">
              <div className="icon">📊</div>
              <h3>Control y Registro</h3>
              <p>Monitorea entradas y salidas en tiempo real con historial detallado de accesos.</p>
            </div>
            <div className="info-item">
              <div className="icon">📱</div>
              <h3>Gestión Remota</h3>
              <p>Administra permisos y controla accesos desde tu celular o sistema central en cualquier momento.</p>
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
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20control%20de%20acceso"
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