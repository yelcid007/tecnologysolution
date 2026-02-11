import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Technology Solution's</h3>
            <p>
              Suministros, Instalación y Mantenimiento de sistemas de seguridad
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul>
              <li>📱 Cel: 315 228 4097</li>
              <li>✉️ technologysolution7@gmail.com</li>
              <li>📍 Bogotá, D.C., Colombia</li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Servicios</h3>
            <ul>
              <li>Cámaras de Seguridad</li>
              <li>Sistemas de Alarmas</li>
              <li>DVRs y Grabación</li>
              <li>Instalación de Redes</li>
              <li>Monitores</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Technology Solution's. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
