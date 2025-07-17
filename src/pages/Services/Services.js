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
      title: 'Life Coaching',
      image: '/images/life-coaching.jpg',
      route: '/life-coaching',
      description: 'Goal-oriented coaching to help you achieve personal and professional growth.'
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
              <div className="service-image-container">
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
      </div>
    </div>
  );
}

export default Services;
