import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './CouplesTherapy.css';

const CouplesTherapy = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <div className="couples-therapy">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t('couplesTherapyTitle')}</h1>
            <p>
              {t('couplesHeroDesc1')}
            </p>
            <p>
              {t('couplesHeroDesc2')}
            </p>
            <button 
              className="appointment-btn"
              onClick={() => navigate("/contact")}
            >
              {t('bookAppointment')}
            </button>
          </div>
          <div className="hero-image">
            <img src="/images/couples-therapy.jpg" alt={t('couplesTherapyTitle')} />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="content-image">
            <img src="/images/couples-therapy-sea.jpg" alt={t('couplesTherapyTitle')} />
          </div>
          <div className="content-text">
            <p>
              {t('couplesContentDesc')}
            </p>
            <button 
              className="appointment-btn"
              onClick={() => navigate("/contact")}
            >
              {t('bookAppointment')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CouplesTherapy;
