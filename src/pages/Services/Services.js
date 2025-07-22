// Services page component

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'Counselling & Psychotherapy',
      image: '/images/counselling-psychotherapy.jpg',
      route: '/counselling-psychotherapy',
      description: 'Professional counselling and psychotherapy services for individuals seeking mental health support.'
    },
    {
      id: 2,
      title: 'Couples Therapy',
      image: '/images/couples-therapy.jpg',
      route: '/couples-therapy',
      description: 'Specialized therapy sessions designed to help couples strengthen their relationships.'
    },
    {
      id: 3,
      title: 'Online Consultation',
      image: '/images/online-consultation.jpg',
      route: '/online-consultation',
      description: 'Convenient online therapy sessions accessible from anywhere in the world.'
    }
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="services-page">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Choose the service that best fits your needs</p>
        
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
        <div className="pricing-section">
          <h2 className="pricing-title">Our Therapy Prices</h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-service-title">Counselling and Psychotherapy</h3>
              <div className="pricing-amount">250 PLN</div>
            </div>
            
            <div className="pricing-card">
              <h3 className="pricing-service-title">Couples Therapy</h3>
              <div className="pricing-amount">330 PLN</div>
            </div>
            
            <div className="pricing-card">
              <h3 className="pricing-service-title">Online Consultation</h3>
              <div className="pricing-amount">370 PLN</div>
            </div>
          </div>
          
          <div className="pricing-note">
            <p>Sessions are 50 minutes.</p>
          </div>
        </div>

        {/* Therapy Sessions Info Section */}
        <div className="therapy-info-section">
          <div className="therapy-info-card">
            <h2 className="therapy-info-title">How many therapy sessions will I need?</h2>
            <div className="therapy-info-content">
              <p>There is no fixed timeline for therapy.</p>
              <p>In your first sessions, you will discuss your goals and a potential timelines with your therapist.</p>
              <p>Short-term therapy usually lasts at least 6 weeks. Longer-term therapy can continue for a year or more.</p>
            </div>
          </div>

          <div className="therapy-info-card">
            <h2 className="therapy-info-title">How to book?</h2>
            <div className="therapy-info-content">
              <p>You can book your therapy session using our online booking system, or telephone +48 506 080 577</p>
              <div className="booking-buttons">
                <a href="tel:+48506080577" className="booking-btn services-phone-btn">+48 506 080 577</a>
                <button 
                  className="booking-btn services-appointment-btn"
                  onClick={() => navigate('/contact')}
                >
                  Book an Appointment
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
