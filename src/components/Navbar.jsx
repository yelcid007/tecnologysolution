import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import '../styles/Navbar.css';

export default function Navbar() {
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
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenus}>
          <Logo />
        </Link>

        {/* Navigation Links */}
        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="navbar-link" onClick={closeMenus}>Inicio</Link>
          
          {/* Dropdown Categorías */}
          <div className={`navbar-dropdown ${dropdownOpen ? 'active' : ''}`}>
            <span className="navbar-link dropdown-trigger" onClick={toggleDropdown}>
              Categorías
            </span>
            <div className="dropdown-menu">
              <Link to="/camaras" className="dropdown-item" onClick={closeMenus}>Cámaras</Link>
              <Link to="/alarmas" className="dropdown-item" onClick={closeMenus}>Alarmas</Link>
              <Link to="/dvrs" className="dropdown-item" onClick={closeMenus}>DVRs</Link>
              <Link to="/redes" className="dropdown-item" onClick={closeMenus}>Redes</Link>
              <Link to="/monitores" className="dropdown-item" onClick={closeMenus}>Monitores</Link>
              <Link to="/computadores" className="dropdown-item" onClick={closeMenus}>Computadores</Link>
              <Link to="/sensores" className="dropdown-item" onClick={closeMenus}>Sensores</Link>
            </div>
          </div>
          
          <Link to="/contacto" className="navbar-link" onClick={closeMenus}>Contacto</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-menu-btn" onClick={toggleMobileMenu}>
          <svg className="navbar-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
