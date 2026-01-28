import '../styles/Home.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            <span className="highlight">Tecnology Solution's</span>
          </h1>
          <p className="hero-subtitle">
            Suministros • Instalación • Mantenimiento
          </p>
          <p className="hero-description">
            Sistemas de Seguridad para Casas, Empresas y Conjuntos
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

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">
            Nuestros <span className="highlight">Servicios</span>
          </h2>
          
          <div className="services-grid">
            {/* Service Card 1 */}
            <div className="service-card">
              <div className="service-icon">📹</div>
              <h3>Cámaras de Seguridad</h3>
              <p>
                CCTV, cámaras IP, vigilancia residencial y empresarial con la mejor calidad de imagen.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="service-card">
              <div className="service-icon">🚨</div>
              <h3>Sistemas de Alarmas</h3>
              <p>
                Alarmas contra intrusos, sensores de movimiento y sistemas de alerta temprana.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="service-card">
              <div className="service-icon">💾</div>
              <h3>DVRs y Grabación</h3>
              <p>
                Sistemas de grabación digital con almacenamiento seguro y acceso remoto.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Redes</h3>
              <p>
                Instalación y configuración de redes para sistemas de seguridad integrados.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Monitores</h3>
              <p>
                Pantallas de monitoreo profesionales para visualización en tiempo real.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Mantenimiento</h3>
              <p>
                Soporte técnico y mantenimiento preventivo para garantizar el funcionamiento óptimo.
              </p>
            </div>
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
     {/* <section className="contact-cta">
        <div className="contact-cta-container">
          <h2>
            ¿Listo para proteger tu propiedad?
          </h2>
          <p>
            Contáctanos hoy y recibe una cotización personalizada
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="icon">📞</span> 031 2438912
            </div>
            <div className="contact-info-item">
              <span className="icon">📱</span> 315 228 4097
            </div>
            <div className="contact-info-item">
              <span className="icon">✉️</span> technologysolution7@gmail.com
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}
