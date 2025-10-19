import { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import InvitationMessage from './components/InvitationMessage';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import Parents from './components/Parents';
import Godparents from './components/Godparents';
import InMemory from './components/InMemory';
import PhotoGallery from './components/PhotoGallery';
import Trivia from './components/Trivia';
import GiftRegistry from './components/GiftRegistry';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Divider from './components/Divider';
import AdminPanel from './components/AdminPanel';
import InvitationPopup from './components/InvitationPopup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MainPage() {
  const musicPlayerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  const handleAcceptInvitation = () => {
    setShowPopup(false);
    // Reproducir música después de aceptar
    if (musicPlayerRef.current) {
      musicPlayerRef.current.play();
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {showPopup && <InvitationPopup onAccept={handleAcceptInvitation} />}
      <HeroSection />
      <Divider />
      <InvitationMessage />
      <Divider />
      <EventDetails />
      <Divider />
      <DressCode />
      <Divider />
      <Parents />
      <Divider />
      <Godparents />
      <Divider />
      <InMemory />
      <Divider />
      <PhotoGallery />
      <Divider />
      <Trivia />
      <Divider />
      <GiftRegistry />
      <Divider />
      <RSVP />
      <Divider />
      <Footer />
      <MusicPlayer ref={musicPlayerRef} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
