const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Inventory', icon: '📦', active: false },
    { name: 'Shipments', icon: '🚚', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
  ];

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900/30 backdrop-blur-xl flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-zinc-950">
            A
          </div>
          <span className="font-bold tracking-tight text-lg">Stockify</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              item.active 
                ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-100'
            }`}
          >
            <span className="text-xl group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 rounded-full bg-linear-to-tr from-emerald-500 to-black-700" />
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate text-zinc-100">Ayush</p>
            <p className="text-xs text-zinc-500 truncate">Senior Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;