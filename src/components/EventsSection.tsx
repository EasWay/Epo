import { motion } from "motion/react";
import { EVENTS } from "../constants";
import { useState, useEffect } from "react";
import { api } from "../lib/api";
import { optimizeImage } from "../lib/imageOptimization";

export default function EventsSection() {
  const [items, setItems] = useState<any[]>(EVENTS);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await api.getEvents();
        if (data && data.length > 0) {
          setItems(data);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section id="events" className="py-24 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] gold-accent font-medium mb-4">Curated Experiences</p>
          <h2 className="text-5xl md:text-7xl serif font-normal">
            Weekly <span className="italic">Rituals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {items.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2 aspect-square overflow-hidden border border-white/10 group-hover:border-gold/50 transition-colors duration-500">
                <img
                  src={optimizeImage(event.image, 800, 75)}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] gold-accent">{event.date}</span>
                <h3 className="text-3xl serif group-hover:translate-x-2 transition-transform duration-500">{event.title}</h3>
                <p className="text-white/40 font-light text-sm leading-relaxed">{event.description}</p>
                <div className="pt-4">
                   <div className="w-12 h-px bg-white/20 group-hover:w-24 group-hover:bg-gold transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
