import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { optimizeImage } from "../lib/imageOptimization";
import { Link } from "react-router-dom";

export default function FeaturedDish() {
  const dish = {
    name: "Our Signature Beef Sauce",
    description: "Experience the legendary flavor that has made us an Osu staple for decades. Sliced tender beef, sautéed with fresh green peppers and onions in our secret savory sauce.",
    price: "GH₵ 75.00",
    // Moment 31
    image: "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/655212648_18085535779992757_4514128478489112318_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzE1NTM5NDc0NjE4MDQxOTU2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExOTl4MTQzOS5zZHIuQzMifQ%3D%3D&_nc_ohc=fejAplB1o5YQ7kNvwFm-fkA&_nc_oc=AdqjcX_pH21p13oD6u5tbPC8I5a0MNDJrTsh7unXLxzRHKE-qI0LnX3onuC89RmGkXg&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc1-1.fna&_nc_gid=VdbvLFNIMm_Ml4wIFm9dIw&_nc_ss=7a22e&oh=00_Af7wTXta2R11z4PnrpMz7OK--YlrHANLTErfje6Yw7jBzw&oe=69FAD590"
  };

  return (
    <section className="py-24 bg-[#0A0A0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[600px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <img
                src={optimizeImage(dish.image, 1200, 85)}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Price Tag Bubble */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 bg-gold rounded-full flex flex-col items-center justify-center text-black shadow-2xl shadow-gold/20"
            >
              <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-tighter opacity-60">Only</span>
              <span className="text-lg sm:text-xl font-bold leading-none">{dish.price.split(' ')[1]}</span>
              <span className="text-[8px] sm:text-[10px] font-bold">GH₵</span>
            </motion.div>

            {/* Decoration */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/5 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Our Signature Dish</p>
              <h2 className="heading-section serif leading-tight">
                Our Signature <span className="italic italic-gold">Beef Sauce</span>
              </h2>
            </div>
            
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
              {dish.description}
            </p>

            <Link
              to="/menu"
              className="group inline-flex items-center space-x-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-black transition-all duration-500"
            >
              <span>Check Full Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
