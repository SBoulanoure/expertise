import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSearchPlus, faBalanceScale, faMoneyBillWave, faHome, faExclamationTriangle, faEnvelope, faGavel, faFileAlt, faBuilding, faUserTie } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

function Experience() {
  const { t } = useTranslation();

  const expertises = [
    { key: 'expertise1', icon: faCheckCircle, link: 'assistance-reception' },
    { key: 'expertise2', icon: faSearchPlus, link: 'expertise-privee' },
    { key: 'expertise3', icon: faBalanceScale, link: 'protection-juridique' },
    { key: 'expertise4', icon: faMoneyBillWave, link: 'expert-fiscal' },
    { key: 'expertise5', icon: faHome, link: 'expertise-immobiliere' },
    { key: 'expertise6', icon: faExclamationTriangle, link: 'catastrophe-naturelle' }
  ];

  const statsIcons = [
    faEnvelope,
    faGavel,
    faFileAlt,
    faBuilding,
    faUserTie
  ];

  return (
    <section className="experience">
      <div className="container">
        <h2 className="experience-title animate-fadeInUp">{t('experience.title')}</h2>
        
        <div className="stats-section">
          {t('experience.items', { returnObjects: true }).map((item, index) => (
            <div key={index} className={`stat-item animate-fadeInUp delay-${(index + 2) * 100} hover-lift`}>
              <div className="stat-icon">
                <FontAwesomeIcon icon={statsIcons[index]} />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="domains-section">
          <p className="domains-intro animate-fadeIn delay-600">{t('experience.domains.title')}</p>
          <div className="expertise-grid">
            {expertises.map((expertise, index) => (
              <Link 
                to={`/expertise/${expertise.link}`} 
                key={expertise.key} 
                className={`expertise-card animate-scaleIn delay-${700 + index * 100} hover-lift hover-glow`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="expertise-icon">
                  <FontAwesomeIcon icon={expertise.icon} />
                </div>
                <h3>{t(`experience.domains.${expertise.key}`)}</h3>
                <button className="expertise-button">{t('experience.button')}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
