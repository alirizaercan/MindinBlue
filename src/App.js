// Main App component for MindinBlue website
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import CounsellingPsychotherapy from "./pages/CounsellingPsychotherapy/CounsellingPsychotherapy";
import CouplesTherapy from "./pages/CouplesTherapy/CouplesTherapy";
import OnlineConsultation from "./pages/OnlineConsultation/OnlineConsultation";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counselling-psychotherapy" element={<CounsellingPsychotherapy />} />
        <Route path="/couples-therapy" element={<CouplesTherapy />} />
        <Route path="/online-consultation" element={<OnlineConsultation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
