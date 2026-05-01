import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function VibeSection() {
  return (
    <section className="py-24 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-medium mb-6">Live From Osu</p>
            <h2 className="text-4xl md:text-6xl serif mb-8 leading-tight">
              The Sound of the <span className="italic italic-gold">8th Lane.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-xl">
              It's more than food. It's the rhythmic clinking of woks, the chilled bottles opening, 
              and the conversation that flows until the early morning. Experience the energy that 
              has defined Osu for over thirty years.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0B] bg-zinc-800" />
                 ))}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Joined by 100+ regulars tonight</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative aspect-video bg-zinc-900 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
              alt="Epo's Atmosphere"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-black shadow-2xl shadow-gold/20"
              >
                <Play size={24} fill="currentColor" />
              </motion.button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">Watch: Our Kitchen at 1 AM</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Live Stream Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
