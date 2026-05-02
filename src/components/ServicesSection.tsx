import { motion } from "motion/react";
import { Utensils, Clock, Music, Calendar } from "lucide-react";

const SERVICES = [
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Master Kitchen",
    description: "Consistent quality since 1990."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Late Night",
    description: "Serving until the early morning."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Event Booking",
    description: "Host your special moments with us."
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Vibrant Vibes",
    description: "The rhythmic pulse of Osu's nights."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="heading-section serif">Our <span className="italic italic-gold">Services</span></h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 sm:p-8 rounded-[2rem] sm:rounded-3xl text-center space-y-4 sm:space-y-6 hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
