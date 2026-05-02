import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import https from "https";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  const DB_PATH = path.join(process.cwd(), "db.json");

  app.use(express.json());

  // Initialize JSON Database
  let db: any = {
    menu: [
      { id: 'm1', name: 'Signature Jollof', description: 'Ghanaians best jollof rice served with grilled chicken and spicy shito.', price: 'GH₵ 85.00', category: 'Ghanaian', order: 1 },
      { id: 'm2', name: 'Epo’s Beef Sauce', description: 'Tender beef strips in a rich soy-based fusion sauce with vegetables.', price: 'GH₵ 95.00', category: 'Chinese-Fusion', order: 2 },
      { id: 'm3', name: 'Spring Rolls', description: 'Crispy golden rolls filled with seasonsed vegetables and minced pork.', price: 'GH₵ 45.00', category: 'Appetizers', order: 3 },
      { id: 'm4', name: 'Classic Fried Rice', description: 'Fragrant jasmine rice wok-fried with shrimp, eggs, and garden peas.', price: 'GH₵ 75.00', category: 'Chinese-Fusion', order: 4 }
    ],
    events: [],
    gallery: [
      { id: 'g1', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200', title: 'Atmosphere', category: 'Ambiance', order: 1 },
      { id: 'g2', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200', title: 'Fusion Dishes', category: 'Food', order: 2 },
      { id: 'g3', url: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1200', title: 'Late Night Vibes', category: 'Legacy', order: 3 }
    ],
    config: {
      hero: {
        title: "A Standard in Osu Since the 90s.",
        subtitle: "Authentic Flavor. Legendary Nights.",
        description: "Epo's started on the 8th Lane in Osu and has remained a local favorite for decades. We focus on consistent quality, serving our signature beef sauce and fried rice to longtime regulars and new visitors alike."
      },
      brand: {
        name: "Epo's Bar & Grill",
        tagline: "Osu's Midnight Kitchen"
      }
    },
    reservations: [],
    admins: ['ko2527600@gmail.com', 'admin@epos.com']
  };

  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    db = JSON.parse(data);
  } catch (e) {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  }

  const saveDb = async () => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  };

  // --- API Routes ---

  // Menu
  app.get("/api/menu", (req, res) => {
    res.json(db.menu.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)));
  });

  app.post("/api/menu", async (req, res) => {
    const item = req.body;
    const index = db.menu.findIndex((i: any) => i.id === item.id);
    if (index > -1) {
      db.menu[index] = item;
    } else {
      item.id = item.id || Math.random().toString(36).substr(2, 9);
      db.menu.push(item);
    }
    await saveDb();
    res.json({ success: true });
  });

  app.delete("/api/menu/:id", async (req, res) => {
    db.menu = db.menu.filter((i: any) => i.id !== req.params.id);
    await saveDb();
    res.json({ success: true });
  });

  // Events
  app.get("/api/events", (req, res) => {
    res.json(db.events.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)));
  });

  app.post("/api/events", async (req, res) => {
    const item = req.body;
    const index = db.events.findIndex((i: any) => i.id === item.id);
    if (index > -1) {
      db.events[index] = item;
    } else {
      item.id = item.id || Math.random().toString(36).substr(2, 9);
      db.events.push(item);
    }
    await saveDb();
    res.json({ success: true });
  });

  app.delete("/api/events/:id", async (req, res) => {
    db.events = db.events.filter((i: any) => i.id !== req.params.id);
    await saveDb();
    res.json({ success: true });
  });

  // Gallery
  app.get("/api/gallery", (req, res) => {
    res.json(db.gallery.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)));
  });

  app.post("/api/gallery", async (req, res) => {
    const item = req.body;
    const index = db.gallery.findIndex((i: any) => i.id === item.id);
    if (index > -1) {
      db.gallery[index] = item;
    } else {
      item.id = item.id || Math.random().toString(36).substr(2, 9);
      db.gallery.push(item);
    }
    await saveDb();
    res.json({ success: true });
  });

  app.delete("/api/gallery/:id", async (req, res) => {
    db.gallery = db.gallery.filter((i: any) => i.id !== req.params.id);
    await saveDb();
    res.json({ success: true });
  });

  // Config
  app.get("/api/config", (req, res) => {
    res.json(db.config);
  });

  app.post("/api/config", async (req, res) => {
    db.config = { ...db.config, ...req.body };
    await saveDb();
    res.json({ success: true });
  });

  // Reservations
  app.get("/api/reservations", (req, res) => {
    res.json(db.reservations.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  });

  app.post("/api/reservations", async (req, res) => {
    const reservation = {
      ...req.body,
      id: req.body.id || Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    db.reservations.push(reservation);
    await saveDb();
    res.status(200).json({ success: true, message: "Reservation received!", id: reservation.id });
  });

  app.patch("/api/reservations/:id", async (req, res) => {
    const index = db.reservations.findIndex((r: any) => r.id === req.params.id);
    if (index > -1) {
      db.reservations[index].status = req.body.status;
      await saveDb();
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });

  // Auth Simulation
  app.post("/api/auth/login", (req, res) => {
    const { email } = req.body;
    if (email === 'ko2527600@gmail.com' || email === 'admin@epos.com') {
      res.json({ 
        success: true, 
        user: { uid: 'admin-123', email, displayName: 'Admin User' }
      });
    } else {
      res.status(401).json({ success: false });
    }
  });

  // Image Proxy to bypass CORP/CORS for Instagram images
  app.get("/image-proxy", (req, res) => {
    const imageUrl = req.query.url as string;
    console.log(">>> [SERVER] Proxying image request for:", imageUrl);
    
    if (!imageUrl) {
      return res.status(400).send("URL parameter is required");
    }

    try {
      const url = new URL(imageUrl);
      const protocol = url.protocol === 'https:' ? https : http;
      
      const proxyReq = protocol.request(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'image/*'
        }
      }, (proxyRes) => {
        if (proxyRes.statusCode !== 200) {
          console.error(`Proxy error: Received status ${proxyRes.statusCode}`);
          res.status(proxyRes.statusCode || 500).send("Error fetching image");
          return;
        }

        res.setHeader("Content-Type", proxyRes.headers["content-type"] || "image/jpeg");
        res.setHeader("Cache-Control", "public, max-age=86400");
        proxyRes.pipe(res);
      });

      proxyReq.on('error', (err) => {
        console.error("Proxy request error:", err);
        res.status(500).send("Error proxying image");
      });

      proxyReq.end();
    } catch (error) {
      console.error("Proxy setup error:", error);
      res.status(500).send("Invalid URL or proxy error");
    }
  });

  app.get("/api/test", (req, res) => {
    res.send("Backend is alive!");
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
