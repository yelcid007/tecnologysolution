import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - Solo mostrar cuando NO es Home */}
        {!isHome && (
          <Link to="/" className="navbar-logo">
            <Logo />
          </Link>
        )}
       
        {/* Desktop Navigation Links */}
        <div className="navbar-links navbar-desktop">
          <Link to="/" className="navbar-link" onClick={closeMenus}>Inicio</Link>
          <Link to="/camaras" className="navbar-link" onClick={closeMenus}>Cámaras</Link>
          <Link to="/alarmas" className="navbar-link" onClick={closeMenus}>Control de acceso</Link>
          <Link to="/redes" className="navbar-link" onClick={closeMenus}>Redes</Link>
          <Link to="/monitores" className="navbar-link" onClick={closeMenus}>Monitores</Link>
          <Link to="/alarmas" className="navbar-link" onClick={closeMenus}>Alarmas</Link>
          <Link to="/dvrs" className="navbar-link" onClick={closeMenus}>DVRs</Link>
          <Link to="/sensores" className="navbar-link" onClick={closeMenus}>Almacenamiento</Link>
          <Link to="/computadores" className="navbar-link" onClick={closeMenus}>Cerradura inteligente</Link>
          <Link to="/contacto" className="navbar-link" onClick={closeMenus}>Contacto</Link>
        </div>

        {/* Mobile Navigation Links */}
        <div className="navbar-links navbar-mobile">
          <Link to="/" className="navbar-link" onClick={closeMenus}>Inicio</Link>
          
          {/* Dropdown Categorías */}
          <div className={`navbar-dropdown ${dropdownOpen ? 'active' : ''}`}>
            <span className="navbar-link dropdown-trigger" onClick={toggleDropdown}>
              Categorías
            </span>
            <div className="dropdown-menu">
              <Link to="/camaras" className="dropdown-item" onClick={closeMenus}>Cámaras</Link>
              <Link to="/alarmas" className="dropdown-item" onClick={closeMenus}>Control de acceso</Link>
              <Link to="/redes" className="dropdown-item" onClick={closeMenus}>Redes</Link>
              <Link to="/monitores" className="dropdown-item" onClick={closeMenus}>Monitores</Link>
              <Link to="/alarmas" className="dropdown-item" onClick={closeMenus}>Alarmas</Link>
              <Link to="/dvrs" className="dropdown-item" onClick={closeMenus}>DVRs</Link>
              <Link to="/sensores" className="dropdown-item" onClick={closeMenus}>Almacenamiento</Link>
              <Link to="/computadores" className="dropdown-item" onClick={closeMenus}>Cerradura inteligente</Link>
            </div>
          </div>
          
          <Link to="/contacto" className="navbar-link" onClick={closeMenus}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
