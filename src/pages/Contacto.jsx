import '../styles/Contact.css';

export default function Contacto() {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h1>
            <span className="highlight">Contáctanos</span>
          </h1>
          <p>
            Estamos listos para atender tus necesidades de seguridad
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-box">
            <h2>
              Información de <span className="highlight">Contacto</span>
            </h2>

            <div className="contact-items">

              {/* Mobile */}
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>Celular / WhatsApp</h3>
                  <p>315 228 4097</p>
                  <a
                    href="https://wa.me/573152284097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Enviar mensaje →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Correo Electrónico</h3>
                  <a
                    href="mailto:technologysolution7@gmail.com"
                    className="contact-email"
                  >
                    technologysolution7@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Ubicación</h3>
                  <p>
                    CRA. 8 No 22-59 LOC. 18<br />
                    Bogotá, D.C., Colombia
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h3>Horario de Atención</h3>
                  <p>
                    Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services and CTA */}
          <div>
            {/* Services Summary */}
            <div className="services-box">
              <h2>
                Nuestros <span className="highlight">Servicios</span>
              </h2>
              <ul className="services-list">
                <li>
                  <span className="check">✓</span>
                  <span>Suministro de equipos de seguridad</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Instalación profesional</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Mantenimiento preventivo y correctivo</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Asesoría técnica especializada</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Soporte técnico 24/7</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>Configuración remota</span>
                </li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="cta-box">
              <h3>¿Necesitas una cotización?</h3>
              <p>
                Contáctanos por WhatsApp y recibe atención inmediata
              </p>
              <a
                href="https://wa.me/573152284097?text=Hola,%20necesito%20una%20cotización"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
