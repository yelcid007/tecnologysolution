import '../styles/Products.css';

export default function Computadores() {
  const products = [
    {
      name: "Computador I5 8GB RAM 240GB SSD con Monitor",
      description: "PC de escritorio con procesador Intel Core i5 y monitor 19 incluido",
      image: "/images/computadores/Computador I5 Ram 8gb Ssd 240gb con Monitor 19 Usado 240 Gb 8 Gb.webp",
      features: ["Intel Core i5", "8GB RAM", "240GB SSD"]
    },
    {
      name: "CPU Torre Intel Core i5 6ta Gen Reacondicionado",
      description: "Torre CPU reacondicionada con procesador Intel Core i5 sexta generación",
      image: "/images/computadores/Cpu Torre Intel Core I5 6ta Gen Ram 8gb Disco 500gb 8 Gb (Reacondicionado).webp",
      features: ["Intel Core i5 6ta Gen", "8GB RAM", "500GB Disco"]
    },
    {
      name: "Portátil HP OmniBook 16 pulgadas Ryzen 5 8GB RAM",
      description: "Laptop HP con procesador AMD Ryzen 5, pantalla 16 pulgadas táctil",
      image: "/images/computadores/Portátil Hp Omnibook 5 16-bc1052la Amd Ryzen 5-8540u 8gb Ram 512gb Ssd 16  2k Pantalla Táctil Windows 11 Home.webp",
      features: ["AMD Ryzen 5-8540u", "8GB RAM", "512GB SSD", "Pantalla táctil 2K"]
    },
    {
      name: "Todo en Uno HP AIO Core i5 16GB RAM 512GB SSD",
      description: "PC todo en uno HP con procesador Core i5 y pantalla FHD 23.8 pulgadas",
      image: "/images/computadores/Todo En Uno Aio Hp Core I5 1334u 16gb 512gb Fhd 23.8 Negro.webp",
      features: ["Intel Core i5", "16GB RAM", "512GB SSD", "Pantalla FHD 23.8"]
    },
    {
      name: "Todo en Uno Lenovo AIO Core i3 8GB RAM",
      description: "PC todo en uno Lenovo con procesador Core i3 de última generación",
      image: "/images/computadores/Todo En Uno Aio Lenovo A100 Core I3 N305 8gb 512gb Fhd 23.8 Color Gris.webp",
      features: ["Intel Core i3", "8GB RAM", "512GB SSD", "FHD 23.8"]
    },
    {
      name: "Todo en Uno HP Ryzen 5 12GB RAM",
      description: "All-in-one HP con procesador AMD Ryzen 5 y almacenamiento combinado",
      image: "/images/computadores/Todo En Uno Hp Amd Ryzen 5 5500 Ram 12gb Ssd 256gb + Hdd 1tb Negro 110v.webp",
      features: ["AMD Ryzen 5 5500", "12GB RAM", "256GB SSD + 1TB HDD"]
    },
    {
      name: "Todo en Uno HP Core i3 16GB RAM 512GB SSD",
      description: "PC todo en uno compacto con Core i3 y 16GB de memoria RAM",
      image: "/images/computadores/Todo En Uno Hp Intel Core I3 1215u Ssd 512gb Ram 16gb Win 11 Blanco 110v.webp",
      features: ["Intel Core i3", "16GB RAM", "512GB SSD", "Windows 11"]
    },
    {
      name: "Portátil Gaming ASUS TUF F16 Intel i7 32GB RAM",
      description: "Laptop gaming profesional ASUS con RTX 5060 y pantalla 165Hz",
      image: "/images/computadores/Computador Portatil Gamer Asus Tuf Gaming F16 Mecha Gray 16, Intel Core I7 14650hx, 32gb De Ram, 1tb Ssd, Nvidia Geforce Rtx 5060 8gb, 165hz 1920x1200px Windows 11 Home.webp",
      features: ["Intel Core i7", "32GB RAM", "1TB SSD", "RTX 5060", "165Hz"]
    },
    {
      name: "Torre CPU Gamer Ryzen 5 9600X 32GB RAM",
      description: "Computadora gamer de escritorio con procesador Ryzen 5 9600X",
      image: "/images/computadores/Torre Cpu Gamer Ryzen 5 9600x Amd Radeon 1tb 32gb Ram Pc 32 Gb.webp",
      features: ["AMD Ryzen 5 9600X", "32GB RAM", "1TB SSD", "AMD Radeon"]
    },
    {
      name: "Soluciones de Computadores Completas",
      description: "Equipos y sistemas profesionales para todas las necesidades",
      image: "/images/computadores/computadores.webp",
      features: ["Última tecnología", "Diferentes configuraciones", "Soporte técnico"]
    }
  ];

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>Computadores y Equipos de Cómputo</h1>
        <p>Equipos de <strong>alta calidad</strong> para todas tus necesidades</p>
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
        <h2>Equipos de Cómputo de Calidad</h2>
        <div className="info-grid">
          <div className="info-item">
            <h3>💻 Última Tecnología</h3>
            <p>Equipos de marcas reconocidas y últimas generaciones</p>
          </div>
          <div className="info-item">
            <h3>🛡️ Garantía Completa</h3>
            <p>Protección y servicio técnico incluido</p>
          </div>
          <div className="info-item">
            <h3>⚡ Alto Rendimiento</h3>
            <p>Optimizados para máxima productividad</p>
          </div>
        </div>
      </div>
    </div>
  );
}
