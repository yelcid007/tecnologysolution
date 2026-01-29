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
              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Teléfono Fijo</h3>
                  <p>031 2438912</p>
                </div>
              </div>

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
                <span className="btn-content">
                  <svg className="whatsapp-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chatear en WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
