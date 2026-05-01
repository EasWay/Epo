import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 py-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500",
          isScrolled ? "glass shadow-2xl scale-[0.98]" : "bg-transparent"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-serif tracking-tighter group-hover:italic transition-all">
              EPO'S<span className="text-gold ml-1">OSU</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.4em] font-bold hover:text-gold transition-colors relative py-2",
                  location.pathname === link.href ? "text-gold" : "text-white/60"
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button className="hidden sm:flex items-center space-x-2 text-white/40 hover:text-white transition-colors">
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-widest">Cart (0)</span>
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-50 bg-[#0A0A0B]/95 backdrop-blur-2xl p-12 flex flex-col justify-center items-center space-y-12"
          >
            <button 
              className="absolute top-12 right-12 text-white/40 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-4xl font-serif italic hover:text-gold transition-colors",
                  location.pathname === link.href ? "text-gold" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-12 border-t border-white/5 w-full text-center">
               <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">The Original Osu Legend</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
