import { motion } from "motion/react";
import { MENU_ITEMS } from "../constants";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { api } from "../lib/api";
import { optimizeImage } from "../lib/imageOptimization";

export default function MenuSection() {
  const categories = ["All", "Ghanaian", "Chinese-Fusion", "Appetizers", "Sides", "Drinks"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState<any[]>(MENU_ITEMS);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await api.getMenu();
        if (data && data.length > 0) {
          setItems(data);
        }
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      }
    };
    fetchMenu();
  }, []);

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-8 md:space-y-0">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] gold-accent font-medium mb-4">Culinary Heritage</p>
            <h2 className="text-5xl md:text-7xl serif font-normal">
              Our <span className="italic">Selection.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 pb-2 border-b-2",
                  activeCategory === cat 
                    ? "border-gold text-gold" 
                    : "border-transparent text-white/40 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row gap-8 items-center sm:items-start"
            >
              <div className="w-32 h-32 shrink-0 border border-white/10 p-2 group-hover:border-gold/50 transition-colors">
                <img
                  src={optimizeImage(item.image, 300, 70)}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow space-y-4 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-baseline gap-2">
                  <h3 className="text-2xl serif group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <div className="h-px bg-white/10 hidden sm:block sm:flex-grow mx-4"></div>
                  <span className="serif text-xl gold-accent">{item.price}</span>
                </div>
                <p className="text-white/40 font-light text-sm tracking-wide leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
