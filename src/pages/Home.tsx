import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import TopList from "../components/TopList";
import FeaturedDish from "../components/FeaturedDish";
import SocialsPromotion from "../components/SocialsPromotion";
import ServicesSection from "../components/ServicesSection";
import VibeSection from "../components/VibeSection";
import { Loader2 } from "lucide-react";
import { api } from "../lib/api";
import { motion, useScroll, useSpring } from 'motion/react';

export default function Home() {
  const [config, setConfig] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const data = await api.getConfig();
        setConfig(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchConfig();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0A0A0B]">
        <Loader2 className="animate-spin text-gold" size={48} />
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0B]">
      <Hero config={config} scrollProgress={smoothProgress} />
      <TopList scrollProgress={smoothProgress} />
      <FeaturedDish />
      <SocialsPromotion />
      <ServicesSection />
      <VibeSection />
    </div>
  );
}
