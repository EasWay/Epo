import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function VibeSection() {
  return (
    <section className="py-24 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-gold font-medium mb-4 sm:mb-6">Live From Osu</p>
            <h2 className="heading-section serif mb-6 sm:mb-8 leading-tight">
              The Sound of the <span className="italic italic-gold">8th Lane.</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-xl">
              It's more than food. It's the rhythmic clinking of woks, the chilled bottles opening, 
              and the conversation that flows until the early morning. Experience the energy that 
              has defined Osu for over thirty years.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0B] bg-zinc-800" />
                 ))}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Joined by 100+ regulars tonight</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative aspect-video bg-zinc-900 overflow-hidden group rounded-2xl border border-white/5 shadow-2xl">
            <video 
              src="https://instagram.facc6-1.fna.fbcdn.net/o1/v/t2/f2/m367/AQPgq7-6XV7yNzdImJVg4M-MLUDkwEjexqLroSGINwBHWjymiIpqbgUWxWxQeywSamxF55nOj6jY8q-e9-jemMG7j8PHnNvTokIqTaE.mp4?_nc_cat=106&_nc_oc=AdqwfoRBw2nlkxqurmhrh5XnH-GmDTMo0-Cl5jrmO35G18t37eztUxmB-cntBC0n4cI&_nc_sid=5e9851&_nc_ht=instagram.facc6-1.fna.fbcdn.net&_nc_ohc=KoUaofx6TTkQ7kNvwGtsGoV&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzY2MTUwMzUzMTc5NTY5LCJhc3NldF9hZ2VfZGF5cyI6MTIzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjMsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=defad3868d7db7b2&_nc_vs=HBksFQIYQGlnX2VwaGVtZXJhbC9ENTQyRDU2QUE1NjU3MkYyOUY5OTNEODRFNkYzQzlBM192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYR2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xMjE5OTUwNjgwMDgxMjQwXzY4MTcxMjcxOTg5NDA0MDQ4NjYubXA0FQICyAESACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJuLOqvros9wCFQIoAkMzLBdAN8p--dsi0RgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gdl5p0BAA&_nc_gid=ifi3Bl-9RUxb1eHmp66zUg&_nc_zt=28&_nc_ss=7a22e&oh=00_Af5DI9Peer8YR_aKXiQ_Ozk4OfZGQL6I0CHQXoqj85ZEvw&oe=69FAD35F"
              className="w-full h-full object-cover opacity-80"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">Live From The Kitchen</span>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
