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
  const [direction, setDirection] = useState(0);

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

  const nextPage = () => {
    if (items.length === 0) return;
    setDirection(1);
    // On mobile we have a cover page (page 0), so we need page to go up to totalPages
    // On desktop we only need to go up to totalPages - 1
    setPage((p) => Math.min(p + 1, totalPages));
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((p) => Math.max(p - 1, 0));
  };

  // Ensure desktop doesn't show an empty page if mobile went to a higher page index
  const desktopPage = Math.min(page, Math.max(0, totalPages - 1));
  const currentPageItems = items.slice(desktopPage * ITEMS_PER_PAGE, (desktopPage + 1) * ITEMS_PER_PAGE);

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
             {/* Endorser Badge */}
             <div className="absolute top-10 left-10 z-30 flex flex-col space-y-1">
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">Endorsed By</span>
                <span className="text-sm font-serif italic text-gold/80">Kwabena Kwabena</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/20 font-medium">Contemporary Highlife Legend & Award-Winning Artist</span>
             </div>

             <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent z-10" />
             <video 
               src="https://instagram.facc6-1.fna.fbcdn.net/o1/v/t2/f2/m78/AQM1iqU6S9Fs2YPxtoUan58pIGGsnOJXrURuivXp-izOkXs_a4hVf0nDv2rufDnai7F66ToAp7wT3NZK_Jsq5FdtJOEoxwTLlbzqLMY.mp4?_nc_cat=102&_nc_oc=AdqrK30cvBGapQbIn2aFOgikbmHhtNJYYbedt-0PKNQ9iw9YnjmQALElpK6zKeBsAL0&_nc_sid=5e9851&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_ohc=Asw0G9XF4lUQ7kNvwHyPvXg&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uU1RPUlkuQzMuNDgwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Mjc5MjIwMjUxMzc5MjI2LCJhc3NldF9hZ2VfZGF5cyI6MTAwOCwidmlfdXNlY2FzZV9pZCI6MTA4MjYsImR1cmF0aW9uX3MiOjYwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=36f118204121e87b&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0UxNEI2NTU4MzVDODNCNkVDNkEyMEJEQjIxNzg0QUFFX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBEgAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHRV9zQlhTVjgyak9GMEVBRnh4UWRTUFVIWTJicGt3QUFBRhUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACa0mK7-4Px-FQIoAkMzLBdATgAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AdllKkBAA&_nc_gid=QZyOeo4WAUF2Gk8A3uJWng&_nc_zt=28&_nc_ss=7a22e&oh=00_Af4920dXaD4zNr7Bzqhtv0HAS0sD8WOXyI8iYbeAVQyZtw&oe=69F71E93"
               autoPlay 
               loop 
               muted 
               playsInline
               className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] z-0"
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
                        disabled={desktopPage === totalPages - 1} 
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
                        <div key={i} className={cn("w-1.5 h-1.5 rounded-full transition-all duration-500", i === desktopPage ? "bg-gold w-4" : "bg-white/10")} />
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Swipe Experience */}
      <div className="lg:hidden relative">
        <div className="text-center mb-4">
           <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-2">Curated Catalog</p>
           <h2 className="text-3xl serif italic">The Menu.</h2>
        </div>

        {/* Swipe Hint Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.4, 1, 0.4], x: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center mb-6"
        >
           <div className="flex items-center space-x-2 text-gold/40">
              <ChevronLeft size={14} className="animate-pulse" />
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold">Swipe to Explore</span>
              <ChevronRight size={14} className="animate-pulse" />
           </div>
        </motion.div>

        <div className="relative h-[620px] perspective-3000 w-full overflow-hidden">
          {/* Static Background Page (The next one) */}
           {page < totalPages && (
            <div className="absolute inset-0 scale-[0.98] opacity-50 blur-[2px]">
               <div className="bg-[#0C0C0E] border border-white/10 p-8 h-full flex flex-col rounded-[2rem]">
                  <div className="flex justify-between items-center mb-10">
                     <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Folio {page + 1}</p>
                  </div>
                  <div className="space-y-8 flex-grow">
                     {items.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE).map((item) => (
                       <div key={item.id} className="opacity-20">
                          <div className="flex justify-between items-start">
                             <h4 className="text-sm font-bold">{item.name}</h4>
                             <span className="text-gold font-serif italic text-sm">{item.price}</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          )}

          {/* The Active Flipping Page */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  rotateY: direction > 0 ? 120 : -120,
                  opacity: 0,
                  transformOrigin: direction > 0 ? "left" : "right"
                }),
                center: {
                  rotateY: 0,
                  opacity: 1,
                  transition: { 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1]
                  }
                },
                exit: (direction: number) => ({
                  rotateY: direction > 0 ? -120 : 120,
                  opacity: 0,
                  transformOrigin: direction > 0 ? "left" : "right",
                  transition: { 
                    duration: 0.8, 
                    ease: [0.22, 1, 0.36, 1]
                  }
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
                if (swipe) {
                  if (offset.x < 0 && page < totalPages) nextPage();
                  if (offset.x > 0 && page > 0) prevPage();
                }
              }}
              className="absolute inset-0 preserve-3d cursor-grab active:cursor-grabbing z-20"
            >
              <div className="relative w-full h-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] rounded-[2rem] overflow-hidden bg-[#0C0C0E] border border-white/10">
                {/* Spine Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-30" />
                
                {/* Page Content */}
                <div className="relative h-full flex flex-col p-8">
                  {page === 0 ? (
                    <div className="absolute inset-0">
                       <video 
                         src="https://instagram.facc6-1.fna.fbcdn.net/o1/v/t2/f2/m78/AQM1iqU6S9Fs2YPxtoUan58pIGGsnOJXrURuivXp-izOkXs_a4hVf0nDv2rufDnai7F66ToAp7wT3NZK_Jsq5FdtJOEoxwTLlbzqLMY.mp4?_nc_cat=102&_nc_oc=AdqrK30cvBGapQbIn2aFOgikbmHhtNJYYbedt-0PKNQ9iw9YnjmQALElpK6zKeBsAL0&_nc_sid=5e9851&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_ohc=Asw0G9XF4lUQ7kNvwHyPvXg&efg=eyJ2ZW5jb2Rl_tagI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uU1RPUlkuQzMuNDgwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Mjc5MjIwMjUxMzc5MjI2LCJhc3NldF9hZ2VfZGF5cyI6MTAwOCwidmlfdXNlY2FzZV9pZCI6MTA4MjYsImR1cmF0aW9uX3MiOjYwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=36f118204121e87b&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0UxNEI2NTU4MzVDODNCNkVDNkEyMEJEQjIxNzg0QUFFX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBEgAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHRV9zQlhTVjgyak9GMEVBRnh4UWRTUFVIWTJicGt3QUFBRhUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACa0mK7-4Px-FQIoAkMzLBdATgAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AdllKkBAA&_nc_gid=QZyOeo4WAUF2Gk8A3uJWng&_nc_zt=28&_nc_ss=7a22e&oh=00_Af4920dXaD4zNr7Bzqhtv0HAS0sD8WOXyI8iYbeAVQyZtw&oe=69F71E93"
                         autoPlay loop muted playsInline
                         className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3]"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                          <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4">Swipe to Open</p>
                          <h2 className="text-4xl font-serif text-white">The <br/><span className="italic italic-gold">Chapter.</span></h2>
                          <div className="w-12 h-px bg-gold/50 mt-8" />
                       </div>
                    </div>
                  ) : (
                    <>
                       <div className="flex justify-between items-center mb-10 relative z-20">
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Folio {page}</p>
                          <div className="flex space-x-1">
                             {[...Array(totalPages + 1)].map((_, i) => (
                               <div key={i} className={cn("w-1 h-1 rounded-full", i === page ? "bg-gold" : "bg-white/10")} />
                             ))}
                          </div>
                       </div>
                       
                       <div className="space-y-8 flex-grow relative z-20">
                          {items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map((item) => (
                            <div key={item.id} className="space-y-2">
                               <div className="flex justify-between items-start">
                                  <h4 className="text-sm font-bold tracking-tight">{item.name}</h4>
                                  <span className="text-gold font-serif italic text-sm">{item.price}</span>
                               </div>
                               <p className="text-[11px] text-white/40 font-light leading-relaxed">
                                  {item.description}
                               </p>
                            </div>
                          ))}
                       </div>

                       <div className="mt-auto pt-6 border-t border-white/5 flex justify-center relative z-20">
                          <p className="text-[8px] uppercase tracking-[0.4em] text-white/10 font-bold">Provenance: Accra, Ghana</p>
                       </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-between items-center px-4">
           <button onClick={prevPage} disabled={page === 0} className="p-4 bg-white/5 rounded-full text-white/20 hover:text-gold disabled:opacity-0 transition-all"><ChevronLeft size={20} /></button>
           <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Swipe to Turn</span>
           <button onClick={nextPage} disabled={page === totalPages} className="p-4 bg-white/5 rounded-full text-white/20 hover:text-gold disabled:opacity-0 transition-all"><ChevronRight size={20} /></button>
        </div>
      </div>
    </div>
  );
}
