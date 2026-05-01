import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dock from "./components/Dock";
import ProtectionOverlay from "./components/ProtectionOverlay";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./components/AdminDashboard";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#0A0A0B] flex flex-col overflow-x-hidden">
        <ProtectionOverlay />
        <Navbar />
        <main className="flex-grow pb-32">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Dock />
      </div>
    </Router>
  );
}
