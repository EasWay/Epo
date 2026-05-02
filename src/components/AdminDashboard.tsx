import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BarChart3, 
  Utensils, 
  Image as ImageIcon, 
  Settings, 
  Users, 
  Plus, 
  Trash2, 
  Check, 
  X, 
  Save, 
  ExternalLink,
  ChevronRight,
  LogOut,
  Mail,
  Lock,
  Search,
  Filter,
  Calendar,
  Clock
} from "lucide-react";
import { api } from "../lib/api";
import { cn } from "../lib/utils";
import { MenuItem, Reservation, GalleryImage } from "../types";

type Tab = 'dashboard' | 'menu' | 'gallery' | 'reservations' | 'settings';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  
  // Data State
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Auth check on mount
  useEffect(() => {
    const saved = localStorage.getItem('admin_token');
    if (saved === 'admin-verified') setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, activeTab]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [m, r, g] = await Promise.all([
        api.getMenu(),
        api.getReservations(),
        api.getGallery()
      ]);
      setMenuItems(m);
      setReservations(r);
      setGallery(g);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.login(loginForm.email);
      if (res.success) {
        localStorage.setItem('admin_token', 'admin-verified');
        setIsAuthenticated(true);
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md glass p-10 rounded-[2rem] border-white/5 space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-2">Central <span className="italic">Command.</span></h1>
            <p className="text-white/40 text-sm">Secure authorization required.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="email"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="password"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-gold outline-none transition-all"
                />
              </div>
            </div>
            <button className="w-full bg-gold text-black py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] transition-all">
              Initialize Session
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 border-r border-white/5 p-8 flex-col fixed h-screen bg-[#0A0A0B]">
        <div className="mb-12 px-2">
          <span className="text-xl font-serif">EPO'S<span className="text-gold">CORE</span></span>
          <p className="text-[8px] uppercase tracking-[0.4em] text-white/20 mt-1">Management Suite v1.0</p>
        </div>

        <nav className="space-y-2 flex-grow">
          <NavBtn icon={BarChart3} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavBtn icon={Utensils} label="Menu Manager" active={activeTab === 'menu'} onClick={() => setActiveTab('menu')} />
          <NavBtn icon={ImageIcon} label="Media Assets" active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} />
          <NavBtn icon={Users} label="Reservations" active={activeTab === 'reservations'} onClick={() => setActiveTab('reservations')} count={reservations.filter(r => r.status === 'pending').length} />
          <NavBtn icon={Settings} label="Global Config" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center space-x-3 text-white/40 hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/5"
        >
          <LogOut size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Terminate</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="ml-0 lg:ml-72 flex-grow p-6 lg:p-12 pb-32 lg:pb-12">
        {/* Mobile Navigation Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] glass border-t border-white/10 px-4 py-3 flex justify-around items-center">
           <MobileNavBtn icon={BarChart3} active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
           <MobileNavBtn icon={Utensils} active={activeTab === 'menu'} onClick={() => setActiveTab('menu')} />
           <MobileNavBtn icon={ImageIcon} active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} />
           <MobileNavBtn icon={Users} active={activeTab === 'reservations'} onClick={() => setActiveTab('reservations')} count={reservations.filter(r => r.status === 'pending').length} />
           <MobileNavBtn icon={Settings} active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </div>
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-serif capitalize">{activeTab} <span className="italic text-gold">Overview.</span></h2>
            <p className="text-white/40 text-[10px] sm:text-sm mt-1">Real-time synchronization active.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full border border-white/10 flex items-center space-x-2 sm:space-x-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-white/60">Server Connected</span>
             </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && <DashboardContent reservations={reservations} menuItems={menuItems} />}
          {activeTab === 'menu' && <MenuManager items={menuItems} onUpdate={fetchData} />}
          {activeTab === 'reservations' && <ReservationManager reservations={reservations} onUpdate={fetchData} />}
          {activeTab === 'gallery' && <GalleryManager images={gallery} onUpdate={fetchData} />}
        </AnimatePresence>
      </main>
    </div>
  );
}

function NavBtn({ icon: Icon, label, active, onClick, count }: { icon: any; label: string; active: boolean; onClick: () => void; count?: number }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all group",
        active ? "bg-gold text-black shadow-lg shadow-gold/10" : "text-white/40 hover:text-white hover:bg-white/5"
      )}
    >
      <div className="flex items-center space-x-3">
        <Icon size={18} className={cn("transition-transform", active ? "scale-110" : "group-hover:scale-110")} />
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      {count ? (
        <span className={cn("text-[10px] px-2 py-0.5 rounded-full", active ? "bg-black/10" : "bg-gold/10 text-gold")}>{count}</span>
      ) : null}
    </button>
  );
}

function MobileNavBtn({ icon: Icon, active, onClick, count }: { icon: any; active: boolean; onClick: () => void; count?: number }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "relative p-3 rounded-xl transition-all",
        active ? "bg-gold text-black scale-110" : "text-white/40"
      )}
    >
      <Icon size={20} />
      {count ? (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] flex items-center justify-center rounded-full font-bold">
          {count}
        </span>
      ) : null}
    </button>
  );
}

function DashboardContent({ reservations, menuItems }: { reservations: Reservation[]; menuItems: MenuItem[] }) {
  const stats = [
    { label: "Active Bookings", val: reservations.filter(r => r.status === 'confirmed').length, color: "text-emerald-500" },
    { label: "Pending Requests", val: reservations.filter(r => r.status === 'pending').length, color: "text-amber-500" },
    { label: "Menu Curations", val: menuItems.length, color: "text-blue-500" },
    { label: "Guest Turnover", val: "84%", color: "text-gold" }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map(s => (
          <div key={s.label} className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-white/5 space-y-2">
            <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/40">{s.label}</p>
            <p className={cn("text-2xl sm:text-4xl font-serif", s.color)}>{s.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-white/5">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-serif italic italic-gold">Recent Inquiries</h3>
              <button className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white">View All</button>
           </div>
           <div className="space-y-4">
              {reservations.slice(0, 5).map(r => (
                <div key={r.id} className="flex items-center justify-between p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                   <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{r.name}</p>
                        <p className="text-[10px] text-white/40">{r.date} • {r.time}</p>
                      </div>
                   </div>
                   <span className={cn(
                     "text-[8px] uppercase tracking-widest px-2 py-1 rounded-full border",
                     r.status === 'pending' ? "text-amber-500 border-amber-500/20 bg-amber-500/5" : "text-emerald-500 border-emerald-500/20 bg-emerald-500/5"
                   )}>
                    {r.status}
                   </span>
                </div>
              ))}
           </div>
        </div>

        <div className="glass p-8 rounded-[2rem] border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8">
              <ExternalLink className="text-white/20 group-hover:text-gold transition-colors" size={48} strokeWidth={1} />
           </div>
           <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-3xl font-serif max-w-xs mb-4">View your site live from the <span className="italic text-gold">frontend.</span></h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
                Ensure all changes align with the brand aesthetic before final publishing.
              </p>
              <button className="mt-auto w-fit px-8 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gold transition-colors">
                 Open Preview
              </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

function MenuManager({ items, onUpdate }: { items: MenuItem[]; onUpdate: () => void }) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<MenuItem> | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Delete this internal data node?")) {
      await api.deleteMenuItem(id);
      onUpdate();
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.addMenuItem(editingItem);
    setEditingItem(null);
    setIsAdding(false);
    onUpdate();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex justify-between items-center bg-white/[0.02] p-6 rounded-3xl border border-white/5">
        <div className="relative w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <input 
            placeholder="Search catalog..." 
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs outline-none focus:border-gold"
          />
        </div>
        <button 
          onClick={() => {
            setEditingItem({ category: 'Ghanaian', name: '', description: '', price: '' });
            setIsAdding(true);
          }}
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center space-x-2 hover:bg-gold transition-all"
        >
          <Plus size={16} />
          <span>Add Node</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {items.map(item => (
          <div key={item.id} className="glass p-6 rounded-3xl border-white/5 flex items-center justify-between group">
             <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden">
                   {item.image ? <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" /> : <div className="w-full h-full flex items-center justify-center"><Utensils size={24} className="text-white/10" /></div>}
                </div>
                <div>
                   <p className="text-[8px] uppercase tracking-[0.3em] text-gold mb-1">{item.category}</p>
                   <h4 className="text-lg font-medium">{item.name}</h4>
                   <p className="text-xs text-white/40 truncate max-w-sm">{item.description}</p>
                </div>
             </div>
             <div className="flex items-center space-x-4">
                <span className="text-lg font-serif italic text-gold mr-8">{item.price}</span>
                <button onClick={() => setEditingItem(item)} className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                   <Settings size={18} />
                </button>
                <button onClick={() => handleDelete(item.id)} className="p-3 bg-red-500/5 text-red-500 rounded-xl hover:bg-red-500/10 transition-colors">
                   <Trash2 size={18} />
                </button>
             </div>
          </div>
        ))}
      </div>

      {/* Editor Modal */}
      <AnimatePresence>
        {editingItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.form 
              onSubmit={handleSave}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl glass p-10 rounded-[2.5rem] border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-serif">Node <span className="italic">Editor.</span></h3>
                <button type="button" onClick={() => setEditingItem(null)}><X className="text-white/20 hover:text-white" /></button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 col-span-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Category</label>
                  <select 
                    value={editingItem.category}
                    onChange={e => setEditingItem({...editingItem, category: e.target.value as any})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none"
                  >
                    <option value="Ghanaian">Ghanaian</option>
                    <option value="Chinese-Fusion">Chinese-Fusion</option>
                    <option value="Appetizers">Appetizers</option>
                    <option value="Sides">Sides</option>
                    <option value="Drinks">Drinks</option>
                  </select>
                </div>
                <div className="space-y-2 col-span-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40">Name</label>
                   <input 
                     required
                     value={editingItem.name}
                     onChange={e => setEditingItem({...editingItem, name: e.target.value})}
                     className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none"
                   />
                </div>
                <div className="space-y-2 col-span-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40">Description</label>
                   <textarea 
                     value={editingItem.description}
                     onChange={e => setEditingItem({...editingItem, description: e.target.value})}
                     className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none h-24 resize-none"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40">Price (e.g. GH₵ 75.00)</label>
                   <input 
                     required
                     value={editingItem.price}
                     onChange={e => setEditingItem({...editingItem, price: e.target.value})}
                     className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40">Image URL</label>
                   <input 
                     value={editingItem.image}
                     onChange={e => setEditingItem({...editingItem, image: e.target.value})}
                     className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none"
                   />
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <button type="submit" className="flex-grow bg-gold text-black py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                  Commit Changes
                </button>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ReservationManager({ reservations, onUpdate }: { reservations: Reservation[]; onUpdate: () => void }) {
  const updateStatus = async (id: string, status: string) => {
    await api.updateReservationStatus(id, status);
    onUpdate();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="grid grid-cols-1 gap-4">
        {reservations.map(r => (
          <div key={r.id} className="glass p-8 rounded-[2rem] border-white/5 flex items-start justify-between">
             <div className="flex space-x-8">
                <div className="space-y-2">
                   <p className="text-[10px] uppercase tracking-widest text-white/40">Status</p>
                   <div className={cn(
                     "px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase text-center",
                     r.status === 'pending' ? "text-amber-500 border-amber-500/20 bg-amber-500/5" : 
                     r.status === 'confirmed' ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5" :
                     "text-red-500 border-red-500/20 bg-red-500/5"
                   )}>
                    {r.status}
                   </div>
                </div>
                <div>
                   <h4 className="text-xl font-serif mb-1">{r.name}</h4>
                   <div className="flex items-center space-x-4 text-xs text-white/40">
                      <span className="flex items-center space-x-1"><Users size={12} /> <span>{r.guests} guests</span></span>
                      <span className="flex items-center space-x-1"><Calendar size={12} /> <span>{r.date}</span></span>
                      <span className="flex items-center space-x-1"><Clock size={12} /> <span>{r.time}</span></span>
                   </div>
                   {r.notes && (
                     <p className="mt-4 text-xs text-white/30 italic">"{r.notes}"</p>
                   )}
                </div>
             </div>

             <div className="flex flex-col space-y-2 min-w-[150px]">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Actions</p>
                {r.status === 'pending' && (
                  <button 
                    onClick={() => updateStatus(r.id, 'confirmed')}
                    className="w-full flex items-center justify-center space-x-2 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-black py-2 rounded-lg text-[10px] font-bold uppercase transition-all"
                  >
                    <Check size={14} /> <span>Confirm</span>
                  </button>
                )}
                <button 
                  onClick={() => updateStatus(r.id, 'cancelled')}
                  className="w-full flex items-center justify-center space-x-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg text-[10px] font-bold uppercase transition-all"
                >
                  <X size={14} /> <span>Cancel</span>
                </button>
             </div>
          </div>
        ))}
        {reservations.length === 0 && (
          <div className="py-32 text-center glass rounded-[2rem] border-white/5">
             <Users size={48} className="mx-auto text-white/10 mb-4" strokeWidth={1} />
             <p className="text-white/20 uppercase tracking-widest text-[10px]">No active inquiries in the queue</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function GalleryManager({ images, onUpdate }: { images: GalleryImage[]; onUpdate: () => void }) {
  const [editingImage, setEditingImage] = useState<Partial<GalleryImage> | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Evict this asset from the cluster?")) {
      await api.deleteGalleryImage(id);
      onUpdate();
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.addGalleryImage(editingImage);
    setEditingImage(null);
    onUpdate();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
       <div className="flex justify-start">
          <button 
            onClick={() => setEditingImage({ category: 'Ambiance', title: '', url: '' })}
            className="bg-white text-black px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center space-x-2 hover:bg-gold transition-all"
          >
            <Plus size={16} /> <span>Ingest Media</span>
          </button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(img => (
            <div key={img.id} className="glass rounded-3xl border-white/5 overflow-hidden group relative">
               <div className="aspect-video bg-zinc-900">
                  <img src={img.url} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
               </div>
               <div className="p-6">
                  <p className="text-[8px] uppercase tracking-widest text-gold mb-1 font-bold">{img.category}</p>
                  <h4 className="text-lg font-serif mb-4 truncate">{img.title}</h4>
                  <div className="flex space-x-2">
                     <button onClick={() => setEditingImage(img)} className="flex-grow bg-white/5 hover:bg-white/10 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all transform hover:scale-[1.02]">Edit</button>
                     <button onClick={() => handleDelete(img.id)} className="px-4 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg transition-all"><Trash2 size={14} /></button>
                  </div>
               </div>
            </div>
          ))}
       </div>

       <AnimatePresence>
        {editingImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.form 
              onSubmit={handleSave}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-lg glass p-10 rounded-[2.5rem] border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-serif italic italic-gold">Asset Config.</h3>
                <button type="button" onClick={() => setEditingImage(null)}><X className="text-white/20 hover:text-white" /></button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Category</label>
                  <select 
                    value={editingImage.category}
                    onChange={e => setEditingImage({...editingImage, category: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none"
                  >
                    <option value="Ambiance">Ambiance</option>
                    <option value="Food">Food</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Legacy">Legacy</option>
                  </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Title</label>
                   <input 
                     required
                     value={editingImage.title}
                     onChange={e => setEditingImage({...editingImage, title: e.target.value})}
                     className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Source URL</label>
                   <input 
                     required
                     value={editingImage.url}
                     onChange={e => setEditingImage({...editingImage, url: e.target.value})}
                     className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:border-gold outline-none"
                   />
                </div>
              </div>

              <button type="submit" className="mt-10 w-full bg-gold text-black py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                Synchronize Asset
              </button>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
