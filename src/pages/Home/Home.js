// Home page component

import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div class Name="home-page">
      <div className="sky-image-wrapper">
        <img src="/sky.png" alt="Sky" className="sky-image" />
        <div className="sky-overlay">
          <h1>For when you're ready to heal and grow</h1>
          <p>Counselling • Psychotherapy • Life Coaching</p>
          <button className="book-btn" onClick={() => navigate("/contact")}>
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
