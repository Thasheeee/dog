import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import LearnMoreSection from "./components/LearnMoreSection";
import BookAppointmentSection from "./components/BookAppointmentSection";
import BrowseAdoptionsSection from "./components/BrowseAdoptionSection";
import { useState } from "react";

const App = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const handleLoginClick = () => {
    setAuthMode("login");
    setIsAuthModalOpen(true);
  };
  const handleGetStarted = () => {
    setAuthMode("signup");
    setIsAuthModalOpen(true);
  };
  const handleLearnMore = () => {
    setIsLearnMoreOpen(true);
  };
  return (
    <div className="min-h-screen">
      {" "}
      <Navigation onLoginClick={handleLoginClick} />{" "}
      <HeroSection
        onGetStarted={handleGetStarted}
        onLearnMore={handleLearnMore}
      />{" "}
      <FeaturesSection /> 
       <BookAppointmentSection />
      <BrowseAdoptionsSection />
      <HowItWorksSection />
       <AboutSection />{" "}
      <ContactSection /> <Footer />{" "}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />{" "}
      <LearnMoreSection
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
      />{" "}
    </div>
  );
};
export default App;


