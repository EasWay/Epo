import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Calendar, Clock, User, Mail, Phone, ChevronRight, CheckCircle2, Loader2, CalendarIcon } from "lucide-react";
import { api } from "../lib/api";
import { cn } from "../lib/utils";

type Step = 1 | 2 | 3 | 4;

export default function ReservationSystem() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    guests: "2",
    date: "",
    time: "19:00",
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep((s) => (s + 1) as Step);
  const prevStep = () => setStep((s) => (s - 1) as Step);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStep(3);

    try {
      await api.addReservation(formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1500); // Simulate processing
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setStep(2);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass p-8 md:p-12 rounded-[2rem] border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
        <motion.div 
          className="h-full bg-gold shadow-[0_0_15px_rgba(197,160,89,0.5)]"
          initial={{ width: "25%" }}
          animate={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-3xl font-serif">Planning Your <span className="italic">Visit</span></h3>
              <p className="text-white/40 text-sm">Select your party size and preferred time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                  <select 
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                  <input 
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Time</label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({...formData, time: t})}
                      className={cn(
                        "py-3 rounded-lg text-xs font-bold transition-all border",
                        formData.time === t ? "bg-gold text-black border-gold" : "bg-white/[0.02] border-white/5 text-white/60 hover:border-white/20"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={nextStep}
              disabled={!formData.date}
              className="w-full bg-white text-black py-5 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-gold transition-all disabled:opacity-20"
            >
              <span>Next: Personal Details</span>
              <ChevronRight size={18} />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h3 className="text-3xl font-serif">Who is <span className="italic">Joining Us?</span></h3>
              <p className="text-white/40 text-sm">Provide your details to guarantee your table.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                  <input 
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                  <input 
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                  <input 
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                  />
                </div>
                <textarea 
                  placeholder="Special requests or occasions?"
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none transition-all h-24 resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={prevStep}
                  className="w-1/3 bg-white/5 text-white/60 py-5 rounded-xl font-bold hover:bg-white/10 transition-all"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  className="flex-grow bg-gold text-black py-5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 flex flex-col items-center justify-center text-center space-y-6"
          >
            <Loader2 className="text-gold animate-spin" size={64} strokeWidth={1} />
            <div>
              <h3 className="text-2xl font-serif mb-2">Syncing with <span className="italic">Osu...</span></h3>
              <p className="text-white/40 text-sm">Please wait while we secure your spot at Epo's.</p>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 flex flex-col items-center justify-center text-center space-y-8"
          >
            <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center">
              <CheckCircle2 className="text-gold" size={48} />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-serif">You're <span className="italic">Booked!</span></h3>
              <p className="text-white/60 max-w-xs mx-auto leading-relaxed">
                Confirmation sent to <span className="text-white font-medium">{formData.email}</span>. 
                We'll see you on <span className="text-white font-medium">{formData.date}</span> at <span className="text-white font-medium">{formData.time}</span>.
              </p>
            </div>
            <button 
              onClick={() => setStep(1)}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all"
            >
              Make another booking
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
