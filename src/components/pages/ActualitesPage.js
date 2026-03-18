import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faNewspaper, faGavel, faBuilding, faShieldAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './ActualitesPage.css';

function ActualitesPage() {
  const { t } = useTranslation();

  const articles = t('actualites.articles', { returnObjects: true });

  // Add images for each article category
  const articleImages = [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', // Energy/thermal regulations
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', // Construction/cracks
    require('../../extension-garantie.jpg'), // Insurance/guarantee extension
  ];

  return (
    <div className="actualites-page">
      <div className="actualites-hero">
        <div className="container">
          <Link to="/" className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
            {t('expertisePages.backButton')}
          </Link>
          <div className="actualites-hero-content">
            <div className="actualites-icon-large">
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <h1>{t('actualites.title')}</h1>
            <p className="actualites-subtitle">{t('actualites.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="actualites-content">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article, index) => (
              <article key={index} className="article-card">
                <div className="article-image">
                  <img src={articleImages[index]} alt={article.title} />
                  <div className="article-image-overlay">
                    <div className="article-icon">
                      <FontAwesomeIcon icon={
                        article.category === 'legislation' ? faGavel :
                        article.category === 'construction' ? faBuilding :
                        article.category === 'assurance' ? faShieldAlt :
                        faNewspaper
                      } />
                    </div>
                  </div>
                </div>
                <div className="article-body">
                  <div className="article-header">
                    <div className="article-meta">
                      <span className="article-date">
                        <FontAwesomeIcon icon={faCalendar} />
                        {article.date}
                      </span>
                      <span className="article-category">{article.categoryLabel}</span>
                    </div>
                  </div>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-content">
                    <h3>{article.contentTitle}</h3>
                    <ul className="article-points">
                      {article.points.map((point, idx) => (
                        <li key={idx}>
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {article.conclusion && (
                      <p className="article-conclusion">{article.conclusion}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="newsletter-cta">
            <h2>{t('actualites.newsletterTitle')}</h2>
            <p>{t('actualites.newsletterText')}</p>
            <Link to="/#contact" className="cta-button primary">
              {t('actualites.newsletterButton')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActualitesPage;
