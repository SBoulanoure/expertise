import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSearchPlus, faBalanceScale, faMoneyBillWave, faHome, faExclamationTriangle, faHammer, faShieldAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [expertiseDropdownOpen, setExpertiseDropdownOpen] = useState(false);
  const [dossiersDropdownOpen, setDossiersDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const expertiseDropdownRef = useRef(null);
  const dossiersDropdownRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expertiseDropdownRef.current && !expertiseDropdownRef.current.contains(event.target)) {
        setExpertiseDropdownOpen(false);
      }
      if (dossiersDropdownRef.current && !dossiersDropdownRef.current.contains(event.target)) {
        setDossiersDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const expertiseLinks = [
    { titleKey: 'experience.domains.expertise1', path: '/expertise/assistance-reception', icon: faCheckCircle },
    { titleKey: 'experience.domains.expertise2', path: '/expertise/expertise-privee', icon: faSearchPlus },
    { titleKey: 'experience.domains.expertise3', path: '/expertise/protection-juridique', icon: faBalanceScale },
    { titleKey: 'experience.domains.expertise4', path: '/expertise/expert-fiscal', icon: faMoneyBillWave },
    { titleKey: 'experience.domains.expertise5', path: '/expertise/expertise-immobiliere', icon: faHome },
    { titleKey: 'experience.domains.expertise6', path: '/expertise/catastrophe-naturelle', icon: faExclamationTriangle }
  ];

  const dossiersLinks = [
    { titleKey: 'header.dossiers.pathologies', path: '/dossiers/pathologies-batiment', icon: faHammer },
    { titleKey: 'header.dossiers.sinistres', path: '/dossiers/sinistres-assurances', icon: faShieldAlt }
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpertiseDropdownOpen(false);
    setDossiersDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <span className="phone">{t('header.phone')}</span>
          <div className="language-switcher">
            <button 
              className={i18n.language === 'fr' ? 'active' : ''} 
              onClick={() => changeLanguage('fr')}
            >
              Français
            </button>
            <button 
              className={i18n.language === 'ar' ? 'active' : ''} 
              onClick={() => changeLanguage('ar')}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <div className="container">
          <Link to="/" className="logo">
            <img src={require('../Logo.png')} alt="Moriningeneri" />
          </Link>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/#expertise" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                }
                closeMobileMenu();
              }}>
                {t('header.menu.expertise')}
              </Link>
            </li>
            <li 
              className="dropdown"
              ref={expertiseDropdownRef}
            >
              <a 
                href="#expertises" 
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setExpertiseDropdownOpen(!expertiseDropdownOpen);
                }}
              >
                {t('header.menu.expertises')} ▾
              </a>
              {expertiseDropdownOpen && (
                <ul className="dropdown-menu">
                  {expertiseLinks.map((expertise, index) => (
                    <li key={index}>
                      <Link 
                        to={expertise.path}
                        onClick={() => {
                          setExpertiseDropdownOpen(false);
                          closeMobileMenu();
                        }}
                      >
                        <span className="dropdown-icon">
                          <FontAwesomeIcon icon={expertise.icon} />
                        </span>
                        {t(expertise.titleKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li 
              className="dropdown"
              ref={dossiersDropdownRef}
            >
              <a 
                href="#dossiers" 
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setDossiersDropdownOpen(!dossiersDropdownOpen);
                }}
              >
                {t('header.menu.dossiers')} ▾
              </a>
              {dossiersDropdownOpen && (
                <ul className="dropdown-menu">
                  {dossiersLinks.map((dossier, index) => (
                    <li key={index}>
                      <Link 
                        to={dossier.path}
                        onClick={() => {
                          setDossiersDropdownOpen(false);
                          closeMobileMenu();
                        }}
                      >
                        <span className="dropdown-icon">
                          <FontAwesomeIcon icon={dossier.icon} />
                        </span>
                        {t(dossier.titleKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/#services" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }
                closeMobileMenu();
              }}>
                {t('header.menu.services')}
              </Link>
            </li>
            <li>
              <Link to="/actualites" onClick={closeMobileMenu}>
                {t('header.menu.actualites')}
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
                closeMobileMenu();
              }}>
                {t('header.menu.contact')}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
