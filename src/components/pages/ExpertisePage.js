import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faCheckCircle, faSearchPlus, faBalanceScale, faMoneyBillWave, faHome, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './ExpertisePage.css';

function ExpertisePage() {
  const { t } = useTranslation();
  const { expertiseType } = useParams();

  // Map expertise types to their data
  const expertiseMapping = {
    'assistance-reception': {
      key: 'assistanceReception',
      icon: faCheckCircle,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      features: [
        { icon: faCheckCircle, title: 'Vérification Complète' },
        { icon: faSearchPlus, title: 'Inspection Détaillée' },
        { icon: faHome, title: 'Tous Types de Biens' }
      ]
    },
    'expertise-privee': {
      key: 'expertisePrivee',
      icon: faSearchPlus,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      features: [
        { icon: faSearchPlus, title: 'Analyse Approfondie' },
        { icon: faCheckCircle, title: 'Rapport Détaillé' },
        { icon: faBalanceScale, title: 'Expertise Indépendante' }
      ]
    },
    'protection-juridique': {
      key: 'protectionJuridique',
      icon: faBalanceScale,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      features: [
        { icon: faBalanceScale, title: 'Défense Juridique' },
        { icon: faCheckCircle, title: 'Conseil Expert' },
        { icon: faSearchPlus, title: 'Analyse Légale' }
      ]
    },
    'expert-fiscal': {
      key: 'expertFiscal',
      icon: faMoneyBillWave,
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      features: [
        { icon: faMoneyBillWave, title: 'Évaluation Fiscale' },
        { icon: faCheckCircle, title: 'Optimisation' },
        { icon: faSearchPlus, title: 'Audit Complet' }
      ]
    },
    'expertise-immobiliere': {
      key: 'expertiseImmobiliere',
      icon: faHome,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      features: [
        { icon: faHome, title: 'Évaluation Immobilière' },
        { icon: faCheckCircle, title: 'État des Lieux' },
        { icon: faSearchPlus, title: 'Analyse Marché' }
      ]
    },
    'catastrophe-naturelle': {
      key: 'catastropheNaturelle',
      icon: faExclamationTriangle,
      image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80',
      features: [
        { icon: faExclamationTriangle, title: 'Urgence 24/7' },
        { icon: faCheckCircle, title: 'Constat Rapide' },
        { icon: faSearchPlus, title: 'Évaluation Dommages' }
      ]
    }
  };

  const currentMapping = expertiseMapping[expertiseType] || expertiseMapping['assistance-reception'];
  const expertiseKey = `expertisePages.${currentMapping.key}`;

  return (
    <div className="expertise-page">
      <div className="expertise-hero">
        <div className="container">
          
          <Link to="/" className="back-button">
                      <FontAwesomeIcon icon={faArrowLeft} />
                      {t('expertisePages.backButton')}
                    </Link>
          <div className="expertise-hero-content">
            <div className="expertise-icon-large">
              <FontAwesomeIcon icon={currentMapping.icon} />
            </div>
            <h1>{t(`${expertiseKey}.title`)}</h1>
            <p className="expertise-subtitle">{t(`${expertiseKey}.description`)}</p>
          </div>
        </div>
      </div>

      <div className="expertise-content">
        <div className="container">
          {/* Hero Image Section */}
          <div className="expertise-image-banner animate-fadeIn">
            <img src={currentMapping.image} alt={t(`${expertiseKey}.title`)} />
            <div className="image-overlay">
              <div className="features-overlay">
                {currentMapping.features.map((feature, index) => (
                  <div key={index} className="feature-badge">
                    <FontAwesomeIcon icon={feature.icon} />
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-section animate-fadeInLeft delay-200">
              <div className="section-header">
                <div className="section-icon">
                  <FontAwesomeIcon icon={currentMapping.icon} />
                </div>
                <h2>{t('expertisePages.servicesTitle')}</h2>
              </div>
              <ul className="services-list">
                {t(`${expertiseKey}.services`, { returnObjects: true }).map((service, index) => (
                  <li key={index} className={`animate-fadeIn delay-${300 + index * 100}`}>
                    <span className="check-icon">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="expertise-section animate-fadeInRight delay-400">
              <div className="section-header">
                <div className="section-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h2>{t('expertisePages.benefitsTitle')}</h2>
              </div>
              <div className="benefits-grid">
                {t(`${expertiseKey}.benefits`, { returnObjects: true }).map((benefit, index) => (
                  <div key={index} className={`benefit-card animate-scaleIn delay-${500 + index * 100} hover-lift`}>
                    <div className="benefit-icon">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cta-section animate-fadeInUp delay-700">
            <div className="cta-content">
              <div className="cta-icon">
                <FontAwesomeIcon icon={currentMapping.icon} />
              </div>
              <h2>{t('expertisePages.ctaTitle')}</h2>
              <p>{t('expertisePages.ctaSubtitle')}</p>
              <div className="cta-buttons">
                <a href="tel:+212681983805" className="cta-button primary hover-lift">
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px' }} />
                  {t('expertisePages.ctaPhone')} +212 6 81 98 38 05
                </a>
                <Link to="/#contact" className="cta-button secondary hover-lift">
                  <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '10px' }} />
                  {t('expertisePages.ctaContact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertisePage;
