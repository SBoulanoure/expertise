import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container">
          <p className="cta-text">{t('footer.cta.title')}</p>
          <button className="cta-button">{t('footer.cta.button')}</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>{t('footer.title')}</h3>
              <div className="contact-info">
                <p><strong>{t('footer.contact.email')}</strong> {t('footer.contact.emailValue')}</p>
                <p><strong>{t('footer.contact.address')}</strong><br />
                   {t('footer.contact.addressValue')}<br />
                   {t('footer.contact.postalCode')}
                </p>
              </div>
            </div>

            <div className="footer-column">
              <h3>{t('footer.contact.phone')}</h3>
              <p>{t('footer.contact.phoneValue')}</p>
              <h3>{t('footer.contact.hours')}</h3>
              <p>{t('footer.contact.hoursValue')}</p>
            </div>

            <div className="footer-column">
              <select className="expert-select">
                <option>{t('footer.selectExpert')}</option>
              </select>
              <div className="social-icons">
                <a href="#facebook">f</a>
                <a href="#linkedin">in</a>
                <a href="#instagram">📷</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
