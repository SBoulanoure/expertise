import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faHammer, faCog, faExclamationTriangle, faWater, faBolt } from '@fortawesome/free-solid-svg-icons';
import './DossiersPage.css';

function PathologiesPage() {
  const { t } = useTranslation();

  const pathologies = [
    {
      icon: faCog,
      titleKey: 'dossiers.pathologies.categories.structurelles',
      itemsKey: 'dossiers.pathologies.categories.structurellesItems',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
    },
    {
      icon: faWater,
      titleKey: 'dossiers.pathologies.categories.humidite',
      itemsKey: 'dossiers.pathologies.categories.humiditeItems',
      image: 'https://images.unsplash.com/photo-1582719366194-b0c56df422d9?w=800&q=80'
    },
    {
      icon: faExclamationTriangle,
      titleKey: 'dossiers.pathologies.categories.revetements',
      itemsKey: 'dossiers.pathologies.categories.revetementsItems',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80'
    },
    {
      icon: faBolt,
      titleKey: 'dossiers.pathologies.categories.thermique',
      itemsKey: 'dossiers.pathologies.categories.thermiqueItems',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
    }
  ];

  return (
    <div className="dossiers-page">
      <div className="dossiers-hero">
        <div className="container">
          <Link to="/" className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
            {t('expertisePages.backButton')}
          </Link>
          <div className="dossiers-hero-content">
            <div className="dossiers-icon-large">
              <FontAwesomeIcon icon={faHammer} />
            </div>
            <h1>{t('dossiers.pathologies.title')}</h1>
            <p className="dossiers-subtitle">{t('dossiers.pathologies.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="dossiers-content">
        <div className="container">
          <div className="intro-section">
            <p className="intro-text">{t('dossiers.pathologies.intro')}</p>
          </div>

          <div className="pathologies-grid">
            {pathologies.map((category, index) => (
              <div key={index} className="pathology-category">
                <div className="category-image">
                  <img src={category.image} alt={t(category.titleKey)} />
                  <div className="category-image-overlay">
                    <div className="category-icon">
                      <FontAwesomeIcon icon={category.icon} />
                    </div>
                  </div>
                </div>
                <div className="category-content">
                  <div className="category-header">
                    <h2>{t(category.titleKey)}</h2>
                  </div>
                  <ul className="pathology-list">
                    {t(category.itemsKey, { returnObjects: true }).map((item, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon-small" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="expertise-approach">
            <h2>{t('dossiers.pathologies.approachTitle')}</h2>
            <div className="approach-steps">
              {t('dossiers.pathologies.approachSteps', { returnObjects: true }).map((step, index) => (
                <div key={index} className="approach-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h2>{t('dossiers.pathologies.ctaTitle')}</h2>
            <p>{t('dossiers.pathologies.ctaText')}</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="cta-button primary">
                {t('dossiers.pathologies.ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PathologiesPage;
