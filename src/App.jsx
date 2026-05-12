import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import InventoryTable from "./components/InventoryTable";
import StatCard from "./components/StatCard";

const initialData = [
  {
    id: 1,
    name: "Dell XPS 15",
    category: "Laptops",
    stock: 3,
    price: 1200,
    minStock: 5,
  },
  {
    id: 2,
    name: "Logitech MX Master 3",
    category: "Accessories",
    stock: 12,
    price: 99,
    minStock: 5,
  },
  {
    id: 3,
    name: "LG 27 4K Monitor",
    category: "Monitors",
    stock: 2,
    price: 450,
    minStock: 4,
  },
];

function App() {
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
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Inventory Overview
            </h1>
            <p className="text-zinc-400">
              Manage your stock levels and product details.
            </p>
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
