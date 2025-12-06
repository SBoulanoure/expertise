import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faShieldAlt, faFire, faWater, faBolt, faWind, faSnowflake, faExplosion } from '@fortawesome/free-solid-svg-icons';
import './DossiersPage.css';

function SinistresPage() {
  const { t } = useTranslation();

  const sinistres = [
    {
      icon: faWater,
      titleKey: 'dossiers.sinistres.types.degatsEaux',
      descKey: 'dossiers.sinistres.types.degatsEauxDesc',
      image: 'https://images.unsplash.com/photo-1590642821220-44a09a99fbfc?w=800&q=80'
    },
    {
      icon: faFire,
      titleKey: 'dossiers.sinistres.types.incendie',
      descKey: 'dossiers.sinistres.types.incendieDesc',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80'
    },
    {
      icon: faWind,
      titleKey: 'dossiers.sinistres.types.catastrophesNaturelles',
      descKey: 'dossiers.sinistres.types.catastrophesNaturellesDesc',
      image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80'
    },
    {
      icon: faBolt,
      titleKey: 'dossiers.sinistres.types.vices',
      descKey: 'dossiers.sinistres.types.vicesDesc',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80'
    },
    {
      icon: faExplosion,
      titleKey: 'dossiers.sinistres.types.effondrement',
      descKey: 'dossiers.sinistres.types.effondrementDesc',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
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
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h1>{t('dossiers.sinistres.title')}</h1>
            <p className="dossiers-subtitle">{t('dossiers.sinistres.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="dossiers-content">
        <div className="container">
          <div className="intro-section">
            <p className="intro-text">{t('dossiers.sinistres.intro')}</p>
          </div>

          <div className="sinistres-grid">
            {sinistres.map((sinistre, index) => (
              <div key={index} className="sinistre-card">
                <div className="sinistre-image">
                  <img src={sinistre.image} alt={t(sinistre.titleKey)} />
                  <div className="sinistre-image-overlay">
                    <div className="sinistre-icon">
                      <FontAwesomeIcon icon={sinistre.icon} />
                    </div>
                  </div>
                </div>
                <div className="sinistre-content">
                  <h3>{t(sinistre.titleKey)}</h3>
                  <p>{t(sinistre.descKey)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="insurance-process">
            <h2>{t('dossiers.sinistres.processTitle')}</h2>
            <div className="process-timeline">
              {t('dossiers.sinistres.processSteps', { returnObjects: true }).map((step, index) => (
                <div key={index} className="timeline-step">
                  <div className="timeline-marker">{index + 1}</div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-role">
            <h2>{t('dossiers.sinistres.roleTitle')}</h2>
            <div className="role-cards">
              {t('dossiers.sinistres.rolePoints', { returnObjects: true }).map((point, index) => (
                <div key={index} className="role-card">
                  <FontAwesomeIcon icon={faCheckCircle} className="role-icon" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h2>{t('dossiers.sinistres.ctaTitle')}</h2>
            <p>{t('dossiers.sinistres.ctaText')}</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="cta-button primary">
                {t('dossiers.sinistres.ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinistresPage;
