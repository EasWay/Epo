import EventsSection from '../components/EventsSection';
import { motion } from 'motion/react';

export default function Events() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 text-center">Live <span className="text-gold italic">Pulse</span></h1>
        <p className="text-white/40 text-center max-w-xl mx-auto mb-16">
          From DJ sets to holiday grill-outs. Stay updated with what's happening at Epo's.
        </p>
      </div>
      <EventsSection />
    </motion.div>
  );
}
