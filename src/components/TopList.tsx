import { motion, useTransform, useMotionValue } from "motion/react";
import { Star } from "lucide-react";
import { optimizeImage } from "../lib/imageOptimization";
import { RESTAURANT_INFO } from "../constants";
import { cn } from "../lib/utils";

const TOP_ITEMS = [
  {
    id: "m1",
    name: "Signature Jollof & Chicken",
    description: "Rich party jollof rice served with your choice of spicy grilled chicken.",
    price: "GH₵ 50",
    rating: 5.0,
    // Moment 11
    image: "https://i.ibb.co/D6K1Wxc/Gemini-Generated-Image-ba1zwdba1zwdba1z-removebg-preview.png"
  },
  {
    id: "m2",
    name: "Crispy Fried Yam & Fish",
    description: "Golden-brown yam fries served with crispy fried fish and shito.",
    price: "GH₵ 45",
    rating: 4.8,
    // Moment - New Dish
    image: "https://i.ibb.co/5hjrQqYV/Gemini-Generated-Image-vb4k3lvb4k3lvb4k-removebg-preview.png"
  },
  {
    id: "m4",
    name: "Special Assorted Fried Rice",
    description: "Fragrant rice stir-fried with chicken, beef, shrimp, and vegetables.",
    price: "GH₵ 60",
    rating: 4.9,
    // Moment - New Dish
    image: "https://i.ibb.co/Mk6tGD0S/Gemini-Generated-Image-nogm6cnogm6cnogm-removebg-preview.png"
  }
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function TopList({ scrollProgress }: { scrollProgress?: any }) {
  const whatsappNumber = RESTAURANT_INFO.phone.replace(/\D/g, "");
  const fallbackProgress = useMotionValue(0);

  return (
    <section className="py-24 bg-[#0A0A0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section serif">Top <span className="italic italic-gold">List</span></h2>
          <p className="text-white/40 text-[10px] sm:text-sm uppercase tracking-[0.3em]">Our Most Ordered Signatures</p>
        </div>

        <div className="flex lg:grid lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-32 sm:gap-y-40 pt-20 sm:pt-28 overflow-x-auto lg:overflow-x-visible pb-12 lg:pb-0 no-scrollbar snap-x snap-mandatory">
          {TOP_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 pt-20 sm:pt-24 group relative min-w-[280px] sm:min-w-[300px] lg:w-full h-[320px] sm:h-[360px] mx-auto flex flex-col items-start overflow-visible shadow-2xl shadow-black/50 snap-center first:ml-4 last:mr-4 lg:first:ml-0 lg:last:mr-0"
            >
              {/* Floating Circular Image - Slot for Hero Transition if index 0 */}
              <div className={cn(
                "absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 transition-transform duration-700 z-20",
                index === 0 && "lg:hidden"
              )}>
                <img
                  src={optimizeImage(item.image, 400, 85)}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Status Layer: Rating */}
              <div className="flex items-center space-x-1 text-[#FDB813] mt-2 mb-4">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold">{item.rating.toFixed(1)}</span>
              </div>

              {/* Information Layer: Name & Description */}
              <div className="space-y-2 flex-grow text-left w-full">
                <h3 className="text-lg font-bold tracking-tight text-white leading-tight serif">{item.name}</h3>
                <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2 italic font-light">
                  {item.description}
                </p>
              </div>

              {/* Action Layer: Price & Button */}
              <div className="flex items-end justify-between w-full mt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-white/20 font-bold tracking-[0.2em] mb-1">Total</span>
                  <span className="text-gold font-bold text-xl leading-none">{item.price}</span>
                </div>
                
                <a
                  href={`https://wa.me/${whatsappNumber}?text=I'd like to order ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-green-500/20"
                >
                  <WhatsAppIcon />
                </a>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
