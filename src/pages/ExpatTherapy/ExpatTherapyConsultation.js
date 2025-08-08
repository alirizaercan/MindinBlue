import React, { useState, useEffect, useCallback, memo } from 'react';
import './expat-therapy-styles.css';

const ContactModal = memo(({ 
  showModal, 
  formData, 
  handleInputChange, 
  handleSubmit, 
  closeModal, 
  setShowPrivacyModal 
}) => {
  if (!showModal) return null;
  
  return (
    <div className="expat-modal-overlay" onClick={closeModal}>
      <div className="expat-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="expat-modal-close"
          onClick={closeModal}
        >
          ×
        </button>
        <h2 className="expat-modal-title">Fill in the form below<br />to get started</h2>
        <form onSubmit={handleSubmit}>
          <div className="expat-form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName || ''}
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
              value={formData.lastName || ''}
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
              value={formData.email || ''}
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
              value={formData.phone || ''}
              onChange={handleInputChange}
              required
              autoComplete="tel"
            />
          </div>
        
          
          <div className="expat-form-group">
            <label htmlFor="goal">What's your biggest challenge as an expat?</label>
            <textarea
              id="goal"
              name="goal"
              value={formData.goal || ''}
              onChange={handleInputChange}
              rows="4"
              placeholder="Please describe your biggest challenge as an expat in Poland..."
            />
          </div>
          
          <div className="expat-form-group">
            <label htmlFor="budget">Preferred way to receive support *</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget || ''}
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
                By sending this form, you’re giving Mind in Blue permission to get in touch with you about your therapy needs. We respect your privacy and will keep your details safe. *
              </div>
            </div>
            <div className="expat-privacy-notice">
              By submitting this form, you accept our{' '}
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
          
          <button type="submit" className="expat-send-button">
            SUBMIT & WATCH THE VIDEO
          </button>
        </form>
      </div>
    </div>
  );
});

function ExpatTherapyConsultation() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goal: '',
    budget: '',
    consent: false
  });

  // Handle modal open state
  useEffect(() => {
    // Modal state management without affecting global body
    const handleModalState = () => {
      if (showModal || showPrivacyModal) {
        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    handleModalState();
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal, showPrivacyModal]);

  // Google Reviews Widget Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.reviewconnect.me/embed/oEYFWLQK1XUVahJzCmQqd4Kr3j2Lo0X5/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Only remove script if it exists in the DOM
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('🇵🇱 URGENT: New Expat Client Application - Mind in Blue');
    const body = encodeURIComponent(`
🇵🇱 NEW EXPAT CLIENT FROM SALES FUNNEL:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

EXPAT-SPECIFIC INFO:
Time in Poland: ${formData.experience}
Biggest Challenge: ${formData.goal}
Preferred Support: ${formData.budget}
Consent Given: ${formData.consent ? 'Yes' : 'No'}

SOURCE: Meta Ads Hybrid Sales Funnel
TARGET: Expats in Poland & Gdansk
PRIORITY: FREE CONSULTATION REQUESTED

This application was submitted from the Mind in Blue expat-focused sales funnel.
Please prioritize - this is a qualified lead from our Meta Ads campaign.
    `);
    
    // Open email client
    window.location.href = `mailto:oyunraptiyesi1@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form data after successful submit
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      goal: '',
      budget: '',
      consent: false
    });
    
    // Close modal and go to thank you page
    setShowModal(false);
    setCurrentPage('thankyou');
  };

  const HomePage = () => (
    <div>
      {/* Top Banner - Market Call Out */}
      <div className="expat-top-banner">
        <div className="expat-container">
          <p>FREE 15-minute consultation call with English-speaking therapists</p>
        </div>
      </div>

      {/* Blue Highlight Section - VSL Hook */}
      <div className="expat-highlight-section">
        <div className="expat-container">
          <p>If you are an expat in Poland, looking for psychologial support, book your FREE 15-minute call</p>
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
                src={process.env.PUBLIC_URL + "/images/mindinblue_therapists.png"} 
                alt="Mind in Blue Professional Therapy" 
                className="expat-therapy-image" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.log('Image failed to load');
                }}
              />
            </div>
            
            <div className="expat-homepage-benefits">
              <h2 className="expat-homepage-benefits-title">In your free 15-minute consultation, you can:</h2>
              <ul className="expat-homepage-benefits-list">
                <li>✓ Share what you’re dealing with right now</li>
                <li>✓ Sum up what you need</li>
                <li>✓ Talk to someone who understands expat life in Poland</li>
                <li>✓ Explore options for therapy in English (in Gdańsk or online)</li>
                <li>✓ Get guidance without language barriers or healthcare confusion</li>
                <li>✓ Decide your next steps toward feeling better</li>
              </ul>
              <button 
                className="expat-cta-button"
                onClick={() => setShowModal(true)}
              >
                ➤ FIND OUT HOW WE CAN HELP YOU
              </button>
              <p className="expat-homepage-warning-text">⚠️ LIMITED SPOTS: Only 5 free consultations available this week</p>
            </div>
          </section>
        </div>
      </main>

      {/* Black Section - What's Included */}
      <section className="expat-what-includes-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white">Your options for professional support:</h2>
          
          <div className="expat-features-grid">
            <div className="expat-feature-item">
              <div className="expat-feature-icon">🫂</div>
              <h3>Counselling & Psychotherapy</h3>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">💑</div>
              <h3>Couples Therapy</h3>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">💻</div>
              <h3>Online Consultations</h3>
            </div>
          </div>

          <div className="expat-bottom-text">
            <button 
              className="expat-cta-button expat-secondary"
              onClick={() => setShowModal(true)}
            >
              ➤ FIND OUT HOW WE CAN HELP YOU
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="expat-steps-section">
        <div className="expat-container">
          <h2 className="expat-section-title">How expats in Poland get started (3 simple steps):</h2>
          
          <div className="expat-steps-grid">
            <div className="expat-step-item">
              <div className="expat-step-icon">📝</div>
              <h3>1. Click the button and fill out the form (takes 1 minute)</h3>
            </div>
            <div className="expat-step-item">
              <div className="expat-step-icon">📞</div>
              <h3>2. Get contacted within 24h by English speaking therapists</h3>
            </div>
            <div className="expat-step-item">
              <div className="expat-step-icon">🎯</div>
              <h3>3. Schedule your FREE 15 minute call</h3>
            </div>
          </div>

          <button 
            className="expat-cta-button expat-final"
            onClick={() => setShowModal(true)}
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
                Our licensed psychologists understand firsthand the ups and downs of expat life — and how to help you navigate them.
              </p>
              <p>
                Since 2018, we’ve been supporting expats in Poland with everything from cultural shock and relationship crises to personal growth, offering sessions in fluent English.
              </p>
              <h3>
                Ready to heal and grow?
              </h3>
              <button 
              className="expat-cta-button expat-final-cta"
              onClick={() => setShowModal(true)}
            >
              YES, I WANT TO GET STARTED
            </button>
            </div>
            <div className="expat-founder-image">
              <img src={process.env.PUBLIC_URL + "/images/mindinblue_therapists.png"} alt="Mind in Blue Team" className="expat-founder-photo" />
            </div>
          </div>
        </div>
      </section>
   </div>
  );

  const ThankYouPage = () => (
    <div>
      {/* Blue Highlight Section */}
      <div className="expat-highlight-section">
        <div className="expat-container">
          <p>🎯 Next step: Watch the video below and book your free consultation call</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="expat-main-content">
        <div className="expat-container">
          <section className="expat-hero-section">
            <h1 className="expat-hero-title">
              Thank You for Your Application
            </h1>
            <p className="expat-hero-subtitle">
              Your consultation request has been received successfully. Meet our team and book your free call below.
            </p>
          </section>

          {/* Video and CTA Section - Centered Single Column */}
          <section className="expat-video-cta-section">
            <div className="expat-video-container">
              <iframe
                src="https://www.youtube.com/embed/jPKA73f1rHI"
                title="Mind in Blue Professional Therapy Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="expat-cta-section">
              <a 
                href="https://calendly.com/mindinblue/free-15-minute-consultation-call"
                target="_blank"
                rel="noopener noreferrer"
                className="expat-cta-button"
              >
                ➤ BOOK YOUR FREE CONSULTATION NOW
              </a>
            </div>

            <div className="expat-benefits-section">
              <h2 className="expat-benefits-title">Ready to start your therapy journey?</h2>
              <ul className="expat-benefits-list">
                <li>✓ FREE 15-minute consultation with licensed psychologist</li>
                <li>✓ English-speaking therapists who understand expat challenges</li>
                <li>✓ Online or in-person sessions in Gdansk</li>
                <li>✓ Culturally sensitive approach for expats in Poland</li>
              </ul>
              <p className="expat-warning-text">📞 Don't wait - schedule your call today and take the first step toward better mental health</p>
            </div>
          </section>
        </div>
      </main>

      {/* Black Section - What to Expect */}
      <section className="expat-what-includes-section">
        <div className="expat-container">
          <h2 className="expat-section-title-white">What to expect in your free consultation:</h2>

          <div className="expat-features-grid">
            <div className="expat-feature-item">
              <div className="expat-feature-icon">🎯</div>
              <h3>Explore your goals & challenges</h3>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">💬</div>
              <h3>Talk about your options</h3>
            </div>
            <div className="expat-feature-item">
              <div className="expat-feature-icon">📅</div>
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
            <p>Mind in Blue, located at Gdansk, Poland, is the data controller for the personal data you provide through this website.</p>
          </div>

          <div className="expat-privacy-section">
            <h3>What Data We Collect</h3>
            <p>We collect the following personal data when you submit the contact form:</p>
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
            <p>We process your personal data based on your explicit consent (GDPR Art. 6(1)(a)) for:</p>
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
            <p>We retain your personal data for the duration necessary to provide our services and as required by Polish healthcare regulations, typically 5 years after the last therapy session.</p>
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
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div className="expat-privacy-section">
            <h3>Contact Information</h3>
            <p>For any questions about this privacy policy or to exercise your rights, please contact us at: <strong>contact@mindinblue.com</strong></p>
          </div>

          <div className="expat-privacy-footer">
            <strong>Last updated:</strong> August 2025<br/>
            This privacy policy complies with Polish Personal Data Protection Act and EU GDPR regulations.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="ExpatTherapyConsultation">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'thankyou' && <ThankYouPage />}
      <ContactModal 
        showModal={showModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
        setShowPrivacyModal={setShowPrivacyModal}
      />
      {showPrivacyModal && <PrivacyPolicyModal />}
    </div>
  );
}

export default ExpatTherapyConsultation;
