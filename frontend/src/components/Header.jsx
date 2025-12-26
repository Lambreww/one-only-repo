import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Header.css';
import { smoothScrollTo } from '../utils/smoothScroll';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, logout } = useAuth();

  // ... останалите useEffect и функции ...

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={() => handleNavClick('home')} style={{cursor: 'pointer'}}>
              <h1>JP Systems</h1>
              <span>Industrial & Garage Doors</span>
            </div>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Начало</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>За нас</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Услуги</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}>Галерия</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Контакти</a>
            </nav>

            <div className="header-actions">
              <button 
                className="auth-btn"
                onClick={handleAuthClick}
              >
                {user ? (
                  <>
                    <span className="user-icon">👤</span>
                    <span className="user-name">{user.name}</span>
                    <span className="logout-text"> (Изход)</span>
                  </>
                ) : (
                  'Вход'
                )}
              </button>

              <button 
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
      />
    </>
  );
};

export default Header;