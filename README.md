# 📦 StockWise — Inventory Dashboard UI

A premium, highly responsive frontend inventory management dashboard built to master complex state management, derived data architectures, and mobile-first layouts in modern React.

🚀 **Live Demo:** [ayushtriescode.github.io/Inventory-Dashboard-UI/](https://ayushtriescode.github.io/Inventory-Dashboard-UI/)

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** React.js (Hooks, Functional Components)
- **Styling:** Tailwind CSS v4 (Glassmorphism, custom zinc-based premium palette)
- **Build Tool:** Vite
- **Persistence:** LocalStorage Engine

---

## 💡 Key Architectural Lessons Learned

### 1. Complex State & Immutability
Managed a unified array of inventory objects. Implemented pure functional updates using `.map()` and the object spread operator (`...item`) to ensure React detects state updates without mutating the original reference history directly.

### 2. Performance via Derived State
Avoided the common anti-pattern of duplicating state for filtered lists. The data table filtering logic and global statistics (Total Products, Low Stock Alert counts) are calculated **on the fly during the render cycle** from a single source of truth.

### 3. Responsive Component Switching
Instead of simply hiding table cells on mobile viewports, the application switches design patterns based on screen size:
- **Desktop (md+):** High-density data table layout with sticky sidebar navigation.
- **Mobile (<md):** Layout shifts to custom individual data cards optimized for touch targets, keeping interactive elements from overflowing the mobile screen viewport boundaries.

---

## ✨ Features

- **Full Local Persistence:** State stays hydrated across page reloads using a lazy-initialized `useState` hook integrated with `localStorage`.
- **Live Dual-Property Filter:** Search instantly queries through both product names and categories simultaneously using case-insensitive mapping.
- **Dynamic Threshold Alerts:** Visual indicators shift seamlessly to warn the user when an item's quantity drops below its minimum stock threshold level.
- **Zero-Blue Palette:** Customized clean interface focusing strictly on slate, amber, and emerald tones for an exceptional, premium user experience.

---

## 🚀 Local Development Setup

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/ayushtriescode/Inventory-Dashboard-UI.git](https://github.com/ayushtriescode/Inventory-Dashboard-UI.git)