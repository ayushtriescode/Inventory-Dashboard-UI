const InventoryTable = ({ data, onRestock, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/80">
            <th className="p-4 font-semibold text-zinc-300 text-sm">
              Product Name
            </th>
            <th className="p-4 font-semibold text-zinc-300 text-sm">
              Category
            </th>
            <th className="p-4 font-semibold text-zinc-300 text-sm">Stock</th>
            <th className="p-4 font-semibold text-zinc-300 text-sm">Status</th>
            <th className="p-4 font-semibold text-zinc-300 text-sm text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {data.length === 0 && (
            <tr>
              <td colSpan="5" className="p-8 text-center text-zinc-500">
                No products found...
              </td>
            </tr>
          )}
          {data.length >= 0 &&
           data.map((item) => {
            const isLowStock = item.stock < item.minStock;

            return (
              <tr
                key={item.id}
                className="hover:bg-white/5 transition-colors group"
              >
                <td className="p-4">
                  <div className="font-medium text-zinc-100">{item.name}</div>
                  <div className="text-xs text-zinc-500">ID: {item.id}</div>
                </td>
                <td className="p-4 text-sm text-zinc-400">{item.category}</td>
                <td className="p-4">
                  <span
                    className={`text-sm font-mono ${isLowStock ? "text-orange-400" : "text-zinc-300"}`}
                  >
                    {item.stock}
                  </span>
                </td>
                <td className="p-4">
                  {isLowStock ? (
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded">
                      Low Stock
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded">
                      In Stock
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => onRestock(item.id)}
                    className="text-xs bg-emerald-600 hover:bg-emerald-500 py-1 px-3 rounded text-white transition-all"
                  >
                    Restock
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-xs bg-zinc-900 hover:bg-red-950 hover:text-red-400 py-1 px-3 rounded text-zinc-500 transition-all border border-zinc-800 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
