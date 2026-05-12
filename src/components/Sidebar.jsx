const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Inventory', icon: '📦', active: false },
    { name: 'Shipments', icon: '🚚', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
  ];

  return (
    <>
    { isOpen  && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )},

    <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-zinc-950 border-r border-zinc-800 transition-transform duration-300
        md:sticky md:translate-x-0 md:flex md:bg-zinc-900/30
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full w-full">
      <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-zinc-950">
            A
          </div>
          <span className="font-bold tracking-tight text-lg">Stockify</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="md:hidden text-zinc-500">✕</button>
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
      </div>
    </aside>
    </>
  );
};

export default Sidebar;