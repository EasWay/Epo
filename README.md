# Epo's Bar & Grill | Digital Experience

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, high-performance digital presence for **Epo's Bar & Grill**, an iconic establishment in Osu, Accra since the 90s. This application bridges nostalgic heritage with modern interactive design, featuring a signature 3D menu experience and a robust administrative backend.

---

## ✨ Key Features

### 📖 3D Interactive Menu
*   **Immersive Book Layout**: A custom-engineered 3D book interface for desktop users with realistic lighting and page-turn physics.
*   **Mobile-First Swipe Experience**: Advanced 3D page-flip interactions on mobile devices, emulating the tactile feel of a physical menu.
*   **Celebrity Endorsement Integration**: Embedded high-quality video content featuring legendary Ghanaian artist **Kwabena Kwabena**.

### 🎨 Premium Visual Identity
*   **Aesthetic Continuity**: Synchronized imagery across Hero and Signature dish sections for a cohesive brand narrative.
*   **Glassmorphism & Micro-animations**: Subtle UI feedback and premium transparency effects built with Tailwind CSS and Framer Motion.
*   **Responsive Masonry Gallery**: A dense, high-performance visual journal of the restaurant's legacy.

### 🔐 Administrative Ecosystem
*   **Real-time Dashboard**: Live statistics and management tools for menu items, events, and reservations.
*   **Responsive Admin UI**: Mobile-optimized control center with a custom navigation dock for management on the go.
*   **Secure Access**: Protected routes with administrative privilege levels.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Core** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS (JIT mode), Lucide React |
| **Animation** | Framer Motion (motion/react) |
| **State Management** | React Context + Custom Hooks |
| **Data Fetching** | Fetch API + Mock Service Layer |
| **Performance** | Image Optimization Hooks, Lazy Loading |

---

## 🚀 Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16.0 or higher)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Local Installation

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd Epo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add any required keys (e.g., Gemini API keys if using AI features).

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (Hero, BookMenu, Dock, etc.)
├── constants/      # Static data and configuration tokens
├── hooks/          # Custom React hooks for business logic
├── lib/            # Utility libraries (API, Optimization, etc.)
├── pages/          # Page-level components (Home, Menu, Gallery, Admin)
├── types/          # TypeScript interface definitions
└── App.tsx         # Main application entry and routing
```

---

## 📐 Design Philosophy

This project adheres to a **Mobile-First** and **Performance-First** approach. While the desktop experience offers an immersive 3D environment, the mobile experience is not a fallback but a specialized interaction model. Every animation is GPU-accelerated, and every asset is lazy-loaded to ensure "Premium Speed" on all network conditions.

---

<div align="center">
  <p>© 2024 Epo's Bar & Grill. Engineered for Excellence.</p>
</div>
