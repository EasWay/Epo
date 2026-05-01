import { motion } from "motion/react";
import { RESTAURANT_INFO } from "../constants";
import { MapPin, Mail, Instagram, Clock } from "lucide-react";
import ReservationSystem from "./ReservationSystem";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-medium mb-6">Connect With Us</p>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                Secure Your <br /><span className="italic">Table.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Locate</p>
                  <p className="text-lg font-light leading-relaxed max-w-[300px]">
                    {RESTAURANT_INFO.address.street},<br />
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.region}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Hours</p>
                  <div className="space-y-1">
                    <p className="text-lg font-light leading-relaxed">
                       Mon - Sat: {RESTAURANT_INFO.hours.mon_sat}
                    </p>
                    <p className="text-lg font-light leading-relaxed">
                       Sun: {RESTAURANT_INFO.hours.sun}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Inquiries</p>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-lg font-light hover:text-gold transition-colors">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex space-x-8">
              <a href={RESTAURANT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center space-x-3 text-white/40 hover:text-white transition-colors group">
                <Instagram size={18} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:tracking-[0.3em] transition-all">Instagram</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <ReservationSystem />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-32 h-[500px] relative group rounded-[2rem] overflow-hidden border border-white/5">
           <div className="absolute inset-0 bg-gold/10 opacity-20 pointer-events-none z-10" />
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0772093551!2d-0.18737492415510617!3d5.5555555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102082987a050bcb%3A0xe5a3c0545f479a98!2sEpo's%20Bar%20%26%20Grill!5e0!3m2!1sen!2sgh!4v1714570000000!5m2!1sen!2sgh" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
