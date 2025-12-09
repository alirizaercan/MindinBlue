import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { applySEO } from "./utils/seo";
import { gtmPageView } from "./utils/gtm";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Services = lazy(() => import("./pages/Services/Services"));
const Team = lazy(() => import("./pages/Team/Team"));
const CounsellingPsychotherapy = lazy(() => import("./pages/CounsellingPsychotherapy/CounsellingPsychotherapy"));
const CouplesTherapy = lazy(() => import("./pages/CouplesTherapy/CouplesTherapy"));
const OnlineConsultation = lazy(() => import("./pages/OnlineConsultation/OnlineConsultation"));
const ExpatTherapyConsultation = lazy(() => import("./pages/ExpatTherapy/ExpatTherapyConsultation"));

// Loading component
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
    <div style={{ 
      width: '40px', 
      height: '40px', 
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #3fa9f5',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function AppContent() {
  const location = useLocation();
  const isExpatTherapyPage = location.pathname === '/expat-poland' || location.pathname === '/expat-therapy-poland';

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
      '/expat-poland': 'expatTherapy'
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
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/expat-poland" element={<ExpatTherapyConsultation />} />
          {/* 301 Redirect from old URL to new URL */}
          <Route path="/expat-therapy-poland" element={<Navigate to="/expat-poland" replace />} />
        </Routes>
      </Suspense>
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
