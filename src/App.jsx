import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import InventoryTable from "./components/InventoryTable";
import StatCard from "./components/StatCard";

const initialData = [
  { id: 1, name: "Dell XPS 15", category: "Laptops", stock: 3, price: 1200, minStock: 5 },
  { id: 2, name: "Logitech MX Master 3", category: "Accessories", stock: 12, price: 99, minStock: 5 },
  { id: 3, name: "LG 27\" 4K Monitor", category: "Monitors", stock: 2, price: 450, minStock: 4 },
  { id: 4, name: "MacBook Pro M3", category: "Laptops", stock: 8, price: 2499, minStock: 3 },
  { id: 5, name: "Keychron Q1 V2", category: "Accessories", stock: 4, price: 160, minStock: 6 },
  { id: 6, name: "Sony WH-1000XM5", category: "Audio", stock: 15, price: 349, minStock: 5 },
  { id: 7, name: "Samsung Odyssey G9", category: "Monitors", stock: 1, price: 1100, minStock: 2 },
  { id: 8, name: "Blue Yeti Mic", category: "Audio", stock: 9, price: 129, minStock: 4 },
  { id: 9, name: "ASUS ROG Strix G16", category: "Laptops", stock: 6, price: 1599, minStock: 5 },
  { id: 10, name: "Elgato Stream Deck", category: "Accessories", stock: 2, price: 149, minStock: 5 },
  { id: 11, name: "Razer DeathAdder V3", category: "Accessories", stock: 20, price: 69, minStock: 10 },
  { id: 12, name: "Shure SM7B", category: "Audio", stock: 3, price: 399, minStock: 3 },
  { id: 13, name: "iPad Pro 12.9", category: "Tablets", stock: 7, price: 1099, minStock: 4 },
  { id: 14, name: "Kindle Paperwhite", category: "Tablets", stock: 18, price: 139, minStock: 5 },
  { id: 15, name: "Nvidia RTX 4090", category: "GPU", stock: 0, price: 1600, minStock: 2 },
  { id: 16, name: "Intel i9-14900K", category: "CPU", stock: 5, price: 589, minStock: 5 },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem("my-data");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    localStorage.setItem("my-data", JSON.stringify(inventory));
  }, [inventory]);

  const handleRestock = (id) => {
    setInventory((prevInventory) =>
      prevInventory.map(
        (item) =>
          item.id === id
            ? { ...item, stock: item.stock + 1 } // Create a NEW object with updated stock
            : item, // Return original item if it doesn't match the ID
      ),
    );
  };

  const handleDelete = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  const lowStockCount = inventory.filter(
    (item) => item.stock < item.minStock,
  ).length;

  const totalItems = inventory.length;

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

      <main className="flex-1 p-8">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Inventory Overview</h1>
              <p className="text-zinc-400 text-sm">Manage your stock levels.</p>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 bg-zinc-900 border border-zinc-800 rounded-lg"
            >
              Menu
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard
            label="Total Products"
            value={totalItems}
            colorClass="text-zinc-100"
          />
          <StatCard
            label="Low Stock Alerts"
            value={lowStockCount}
            colorClass="text-orange-500"
          />
          <StatCard
            label="System Status"
            value="Active"
            colorClass="text-emerald-500"
          />
        </div>

        <div className="grid gap-6">
          <InventoryTable
            data={filteredInventory}
            onRestock={handleRestock}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
}
export default App;
