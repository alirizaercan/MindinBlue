// Home page component

import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Trustindex script exactly as provided - no modifications
    const trustindexScript = document.createElement("script");
    trustindexScript.src =
      "https://cdn.trustindex.io/loader.js?ff726e85014a2267904680806d9";
    trustindexScript.defer = true;
    trustindexScript.async = true;
    document.head.appendChild(trustindexScript);

    return () => {
      // Cleanup script on component unmount
      if (document.head.contains(trustindexScript)) {
        document.head.removeChild(trustindexScript);
      }
    };
  }, []);

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
            src="https://www.youtube.com/embed/jPKA73f1rHI"
            title="Meet the Founder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <div className="offer-cards">
          <div
            className="offer-card"
            onClick={() => navigate("/counselling-psychotherapy")}
            style={{ cursor: "pointer" }}
          >
            <h3>Counselling & Psychotherapy</h3>
            <p>
              A safe, judgment-free space to explore your thoughts and feelings.
              We support expats dealing with adaptation, anxiety, or emotional
              challenges abroad.
            </p>
          </div>
          <div
            className="offer-card"
            onClick={() => navigate("/couples-therapy")}
            style={{ cursor: "pointer" }}
          >
            <h3>Couples Therapy</h3>
            <p>
              A space for partners to understand each other better, improve
              communication, and navigate cultural or personal differences
              together.
            </p>
          </div>
          <div
            className="offer-card"
            onClick={() => navigate("/online-consultation")}
            style={{ cursor: "pointer" }}
          >
            <h3>Online Consultation</h3>
            <p>
              Access professional help from anywhere. Our online consultations
              connect you with qualified experts in a safe,
              confidential environment.
            </p>
          </div>
        </div>
      </section>
      <section className="get-started-section">
        <h2 className="get-started-title">Get Started</h2>

        <div className="get-started-blocks-container">
          <div className="get-started-block">
            <h3>Choose your Therapist</h3>
            <p className="subtitle">
              choose from 6 psychologists in, available in 4 languages. (online
              or in-person)
            </p>
            <button
              className="get-started-btn"
              onClick={() => navigate("/team")}
            >
              View our Therapists
            </button>
          </div>

          <div className="get-started-block">
            <h3>Book Appointment</h3>
            <p className="subtitle">
              Book an appointment online or by calling our friendly and
              responsive team.
            </p>
            <p className="subtitle">
              Appointments are available Monday to Friday, between 9am and 8pm
            </p>
            <button
              className="get-started-btn"
              onClick={() => navigate("/contact")}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
      <section className="google-reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="google-reviews-container">
          <script
            defer
            async
            src="https://cdn.trustindex.io/loader.js?ff726e85014a2267904680806d9"
          ></script>
        </div>
      </section>
    </div>
  );
}

export default Home;
