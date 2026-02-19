import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Camaras from './pages/Camaras';
import Alarmas from './pages/Alarmas';
import DVRs from './pages/DVRs';
import Redes from './pages/Redes';
import Monitores from './pages/Monitores';
import Computadores from './pages/Computadores';
import Sensores from './pages/sensores';
import Almacenamiento from './pages/almacenamiento';
import Contacto from './pages/Contacto';
import ControlAcceso from './pages/control_acceso';


function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {!isHome && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camaras" element={<Camaras />} />
            <Route path="/alarmas" element={<Alarmas />} />
            <Route path="/dvrs" element={<DVRs />} />
            <Route path="/redes" element={<Redes />} />
            <Route path="/monitores" element={<Monitores />} />
            <Route path="/computadores" element={<Computadores />} />
            <Route path="/sensores" element={<Sensores />} />
            <Route path="/almacenamiento" element={<Almacenamiento />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/control_acceso" element={<ControlAcceso />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

