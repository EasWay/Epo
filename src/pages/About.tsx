import { motion } from "motion/react";
import { RESTAURANT_INFO } from "../constants";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2 space-y-8">
            <p className="text-[11px] uppercase tracking-[0.5em] text-gold font-bold">The Legacy</p>
            <h1 className="heading-hero serif leading-tight">
              A Taste of <br />
              <span className="italic">Osu History.</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Since the early 1990s, Epo's Bar & Grill has been a cornerstone of 
              Accra's 8th Lane. What started as a local neighborhood spot has grown 
              into a legendary destination for nocturnal diners, foodies, and tourists alike.
            </p>
            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Our culinary philosophy is simple: authentic flavors, fresh ingredients, 
              and a fusion of Ghanaian soul with Chinese precision. Its's where the 
              energy of the city meets the comfort of a home-cooked meal.
            </p>          </div>
          <div className="lg:w-1/2 relative aspect-square group">
             <div className="absolute inset-4 border border-gold/20 scale-105 group-hover:scale-100 transition-transform duration-700" />
             <img 
               src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-full object-cover grayscale brightness-75"
               alt="Epo's Legacy"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-24">
           {[
             { title: "Authenticity", desc: "Every plate reflects the true spirit of Osu's vibrant street food culture." },
             { title: "Fusion", desc: "Our signature Chinese-fusion dishes have defined a generation of nocturnal diners." },
             { title: "Longevity", desc: "Over 30 years of consistent quality and warm hospitality on the 8th Lane." }
           ].map((value, i) => (
             <div key={i} className="space-y-4">
                <h3 className="text-xl font-serif text-gold">{value.title}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">{value.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </motion.div>
  );
}
