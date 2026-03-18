import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSearchPlus, faBalanceScale, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './Intro.css';

function Intro() {
  const { t } = useTranslation();
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const introImages = [
    {
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      alt: 'Modern office building',
      label: 'Architecture Moderne'
    },
    {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      alt: 'Construction expertise',
      label: 'Expertise Construction'
    },
    {
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      alt: 'Professional consultation',
      label: 'Conseil Professionnel'
    }
  ];

  const stats = useMemo(() => [
    { number: 25, suffix: '+', label: 'Années d\'Expérience', duration: 2000 },
    { number: 500, suffix: '+', label: 'Projets Réalisés', duration: 2500 },
    { number: 100, suffix: '%', label: 'Satisfaction Client', duration: 2000 },
    { number: 24, suffix: '/7', label: 'Disponibilité', duration: 1500 }
  ], []);

  const animateCounters = useCallback(() => {
    stats.forEach((stat, index) => {
      const increment = stat.number / (stat.duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = stat.number;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, 16);
    });
  }, [stats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsElement = statsRef.current;

    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, [hasAnimated, animateCounters]);

  return (
    <section className="intro" id="expertise">
      <div className="container">
        <h2 className="intro-title animate-fadeInUp">{t('intro.title')}</h2>
        
        <div className="intro-content-with-images">
          <div className="intro-text-content">
            <p className="intro-description animate-fadeInLeft delay-200">{t('intro.description')}</p>
            
            <div className="intro-points animate-fadeInLeft delay-300">
              <h3>{t('intro.subtitle')}</h3>
              <ul>
                {t('intro.points', { returnObjects: true }).map((point, index) => (
                  <li key={index} className="animate-fadeIn" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>{point}</li>
                ))}
              </ul>
            </div>

            <p className="intro-conclusion animate-fadeInLeft delay-600">{t('intro.conclusion')}</p>
          </div>

          <div className="intro-images-grid">
            {introImages.map((image, index) => (
              <div key={index} className={`intro-image-card animate-fadeInRight delay-${(index + 2) * 200}`}>
                <img src={image.url} alt={image.alt} />
                <div className="intro-image-overlay">
                  <span className="image-label">{image.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="intro-stats animate-scaleIn delay-700" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card animate-fadeInUp delay-${800 + index * 100}`}>
              <div className="stat-number">
                {counters[index]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="intro-features">
          <div className="feature-card animate-fadeInUp delay-900 hover-lift">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <h4>Expertise Reconnue</h4>
            <p>Certifications et qualifications professionnelles reconnues par les instances judiciaires</p>
          </div>
          <div className="feature-card animate-fadeInUp delay-1000 hover-lift">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faSearchPlus} />
            </div>
            <h4>Analyses Approfondies</h4>
            <p>Évaluations techniques détaillées avec rapports complets et documentés</p>
          </div>
          <div className="feature-card animate-fadeInUp delay-1000 hover-lift">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faBalanceScale} />
            </div>
            <h4>Indépendance Totale</h4>
            <p>Cabinet indépendant garantissant objectivité et impartialité dans chaque mission</p>
          </div>
          <div className="feature-card animate-fadeInUp delay-1000 hover-lift">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h4>Accompagnement Personnalisé</h4>
            <p>Suivi complet de votre dossier de la première visite jusqu'à la résolution</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
