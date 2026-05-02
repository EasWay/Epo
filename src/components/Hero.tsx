import { motion, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowRight, MapPin, ChevronDown, Play } from "lucide-react";
import { RESTAURANT_INFO } from "../constants";
import { optimizeImage } from "../lib/imageOptimization";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Hero({ config: dynamicConfig, scrollProgress }: { config?: any, scrollProgress?: any }) {
  const fallbackProgress = useMotionValue(0);
  const smoothProgress = scrollProgress || fallbackProgress;
  const [viewport, setViewport] = useState({ w: typeof window !== 'undefined' ? window.innerWidth : 1200, h: typeof window !== 'undefined' ? window.innerHeight : 800 });

  useEffect(() => {
    const handleResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate coordinates dynamically based on screen width
  const targetX = viewport.w > 1024 ? -785 * (viewport.w / 1440) : -400;
  const targetY = viewport.h * 0.93;

  // Scaling down from Hero size to Card size (Starting at 1.1 to enlarge the initial hero dish)
  const scale = useTransform(smoothProgress, [0, 0.12, 0.15], [1.1, viewport.w < 1024 ? 1.1 : 0.45, viewport.w < 1024 ? 1.1 : 0.40]);

  // S-Curve Movement (x) and Vertical descent (y)
  const x = useTransform(smoothProgress, [0, 0.05, 0.1, 0.15], [0, viewport.w < 1024 ? 0 : -200, viewport.w < 1024 ? 0 : -550, viewport.w < 1024 ? 0 : targetX]);
  const y = useTransform(smoothProgress, [0, 0.15], [0, viewport.w < 1024 ? 0 : targetY]);

  // Rotation for "wit and polish"
  const rotate = useTransform(smoothProgress, [0, 0.15], [0, viewport.w < 1024 ? 0 : 45]);

  const opacity = 1; // Always visible so it "sits" on the card

  const config = {
    heroTitle: dynamicConfig?.hero?.title || "Your Food Is <br /> <span class=\"text-gold italic\">Waiting For You</span>",
    heroSubtitle: dynamicConfig?.hero?.subtitle || "Osu's Midnight Kitchen",
    heroDescription: dynamicConfig?.hero?.description || "Serving our signature beef sauce and fried rice in the heart of Osu since the 1990s.",
    // Moment 32 - Direct Link
    heroImage: dynamicConfig?.hero?.image || "https://i.ibb.co/D6K1Wxc/Gemini-Generated-Image-ba1zwdba1zwdba1z-removebg-preview.png",
    address: `${RESTAURANT_INFO.address.street}, ${RESTAURANT_INFO.address.city}`
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 bg-[#0A0A0B] z-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[11px] uppercase text-gold font-bold tracking-[0.5em]"
            >
              {config.heroSubtitle}
            </motion.p>

            <h1
              className="heading-hero leading-[1.1] serif font-normal"
              dangerouslySetInnerHTML={{ __html: config.heroTitle }}
            />

            <p className="max-w-lg text-white/40 text-lg font-light leading-relaxed">
              {config.heroDescription}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                to="/menu"
                className="bg-gold text-black px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 shadow-xl shadow-gold/10"
              >
                Food Menu
              </Link>
              <Link
                to="/contact"
                className="border border-white/10 bg-white/5 text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-500"
              >
                Book a Table
              </Link>
              <a
                href="https://instagram.facc6-1.fna.fbcdn.net/o1/v/t2/f2/m78/AQM1iqU6S9Fs2YPxtoUan58pIGGsnOJXrURuivXp-izOkXs_a4hVf0nDv2rufDnai7F66ToAp7wT3NZK_Jsq5FdtJOEoxwTLlbzqLMY.mp4?_nc_cat=102&_nc_oc=AdqrK30cvBGapQbIn2aFOgikbmHhtNJYYbedt-0PKNQ9iw9YnjmQALElpK6zKeBsAL0&_nc_sid=5e9851&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_ohc=Asw0G9XF4lUQ7kNvwHyPvXg&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uU1RPUlkuQzMuNDgwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Mjc5MjIwMjUxMzc5MjI2LCJhc3NldF9hZ2VfZGF5cyI6MTAwOCwidmlfdXNlY2FzZV9pZCI6MTA4MjYsImR1cmF0aW9uX3MiOjYwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=36f118204121e87b&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0UxNEI2NTU4MzVDODNCNkVDNkEyMEJEQjIxNzg0QUFFX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBEgAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHRV9zQlhTVjgyak9GMEVBRnh4UWRTUFVIWTJicGt3QUFBRhUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACa0mK7-4Px-FQIoAkMzLBdATgAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AdllKkBAA&_nc_gid=QZyOeo4WAUF2Gk8A3uJWng&_nc_zt=28&_nc_ss=7a22e&oh=00_Af4920dXaD4zNr7Bzqhtv0HAS0sD8WOXyI8iYbeAVQyZtw&oe=69F71E93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group"
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-all duration-500">
                  <Play className="w-5 h-5 text-gold fill-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 group-hover:text-gold transition-colors">Watch Story</span>
              </a>
            </div>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end h-full">
            <motion.div
              style={{ scale, x, y, rotate, opacity }}
              className="relative z-[100] pointer-events-none max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-none mx-auto lg:mx-0"
            >
              <img
                src={optimizeImage(config.heroImage, 1200, 90)}
                alt="Signature Dish"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3"
      >
        <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">Explore</p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
