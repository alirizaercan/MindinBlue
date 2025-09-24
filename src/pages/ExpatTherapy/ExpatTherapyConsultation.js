import React, { useState, useEffect, useCallback, memo } from "react";
import "./expat-therapy-styles.css";
import emailjs from "@emailjs/browser"; // + EmailJS

// Добавьте рядом с импортами (замените на ваш новый template_id из EmailJS)
const EMAILJS_SERVICE_ID = "service_6nnbqus";
const EMAILJS_TEMPLATE_ID_EXPAT = "template_l4g1q2h"; // <-- используем ваш реальный Template ID из EmailJS

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
              <label htmlFor="goal">
                What would you like support with right now?
              </label>
              <textarea
                id="goal"
                name="goal"
                value={formData.goal || ""}
                onChange={handleInputChange}
                rows="4"
                placeholder="Please describe what you would like support with right now..."
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
              onClick={() => {
                // Meta's EXACT recommended format
                if (window.fbq) {
                  window.fbq('track', 'SubmitApplication', {}, '1552008896250076');
                  console.log('🎯 BUTTON CLICK: SubmitApplication sent to pixel 1552008896250076');
                }
              }}
            >
              {isSubmitting ? "SENDING…" : "SUBMIT & WATCH THE VIDEO"}
            </button>
          </form>
        </div>
      </div>
    );
  }
);

function ExpatTherapyConsultation() {
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
    goal: "",
    budget: "",
    consent: false,
  });

  // + Initialize EmailJS (reuse the same public key as /contact)
  useEffect(() => {
    emailjs.init("WsafYrZj3fnh_4yA0"); // same as Contact.js
  }, []);

  // Enhanced page view tracking for Expat Therapy page
  useEffect(() => {
    const trackExpatPageView = () => {
      if (window.fbq) {
        // Ensure special pixel is initialized (redundant check for safety)
        window.fbq('init', '1552008896250076');

        
        // 1. Enhanced PageView with specific pixel targeting
        window.fbq('track', 'PageView', {
          source: 'react_component',
          page_type: 'landing_page'
        }, '1552008896250076');

        
        // 2. Advanced ViewContent event with detailed parameters
        window.fbq('track', 'ViewContent', {
          content_name: 'Expat Therapy Poland - Free Consultation Landing',
          content_category: 'Therapy Services',
          content_ids: ['expat-therapy-poland-landing'],
          content_type: 'landing_page',
          value: 0, // 0 value - analytics tracking only
          currency: 'PLN',
          predicted_ltv: 3000,
          custom_data: {
            service_type: 'expat_therapy',
            consultation_type: 'free_15min',
            target_audience: 'expats_poland'
          }
        }, '1552008896250076');

        
        // 3. Specialized custom events for campaign optimization
        window.fbq('trackCustom', 'ExpatTherapyPageEngagement', {
          engagement_type: 'page_load',
          landing_page: 'expat-therapy-poland',
          user_journey_stage: 'awareness',
          page_load_timestamp: new Date().toISOString(),
          referrer: document.referrer || 'direct',
          user_language: navigator.language,
          screen_resolution: `${screen.width}x${screen.height}`,
          device_type: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop'
        }, '1552008896250076');


        // 4. Funnel tracking event
        window.fbq('trackCustom', 'ExpatTherapyFunnelEntry', {
          funnel_stage: 'landing_page_view',
          campaign_objective: 'lead_generation',
          target_action: 'form_submission',
          page_position: 'top_of_funnel'
        }, '1552008896250076');


        // 5. Time-based engagement tracking
        setTimeout(() => {
          window.fbq('trackCustom', 'ExpatTherapyTimeOnPage', {
            time_spent: '10_seconds',
            engagement_quality: 'initial'
          }, '1552008896250076');

        }, 10000);

        setTimeout(() => {
          window.fbq('trackCustom', 'ExpatTherapyTimeOnPage', {
            time_spent: '30_seconds',
            engagement_quality: 'moderate'
          }, '1552008896250076');

        }, 30000);

        setTimeout(() => {
          window.fbq('trackCustom', 'ExpatTherapyTimeOnPage', {
            time_spent: '60_seconds',
            engagement_quality: 'high'
          }, '1552008896250076');

        }, 60000);

      } else {
        console.error('❌ Facebook Pixel not available for page tracking!');
      }
    };

    // Track immediately when component mounts
    trackExpatPageView();
    
    // Track scroll behavior
    const trackScrollBehavior = () => {
      let scrollTracked25 = false;
      let scrollTracked50 = false;
      let scrollTracked75 = false;
      let scrollTracked100 = false;

      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercent >= 25 && !scrollTracked25 && window.fbq) {
          window.fbq('trackCustom', 'ExpatTherapyScrollDepth', {
            scroll_depth: '25_percent',
            engagement_level: 'low'
          }, '1552008896250076');
          scrollTracked25 = true;

        }
        
        if (scrollPercent >= 50 && !scrollTracked50 && window.fbq) {
          window.fbq('trackCustom', 'ExpatTherapyScrollDepth', {
            scroll_depth: '50_percent',
            engagement_level: 'medium'
          }, '1552008896250076');
          scrollTracked50 = true;

        }
        
        if (scrollPercent >= 75 && !scrollTracked75 && window.fbq) {
          window.fbq('trackCustom', 'ExpatTherapyScrollDepth', {
            scroll_depth: '75_percent',
            engagement_level: 'high'
          }, '1552008896250076');
          scrollTracked75 = true;

        }
        
        if (scrollPercent >= 90 && !scrollTracked100 && window.fbq) {
          window.fbq('trackCustom', 'ExpatTherapyScrollDepth', {
            scroll_depth: '90_percent',
            engagement_level: 'very_high'
          }, '1552008896250076');
          scrollTracked100 = true;

        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    const cleanupScroll = trackScrollBehavior();
    
    return () => {
      cleanupScroll();
    };
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

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

      // Всегда только "Biggest challenge:" — без лишних секций
      const biggestChallengeText = `Would like support with:\n${
        formData.goal && formData.goal.trim() ? formData.goal.trim() : "-"
      }`;

      const templateParams = {
        from_name: `${formData.firstName || ""} ${
          formData.lastName || ""
        }`.trim(),
        name: `${formData.firstName || ""} ${formData.lastName || ""}`.trim(),
        from_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        service: "Expat Therapy Consultation",
        session_type: sessionType,
        message: biggestChallengeText, // только этот блок
        to_email: "anna.rozkwitalska@gmail.com",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_EXPAT,
        templateParams
      );

      // PRIMARY CONVERSION EVENT - Form Submission (HIGHEST PRIORITY FOR META ADS)
      if (window.fbq) {
        // Ensure special pixel ID is initialized for this conversion
        window.fbq('init', '1552008896250076');
        
        // 1. PRIMARY META CONVERSION - Submit Application (EXACT Meta format)
        window.fbq('track', 'SubmitApplication', {}, '1552008896250076');
        console.log('🎯 FORM SUBMIT: SubmitApplication sent to pixel 1552008896250076');
        
        // 2. BACKUP: CompleteRegistration event (Meta standard event)
        window.fbq('track', 'CompleteRegistration', {
          content_name: 'Expat Therapy Form',
          status: 'completed'
        }, '1552008896250076');
        console.log('🎯 BACKUP: CompleteRegistration sent to pixel 1552008896250076');
        
        // 2. MAIN CONVERSION EVENT - Lead (For analytics/statistics only)
        window.fbq('track', 'Lead', {
          content_name: 'Expat Therapy Consultation Request',
          content_category: 'ANALYTICS_TRACKING', // Analytics focused
          content_ids: ['expat-therapy-form-submission'],
          content_type: 'consultation_form',
          value: 0, // 0 value - pure analytics tracking
          currency: 'PLN',
          source: 'expat-therapy-landing-page',
          // Analytics parameters
          tracking_purpose: 'statistics_only',
          lead_quality: 'verified_contact',
          user_intent: 'ready_to_book'
        }, '1552008896250076'); // Explicitly use expat pixel

        // 2. SECONDARY CONVERSION - Contact (analytics tracking)
        window.fbq('track', 'Contact', {
          content_name: 'Expat Therapy Contact Form',
          content_category: 'ANALYTICS_CONTACT',
          value: 0, // 0 value - statistics only
          currency: 'PLN',
          contact_quality: 'form_submission',
          tracking_purpose: 'analytics'
        }, '1552008896250076');

        // 3. CUSTOM PRIMARY CONVERSION for campaign reporting
        window.fbq('trackCustom', 'ExpatTherapyFormSubmitted', {
          event_priority: 'PRIMARY_CONVERSION',
          conversion_type: 'consultation_request',
          lead_quality: 'high_intent',
          form_completion: 'full',
          session_preference: sessionType,
          user_qualified: 'yes',
          conversion_value: 0, // Statistics only
          // Data for Meta's learning algorithm
          user_journey_completed: 'form_submission',
          engagement_level: 'conversion_ready',
          intent_signal: 'strongest'
        }, '1552008896250076');

        // 4. PURCHASE EVENT - Analytics tracking only
        window.fbq('track', 'Purchase', {
          content_name: 'Expat Therapy Consultation Analytics',
          content_type: 'analytics_event',
          content_ids: ['consultation-analytics'],
          value: 0, // 0 value = pure statistics tracking
          currency: 'PLN',
          num_items: 1,
          purchase_type: 'analytics_tracking'
        }, '1552008896250076');
        
        // Send a custom test event as backup for tracking
        if (window.fbq) {
          window.fbq('trackCustom', 'ExpatTherapyFormSubmissionTest', {
            event_time: new Date().toISOString(),
            form_completed: true,
            pixel_id: '1552008896250076'
          }, '1552008896250076');
        }
      }

      // Optional: user feedback
      alert("Thank you for your application! We will contact you within 24h.");

      // Reset and navigate to thank you
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        goal: "",
        budget: "",
        consent: false,
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
            FREE 15-minute consultation call with English-speaking therapist
          </p>
        </div>
      </div>

      {/* Blue Highlight Section - VSL Hook */}
      <div className="expat-highlight-section">
        <div className="expat-container">
          <p>
            If you are an expat in Poland, looking for psychologial support,
            book your FREE 15-minute call
          </p>
        </div>
      </div>

      {/* Main Hero Section */}
      <main className="expat-main-content">
        <div className="expat-container">
          <section className="expat-hero-section">
            <h1 className="expat-hero-title">
              Get English-speaking therapy in Poland without language barriers
            </h1>
            <p className="expat-hero-subtitle">
              Licensed psychologists online or in-person in Gdańsk
            </p>
          </section>

          {/* Main Content Grid */}
          <section className="expat-homepage-grid">
            <div className="expat-homepage-image">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/mindinblue_therapists.png"
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
                In your free 15-minute consultation, you can:
              </h2>
              <ul className="expat-homepage-benefits-list">
                <li>✓ Share what you’re dealing with right now</li>
                <li>✓ Sum up what you need</li>
                <li>✓ Talk to someone who understands expat life in Poland</li>
                <li>
                  ✓ Explore options for therapy in English (in Gdańsk or online)
                </li>
                <li>
                  ✓ Get guidance without language barriers or healthcare
                  confusion
                </li>
                <li>✓ Decide your next steps toward feeling better</li>
              </ul>
              <button
                className="expat-cta-button"
                onClick={() => {
                  // INTENT SIGNAL - CTA click shows interest in form submission
                  if (window.fbq) {
                    window.fbq('track', 'InitiateCheckout', {
                      content_name: 'Expat Therapy CTA - Form Intent',
                      content_category: 'INTENT_SIGNAL',
                      content_type: 'form_opening',
                      value: 0, // 0 value - analytics tracking only
                      currency: 'PLN',
                      // Signals to Meta: this user is moving toward conversion
                      intent_level: 'form_opening',
                      conversion_likelihood: 'medium'
                    }, '1552008896250076');
                    
                    window.fbq('trackCustom', 'ExpatTherapyFormIntent', {
                      event_priority: 'INTENT_SIGNAL',
                      intent_action: 'cta_clicked',
                      cta_type: 'primary_form_opener',
                      cta_position: 'hero_section',
                      user_journey_stage: 'pre_conversion',
                      conversion_probability: 'high',
                      value: 0, // Analytics only
                      currency: 'PLN'
                    }, '1552008896250076');
                    

                  }
                  setShowModal(true);
                }}
              >
                ➤ FIND OUT HOW WE CAN HELP YOU
              </button>
              <p className="expat-homepage-warning-text">⚠️ LIMITED SPOTS</p>
            </div>
          </section>
        </div>
      </main>

      {/* Black Section - What's Included */}
      <section className="expat-what-includes-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white">
            Your options for professional support:
          </h2>

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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Counselling & Psychotherapy</h3>
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
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Couples Therapy</h3>
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
              <h3>Online Consultations</h3>
            </div>
          </div>

          <div className="expat-bottom-text">
            <button
              className="expat-cta-button expat-secondary"
              onClick={() => {
                // INTENT SIGNAL - Secondary CTA shows continued interest
                if (window.fbq) {
                  window.fbq('track', 'InitiateCheckout', {
                    content_name: 'Expat Therapy CTA - Secondary Form Intent',
                    content_category: 'INTENT_SIGNAL',
                    content_type: 'form_opening_secondary',
                    value: 0, // 0 value - statistics tracking only
                    currency: 'PLN',
                    intent_level: 'secondary_form_opening',
                    conversion_likelihood: 'medium'
                  }, '1552008896250076');
                  
                  window.fbq('trackCustom', 'ExpatTherapyFormIntent', {
                    event_priority: 'INTENT_SIGNAL',
                    intent_action: 'secondary_cta_clicked',
                    cta_type: 'secondary_form_opener',
                    cta_position: 'features_section',
                    user_journey_stage: 'deep_consideration',
                    conversion_probability: 'very_high', // Scrolled down and clicked
                    value: 0, // Analytics only
                    currency: 'PLN'
                  }, '1552008896250076');
                  

                }
                setShowModal(true);
              }}
            >
              ➤ FIND OUT HOW WE CAN HELP YOU
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="expat-steps-section">
        <div className="expat-container">
          <h2 className="expat-section-title">
            How expats in Poland get started (3 simple steps):
          </h2>

          <div className="expat-steps-grid">
            <div className="expat-step-item">
              <div className="expat-step-icon">1</div>
              <h3>
                1. Click the button and fill out the form (takes 1 minute)
              </h3>
            </div>
            <div className="expat-step-item">
              <div className="expat-step-icon">2</div>
              <h3>2. Get contacted within 24h by English speaking therapist</h3>
            </div>
            <div className="expat-step-item">
              <div className="expat-step-icon">3</div>
              <h3>3. Schedule your FREE 15 minute call</h3>
            </div>
          </div>

          <button
            className="expat-cta-button expat-final"
            onClick={() => {
              // STRONG INTENT SIGNAL - Final CTA after seeing steps
              if (window.fbq) {
                window.fbq('track', 'InitiateCheckout', {
                  content_name: 'Start Expat Therapy Journey - High Intent',
                  content_category: 'STRONG_INTENT_SIGNAL',
                  content_type: 'journey_starter',
                  value: 0, // 0 value - analytics tracking only
                  currency: 'PLN',
                  intent_level: 'journey_commitment',
                  conversion_likelihood: 'very_high'
                }, '1552008896250076');
                
                window.fbq('trackCustom', 'ExpatTherapyFormIntent', {
                  event_priority: 'STRONG_INTENT_SIGNAL',
                  intent_action: 'journey_starter_clicked',
                  cta_type: 'journey_commitment',
                  cta_position: 'steps_section',
                  user_journey_stage: 'ready_to_convert',
                  conversion_probability: 'extremely_high',
                  engagement_depth: 'read_full_process',
                  value: 0, // Analytics only
                  currency: 'PLN'
                }, '1552008896250076');
                

              }
              setShowModal(true);
            }}
          >
            START MY EXPAT THERAPY JOURNEY
          </button>
        </div>
      </section>

      {/* Founder Section */}
      <section className="expat-founder-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white"></h2>

          <div className="expat-founder-grid">
            <div className="expat-founder-content">
              <h3>You’re in good hands</h3>
              <p>
                Our licensed psychologists understand firsthand the ups and
                downs of expat life — and how to help you navigate them.
              </p>
              <p>
                Since 2018, we’ve been supporting expats in Poland with
                everything from cultural shock and relationship crises to
                personal growth, offering sessions in fluent English.
              </p>
              <h3>Ready to heal and grow?</h3>
              <button
                className="expat-cta-button expat-final-cta"
                onClick={() => {
                  // MAXIMUM INTENT SIGNAL - Bottom CTA after full page
                  if (window.fbq) {
                    window.fbq('track', 'InitiateCheckout', {
                      content_name: 'Yes I Want To Get Started - Maximum Intent',
                      content_category: 'MAXIMUM_INTENT_SIGNAL',
                      content_type: 'final_decision',
                      value: 0, // 0 value - analytics tracking only
                      currency: 'PLN'
                    }, '1552008896250076');
                    
                    window.fbq('trackCustom', 'ExpatTherapyFormIntent', {
                      event_priority: 'MAXIMUM_INTENT_SIGNAL',
                      intent_action: 'final_commitment_clicked',
                      cta_type: 'full_page_decision',
                      cta_position: 'founder_section',
                      user_journey_stage: 'immediate_conversion',
                      conversion_probability: 'almost_certain',
                      engagement_depth: 'full_page_consumed',
                      value: 0, // Analytics only
                      currency: 'PLN'
                    }, '1552008896250076');
                    

                  }
                  setShowModal(true);
                }}
              >
                YES, I WANT TO GET STARTED
              </button>
            </div>
            <div className="expat-founder-image">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/mindinblue_therapists.png"
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
    </div>
  );

  // Video tracking hook for Thank You page
  const useVideoTracking = () => {
    useEffect(() => {
      if (currentPage === "thankyou") {
        // Track video page view
        if (window.fbq) {
          window.fbq('init', '1552008896250076');
          
          // Track that user reached the video page
          window.fbq('trackCustom', 'ExpatTherapyVideoPageView', {
            page: 'thank-you-video-page',
            video_id: 'jPKA73f1rHI',
            video_title: 'Mind in Blue Professional Therapy Services',
            conversion_funnel_step: 'post_form_submission',
            timestamp: new Date().toISOString()
          });


          // Track ViewContent for the video page
          window.fbq('track', 'ViewContent', {
            content_name: 'Expat Therapy Introduction Video',
            content_category: 'Video Content',
            content_ids: ['expat-therapy-intro-video'],
            content_type: 'video',
            value: 50,
            currency: 'PLN'
          });

        }

        // YouTube API tracking setup
        const setupYouTubeTracking = () => {
          // Load YouTube API if not already loaded
          if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          }

          // Setup YouTube player event tracking
          window.onYouTubeIframeAPIReady = () => {
            const iframe = document.querySelector('iframe[src*="youtube.com"]');
            if (iframe && iframe.contentWindow) {
              // Track video events via postMessage
              window.addEventListener('message', (event) => {
                if (event.origin !== 'https://www.youtube.com') return;
                
                if (event.data && typeof event.data === 'string') {
                  const data = JSON.parse(event.data);
                  
                  if (data.event === 'video-progress' && window.fbq) {
                    const progressPercent = Math.round((data.info.currentTime / data.info.duration) * 100);
                    
                    // SUPPORTING SIGNALS - Video engagement (helps Meta find similar users)
                    if (progressPercent >= 25 && !window.videoTracked25) {
                      window.fbq('trackCustom', 'ExpatTherapyVideoEngagement', {
                        event_priority: 'SUPPORTING_SIGNAL',
                        video_progress: '25_percent',
                        video_id: 'jPKA73f1rHI',
                        engagement_quality: 'initial_interest',
                        intent_level: 'low',
                        value: 0, // 0 value - analytics tracking only
                        currency: 'PLN'
                      }, '1552008896250076');
                      window.videoTracked25 = true;

                    }
                    
                    if (progressPercent >= 50 && !window.videoTracked50) {
                      window.fbq('trackCustom', 'ExpatTherapyVideoEngagement', {
                        event_priority: 'SUPPORTING_SIGNAL',
                        video_progress: '50_percent',
                        video_id: 'jPKA73f1rHI',
                        engagement_quality: 'moderate_interest',
                        intent_level: 'medium',
                        value: 0, // 0 value - analytics tracking only
                        currency: 'PLN'
                      }, '1552008896250076');
                      window.videoTracked50 = true;

                    }
                    
                    if (progressPercent >= 75 && !window.videoTracked75) {
                      window.fbq('trackCustom', 'ExpatTherapyVideoEngagement', {
                        event_priority: 'SUPPORTING_SIGNAL',
                        video_progress: '75_percent',
                        video_id: 'jPKA73f1rHI',
                        engagement_quality: 'high_interest',
                        intent_level: 'high',
                        value: 0, // 0 value - analytics tracking only
                        currency: 'PLN'
                      }, '1552008896250076');
                      window.videoTracked75 = true;

                    }
                    
                    if (progressPercent >= 95 && !window.videoTrackedComplete) {
                      // Video completion - this is more valuable but still secondary
                      window.fbq('trackCustom', 'ExpatTherapyVideoCompleted', {
                        event_priority: 'SECONDARY_CONVERSION',
                        video_progress: 'completed',
                        video_id: 'jPKA73f1rHI',
                        engagement_quality: 'very_high_interest',
                        intent_level: 'conversion_likely',
                        watch_completion: 'full',
                        value: 0, // 0 value - analytics tracking only
                        currency: 'PLN'
                      }, '1552008896250076');
                      
                      // Track as ViewContent (supporting signal, not primary conversion)
                      window.fbq('track', 'ViewContent', {
                        content_name: 'Video Watched Complete - Expat Therapy',
                        content_category: 'Video Engagement',
                        content_type: 'supporting_signal',
                        value: 0, // 0 value - analytics tracking only
                        currency: 'PLN'
                      }, '1552008896250076');
                      
                      window.videoTrackedComplete = true;

                    }
                  }
                }
              });
            }
          };
        };

        setupYouTubeTracking();

        // Fallback tracking for video interaction (click-based)
        const trackVideoInteraction = () => {
          const iframe = document.querySelector('iframe[src*="youtube.com"]');
          if (iframe) {
            iframe.addEventListener('click', () => {
              if (window.fbq && !window.videoClicked) {
                window.fbq('trackCustom', 'ExpatTherapyVideoInteraction', {
                  interaction_type: 'click',
                  video_id: 'jPKA73f1rHI',
                  engagement_action: 'video_clicked'
                });
                window.videoClicked = true;

              }
            });
          }
        };

        setTimeout(trackVideoInteraction, 1000);
      }
    }, []);
  };

  // Use the video tracking hook
  useVideoTracking();

  const ThankYouPage = () => {
    // Meta's Method 2: Track SubmitApplication on Thank You page load
    useEffect(() => {
      if (window.fbq) {
        window.fbq('track', 'SubmitApplication', {}, '1552008896250076');
        console.log('🎯 THANK YOU PAGE: SubmitApplication sent to pixel 1552008896250076');
      }
    }, []);

    return (
    <div>
      {/* Blue Banner for Thank You Page */}
      <div className="expat-highlight-section">
        <div className="expat-container">
          <p>
            🎯 Next step: Watch the video below and book your free consultation
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
                  // HIGHEST VALUE EVENT - Calendly booking after form + video
                  if (window.fbq) {
                    window.fbq('track', 'Schedule', {
                      content_name: 'Book Free Consultation - Post Form & Video',
                      content_category: 'FINAL_CONVERSION',
                      content_type: 'appointment_booking',
                      value: 0, // 0 value - analytics tracking only
                      currency: 'PLN',
                      conversion_stage: 'final_booking',
                      lead_quality: 'premium'
                    }, '1552008896250076');
                    
                    window.fbq('trackCustom', 'ExpatTherapyFinalConversion', {
                      event_priority: 'ULTIMATE_CONVERSION',
                      conversion_type: 'calendly_booking',
                      user_journey: 'form_video_booking',
                      calendly_position: 'post_video',
                      conversion_quality: 'highest',
                      booking_readiness: 'immediate',
                      value: 0, // Analytics only
                      currency: 'PLN'
                    }, '1552008896250076');
                    

                  }
                }}
              >
                ➤ BOOK YOUR FREE CONSULTATION NOW
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
                // HIGH VALUE EVENT - Calendly booking after form submission
                if (window.fbq) {
                  window.fbq('track', 'Schedule', {
                    content_name: 'Book Free Consultation - Post Form Submission',
                    content_category: 'HIGH_VALUE_CONVERSION',
                    content_type: 'direct_booking',
                    value: 0, // 0 value - analytics tracking only
                    currency: 'PLN',
                    conversion_stage: 'direct_booking',
                    lead_quality: 'very_high'
                  }, '1552008896250076');
                  
                  window.fbq('trackCustom', 'ExpatTherapyHighValueConversion', {
                    event_priority: 'HIGH_VALUE_CONVERSION',
                    conversion_type: 'direct_calendly_booking',
                    user_journey: 'form_to_booking',
                    calendly_position: 'benefits_section',
                    conversion_quality: 'very_high',
                    booking_speed: 'immediate',
                    value: 0, // Analytics only
                    currency: 'PLN'
                  }, '1552008896250076');
                  

                }
              }}
            >
              ➤ BOOK YOUR FREE CONSULTATION NOW
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
              onClick={() => {
                // Track bottom Calendly link
                if (window.fbq) {
                  window.fbq('track', 'Schedule', {
                    content_name: 'Schedule Free Call - Bottom',
                    content_category: 'Appointment Booking',
                    value: 300,
                    currency: 'PLN'
                  }, '1552008896250076');
                  
                  window.fbq('trackCustom', 'ExpatTherapyCalendlyClick', {
                    click_type: 'bottom',
                    calendly_position: 'expectations_section',
                    user_journey_stage: 'final_decision'
                  }, '1552008896250076');
                  

                }
              }}
            >
              ➤ SCHEDULE MY FREE CALL
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

export default ExpatTherapyConsultation;
