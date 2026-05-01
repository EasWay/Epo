import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { api } from "../lib/api";
import { cn } from "../lib/utils";
import { MenuItem } from "../types";

const ITEMS_PER_PAGE = 4;

export default function BookMenu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.getMenu();
        setItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const categories = Array.from(new Set(items.map(i => i.category)));
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  const currentPageItems = items.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <Loader2 className="animate-spin text-gold" size={48} />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto py-20 px-4">
      {/* Desktop 3D Experience */}
      <div className="hidden lg:block relative perspective-2000 h-[750px]">
        <div className="absolute inset-0 flex">
          {/* Left Wing (Immersive Visual) */}
          <motion.div 
            initial={{ rotateY: -30, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-1/2 bg-zinc-900 border-y border-l border-white/10 rounded-l-[3rem] overflow-hidden relative shadow-2xl origin-right"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent z-10" />
             <motion.img 
               src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-full object-cover grayscale brightness-50"
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               alt="Atmosphere"
             />
             <div className="absolute inset-0 z-20 p-20 flex flex-col justify-end">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gold text-xs uppercase tracking-[0.8em] mb-6 font-bold"
                >
                  Curated Catalog
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-7xl font-serif leading-[1.1] text-white"
                >
                  The <br/><span className="italic italic-gold">Chapter.</span>
                </motion.h2>
                <div className="w-16 h-px bg-gold/50 mt-12" />
             </div>
             
             {/* Spine Shadow */}
             <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/40 to-transparent z-30" />
          </motion.div>

          {/* Right Wing (Dynamic Data) */}
          <motion.div 
            initial={{ rotateY: 30, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-1/2 bg-[#0C0C0E] border border-white/10 rounded-r-[3rem] shadow-2xl relative p-16 overflow-hidden flex flex-col"
          >
             {/* Spine Shadow */}
             <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
             
             <div className="relative z-20 h-full flex flex-col">
                <div className="flex justify-between items-center mb-16">
                   <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Folio</p>
                      <h3 className="text-2xl font-serif italic text-gold">{page + 1} / {totalPages}</h3>
                   </div>
                   <div className="flex space-x-3">
                      <button 
                        onClick={prevPage} 
                        disabled={page === 0} 
                        className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-gold hover:text-black hover:border-gold disabled:opacity-10 transition-all cursor-pointer"
                      >
                        <ChevronLeft size={20} strokeWidth={1.5} />
                      </button>
                      <button 
                        onClick={nextPage} 
                        disabled={page === totalPages - 1} 
                        className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-gold hover:text-black hover:border-gold disabled:opacity-10 transition-all cursor-pointer"
                      >
                        <ChevronRight size={20} strokeWidth={1.5} />
                      </button>
                   </div>
                </div>

                <div className="flex-grow">
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={page}
                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 gap-12"
                      >
                        {currentPageItems.map((item, i) => (
                          <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                          >
                             <div className="flex justify-between items-end mb-3">
                                <h4 className="text-xl font-medium tracking-tight group-hover:text-gold transition-colors duration-500">
                                   {item.name}
                                </h4>
                                <div className="flex-grow mx-4 mb-1.5 border-b border-dotted border-white/10" />
                                <span className="text-gold font-serif italic text-lg">{item.price}</span>
                             </div>
                             <p className="text-sm text-white/40 font-light leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">
                                {item.description}
                             </p>
                          </motion.div>
                        ))}
                      </motion.div>
                   </AnimatePresence>
                </div>

                <div className="mt-auto pt-10 flex border-t border-white/5 justify-between items-center">
                   <p className="text-[9px] uppercase tracking-[0.5em] text-white/10 font-bold">Provenance: 8th Lane, Accra</p>
                   <div className="flex space-x-1">
                      {[...Array(totalPages)].map((_, i) => (
                        <div key={i} className={cn("w-1.5 h-1.5 rounded-full transition-all duration-500", i === page ? "bg-gold w-4" : "bg-white/10")} />
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Swipe-like Layout */}
      <div className="lg:hidden space-y-16">
         {categories.map((category) => (
           <div key={category} className="space-y-10">
              <div className="flex items-center space-x-6">
                 <h3 className="text-4xl font-serif text-gold italic">{category}</h3>
                 <div className="flex-grow h-px bg-white/10" />
              </div>
              <div className="space-y-12">
                 {items.filter(i => i.category === category).map((item) => (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     key={item.id} 
                     className="space-y-3"
                   >
                      <div className="flex justify-between items-start">
                         <h4 className="text-lg font-medium tracking-tight leading-tight max-w-[70%]">{item.name}</h4>
                         <span className="text-gold font-serif text-lg">{item.price}</span>
                      </div>
                      <p className="text-sm text-white/40 font-light leading-relaxed">
                         {item.description}
                      </p>
                   </motion.div>
                 ))}
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
