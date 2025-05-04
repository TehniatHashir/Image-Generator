
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ChatPage from "./pages/ChatPage";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <div id="what-we-do">
        <Carousel />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
