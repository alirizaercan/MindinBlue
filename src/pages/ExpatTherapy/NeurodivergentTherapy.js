import React, { useState, useEffect, useCallback, memo } from "react";
import "./expat-therapy-styles.css";
import emailjs from "@emailjs/browser"; // + EmailJS
import { pushToDataLayer } from "../../utils/gtm";

// Добавьте рядом с импортами (замените на ваш новый template_id из EmailJS)
const EMAILJS_SERVICE_ID = "service_6nnbqus";
const EMAILJS_TEMPLATE_ID_EXPAT = "template_l4g1q2h"; // <-- используем ваш реальный Template ID из EmailJS

const supportOptions = [
  "ADHD",
  "Autism / ASD",
  "Anxiety",
  "Burnout / Neurodivergent burnout",
  "Depression / Low mood",
  "Sleep difficulties",
  "OCD",
  "Stress",
  "Other",
];

const ContactModal = memo(
  ({
    showModal,
    formData,
    handleInputChange,
    handleSubmit,
    closeModal,
    setShowPrivacyModal,
    isSubmitting, // + pass loading state
  }) => {
    if (!showModal) return null;

    return (
      <div className="expat-modal-overlay" onClick={closeModal}>
        <div
          className="expat-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="expat-modal-close" onClick={closeModal}>
            ×
          </button>
          <h2 className="expat-modal-title">
            Fill in the form below
            <br />
            to get started
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Hidden GTM UID field for tracking */}
            <input type="hidden" id="gtm_uid" name="gtm_uid" value={formData.gtm_uid || ''} />
            <div className="expat-form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleInputChange}
                required
                autoComplete="given-name"
              />
            </div>

            <div className="expat-form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleInputChange}
                required
                autoComplete="family-name"
              />
            </div>

            <div className="expat-form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={handleInputChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="expat-form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone || ""}
                onChange={handleInputChange}
                required
                autoComplete="tel"
              />
            </div>

            <div className="expat-form-group">
              <fieldset className="expat-checkbox-fieldset">
                <legend>What brings you here? (select all that apply)</legend>
                <div className="expat-checkbox-grid">
                  {supportOptions.map((option) => (
                    <label className="expat-checkbox-option" key={option}>
                      <input
                        type="checkbox"
                        name="supportAreas"
                        value={option}
                        checked={(formData.supportAreas || []).includes(option)}
                        onChange={handleInputChange}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="expat-form-group">
              <label htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message || ""}
                onChange={handleInputChange}
                rows="4"
                placeholder="Anything else you would like us to know?"
              />
            </div>

            <div className="expat-form-group">
              <label htmlFor="budget">Preferred way to receive support *</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget || ""}
                onChange={handleInputChange}
                required
              >
                <option value="">Select...</option>
                <option value="online-sessions">Online</option>
                <option value="in-person-gdansk">In-person in Gdansk</option>
              </select>
            </div>

            <div className="expat-form-group">
              <div className="expat-consent-section">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent || false}
                  onChange={handleInputChange}
                  required
                  className="expat-consent-checkbox"
                />
                <div className="expat-consent-text">
                  By sending this form, you’re giving Mind in Blue permission to
                  get in touch with you about your therapy needs. We respect
                  your privacy and will keep your details safe. *
                </div>
              </div>
              <div className="expat-privacy-notice">
                By submitting this form, you accept our{" "}
                <button
                  type="button"
                  onClick={() => setShowPrivacyModal(true)}
                  className="expat-privacy-link"
                >
                  Privacy Policy
                </button>
                .
              </div>
            </div>

            <button
              type="submit"
              id="submitApplicationButton"
              className="expat-send-button"
              disabled={isSubmitting}

            >
              {isSubmitting ? "SENDING…" : "SUBMIT & WATCH THE VIDEO"}
            </button>
          </form>
        </div>
      </div>
    );
  }
);

function NeurodivergentTherapy() {
  const [currentPage, setCurrentPage] = useState("home"); // вернул обратно на "home"
  const [showModal, setShowModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // + loading state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    supportAreas: [],
    message: "",
    budget: "",
    consent: false,
    gtm_uid: "", // Add GTM UID to form data
  });

  // + Initialize EmailJS (reuse the same public key as /contact)
  useEffect(() => {
    emailjs.init("WsafYrZj3fnh_4yA0"); // same as Contact.js
    
    pushToDataLayer('page_view', {
      'page_path': '/neurodivergent-therapy',
      'page_title': 'Neurodivergent Therapy in English - ADHD & Autism Specialist',
      'page_location': window.location.href
    });
  }, []);

  // Preserve fbclid and other tracking parameters in localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');
    const fbp = urlParams.get('fbp');
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    const utm_campaign = urlParams.get('utm_campaign');
    // Get GTM UID from cookie if available
    const gtmUid = (() => {
      const match = document.cookie.match('(^|;)\\s*gtm_uid\\s*=\\s*([^;]+)');
      return match ? match.pop() : '';
    })();
    setFormData((prev) => ({
      ...prev,
      gtm_uid: gtmUid || ''
    }));
    if (fbclid) {
      localStorage.setItem('_fbclid', fbclid);
      localStorage.setItem('_fbclid_timestamp', Date.now().toString());
      console.log('✅ fbclid saved to localStorage:', fbclid);
    }
    if (fbp) {
      localStorage.setItem('_fbp_param', fbp);
    }
    if (utm_source || utm_medium || utm_campaign) {
      const utm_data = {
        utm_source,
        utm_medium,
        utm_campaign,
        timestamp: Date.now()
      };
      localStorage.setItem('_utm_data', JSON.stringify(utm_data));
      console.log('✅ UTM parameters saved:', utm_data);
    }
  }, []);

  // Handle modal open state
  useEffect(() => {
    // Modal state management without affecting global body
    const handleModalState = () => {
      if (showModal || showPrivacyModal) {
        // Prevent background scrolling
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };

    handleModalState();

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal, showPrivacyModal]);

  // Google Reviews Widget Script - только для thank you страницы
  useEffect(() => {
    if (currentPage === "thankyou") {
      // Небольшая задержка для уверенности, что DOM элемент создан
      const timer = setTimeout(() => {
        const widgetContainer = document.getElementById("reviews-widget-154");
        if (widgetContainer) {
          const script = document.createElement("script");
          script.src =
            "https://app.reviewconnect.me/embed/oEYFWLQK1XUVahJzCmQqd4Kr3j2Lo0X5/widget.js";
          script.async = true;
          script.onload = () => {

          };
          script.onerror = () => {
            console.error("Failed to load reviews widget script");
          };
          document.body.appendChild(script);
        } else {
          console.warn("Reviews widget container not found");
        }
      }, 500);

      return () => {
        clearTimeout(timer);
        // Убираем скрипт при размонтировании
        const existingScript = document.querySelector(
          'script[src*="reviewconnect.me"]'
        );
        if (existingScript && document.body.contains(existingScript)) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [currentPage]);

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (name === "supportAreas") {
        const current = prev.supportAreas || [];
        return {
          ...prev,
          supportAreas: checked
            ? [...current, value]
            : current.filter((item) => item !== value),
        };
      }

      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  // DataLayer: CTA Button Click Tracking
  const handleCTAClick = useCallback((buttonLocation) => {
    pushToDataLayer('cta_click', {
      'button_text': 'FILL FORM & BOOK YOUR CALL',
      'button_location': buttonLocation
    });
    setShowModal(true);
  }, []);

  // REPLACE mailto with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const sessionType =
        formData.budget === "online-sessions"
          ? "Online"
          : formData.budget === "in-person-gdansk"
          ? "In-person in Gdansk"
          : formData.budget || "Not specified";

      const selectedSupportAreas =
        formData.supportAreas && formData.supportAreas.length
          ? formData.supportAreas.join(", ")
          : "-";

      const optionalMessage =
        formData.message && formData.message.trim()
          ? formData.message.trim()
          : "-";

      const biggestChallengeText = `What brings you here:\n${selectedSupportAreas}\n\nMessage:\n${optionalMessage}`;

      const templateParams = {
        from_name: `${formData.firstName || ""} ${
          formData.lastName || ""
        }`.trim(),
        name: `${formData.firstName || ""} ${formData.lastName || ""}`.trim(),
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        service: "Neurodivergent Therapy Consultation",
        session_type: sessionType,
        message: biggestChallengeText, // только этот блок
        to_email: "anna.rozkwitalska@gmail.com",
        gtm_uid: formData.gtm_uid || '', // Pass GTM UID
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_EXPAT,
        templateParams
      );

      pushToDataLayer('form_submit', {
        'form_name': 'neurodivergent_therapy_consultation',
        'form_type': 'lead_generation',
        'session_type': sessionType,
        'gtm_uid': formData.gtm_uid || ''
      });

      // Optional: user feedback
      alert("Thank you for your application! We will contact you within 24h.");

      // Reset and navigate to thank you
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        supportAreas: [],
        message: "",
        budget: "",
        consent: false,
        gtm_uid: "",
      });
      setShowModal(false);
      setCurrentPage("thankyou");
    } catch (error) {
      console.error("Email sending failed:", error);
      alert(
        "Sorry, there was an error sending your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const HomePage = () => (
    <div>
      {/* Убрана временная тестовая кнопка */}

      {/* Top Banner - Market Call Out */}
      <div className="expat-top-banner">
        <div className="expat-container">
          <p>
            Neurodivergent-Affirming Therapy in English. ADHD & Autism Specialists.
          </p>
        </div>
      </div>

      {/* Blue Highlight Section - VSL Hook */}
      <div className="expat-highlight-section">
        <div className="expat-container">
          <p>
            Work with a therapist who actually understands how your brain works. Online from anywhere. In-person in Gdańsk.
          </p>
        </div>
      </div>

      {/* Main Hero Section */}
      <main className="expat-main-content">
        <div className="expat-container">
          <section className="expat-hero-section">
            <h1 className="expat-hero-title">
              Therapy That Works With Your Brain, Not Against It
            </h1>
            <p className="expat-hero-subtitle">
              Most therapy isn't designed for neurodivergent people. We offer CBT therapy adapted for ADHD and autism spectrum — in English, with no waiting lists.
            </p>
          </section>

          {/* Main Content Grid */}
          <section className="expat-homepage-grid">
            <div className="expat-homepage-image">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/mindinblue_therapists.webp"
                }
                alt="Mind in Blue Professional Therapy"
                className="expat-therapy-image"
                onError={(e) => {
                  e.target.style.display = "none";

                }}
              />
            </div>

            <div className="expat-homepage-benefits">
              <h2 className="expat-homepage-benefits-title">
                You may be feeling:
              </h2>
              <ul className="expat-homepage-benefits-list">
                <li>✓ You've tried therapy before and it felt too rigid or didn't stick.</li>
                <li>✓ You struggle to find a therapist who understands ADHD or autism — not just the basics.</li>
                <li>✓ You need someone who won't tell you to "just focus" or "stop overthinking."</li>
              </ul>
              <button
                className="expat-cta-button"
                onClick={() => handleCTAClick('hero_section')}
              >
                ➤ FILL FORM & BOOK YOUR CALL
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Pricing Section - Moved before Steps */}
      <section className="expat-what-includes-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white">Clear, Simple Pricing</h2>
          <p className="expat-section-subtitle-white" style={{color: '#fff', textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>
            No hidden fees. No surprises. We believe in transparent pricing.
          </p>

          <div className="expat-features-grid">
            <div className="expat-feature-item">
              <div className="expat-feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>15-Minute Intro Call</h3>
              <p>A free call to walk you through how therapy works, answer questions about scheduling, pricing, and what to expect.</p>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Online Therapy Session</h3>
              <p>50 min - 250 PLN / 65 EUR</p>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>In-Person Therapy in Gdańsk</h3>
              <p>50 min - 250 PLN / 65 EUR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section - Moved after Pricing */}
      <section className="expat-steps-section">
        <div className="expat-container">
          <h2 className="expat-section-title">
            Start in 3 Simple Steps
          </h2>

          <div className="expat-steps-grid">
            <div className="expat-step-item">
              <div className="expat-step-icon">1</div>
              <h3>1. Fill out the short form</h3>
              <p>Click the button and answer a few simple questions. It only takes about 1 minute.</p>
            </div>
            <div className="expat-step-item">
              <div className="expat-step-icon">2</div>
              <h3>2. Book your Intro call</h3>
              <p>After you submit the form, you will see our calendar. Pick a free 15-minute time that works for you.</p>
            </div>
            <div className="expat-step-item">
              <div className="expat-step-icon">3</div>
              <h3>3. Talk to our specialist</h3>
              <p>This free, confidential call is for you. We will listen, answer your questions, and plan the best next steps together.</p>
            </div>
          </div>

          <button
            className="expat-cta-button expat-final"
            onClick={() => {
              setShowModal(true);
            }}
          >
            FILL FORM TO BOOK YOUR CALL
          </button>
        </div>
      </section>

            {/* Black Section - What's Included */}
      <section className="expat-what-includes-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white">
            Neurodivergent-Affirming CBT Therapy, In English, On Your Terms
          </h2>
          <p className="expat-section-subtitle-white" style={{color: '#fff', textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>
            Our therapist has over 10 years of experience, including 2 years in the NHS (UK), and specialises in working with ADHD and autism spectrum adults.
          </p>

          <div className="expat-therapy-options-grid">
            <div className="expat-therapy-option-item">
              <div className="expat-feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Online Therapy</h3>
              <p>Get help from anywhere in the world. All you need is a private space and an internet connection.</p>
            </div>
            <div className="expat-therapy-option-item">
              <div className="expat-feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>In-Person Therapy</h3>
              <p>Meet your therapist face-to-face at our comfortable, private office in Gdańsk.</p>
            </div>
            <div className="expat-therapy-option-item">
              <div className="expat-feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.6a3 3 0 0 0-1.5 5.4 3 3 0 0 0 1.2 5.2A3 3 0 0 0 9.5 22H11V2H9.5Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.6a3 3 0 0 1 1.5 5.4 3 3 0 0 1-1.2 5.2A3 3 0 0 1 14.5 22H13V2h1.5Z" />
                  <path d="M7 9h4" />
                  <path d="M13 15h4" />
                </svg>
              </div>
              <h3>ADHD & Autism Specialist</h3>
              <p>CBT therapy adapted to your neurodivergent brain — ADHD, autism spectrum, sensory sensitivity, masking, and burnout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Online/In-Person Section - Now 4th */}
      <section className="expat-founder-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white">For Neurodivergent Adults in Poland & Around the World</h2>

          <div className="expat-founder-grid">
            <div className="expat-founder-content">
              <h3>Living with ADHD or on the Autism Spectrum?</h3>
              <p>
                We work with neurodivergent adults — whether you're new to therapy or have tried it before without it quite clicking. Whether you have a formal diagnosis or are still exploring, you are welcome here. We offer in-person sessions in Gdańsk and online sessions from anywhere.
              </p>
              <h3>CBT Adapted for Your Brain</h3>
              <p>
                Standard CBT is often too rigid for people with ADHD or autism. Our therapist tailors every session to your pace, communication style, and sensory needs. No homework pressure. No one-size-fits-all approach.
              </p>
              <p>
                If you are living outside of Poland, our online sessions give you access to a specialist who understands neurodivergence — in English, at a fair price.
              </p>
            </div>
            <div className="expat-founder-image">
              <button
                className="expat-cta-button expat-final-cta"
                onClick={() => handleCTAClick('location_section')}
              >
                FILL FORM & BOOK YOUR INTRO CALL
              </button>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/mindinblue_therapists.webp"
                }
                alt="Mind in Blue Team"
                className="expat-founder-photo"
                onError={(e) => {
                  e.target.style.display = "none";

                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="expat-steps-section">
        <div className="expat-container">
          <h2 className="expat-section-title">Ready to Talk? We Get It — Starting Is the Hard Part.</h2>
          <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>
            For many people with ADHD or autism, reaching out for help can feel overwhelming. You don't have to have it all figured out before you contact us. Book your free, confidential 15-minute call. We will listen without judgement and plan the next steps at your pace.
          </p>
          <div style={{textAlign: 'center'}}>
            <button
              className="expat-cta-button expat-final"
              onClick={() => handleCTAClick('final_section')}
            >
              FILL FORM & BOOK YOUR CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ThankYouPage = () => {
    return (
    <div>
      {/* Blue Banner for Thank You Page */}
      <div className="expat-highlight-section">
        <div className="expat-container">
          <p>
            🎯 Next step: Watch the video below and book your consultation
            call
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="expat-main-content">
        <div className="expat-container">
          <section className="expat-hero-section">
            <h1 className="expat-hero-title">Thank You for Your Application</h1>
            <p className="expat-hero-subtitle">
              Your consultation request has been received successfully. Meet our
              team and book your free call below.
            </p>
          </section>

          {/* Video and CTA Section - Centered Single Column */}
          <section className="expat-video-cta-section">
            <div className="expat-video-container">
              <iframe
                src="https://www.youtube.com/embed/jPKA73f1rHI?enablejsapi=1&origin=https://mindinblue.com"
                title="Mind in Blue Professional Therapy Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                id="expat-therapy-video"
              ></iframe>
            </div>
            <div className="expat-cta-section">
              <a
                href="https://calendly.com/mindinblue/free-15-minute-consultation-call"
                target="_blank"
                rel="noopener noreferrer"
                className="expat-cta-button"
                onClick={() => {
                  pushToDataLayer('calendly_click', {
                    'button_text': 'BOOK YOUR CONSULTATION NOW',
                    'button_location': 'video_section'
                  });
                }}
              >
                ➤ BOOK YOUR CONSULTATION NOW
              </a>
            </div>
          </section>

          <div className="expat-benefits-section">
            <h2 className="expat-benefits-title">
              Ready to start your therapy journey?
            </h2>
            <ul className="expat-benefits-list">
              <li>✓ FREE 15-minute consultation with licensed psychologist</li>
              <li>
                ✓ English-speaking therapist who understand expat challenges
              </li>
              <li>✓ Online or in-person sessions in Gdansk</li>
              <li>✓ Culturally sensitive approach for expats in Poland</li>
            </ul>
            <a
              href="https://calendly.com/mindinblue/free-15-minute-consultation-call"
              target="_blank"
              rel="noopener noreferrer"
              className="expat-cta-button expat-final"
              onClick={() => {
                pushToDataLayer('calendly_click', {
                  'button_text': 'BOOK YOUR CONSULTATION NOW',
                  'button_location': 'benefits_section'
                });
              }}
            >
              ➤ BOOK YOUR CONSULTATION NOW
            </a>
            <p className="expat-warning-text">
              → Don't wait - schedule your call today and take the first step
              toward better mental health
            </p>
          </div>
        </div>
      </main>

      {/* Black Section - What to Expect */}
      <section className="expat-what-includes-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white">
            What to expect in your free consultation:
          </h2>
          <div className="expat-features-grid">
            <div className="expat-feature-item">
              <div className="expat-feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Explore your goals & challenges</h3>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Talk about your options</h3>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </div>
              <h3>Decide your next steps</h3>
            </div>
          </div>

          <div className="expat-bottom-text">
            <a
              href="https://calendly.com/mindinblue/free-15-minute-consultation-call"
              target="_blank"
              rel="noopener noreferrer"
              className="expat-cta-button expat-secondary"
            >
              ➤ SCHEDULE MY CALL
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="expat-google-reviews-section">
        <div className="expat-container">
          <h2 className="expat-section-title">What Our Clients Say</h2>
          <div className="expat-google-reviews-container">
            <div id="reviews-widget-154"></div>
          </div>
        </div>
      </section>
    </div>
    );
  };

  const PrivacyPolicyModal = () => (
    <div className="expat-modal-overlay">
      <div className="expat-privacy-modal-content">
        <button
          className="expat-modal-close"
          onClick={() => setShowPrivacyModal(false)}
        >
          ×
        </button>
        <h2 className="expat-privacy-modal-title">Privacy Policy</h2>
        <div className="expat-privacy-content">
          <div className="expat-privacy-section">
            <h3>Data Controller</h3>
            <p>
              Mind in Blue, located at Gdansk, Poland, is the data controller
              for the personal data you provide through this website.
            </p>
          </div>
          <div className="expat-privacy-section">
            <h3>What Data We Collect</h3>
            <p>
              We collect the following personal data when you submit the contact
              form:
            </p>
            <ul>
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Age range</li>
              <li>Primary concerns and session preferences</li>
            </ul>
          </div>
          <div className="expat-privacy-section">
            <h3>Legal Basis for Processing</h3>
            <p>
              We process your personal data based on your explicit consent (GDPR
              Art. 6(1)(a)) for:
            </p>
            <ul>
              <li>Contacting you about our mental health services</li>
              <li>Providing consultation and therapy services</li>
              <li>Sending information about our treatments and programs</li>
            </ul>
          </div>
          <div className="expat-privacy-section">
            <h3>How We Use Your Data</h3>
            <p>Your personal data is used exclusively to:</p>
            <ul>
              <li>Respond to your inquiry within 24 hours</li>
              <li>Schedule and conduct therapy sessions</li>
              <li>Provide personalized mental health services</li>
              <li>Maintain therapy records as required by Polish law</li>
            </ul>
          </div>
          <div className="expat-privacy-section">
            <h3>Data Retention</h3>
            <p>
              We retain your personal data for the duration necessary to provide
              our services and as required by Polish healthcare regulations,
              typically 5 years after the last therapy session.
            </p>
          </div>
          <div className="expat-privacy-section">
            <h3>Your Rights Under GDPR</h3>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li>Right to access your data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to lodge a complaint with supervisory authority</li>
            </ul>
          </div>
          <div className="expat-privacy-section">
            <h3>Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </div>
          <div className="expat-privacy-section">
            <h3>Contact Information</h3>
            <p>
              For any questions about this privacy policy or to exercise your
              rights, please contact us at:{" "}
              <strong>contact@mindinblue.com</strong>
            </p>
          </div>
          <div className="expat-privacy-footer">
            <strong>Last updated:</strong> August 2025
            <br />
            This privacy policy complies with Polish Personal Data Protection
            Act and EU GDPR regulations.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="ExpatTherapyConsultation">
      {currentPage === "home" && <HomePage />}
      {currentPage === "thankyou" && <ThankYouPage />}
      <ContactModal
        showModal={showModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        setShowPrivacyModal={setShowPrivacyModal}
        isSubmitting={isSubmitting} // + pass loading state
      />
      {showPrivacyModal && <PrivacyPolicyModal />}
    </div>
  );
}

export default NeurodivergentTherapy;
