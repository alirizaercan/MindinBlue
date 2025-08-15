// Services page component

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Services.css';

function Services() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('counsellingPsychotherapy'),
      image: '/images/counselling-psychotherapy.jpg',
      route: '/counselling-psychotherapy',
      description: t('counsellingDesc')
    },
    {
      id: 2,
      title: t('couplesTherapy'),
      image: '/images/couples-therapy.jpg',
      route: '/couples-therapy',
      description: t('couplesDesc')
    },
    {
      id: 3,
      title: t('onlineConsultation'),
      image: '/images/online-consultation.jpg',
      route: '/online-consultation',
      description: t('onlineDesc')
    }
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="services-page">
      <div className="services-container">
        <h1 className="services-title">{t('ourServices')}</h1>
        <p className="services-subtitle">{t('chooseServiceDesc')}</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container" onClick={() => handleServiceClick(service.route)} style={{ cursor: 'pointer' }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <button 
                  className="service-button"
                  onClick={() => handleServiceClick(service.route)}
                >
                  {service.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="pricing-section" id="pricing">
          <h2 className="pricing-title">{t('ourTherapyPrices')}</h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-service-title">{t('counsellingPsychotherapy')}</h3>
              <div className="pricing-amount">250 PLN</div>
            </div>
            
            <div className="pricing-card">
              <h3 className="pricing-service-title">{t('couplesTherapy')}</h3>
              <div className="pricing-amount">330 PLN</div>
            </div>
          </div>
          
          <div className="pricing-note">
            <p>{t('sessionsAre50Min')}</p>
          </div>
        </div>

        {/* Therapy Sessions Info Section */}
        <div className="therapy-info-section">
          <div className="therapy-info-card">
            <h2 className="therapy-info-title">{t('howManySessionsTitle')}</h2>
            <div className="therapy-info-content">
              <p>{t('howManySessionsDesc')}</p>
              <p>{t('sessionsGoalDesc')}</p>
              <p>{t('shortTermTherapy')}</p>
            </div>
          </div>

          <div className="therapy-info-card">
            <h2 className="therapy-info-title">{t('howToBookTitle')}</h2>
            <div className="therapy-info-content">
              <p>{t('howToBookDesc')}</p>
              <div className="booking-buttons">
                <a href="tel:+48506080577" className="booking-btn services-phone-btn">+48 506 080 577</a>
                <button 
                  className="booking-btn services-appointment-btn"
                  onClick={() => navigate('/contact')}
                >
                  {t('bookAppointment')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
