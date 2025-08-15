import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { initFacebookPixel } from "./utils/fbPixel";
import { applySEO } from "./utils/seo";
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
