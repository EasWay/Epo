import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
           <p className="text-[11px] uppercase tracking-[0.5em] text-gold font-bold mb-4">Contact Relations</p>
           <h1 className="text-5xl md:text-8xl font-serif leading-tight">Human <span className="italic">Connection.</span></h1>
           <div className="w-12 h-px bg-white/10 mx-auto mt-8" />
        </div>
      </div>
      <ContactSection />
    </motion.div>
  );
}
