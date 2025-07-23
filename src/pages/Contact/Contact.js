// Contact page component

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
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
          <h1>Get In Touch</h1>
          <p>If you want to book a consultation session or have any questions, you can get in touch by filling in the contact form below or give us a call.</p>
          <div className="hero-note">
            <p>Unfortunately sometimes our replies can land in your spam folder, so please check it if you haven't got the response.</p>
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
                <label htmlFor="name">Your name</label>
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
                <label htmlFor="email">Your email</label>
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
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your message (optional)</label>
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
                  <option value="">Select a service</option>
                  <option value="counselling-psychotherapy">Counselling & Psychotherapy</option>
                  <option value="couples-therapy">Couples Therapy</option>
                  <option value="online-consultation">Online Consultation</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                >
                  <option value="">Select session type</option>
                  <option value="online">Online Session</option>
                  <option value="in-person">In-Person (Gdańsk)</option>
                  <option value="either">Either Option</option>
                </select>
              </div>

              <button type="submit" className="send-btn">
                SEND
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="info-section">
            <div className="contact-info">
              <h2>Contact Info | Location</h2>
              
              <div className="info-card">
                <h3>Telephone & Email</h3>
                <div className="contact-details">
                  <a href="tel:+48506080577" className="phone-number">+48 506 080 577</a>
                  <a href="mailto:contact@mindinblue.com" className="email">contact@mindinblue.com</a>
                </div>
              </div>

              <div className="info-card">
                <h3>Opening Hours</h3>
                <p className="hours">Monday to Friday – 9:00 am to 8:00 pm</p>
              </div>

              <div className="info-card">
                <h3>Office Location</h3>
                <address className="address">
                  Sobótki 22/2<br/>
                  80-247 Gdańsk, Poland
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