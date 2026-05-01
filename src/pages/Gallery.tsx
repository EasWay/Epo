import GallerySection from '../components/GallerySection';
import { motion } from 'motion/react';

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
           <p className="text-[11px] uppercase tracking-[0.5em] text-gold font-bold mb-4">The visual Journal</p>
           <h1 className="text-5xl md:text-8xl font-serif">Light & <span className="italic">Shadow.</span></h1>
           <div className="w-12 h-px bg-white/10 mx-auto mt-8" />
        </div>
      </div>
      <GallerySection />
    </motion.div>
  );
}
