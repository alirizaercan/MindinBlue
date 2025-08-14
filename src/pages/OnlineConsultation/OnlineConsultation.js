import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import "./OnlineConsultation.css";

const OnlineConsultation = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="online-consultation">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t("onlineConsultationTitle")}</h1>
            <p>{t("onlineHeroDesc1")}</p>
            <p>{t("onlineHeroDesc2")}</p>
            <button
              className="appointment-btn"
              onClick={() => navigate("/contact")}
            >
              {t("bookAppointment")}
            </button>
          </div>
          <div className="hero-image">
            <img
              src="/images/online-consultation.jpg"
              alt={t("onlineConsultationTitle")}
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="content-text">
            <p>{t("onlineContentDesc1")}</p>
            <p>{t("onlineContentDesc2")}</p>
            <p>{t("onlineContentDesc3")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineConsultation;
