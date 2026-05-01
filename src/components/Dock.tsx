import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Utensils, Image, Info, Lock, Phone } from "lucide-react";
import { cn } from "../lib/utils";

const FOOTER_NAV = [
  { name: "Home", href: "/", icon: Home },
  { name: "Menu", href: "/menu", icon: Utensils },
  { name: "Gallery", href: "/gallery", icon: Image },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
  { name: "Admin", href: "/admin", icon: Lock },
];

interface DockItemProps {
  href: string;
  icon: any;
  mouseX: any;
  label: string;
  key?: string;
}

function DockItem({ href, icon: Icon, mouseX, label }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = location.pathname === href;

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 64, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 64, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        className={cn(
          "flex items-center justify-center rounded-full transition-colors relative group",
          isActive ? "bg-gold text-black" : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
        )}
      >
        <Icon size={20} strokeWidth={1.5} />
        
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4"
    >
      <div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-16 gap-4 px-4 py-3 pb-4 glass rounded-3xl"
      >
        {FOOTER_NAV.map((item) => (
          <DockItem 
            key={item.name} 
            href={item.href} 
            icon={item.icon} 
            mouseX={mouseX} 
            label={item.name} 
          />
        ))}
      </div>
    </motion.div>
  );
}
