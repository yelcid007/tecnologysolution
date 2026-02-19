import '../styles/Products.css';

export default function Almacenamiento() {
  const products = [
    {
      name: "Disco Externo Toshiba Canvio 1TB",
      description: "Disco externo USB 3.0 para almacenamiento portátil",
      image: "/images/almacenamiento/Disco Externo 1 Tb Toshiba Canvio Basics Usb 3.0.webp",
      features: ["1TB capacidad", "USB 3.0", "Portátil"]
    },
    {
      name: "Disco SSD Adata Legend 860 500GB",
      description: "SSD NVMe PCIe Gen4 para alto rendimiento",
      image: "/images/almacenamiento/Disco Ssd Adata 500gb Legend 860 Pcie Gen4 X4 M.2 2280 Color Negro.webp",
      features: ["500GB", "PCIe Gen4", "M.2 2280"]
    },
    {
      name: "Disco SSD Patriot P300 Plus 512GB",
      description: "SSD M.2 PCIe Gen3 NVMe de alto rendimiento",
      image: "/images/almacenamiento/Disco Sólido M.2 512GB Patriot P300 Plus PCIe Gen3 NVMe Azul.webp",
      features: ["512GB", "PCIe Gen3", "NVMe"]
    },
    {
      name: "SSD Kingston 240GB SATA",
      description: "Disco sólido interno Kingston para PC",
      image: "/images/almacenamiento/Disco sólido SSD interno Kingston SA400S37-240GB Negro.webp",
      features: ["240GB", "SATA", "Interno"]
    },
    {
      name: "Disco SSD Ulike 1TB NVMe Gen3",
      description: "SSD M.2 NVMe Gen3 X4 para máximo rendimiento",
      image: "/images/almacenamiento/Ulike Disco Solido Ssd 1tb Nvme M.2 Gen 3 X4 Pciex 2280 Negro.webp",
      features: ["1TB", "NVMe Gen3", "2280"]
    },
    {
      name: "Disco SSD Ulike 512GB NVMe Gen3",
      description: "SSD M.2 NVMe Gen3 para almacenamiento rápido",
      image: "/images/almacenamiento/Ulike Disco Solido Ssd 512gb Nvme M.2 Gen 3 X4 Pciex 2280 Negro.webp",
      features: ["512GB", "NVMe Gen3", "Rápido"]
    },
    {
      name: "SSD Ulike 1TB SATA III",
      description: "Disco sólido interno SSD de 1TB SATA III",
      image: "/images/almacenamiento/Ulike Disco Sólido Interno 1tb Ssd Sata Lll 3 1 Tb Negro.webp",
      features: ["1TB", "SATA III", "Interno"]
    },
    {
      name: "SSD Silicon Power XS70 4TB Gen4",
      description: "Disco SSD M.2 4TB PCIe Gen 4 ultra rápido",
      image: "/images/almacenamiento/Unidad Ssd M.2 Silicone Power Xs70 4tb Gen 4 Gris.webp",
      features: ["4TB", "PCIe Gen4", "Alto rendimiento"]
    }
  ];

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Almacenamiento y Discos</h1>
        <p>Soluciones de <strong>almacenamiento rápido y confiable</strong> para tus sistemas</p>
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
        <h2>Almacenamiento Profesional</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>⚡ Velocidad</h3>
            <p>Transferencias rápidas con tecnología SSD</p>
          </div>
          <div className="info-item">
            <h3>💾 Capacidad</h3>
            <p>Desde 240GB hasta 4TB de almacenamiento</p>
          </div>
          <div className="info-item">
            <h3>🛡️ Confiabilidad</h3>
            <p>Almacenamiento seguro para tus datos importantes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
