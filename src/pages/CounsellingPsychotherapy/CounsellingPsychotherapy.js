import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CounsellingPsychotherapy.css';

const CounsellingPsychotherapy = () => {
  const navigate = useNavigate();
  return (
    <div className="counselling-psychotherapy">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Counselling & Psychotherapy</h1>
            <p>
              We offer a confidential, judgment-free, and safe space where you can talk 
              about whatever is going on in your life. We welcome everybody independent 
              of their religion, sexual preferences, cultural or ethnic background.
            </p>
            <p>
              We work mostly with expats and digital nomads. As exciting as your life might 
              be, traveling or living abroad often brings some difficulties like adapting to a 
              new place and culture, finding new friends, getting settled in a new job, and 
              long-distance relationships. Sometimes when these things pile up, people 
              experience lower moods or anxiety.
            </p>
            <button 
              className="appointment-btn"
              onClick={() => navigate("/contact")}
            >
              Book an Appointment
            </button>
          </div>
          <div className="hero-image">
            <img src="/images/counselling-psychotherapy-nature.jpg" alt="Nature counselling" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="content-image">
            <img src="/images/counselling-psychotherapy.jpg" alt="Counselling and psychotherapy" />
          </div>
          <div className="content-text">
            <p>
              Many people find that wherever they go, they bring some unresolved things with them. 
              The therapist during consultations will help you understand what you need and how 
              much time is needed to work on it. Therapy is a journey of getting to know yourself 
              better and understanding your relationship with the world around you. Therapy can 
              also be a way to grow as a person, become more conscious and in control of your 
              own life.
            </p>
            <p>
              We offer help with all psychological problems, the most common being depression, 
              anxiety, relationship problems, professional burnout or emotional instability to name 
              a few. We also support our clients with problems more specific, for couples like feeling 
              disconnected, emptiness, inadequacy, and stress related to the transitions life, long-distance relationships, intercultural relationships, and culture shock.
            </p>
            <p>
              We work in person in Gdansk, Poland and remotely with clients who live in other 
              countries, sometimes remote places where they don't have access to psychotherapy 
              in English or such services are very highly priced. Being located in Poland we have 
              competitive prices making mental health more accessible.
            </p>
            <button 
              className="appointment-btn"
              onClick={() => navigate("/contact")}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounsellingPsychotherapy;
