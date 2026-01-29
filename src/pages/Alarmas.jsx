import '../styles/Products.css';

export default function Alarmas() {
  const products = [
    {
      name: "Alarma Inalámbrica",
      image: "/images/alarmas/alarmainhalambrica.jpg",
      description: "Sistema de alarma sin cables para fácil instalación",
      features: ["Sensores inalámbricos", "Panel táctil", "Notificaciones móviles"]
    },
    {
      name: "Alarma con Sirena",
      image: "/images/alarmas/alarmaconsirena.jpg",
      description: "Sistema de alarma con sirena de alta potencia",
      features: ["Sirena 120dB", "Batería de respaldo", "Zona configurable"]
    },
    {
      name: "Alarma Anti-intrusión",
      image: "/images/alarmas/alarmaantiintrusion.jpg",
      description: "Detectores de apertura y movimiento",
      features: ["Sensores magnéticos", "PIR infrarrojo", "Compatible con app"]
    },
    {
      name: "Alarma GSM",
      image: "/images/alarmas/alarmagsm.jpg",
      description: "Sistema con comunicación celular",
      features: ["Alerta por SMS", "Llamada automática", "Sin línea telefónica"]
    },
    {
      name: "Alarma Anti-intrusión",
      image: "/images/alarmas/alarmaemopa.jpg",
      description: "Detectores de apertura y movimiento",
      features: ["Sensores magnéticos", "PIR infrarrojo", "Compatible con app"]
    },
    {
      name: "Alarma Anti-intrusión",
      image: "/images/alarmas/alarmamapfre.webp",
      description: "Detectores de apertura y movimiento",
      features: ["Sensores magnéticos", "PIR infrarrojo", "Compatible con app"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        {/* Header */}
        <div className="product-header">
          <h1>
            Sistemas de <span className="highlight">Alarmas</span>
          </h1>
          <p>
            Protección inteligente contra intrusos y emergencias
          </p>
        </div>

        <div className="product-info">
          <h2>
            Beneficios de las <span className="highlight">alarmas</span>
          </h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="icon">⚡</div>
              <h3>Respuesta Inmediata</h3>
              <p>Alerta instantánea ante cualquier intrusión</p>
            </div>
            <div className="info-item">
              <div className="icon">🔔</div>
              <h3>Disuasión</h3>
              <p>Evita robos antes de que ocurran</p>
            </div>
            <div className="info-item">
              <div className="icon">📞</div>
              <h3>Notificaciones</h3>
              <p>Recibe alertas en tu celular al instante</p>
            </div>
          </div>
        </div>
        <br />
        <br /> 

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image alarms">
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
                  href="https://wa.me/573152284097?text=Me%20interesa%20información%20sobre%20alarmas"
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
