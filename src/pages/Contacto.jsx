import '../styles/Contact.css';

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-tech-cyan">Contáctanos</span>
          </h1>
          <p className="text-xl text-gray-600">
            Estamos listos para atender tus necesidades de seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-tech-black">
              Información de <span className="text-tech-cyan">Contacto</span>
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-tech-cyan">📞</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Teléfono Fijo</h3>
                  <p className="text-gray-600">031 2438912</p>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-tech-cyan">📱</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Celular / WhatsApp</h3>
                  <p className="text-gray-600">315 228 4097</p>
                  <a
                    href="https://wa.me/573152284097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tech-cyan hover:underline"
                  >
                    Enviar mensaje →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-tech-cyan">✉️</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Correo Electrónico</h3>
                  <a
                    href="mailto:technologysolution7@gmail.com"
                    className="text-gray-600 hover:text-tech-cyan"
                  >
                    technologysolution7@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-tech-cyan">📍</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                  <p className="text-gray-600">
                    CRA. 8 No 22-59 LOC. 18<br />
                    Bogotá, D.C., Colombia
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-tech-cyan">⏰</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horario de Atención</h3>
                  <p className="text-gray-600">
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
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-3xl font-bold mb-6 text-tech-black">
                Nuestros <span className="text-tech-cyan">Servicios</span>
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-tech-cyan mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Suministro de equipos de seguridad</span>
                </li>
                <li className="flex items-center">
                  <span className="text-tech-cyan mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Instalación profesional</span>
                </li>
                <li className="flex items-center">
                  <span className="text-tech-cyan mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Mantenimiento preventivo y correctivo</span>
                </li>
                <li className="flex items-center">
                  <span className="text-tech-cyan mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Asesoría técnica especializada</span>
                </li>
                <li className="flex items-center">
                  <span className="text-tech-cyan mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Soporte técnico 24/7</span>
                </li>
                <li className="flex items-center">
                  <span className="text-tech-cyan mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Configuración remota</span>
                </li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-tech-cyan to-tech-turquoise rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-tech-black">
                ¿Necesitas una cotización?
              </h3>
              <p className="text-tech-dark mb-6">
                Contáctanos por WhatsApp y recibe atención inmediata
              </p>
              <a
                href="https://wa.me/573152284097?text=Hola,%20necesito%20una%20cotización"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
