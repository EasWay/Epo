import { motion } from "motion/react";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { RESTAURANT_INFO } from "../constants";
import { optimizeImage } from "../lib/imageOptimization";
import { Link } from "react-router-dom";

export default function Hero({ config: dynamicConfig }: { config?: any }) {
  const config = {
    heroTitle: dynamicConfig?.hero?.title || "Epo's Bar & Grill <br /> <span class=\"text-gold italic\">Osu, Accra.</span>",
    heroSubtitle: dynamicConfig?.hero?.subtitle || "Osu's Midnight Kitchen",
    heroDescription: dynamicConfig?.hero?.description || "Serving our signature beef sauce and fried rice in the heart of Osu since the 1990s.",
    heroImage: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=2070",
    address: `${RESTAURANT_INFO.address.street}, ${RESTAURANT_INFO.address.city}`
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          src={optimizeImage(config.heroImage, 1920, 85)}
          alt="Epo's Bar Hero"
          className="w-full h-full object-cover grayscale brightness-50"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0A0B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[11px] uppercase text-gold font-bold tracking-[0.5em]"
          >
            {config.heroSubtitle}
          </motion.p>
          
          <h1 
            className="text-7xl md:text-[9rem] leading-[0.85] serif font-normal"
            dangerouslySetInnerHTML={{ __html: config.heroTitle }}
          />
          
          <p className="max-w-xl mx-auto text-white/40 text-sm md:text-lg font-light leading-relaxed tracking-wide">
            {config.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 pt-8">
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-gold text-black px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-700"
            >
              The Catalog
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-4 group cursor-pointer"
            >
              <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-gold transition-all duration-500"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-gold transition-colors">Reservations</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
         <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">Discover More</p>
         <motion.div 
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="w-px h-16 bg-gradient-to-b from-gold to-transparent"
         />
      </motion.div>
      
      {/* Framing Decor */}
      <div className="absolute inset-8 border border-white/5 pointer-events-none rounded-[3rem] opacity-50" />
    </section>
  );
}
