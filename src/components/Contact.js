import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `[ECOBATISSEUR] ${formData.subject}`;
    const emailBody = `
Nouveau message de contact depuis le site ECOBATISSEUR

Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Sujet: ${formData.subject}

Message:
${formData.message}
    `;
    
    // Use mailto to open email client
    const mailtoLink = `mailto:soufainebou2004@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Votre client de messagerie va s\'ouvrir. Veuillez envoyer l\'email pour finaliser votre demande.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title animate-fadeInUp">{t('contact.title')}</h2>
        <p className="contact-subtitle animate-fadeInUp delay-200">
          {t('contact.subtitle')}
        </p>
        
        <div className="contact-content">
          <div className="contact-info animate-fadeInLeft delay-300">
            <div className="info-card hover-lift">
              <div className="info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3>{t('contact.info.address')}</h3>
              <a 
                href="https://www.google.com/maps/place/Sidi+Bouzid,+El+Jadida,+Morocco/@33.2542,-8.5064,15z"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#930e00'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                <p>{t('contact.info.addressValue')}</p>
              </a>
            </div>

            <div className="info-card hover-lift">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3>{t('contact.info.phone')}</h3>
              <a 
                href="tel:+212681983805"
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#930e00'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                <p>{t('contact.info.phoneValue')}</p>
              </a>
              <p className="hours-label">{t('contact.info.hours')}</p>
              <p>{t('contact.info.hoursValue')}</p>
            </div>

            <div className="info-card hover-lift">
              <div className="info-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>{t('contact.info.email')}</h3>
              <a 
                href="mailto:soufainebou2004@gmail.com"
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#930e00'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                <p>{t('contact.info.emailValue')}</p>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper animate-fadeInRight delay-400">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.form.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={t('contact.form.subject')}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t('contact.form.message')}
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
