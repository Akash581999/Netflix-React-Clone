import React from "react";
import "./App.css";
import Header from "./components/Header";
import TvSection from "./components/TvSection";
import PhoneSection from "./components/PhoneSection";
import MacSection from "./components/MacSection";
import ProfileSection from "./components/ProfileSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TvSection />
      <PhoneSection />
      <MacSection />
      <ProfileSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
