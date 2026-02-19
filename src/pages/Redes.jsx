import '../styles/Products.css';

export default function Redes() {
  const products = [
    {
      name: "Switch 8 Puertos TP-LINK LS1008G",
      description: "Switch Gigabit de 8 puertos para redes de alto rendimiento",
      image: "/images/redes/LS1008G Switch 8 Puertos TP-LINK.webp",
      features: ["8 puertos Gigabit", "Plug and Play", "Carcasa metálica"]
    },
    {
      name: "Switch 5 Puertos Gigabit 1000Mbps",
      description: "Switch de red de 5 puertos para conexiones de alta velocidad",
      image: "/images/redes/Switch 5 Puertos 1000mbps Lan Rj45 Suiche De Red Gibabit.webp",
      features: ["5 puertos Gigabit", "1000Mbps", "Bajo consumo"]
    },
    {
      name: "Router Inalámbrico Wifi 6 DS-3WR18X",
      description: "Router con tecnología WiFi 6 de 1800 Mbps dual band",
      image: "/images/redes/DS-3WR18X Router Inalámbrico Wifi 6 1800 Mbps (2.4 GHz y 5 GHz).webp",
      features: ["WiFi 6", "Dual Band 2.4/5 GHz", "1800 Mbps"]
    },
    {
      name: "Router Tenda AC8 Gigabit Rompemuros",
      description: "Router WiFi con 4 antenas de alto alcance",
      image: "/images/redes/Router Repetidor Wifi Tenda Ac8 Rompemuros 4 Antenas Gigabit Color Negro.webp",
      features: ["4 antenas externas", "AC1200", "Gigabit Ethernet"]
    },
    {
      name: "Cable UTP Cat 6 Ditron Ponchado",
      description: "Cable de red Cat 6 con conectores RJ45 ponchados",
      image: "/images/redes/Cable UTP Cat 6 Ditron Ponchado RJ45 Red Internet.webp",
      features: ["Categoría 6", "Conectores RJ45", "Alta velocidad"]
    },
    {
      name: "Cable de Red UTP Cat 8 40Gbps",
      description: "Cable Ethernet Cat 8 para velocidades ultra rápidas",
      image: "/images/redes/Cable De Red Utp Cat 8 Rj45 Ethernet Lan Ponchado 40gbps.webp",
      features: ["Categoría 8", "40 Gbps", "Blindaje mejorado"]
    },
    {
      name: "Adaptador Ethernet USB 3.0 Dacar",
      description: "Adaptador USB a RJ45 Gigabit Ethernet",
      image: "/images/redes/Adaptador Ethernet USB 3.0 Dacar RJ45 1000 Mbps.webp",
      features: ["USB 3.0", "1000 Mbps", "Plug and Play"]
    },
    {
      name: "Soluciones de Red Completas",
      description: "Diseño e implementación de infraestructura de red",
      image: "/images/redes/redes.webp",
      features: ["Cableado estructurado", "Configuración profesional", "Soporte técnico"]
    }
  ];

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Redes e Infraestructura</h1>
        <p>Equipos y soluciones completas de <strong>redes</strong> para tu empresa</p>
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
        <h2>Infraestructura de Red Profesional</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>⚡ Velocidad</h3>
            <p>Transmisión rápida de datos y video en tiempo real</p>
          </div>
          <div className="info-item">
            <h3>🔌 PoE</h3>
            <p>Alimentación y datos en un solo cable Ethernet</p>
          </div>
          <div className="info-item">
            <h3>🛡️ Confiabilidad</h3>
            <p>Red estable sin interrupciones para tu negocio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
