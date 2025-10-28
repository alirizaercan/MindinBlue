import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { initFacebookPixel, trackEvent } from "./utils/fbPixel";
import { applySEO } from "./utils/seo";
import usePageTracking from "./utils/usePageTracking";
import { gtmPageView } from "./utils/gtm";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import CounsellingPsychotherapy from "./pages/CounsellingPsychotherapy/CounsellingPsychotherapy";
import CouplesTherapy from "./pages/CouplesTherapy/CouplesTherapy";
import OnlineConsultation from "./pages/OnlineConsultation/OnlineConsultation";
import ExpatTherapyConsultation from "./pages/ExpatTherapy/ExpatTherapyConsultation";

function AppContent() {
  const location = useLocation();
  const isExpatTherapyPage = location.pathname === '/expat-therapy-poland';

  // Google Analytics - Automatic page tracking for SPA navigation
  usePageTracking();

  // Initialize Facebook Pixel
  useEffect(() => {
    initFacebookPixel();
  }, []);

  // Apply SEO based on current route
  useEffect(() => {
    const routeToSEOMap = {
      '/': 'home',
      '/team': 'team', 
      '/services': 'services',
      '/contact': 'contact',
      '/counselling-psychotherapy': 'counsellingPsychotherapy',
      '/couples-therapy': 'couplesTherapy',
      '/online-consultation': 'onlineConsultation',
      '/expat-therapy-poland': 'expatTherapy'
    };

    const seoKey = routeToSEOMap[location.pathname];
    if (seoKey) {
      applySEO(seoKey);
    }

    // GTM Page View Tracking
    gtmPageView(
      document.title,
      location.pathname + location.search,
      window.location.href
    );

    // Force PageView tracking for all routes - especially expat therapy
    setTimeout(() => {
      if (window.fbq) {
        window.fbq('track', 'PageView');
        console.log(`✅ Facebook Pixel PageView forced for: ${location.pathname}`);
        
        // Extra tracking for expat-therapy-poland with SPECIAL PIXEL ID
        if (location.pathname === '/expat-therapy-poland') {
          // Initialize second pixel for expat therapy
          window.fbq('init', '1552008896250076');
          window.fbq('track', 'PageView');
          
          window.fbq('track', 'ViewContent', {
            content_name: 'Expat Therapy Poland Landing Page',
            content_category: 'Landing Page',
            content_ids: ['expat-therapy-poland'],
            content_type: 'website'
          });
          
          // Custom event to ensure Meta sees this specific page
          window.fbq('trackCustom', 'ExpatTherapyPageVisit', {
            page_url: window.location.href,
            page_title: document.title,
            timestamp: new Date().toISOString()
          });
          
          console.log('🎯 Extra tracking fired for expat-therapy-poland with special Pixel ID: 1552008896250076');
        }
      } else {
        console.error('❌ Facebook Pixel not loaded!');
      }
    }, 100); // Small delay to ensure pixel is loaded
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {!isExpatTherapyPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/counselling-psychotherapy"
          element={<CounsellingPsychotherapy />}
        />
        <Route path="/couples-therapy" element={<CouplesTherapy />} />
        <Route path="/online-consultation" element={<OnlineConsultation />} />
        {/* Expat Therapy - Standalone landing page without Header/Footer */}
        <Route path="/expat-therapy-poland" element={<ExpatTherapyConsultation />} />
      </Routes>
      {!isExpatTherapyPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
