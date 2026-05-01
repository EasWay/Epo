import BookMenu from '../components/BookMenu';
import { motion } from 'motion/react';

export default function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
           <p className="text-[11px] uppercase tracking-[0.5em] text-gold font-bold mb-4">Culinary Excellence</p>
           <h1 className="text-5xl md:text-8xl font-serif">The <span className="italic">Collection.</span></h1>
        </div>
      </div>
      <BookMenu />
      
      {/* Disclaimer / Info */}
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
         <div className="w-12 h-px bg-white/10 mx-auto mb-8" />
         <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] max-w-lg mx-auto leading-loose">
            Prices are subject to change based on market availability. 
            Final bill includes local taxes. For allergen information, 
            please consult our staff.
         </p>
      </div>
    </motion.div>
  );
}
