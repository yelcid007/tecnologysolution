import '../styles/Products.css';

export default function DVRs() {
  const products = [
    {
      name: "DVR Dahua Cooper XVR1B16 16 Canales",
      description: "Grabador digital de 16 canales 1080p con H.265+",
      image: "/images/dvrs/Dvr Dahua Cooper Xvr1b16 16 Canales 1080p Lite H265+ P2p 220v.webp",
      features: ["16 canales", "1080p H.265+", "220V"]
    },
    {
      name: "DVR Hikvision 4CH Turbo HD 1080p",
      description: "Grabador profesional de 4 canales con disco duro incluido",
      image: "/images/dvrs/Dvr Hikvision 4ch Turbo Hd 1080p Lite + Disco Duro 110v.webp",
      features: ["4 canales Turbo HD", "1080p", "HDD incluido"]
    },
    {
      name: "DVR Hikvision by HiLook 4 Canales",
      description: "Sistema de grabación de 4 canales 1080p con disco de 500GB",
      image: "/images/dvrs/Dvr Hikvision By Hilook 4 Canales 1080 + Disco Duro 500gb 12v.webp",
      features: ["4 canales", "500GB HDD", "Alimentation 12V"]
    },
    {
      name: "DVR Hikvision Turbo HD 8 Canales",
      description: "Grabador pentahíbrido de 8 canales Full HD",
      image: "/images/dvrs/Hikvision Turbo Hd Dvr 8 Ch Pentahibrido Metalico 1080p Lite.webp",
      features: ["8 canales Turbo HD", "Pentahíbrido", "Carcasa metálica"]
    },
    {
      name: "NVR Imou 10 Canales 4K WiFi",
      description: "Grabadora IP de 10 canales con resolución 4K y WiFi",
      image: "/images/dvrs/Nvr Imou 10 Canales 4k Grabadora Videovigilancia Wifi.webp",
      features: ["10 canales IP", "4K", "WiFi"]
    },
    {
      name: "NVR Inalámbrico Ezviz 4CH 5MP",
      description: "Grabadora inalámbrica de 4 canales con resolución 5MP",
      image: "/images/dvrs/Nvr Inalámbrico 4ch Ezviz 5mp Cs-x5s-r100-4w 110v.webp",
      features: ["4 canales inalámbricos", "5MP", "110V"]
    },
    {
      name: "Soluciones de Grabación Profesionales",
      description: "Sistemas completos de videovigilancia y almacenamiento",
      image: "/images/dvrs/dvr.webp",
      features: ["Videovigilancia 24/7", "Acceso remoto", "Almacenamiento seguro"]
    }
  ];

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>DVRs y Sistemas de Grabación</h1>
        <p>Almacenamiento seguro y confiable para tus <strong>cámaras</strong></p>
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
        <h2>DVRs y NVRs Profesionales</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>🎥 Alta Calidad</h3>
            <p>Grabación en Full HD y 4K</p>
          </div>
          <div className="info-item">
            <h3>🌐 Acceso Remoto</h3>
            <p>Visualiza grabaciones desde cualquier lugar</p>
          </div>
          <div className="info-item">
            <h3>🔒 Seguro</h3>
            <p>Encriptación y protección de datos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
