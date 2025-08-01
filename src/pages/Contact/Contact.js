// Contact page component

import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    sessionType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1>{t('contactHeroTitle')}</h1>
          <p>{t('contactHeroDesc')}</p>
          <div className="hero-note">
            <p>{t('contactNote')}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('yourName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('yourEmail')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('phoneNumberLabel')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('yourMessage')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">{t('selectService')}</option>
                  <option value="counselling-psychotherapy">{t('counsellingPsychotherapy')}</option>
                  <option value="couples-therapy">{t('couplesTherapy')}</option>
                  <option value="online-consultation">{t('onlineConsultation')}</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                >
                  <option value="">{t('selectSessionType')}</option>
                  <option value="online">{t('onlineSession')}</option>
                  <option value="in-person">{t('inPersonGdansk')}</option>
                  <option value="either">{t('eitherOption')}</option>
                </select>
              </div>

              <button type="submit" className="send-btn">
                {t('send')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="info-section">
            <div className="contact-info">
              <h2>{t('contactInfoLocation')}</h2>
              
              <div className="info-card">
                <h3>{t('telephoneEmail')}</h3>
                <div className="contact-details">
                  <a href="tel:+48506080577" className="phone-number">{t('phoneNumber')}</a>
                  <a href="mailto:contact@mindinblue.com" className="email">contact@mindinblue.com</a>
                </div>
              </div>

              <div className="info-card">
                <h3>{t('openingHours')}</h3>
                <p className="hours">{t('mondayToFriday')}</p>
              </div>

              <div className="info-card">
                <h3>{t('officeLocation')}</h3>
                <address className="address">
                  {t('address')}
                </address>
              </div>
            </div>

            {/* Map */}
            <div className="map-section">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.394!2d18.6140707!3d54.3520252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd739c8b13d5d9%3A0x9c7e4b7c8d7b3a4e!2sSob%C3%B3tki%2022%2C%2080-247%20Gda%C5%84sk%2C%20Poland!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mind in Blue Location - Gdańsk"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;