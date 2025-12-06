import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faUserTie, faFileContract, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

function Services() {
  const { t } = useTranslation();

  const services = [
    { 
      key: 'service1', 
      icon: faGavel,
      alt: 'Legal Assistance'
    },
    { 
      key: 'service2', 
      icon: faUserTie,
      alt: 'Expert Analysis'
    },
    { 
      key: 'service3', 
      icon: faFileContract,
      alt: 'Detailed Report'
    },
    { 
      key: 'service4', 
      icon: faBuilding,
      alt: 'Construction Expertise'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services-title animate-fadeInUp">{t('services.title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.key} className={`service-card animate-fadeInUp delay-${(index + 2) * 100} hover-lift`}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="service-title">{t(`services.${service.key}.title`)}</h3>
              <p className="service-description">{t(`services.${service.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
