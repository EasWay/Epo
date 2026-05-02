import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RESTAURANT_INFO } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 pt-24 pb-32 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand & Socials */}
          <div className="space-y-8">
            <h2 className="text-2xl serif italic italic-gold">Epo's</h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A standard in Osu since the 90s. Consistent quality, legendary vibes, and the best beef sauce in Accra.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: RESTAURANT_INFO.socials.instagram },
                { icon: <Facebook className="w-4 h-4" />, href: RESTAURANT_INFO.socials.facebook },
                { icon: <Twitter className="w-4 h-4" />, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/60">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/40 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/60">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">
                  {RESTAURANT_INFO.address.street},<br />
                  {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.country}
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/40 text-sm">{RESTAURANT_INFO.phone}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/60">Stay Updated</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Join our list for exclusive event invites and secret menu drops.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-gold/50 transition-all"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-gold text-black rounded-full flex items-center justify-center hover:bg-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Epo's Bar & Grill. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 opacity-20 hover:opacity-100 transition-opacity">
            <Link to="/admin" className="text-[10px] font-bold tracking-widest uppercase hover:text-gold transition-colors">Admin</Link>
            <span className="text-[10px] font-bold tracking-widest uppercase">VISA</span>
            <span className="text-[10px] font-bold tracking-widest uppercase">MASTERCARD</span>
            <span className="text-[10px] font-bold tracking-widest uppercase">MOBILE MONEY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
