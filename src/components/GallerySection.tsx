import { motion, AnimatePresence } from "motion/react";
import { GALLERY_IMAGES } from "../constants";
import { useState, useEffect } from "react";
import { api } from "../lib/api";
import { optimizeImage } from "../lib/imageOptimization";
import { X, Maximize2 } from "lucide-react";

export default function GallerySection() {
  const [images, setImages] = useState<any[]>(GALLERY_IMAGES);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await api.getGallery();
        if (data && data.length > 0) {
          setImages(data);
        }
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      }
    };
    fetchGallery();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-medium mb-4">Visual Heritage</p>
          <h2 className="heading-section serif font-normal mb-6">
            Capturing the <span className="italic">Soul.</span>
          </h2>
          <div className="w-24 h-px bg-gold/30 mx-auto"></div>
        </div>

        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
          {images.slice(0, visibleCount).map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 20) * 0.05 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden bg-zinc-900 cursor-zoom-in"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={optimizeImage(img.url, 800, 75)}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Maximize2 className="text-white" size={20} strokeWidth={1} />
              </div>
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                 <p className="text-[8px] uppercase tracking-widest text-gold mb-0.5 font-bold">{img.category}</p>
                 <h4 className="text-white serif text-xs">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < images.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleLoadMore}
              className="group flex flex-col items-center space-y-4 transition-all duration-500"
            >
              <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent group-hover:h-24 transition-all duration-500" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-gold font-bold">
                View More Archives
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={optimizeImage(selectedImage.url, 1200, 90)}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-6">
              <h3 className="text-xl sm:text-3xl font-serif text-white mb-2">{selectedImage.title}</h3>
              <p className="text-[10px] uppercase tracking-[0.5em] text-gold">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
