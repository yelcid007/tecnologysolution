import '../styles/Products.css';

export default function Monitores() {
  const products = [
    {
      name: "Monitor 22\" Full HD 100Hz",
      description: "Monitor Full HD con soporte HDMI para PC",
      image: "/images/monitores/Monitor 22 Full Hd 100hz Hdmi Para Pc Varias Marcas Negro 110v.webp",
      features: ["1920x1080 Full HD", "100Hz", "110V"]
    },
    {
      name: "Monitor BenQ 32\" 4K UltraHD",
      description: "Pantalla 4K especial para diseño y monitoreo",
      image: "/images/monitores/Monitor Benq 32 Ma320u 4k 3840 X 2160 Especial Para Mac Gris.webp",
      features: ["3840x2160 4K", "32 pulgadas", "HDR"]
    },
    {
      name: "Monitor HP 31.5\" FHD",
      description: "Pantalla plana HP para monitoreo profesional",
      image: "/images/monitores/Monitor Hp 31.5 Pulgadas 532sf Fhd Plano Negro Negro.webp",
      features: ["1920x1080 FHD", "31.5 pulgadas", "Panel plano"]
    },
    {
      name: "Monitor HP 27\" FHD Series 5",
      description: "Monitor HP con panel plateado para seguridad",
      image: "/images/monitores/Monitor Hp Serie 5-527sf Fhd De 27 Plateado Plateado.webp",
      features: ["1920x1080 FHD", "27 pulgadas", "Diseño moderno"]
    },
    {
      name: "Monitor Kalley 27\" Full HD",
      description: "Pantalla plana Kalley para monitoreo continuo",
      image: "/images/monitores/Monitor Kalley 27 M27fp3 Full Hd Plano Negro.webp",
      features: ["1920x1080 FHD", "27 pulgadas", "Panel IPS"]
    },
    {
      name: "Monitor Kalley Gamer 27\" 180Hz",
      description: "Pantalla gaming Kalley de alta velocidad",
      image: "/images/monitores/Monitor Kalley Gamer 27 Pulgadas M27g180 Plano Negro.webp",
      features: ["27 pulgadas", "180Hz", "Respuesta rápida"]
    },
    {
      name: "Monitor LG 27\" IPS 120Hz HDR",
      description: "Pantalla LG profesional con tecnología IPS",
      image: "/images/monitores/Monitor LG 27 Pulgadas Ips 120hz Hdr 10 1ms Full Hd 27u411a-b Negro.webp",
      features: ["27 pulgadas", "IPS 120Hz", "HDR10"]
    },
    {
      name: "Monitor Magnux Gamer Curvo 32\"",
      description: "Pantalla gaming curva para experiencia inmersiva",
      image: "/images/monitores/Monitor Magnux Gamer Monitor Pc Led 32 Pulgadas Curvo Color Negro.webp",
      features: ["32 pulgadas", "Pantalla curva", "LED"]
    }
  ];

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Monitores de Seguridad</h1>
        <p>Pantallas profesionales para <strong>monitoreo en tiempo real</strong></p>
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
        <h2>Monitores Profesionales de Seguridad</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>👁️ Alta Definición</h3>
            <p>Imágenes nítidas y claras en todas las resoluciones</p>
          </div>
          <div className="info-item">
            <h3>⏰ Operación 24/7</h3>
            <p>Diseñados para monitoreo continuo sin interrupciones</p>
          </div>
          <div className="info-item">
            <h3>📺 Multi-vista</h3>
            <p>Visualiza múltiples cámaras simultáneamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
