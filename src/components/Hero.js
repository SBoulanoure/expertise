import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-fadeInLeft">{t('hero.title')}</h1>
          <p className="hero-subtitle animate-fadeInLeft delay-200">{t('hero.subtitle')}</p>
          <button className="hero-button animate-fadeInLeft delay-400" onClick={scrollToContact}>
            {t('hero.buttonContact')}
          </button>
        </div>
        <div className="hero-image animate-fadeInRight delay-300">
          <div className="circle-bg animate-pulse"></div>
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=600&fit=crop" alt="Architecture Expert" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
