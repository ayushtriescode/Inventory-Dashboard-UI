const InventoryTable = ({ data, onRestock, onDelete }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {data.length === 0 ? (
          <div className="p-8 text-center text-zinc-500 bg-zinc-900/50 rounded-xl border border-zinc-800">
            No products found...
          </div>
        ) : (
          data.map((item) => (
            <div 
              key={item.id} 
              className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md space-y-4"
            >
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-zinc-100 truncate">{item.name}</h3>
                  <p className="text-xs text-zinc-500 uppercase tracking-tight">{item.category}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-sm font-mono font-bold ${item.stock < item.minStock ? 'text-orange-400' : 'text-emerald-500'}`}>
                    Qty: {item.stock}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
                <div className="text-xs text-zinc-400">
                  Price: <span className="text-zinc-200">${item.price}</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => onRestock(item.id)}
                    className="px-3 py-1.5 bg-emerald-600/10 text-emerald-500 border border-emerald-500/20 rounded-lg text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all"
                  >
                    Restock
                  </button>
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="px-3 py-1.5 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg text-xs font-bold hover:bg-red-600 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="hidden md:block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/80">
              <th className="p-4 font-semibold text-zinc-300 text-sm">Product</th>
              <th className="p-4 font-semibold text-zinc-300 text-sm">Category</th>
              <th className="p-4 font-semibold text-zinc-300 text-sm">Stock</th>
              <th className="p-4 font-semibold text-zinc-300 text-sm">Price</th>
              <th className="p-4 font-semibold text-zinc-300 text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-8 text-center text-zinc-500">No products found...</td>
              </tr>
            ) : (
              data.map((item) => {
                const isLowStock = item.stock < item.minStock;
                return (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4">
                      <div className="font-medium text-zinc-100">{item.name}</div>
                      <div className="text-[10px] text-zinc-500 uppercase">ID: {item.id}</div>
                    </td>
                    <td className="p-4 text-sm text-zinc-400">{item.category}</td>
                    <td className="p-4">
                      <span className={`text-sm font-mono font-bold ${isLowStock ? "text-orange-400" : "text-zinc-300"}`}>
                        {item.stock}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-zinc-300">${item.price}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => onRestock(item.id)} className="text-xs bg-emerald-600/10 text-emerald-500 border border-emerald-500/20 py-1 px-3 rounded hover:bg-emerald-600 hover:text-white transition-all">
                          Restock
                        </button>
                        <button onClick={() => onDelete(item.id)} className="text-xs bg-zinc-800 hover:bg-red-600/20 hover:text-red-500 py-1 px-3 rounded text-zinc-500 transition-all border border-zinc-700">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;