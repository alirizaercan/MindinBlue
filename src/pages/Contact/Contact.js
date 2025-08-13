// Contact page component

import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    sessionType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS (add your public key from EmailJS dashboard)
  emailjs.init("WsafYrZj3fnh_4yA0"); // Replace with your EmailJS public key

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("nameRequired") || "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = t("emailRequired") || "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("emailInvalid") || "Email is invalid";
    }

    if (!formData.service) {
      newErrors.service = t("serviceRequired") || "Please select a service";
    }

    if (!formData.sessionType) {
      newErrors.sessionType =
        t("sessionTypeRequired") || "Please select a session type";
    }

    if (!formData.message.trim()) {
      newErrors.message = t("messageRequired") || "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.service &&
      formData.sessionType &&
      formData.message.trim()
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        session_type: formData.sessionType,
        message: formData.message,
        to_email: "vanya.puhachov@gmail.com",
      };

      await emailjs.send("service_6nnbqus", "template_6lfplix", templateParams);

      alert(
        t("messageSent") ||
          "Thank you for your message! We will get back to you soon."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        sessionType: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert(
        t("messageError") ||
          "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1>{t("contactHeroTitle")}</h1>
          <p dangerouslySetInnerHTML={{ __html: t("contactHeroDesc") }}></p>
          <div className="hero-note">
            <p>{t("contactNote")}</p>
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
                <label htmlFor="name">{t("yourName")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("yourEmail")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t("phoneNumberLabel")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("yourMessage")}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className={errors.message ? "error" : ""}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={errors.service ? "error" : ""}
                >
                  <option value="">{t("selectService")}</option>
                  <option value="counselling-psychotherapy">
                    {t("counsellingPsychotherapy")}
                  </option>
                  <option value="couples-therapy">{t("couplesTherapy")}</option>
                </select>
                {errors.service && (
                  <span className="error-message">{errors.service}</span>
                )}
              </div>

              <div className="form-group">
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleInputChange}
                  className={errors.sessionType ? "error" : ""}
                >
                  <option value="">{t("selectSessionType")}</option>
                  <option value="online">{t("onlineSession")}</option>
                  <option value="in-person">{t("inPersonGdansk")}</option>
                  <option value="either">{t("eitherOption")}</option>
                </select>
                {errors.sessionType && (
                  <span className="error-message">{errors.sessionType}</span>
                )}
              </div>

              <button
                type="submit"
                className={`send-btn ${!isFormValid() ? "disabled" : ""}`}
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? t("sending") || "Sending..." : t("send")}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="info-section">
            <div className="contact-info">
              <h2>{t("contactInfoLocation")}</h2>

              <div className="info-card">
                <h3>{t("telephoneEmail")}</h3>
                <div className="contact-details">
                  <a href="tel:+48506080577" className="phone-number">
                    +48 506 080 577
                  </a>
                  <a href="mailto:contact@mindinblue.com" className="email">
                    contact@mindinblue.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <h3>{t("openingHours")}</h3>
                <p className="hours">{t("mondayToFriday")}</p>
              </div>

              <div className="info-card">
                <h3>{t("officeLocation")}</h3>
                <address className="address">{t("address")}</address>
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
