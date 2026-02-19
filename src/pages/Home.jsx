import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Logo Section */}
      <section className="logo-section">
        <Link to="/">
          <Logo />
        </Link>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            <span className="highlight">Tecnology Solution's</span>
          </h1>
          <p className="hero-subtitle">
            Tu seguridad, nuestra tecnología
          </p>
          
          <div className="hero-cta">
            <a
              href="https://wa.me/573152284097"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </section>

      {/* Navbar Section */}
      <div className="navbar-section">
        <Navbar />
      </div>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">
            Nuestros <span className="highlight">productos</span>
          </h2>
          
          <div className="services-grid">
            {/* Service Card 1 */}
            <Link to="/camaras" className="service-card">
              <img src="/images/camaras/camaras.webp" alt="Camaras de seguridad" />
              <h3>Cámaras de vigilancia</h3>
              <p>
                CCTV, cámaras IP, vigilancia residencial y empresarial con la mejor calidad de imagen.
              </p>
            </Link>

            {/* Service Card 2 */}
            <Link to="/alarmas" className="service-card">
              <img src="/images/alarmas/alarmas.jpg" alt="Sistemas de Alarmas" />
              <h3>Sistemas de Alarmas</h3>
              <p>
                Alarmas contra intrusos, sensores de movimiento y sistemas de alerta temprana.
              </p>
            </Link>

            {/* Service Card 3 */}
            <Link to="/dvrs" className="service-card">
              <img src="/images/dvrs/dvr.webp" alt="DVRs y Grabación" />
              <h3>DVRs y Grabación</h3>
              <p>
                Sistemas de grabación digital con almacenamiento seguro y acceso remoto.
              </p>
            </Link>

            {/* Service Card 4 */}
            <Link to="/redes" className="service-card">
              <img src="/images/redes/redes.webp" alt="Redes" />
              <h3>Redes</h3>
              <p>
                Instalación y configuración de redes para sistemas de seguridad integrados.
              </p>
            </Link>

            {/* Service Card 5 */}
            <Link to="/monitores" className="service-card">
              <img src="/images/monitores/monitores.png" alt="Monitores" />
              <h3>Monitores</h3>
              <p>
                Pantallas de monitoreo profesionales para visualización en tiempo real.
              </p>
            </Link>

            {/* Service Card 6 */}
            <Link to="/mantenimiento" className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Mantenimiento</h3>
              <p>
                Soporte técnico y mantenimiento preventivo para garantizar el funcionamiento óptimo.
              </p>
            </Link>

            {/* Service Card 7 */}
            <Link to="/Control_acceso" className="service-card">
              <img src="/images/control_acceso/control_acceso.png" alt="Control de acceso" />
              <h3>Control de acceso</h3>
              <p>
                Sistemas inteligentes de autenticación, control de entradas y salidas con monitoreo en tiempo real y máxima seguridad.
              </p>
            </Link>

            {/* Service Card 7 */}
            <Link to="/computadores" className="service-card">
              <img src="/images/computadores/computadores.webp" alt="Computadores" />
              <h3>Computadores</h3>
              <p>
                Equipos de alto rendimiento para trabajo y seguridad, configurados para operación continua, monitoreo eficiente y máxima estabilidad del sistema.
              </p>
            </Link>

            <Link to="/almacenamiento" className="service-card">
              <img src="/images/almacenamiento/almacenamiento.avif" alt="Almacenamiento" />
              <h3>Almacenamiento</h3>
              <p>
                Discos duros de alta capacidad y rendimiento, diseñados para grabación continua, resguardo seguro de video y funcionamiento confiable en sistemas de vigilancia.
              </p>
            </Link>

            <Link to="/cerraduras_inteligentes" className="service-card">
              <img src="/images/cerraduras_inteligentes/cerraduras_inteligentes.webp" alt="Cerraduras inteligentes" />
              <h3>Cerraduras inteligentes</h3>
              <p>
                Sistemas de acceso electrónico con apertura por huella, tarjeta, código o app móvil, diseñados para brindar mayor seguridad, control y comodidad en hogares y empresas.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">
            <span className="highlight">¿Por qué elegirnos?</span>
          </h2>
          
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-icon">✓</div>
              <h3>Experiencia</h3>
              <p>Años de trayectoria en seguridad</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">🏆</div>
              <h3>Calidad</h3>
              <p>Productos de las mejores marcas</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">⚡</div>
              <h3>Rapidez</h3>
              <p>Instalación rápida y profesional</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon">💬</div>
              <h3>Soporte</h3>
              <p>Atención personalizada 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className='clientes'>
        <div className="container">
          <h2 className="section-title">
            <span>Nuestros clientes</span>
          </h2>
          <div className="clientes-logos">
            <div className="cliente">
              <img src="/images/Clientes/empresa1.png" alt="Empresa 1" />
            </div>
            <div className="cliente">
              <img src="/images/Clientes/empresa2.png" alt="Empresa 2" />
            </div>
            <div className="cliente">
              <img src="/images/Clientes/empresa3.png" alt="Empresa 3" />
            </div>
            <div className="cliente">
              <img src="/images/Clientes/empresa4.png" alt="Empresa 4" />
            </div>
            <div className="cliente">
              <img src="/images/Clientes/empresa5.jpeg" alt="Empresa 5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
