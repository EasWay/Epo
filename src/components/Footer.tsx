import { RESTAURANT_INFO } from "../constants";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6">
            <span className="text-2xl font-serif italic tracking-[0.2em] font-light block">
              EPO'S<span className="gold-accent"> OSU</span>
            </span>
            <p className="text-white/30 max-w-xs text-sm font-light leading-relaxed">
              A standard for food and drinks in Osu. Serving Ghanaian-Chinese fusion and cold refreshments daily.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Navigation</h4>
              <ul className="space-y-3 text-[10px] uppercase tracking-[0.2em] font-medium">
                <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
                <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Connect</h4>
              <ul className="space-y-3 text-[10px] uppercase tracking-[0.2em] font-medium">
                <li><a href={RESTAURANT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a></li>
                <li><a href={RESTAURANT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© {new Date().getFullYear()} Epo's Bar & Grill. Osu, Accra.</p>
          <div className="flex items-center space-x-6">
             <Link to="/admin" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-gold transition-colors underline underline-offset-4">Admin</Link>
             <a href={RESTAURANT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] hover:border-gold cursor-pointer transition-all italic serif">Ig</a>
             <a href={RESTAURANT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] hover:border-gold cursor-pointer transition-all italic serif">Fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
