// Home page component

import "./Home.css";
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function Home() {
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.reviewconnect.me/embed/oEYFWLQK1XUVahJzCmQqd4Kr3j2Lo0X5/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="sky-image-wrapper">
        <img src="/sky.png" alt="Sky" className="sky-image" />
        <div className="sky-overlay">
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroSubtitle")}</p>
          <button className="book-btn" onClick={() => navigate("/contact")}>
            {t("bookAppointment")}
          </button>
        </div>
      </div>
      <section className="meet-founder-section">
        <div className="meet-founder-text">
          <h2>{t("meetFounder")}</h2>
          <p>{t("founderDescription")}</p>
          <a
            href="https://calendly.com/mindinblue/free-15-minute-consultation-call"
            target="_blank"
            rel="noopener noreferrer"
            className="calendly-btn"
          >
            {t("bookYourFreeCall")}
          </a>
        </div>
        <div className="meet-founder-video">
          {currentLanguage === "PL" ? (
            <img
              src="/images/anna.jpg"
              alt="Anna Rozkwitalska - Founder & Client Coordinator"
              className="founder-image"
              style={{
                width: "400px",
                height: "450px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
              }}
            />
          ) : (
            <iframe
              width="400"
              height="450"
              src="https://www.youtube.com/embed/jPKA73f1rHI"
              title="Welcome to Mind in Blue"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </section>
      <section className="what-we-offer">
        <h2>{t("whatWeOffer")}</h2>
        <div className="offer-cards">
          <div
            className="offer-card"
            onClick={() => navigate("/counselling-psychotherapy")}
            style={{ cursor: "pointer" }}
          >
            <h3>{t("counsellingPsychotherapy")}</h3>
            <p>{t("counsellingDesc")}</p>
          </div>
          <div
            className="offer-card"
            onClick={() => navigate("/couples-therapy")}
            style={{ cursor: "pointer" }}
          >
            <h3>{t("couplesTherapy")}</h3>
            <p>{t("couplesDesc")}</p>
          </div>
          <div
            className="offer-card"
            onClick={() => navigate("/online-consultation")}
            style={{ cursor: "pointer" }}
          >
            <h3>{t("onlineConsultation")}</h3>
            <p>{t("onlineDesc")}</p>
          </div>
        </div>
      </section>
      <section className="get-started-section">
        <h2 className="get-started-title">{t("getStarted")}</h2>

        <div className="get-started-blocks-container">
          <div className="get-started-block">
            <h3>{t("chooseTherapist")}</h3>
            <p className="subtitle">{t("chooseTherapistDesc")}</p>
            <button
              className="get-started-btn"
              onClick={() => navigate("/team")}
            >
              {t("viewOurTherapists")}
            </button>
          </div>

          <div className="get-started-block">
            <h3>{t("bookAppointmentTitle")}</h3>
            <p className="subtitle">{t("bookAppointmentDesc")}</p>
            <button
              className="get-started-btn"
              onClick={() => navigate("/contact")}
            >
              {t("contactUs")}
            </button>
          </div>
        </div>
      </section>
      <section className="google-reviews-section">
        <h2>{t("whatClientsSay")}</h2>
        <div className="google-reviews-container">
          <div id="reviews-widget-154"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
