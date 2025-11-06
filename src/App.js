import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { LanguageProvider } from "./contexts/LanguageContext";
import { applySEO } from "./utils/seo";
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

    // GTM Page View Tracking (Marketing team will handle all tracking via GTM)
    gtmPageView(
      document.title,
      location.pathname + location.search,
      window.location.href
    );
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
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          cookieName="mindinblue_cookie_consent"
          containerClasses="cookie-consent-container"
          contentClasses="cookie-consent-content"
          buttonWrapperClasses="cookie-consent-buttons"
          style={{
            background: "#2c3e50",
            fontSize: "15px",
            padding: "20px",
            paddingRight: "40px"
          }}
          buttonStyle={{
            background: "#3498db",
            color: "#fff",
            fontSize: "15px",
            padding: "12px 30px",
            borderRadius: "5px",
            fontWeight: "600",
            marginRight: "40px"
          }}
          declineButtonStyle={{
            background: "#e74c3c",
            color: "#fff",
            fontSize: "15px",
            padding: "12px 30px",
            borderRadius: "5px",
            fontWeight: "600",
            marginRight: "10px"
          }}
          expires={365}
          onAccept={() => {
            if (window.gtag) {
              window.gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted',
                'personalization_storage': 'granted'
              });
            }
          }}
        >
          This website uses cookies to enhance the user experience.{" "}
          <a href="/contact" style={{ color: "#3498db", fontWeight: "600" }}>Learn more</a>
        </CookieConsent>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
