import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CouplesTherapy.css';

const CouplesTherapy = () => {
  const navigate = useNavigate();
  return (
    <div className="couples-therapy">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Couples Therapy</h1>
            <p>
              A relationship is a space where two different worlds intersect. Partners bring 
              their past experiences, strengths and weaknesses, dreams and expectations, 
              and family and cultural background to this space.
            </p>
            <p>
              Depending on how different these two worlds are and on the partners' skills 
              and tools, this encounter can be less or more challenging. Various differences 
              - religious, cultural, views on the world, life experiences, can create 
              challenges. On top of that, every stage of the life of a couple comes with its 
              difficulties. Sometimes everything works fine until a couple enters a new 
              chapter in their relationship or the context of their life changes.
            </p>
            <button 
              className="appointment-btn"
              onClick={() => navigate("/contact")}
            >
              Book an Appointment
            </button>
          </div>
          <div className="hero-image">
            <img src="/images/couples-therapy.jpg" alt="Couples therapy" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="content-image">
            <img src="/images/couples-therapy-sea.jpg" alt="Couples therapy by the sea" />
          </div>
          <div className="content-text">
            <p>
              Sometimes something external can influence you or your loved one, but it affects 
              what happens between you. Processing those things might be vital for the survival of 
              the relationship. Through couples therapy, you can find a safe space to do so. It can 
              also be crucial to improving communication, learning to understand different 
              perspectives better, learning to listen, and to express yourself better.
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

export default CouplesTherapy;
