import { motion } from "motion/react";
import { REVIEWS } from "../constants";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">What Regulars <span className="text-gold italic">Say.</span></h2>
          <div className="w-12 h-px bg-gold mx-auto opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 bg-white/[0.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/60 leading-relaxed font-light italic text-lg mb-8">
                  "{review.comment}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">
                  {review.name}
                </span>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/20 mt-1">
                  Local Regular
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
