import React, { useState, useEffect } from "react";
import Hero from '../components/Hero';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import VibeSection from '../components/VibeSection';
import { motion } from 'motion/react';
import { api } from "../lib/api";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [config, setConfig] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero config={config?.hero} />
      
      <div className="py-32 bg-[#0A0A0B] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">The Heritage</p>
            <h2 className="text-5xl md:text-8xl font-serif leading-tight">
              {config?.hero?.title?.split('. ')[0]}<br/>
              <span className="italic italic-gold">{config?.hero?.title?.split('. ')[1]}</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              {config?.hero?.description}
            </p>
            
            <div className="pt-12 flex justify-center space-x-12">
               {['Established 1990', '8th Lane, Osu', 'Authentic Fusion'].map((stat, i) => (
                 <div key={stat} className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-2">{stat}</span>
                    <div className="w-1 h-1 rounded-full bg-gold/40" />
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>

      <VibeSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </motion.div>
  );
}
