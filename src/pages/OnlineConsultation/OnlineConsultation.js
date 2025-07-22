import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OnlineConsultation.css';

const OnlineConsultation = () => {
  const navigate = useNavigate();
  return (
    <div className="online-consultation">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Online consultation</h1>
            <p>
              We provide all our services online to clients from all over the world, expats 
              and digital nomads, people who live in remote places or change their location 
              often. We offer our services to clients who live in other countries, sometimes 
              remote places where they don't have access to psychotherapy in English or 
              such services are very highly priced. Being located in Poland we have 
              competitive prices making mental health more accessible.
            </p>
            <p>
              As we approach health in a holistic way we offer:
            </p>
            <p>
              psychotherapy, couples therapy, nutrition consultations, life and career 
              coaching.
            </p>
            <button 
              className="appointment-btn"
              onClick={() => navigate("/contact")}
            >
              Book an Appointment
            </button>
          </div>
          <div className="hero-image">
            <img src="/images/online-consultation.jpg" alt="Online consultation" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="content-text">
            <p>
              We offer help with all psychological problems, the most common being: 
              depression, anxiety, relationship problems, professional burnout or emotional 
              instability to name a few.
            </p>
            <p>
              Working with people who travel a lot and experience an exciting life full of 
              new places and people we offer help with problems and difficulties that the 
              same lifestyle brings: loneliness, feelings of emptiness, inadequacy, and 
              stress-related to the transient life. There can also be problems with decision-making, long-distance relationships, intercultural relationships, and culture 
              shock.
            </p>
            <p>
              By taking care of what is challenging in your life, you can enable yourself to 
              get the most out of it.
            </p>
            <p>
              Of course, even if this is an online work that we do together, whenever you're 
              in Gdansk, you are welcome to come for a face-to-face session. We would be 
              more than happy to have you here!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineConsultation;
