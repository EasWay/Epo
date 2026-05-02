import { motion } from "motion/react";
import { Instagram, Facebook, ArrowRight } from "lucide-react";
import { optimizeImage } from "../lib/imageOptimization";

const COLLAGE_IMAGES = [
  // Moment 18
  "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/656288804_18139172824502952_251403645271452314_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzE1NTY4ODE4MzgxNTQ2MjIzMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExMjV4MTQwNi5zZHIuQzMifQ%3D%3D&_nc_ohc=153Qs5zDOdwQ7kNvwHh2Yev&_nc_oc=AdoERyFrLbIlvv23K4smFCDx0k9pe_dcsRySKPSk2vSx356cKgfs1TdVVr3glboxg9U&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc6-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af6AE3vxWR4K5XsgngLbvJ8TIbccsvX7NMWcaPvzr3AUKw&oe=69FAEF3B",
  // Moment 20
  "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/652761235_18093213965121823_1444853052681242048_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzE1NTY4NzcwNzQwOTM5MjAwNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEyNzl4MTU5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=zbnQENAU67cQ7kNvwFrnhje&_nc_oc=Adoxr84oGCJTXzNss0LDCoz3ahFY27_YDMYtP7Ohxu_hXOYNO4EpBqPPkGHuX1zEhM4&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=7&_nc_ht=instagram.facc6-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af6kpVmV14JFnarOKI0UeTII5rsE7lJjFtzVMHpdxf3qQQ&oe=69FAD6DE",
  // Moment 12
  "https://instagram.facc6-1.fna.fbcdn.net/v/t51.82787-15/655157672_18095364938009160_5475627701275085260_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzE1NTY5NzYxMTcyMTU2NDY1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjk3MXg5NzEuc2RyLkMzIn0%3D&_nc_ohc=g_nTCQ6ov_gQ7kNvwHpmPyb&_nc_oc=AdoXRqeBgUlscGdCkYgzTGQHRPcVgWVwfx-hhnFrpjeGcKYf7rx2nt_VlYhAyQ7kAtk&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&se=8&_nc_ht=instagram.facc6-1.fna&_nc_gid=6EouBdO7A7gqfpaSwsrhEw&_nc_ss=7a22e&oh=00_Af6kTmzMUgyioc_SaEPfVzclSnhQkE1QXB57m5djZKJSuA&oe=69FAC3B2",
  // Moment 14
  "https://instagram.facc1-1.fna.fbcdn.net/v/t51.82787-15/655966852_18087039482250115_8427582271207827584_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzE1NTY6NDE1NjIxMDY5NTI5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjU2NXgzMTkuc2RyLkMzIn0%3D&_nc_ohc=VrIYZcz_CgwQ7kNvwFvvdw9&_nc_oc=AdqX3FWlCQbZ45mkdjYQqvu8xs4Cmik1QdhJENRPvcjGyt11NxO1cgKXXrWfNUEJTO0&_nc_ad=z-m&_nc_cid=1334&_nc_zt=23&_nc_ht=instagram.facc1-1.fna&_nc_gid=g3h5vu60D5XUmJmcqmyZUQ&_nc_ss=7a22e&oh=00_Af61pScFwm2owB4BNvyA6lyjwZxwmAeY_MMqNS6oineUcQ&oe=69FAE776"
];

export default function SocialsPromotion() {
  return (
    <section className="py-24 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            {COLLAGE_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative aspect-[4/5] rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'mt-8' : ''}`}
              >
                <img
                  src={optimizeImage(img, 400, 75)}
                  alt="Gallery vibe"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Join Our Community</p>
              <h2 className="text-4xl md:text-6xl serif leading-tight">
                Epo's is available <br /> on <span className="italic italic-gold">Social Media</span>
              </h2>
            </div>
            
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-xl">
              Stay updated with our latest rituals, night-time specials, and the ever-evolving energy of Osu. Follow us for a glimpse behind the scenes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/5 border border-white/10 px-8 py-5 rounded-2xl hover:bg-gold hover:text-black transition-all duration-500 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black/10">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-60">Follow us</p>
                    <p className="font-bold">Instagram</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/5 border border-white/10 px-8 py-5 rounded-2xl hover:bg-[#1877F2] hover:text-white transition-all duration-500 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black/10">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-60">Join us</p>
                    <p className="font-bold">Facebook</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
