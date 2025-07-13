// Home page component

import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="sky-image-wrapper">
        <img src="/sky.png" alt="Sky" className="sky-image" />
        <div className="sky-overlay">
          <h1>For when you're ready to heal and grow</h1>
          <p>Counselling • Psychotherapy • Life Coaching</p>
          <button className="book-btn" onClick={() => navigate("/contact")}>
            Book an appointment
          </button>
        </div>
      </div>
      <section className="meet-founder-section">
        <div className="meet-founder-text">
          <h2>Meet the Founder</h2>
          <p>
            Mind in Blue is a private psychotherapy and coaching studio founded
            by psychologist Anna Rozkwitalska. We specialize in culturally
            sensitive, English-language mental health care for expatriates,
            couples, and locals. Whether online or face-to-face in our cozy
            Gdansk practice, our chartered psychologists provide a confidential,
            judgment-free space to work through anxiety, relationship
            challenges, and life transitions. Blending evidence-based therapy,
            mindfulness, and goal-oriented coaching, we help you build
            resilience, gain clarity, and move forward with confidence.
          </p>
          <a
            href="https://calendly.com/mindinblue/free-15-minute-consultation-call"
            target="_blank"
            rel="noopener noreferrer"
            className="calendly-btn"
          >
            Book your free call
          </a>
        </div>
        <div className="meet-founder-video">
          <iframe
            width="400"
            height="450"
            src="https://www.youtube.com/embed/iCiEpSKVodQ"
            title="Meet the Founder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
