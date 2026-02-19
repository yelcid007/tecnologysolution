import '../styles/Products.css';

export default function Alarmas() {
  const products = [
    {
      name: "Bocina Sirena Intemperie para Robos",
      description: "Sirena de alta potencia para exterior con protección contra intemperie",
      image: "/images/alarmas/Bocina Sirena Intemperie Robos Seguridad Casas Fincas 110v Negro.webp",
      features: ["110V", "Uso exterior", "Alta potencia"]
    },
    {
      name: "Kit Alarma Inalámbrica GSM y WiFi",
      description: "Sistema completo de alarma GSM con conexión WiFi integrada",
      image: "/images/alarmas/Kit Alarma Para Casa Inalambrica Gsm Y Wifi.webp",
      features: ["GSM y WiFi", "Control remoto", "Fácil instalación"]
    },
    {
      name: "Kit Alarma WiFi 4G Última Versión",
      description: "Sistema moderno with WiFi y conectividad 4G",
      image: "/images/alarmas/Kit Alarma Para Casa Inalámbrica Wifi 4g - Ultima Version Blanco.webp",
      features: ["WiFi 4G", "Versión mejorada", "Color blanco"]
    },
    {
      name: "Kit Alarma Inalámbrica con Sensor Presencia",
      description: "Sistema completo con sensores de movimiento integrados",
      image: "/images/alarmas/Kit De Alarma Inalámbrica For Casa Con Sensor De Presencia.webp",
      features: ["Sensor presencia", "Inalámbrica", "Sistema completo"]
    },
    {
      name: "Sensor Movimiento Techo Infrarrojo 360°",
      description: "Detector PIR de movimiento para montaje en techo",
      image: "/images/alarmas/Sensor De Movimiento Techo Infrarrojo 360º Sobreponer.webp",
      features: ["360° cobertura", "Infrarrojo", "Sobreponer"]
    },
    {
      name: "Sensor Detector Humo con Batería 9V",
      description: "Detector de humo con batería 9V incluida y conexión 110V",
      image: "/images/alarmas/Sensor Detector De Humo Batería 9v Incluida Conexión 110v Blanco.webp",
      features: ["Batería 9V", "Conexión 110V", "Color blanco"]
    },
    {
      name: "Sirena 110V para Alarmas Comunitarias",
      description: "Sirena robusta para sistemas de alarma comunitaria y pánico",
      image: "/images/alarmas/Sirena 110v Para Alarmas Comunitarias Panico Emergencia.webp",
      features: ["110V", "Emergencias", "Pánico"]
    },
    {
      name: "Sirena Inalámbrica de Seguridad",
      description: "Sirena inalámbrica compatible con sistemas de alarma modernos",
      image: "/images/alarmas/Sirena Alarma Inalámbrica De Seguridad Blanco.webp",
      features: ["Inalámbrica", "Color blanco", "Fácil instalación"]
    }
  ];

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Sistemas de Alarmas</h1>
        <p>Protección inteligente contra intrusos y <strong>emergencias</strong></p>
      </header>
      
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/573138043590?text=Hola%2C%20estoy%20interesado%20en%20${encodeURIComponent(product.name)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="product-btn"
              >
                Solicitar Información
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="product-info">
        <h2>Beneficios de Nuestros Sistemas de Alarmas</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>⚡ Respuesta Inmediata</h3>
            <p>Alerta instantánea ante cualquier intrusión</p>
          </div>
          <div className="info-item">
            <h3>🔔 Disuasión</h3>
            <p>Evita robos antes de que ocurran</p>
          </div>
          <div className="info-item">
            <h3>📞 Notificaciones</h3>
            <p>Recibe alertas móviles al instante</p>
          </div>
        </div>
      </div>
    </div>
  );
}
