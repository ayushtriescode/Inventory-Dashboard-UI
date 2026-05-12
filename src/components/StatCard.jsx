const StatCard = ({ label, value, colorClass }) => (
  <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md">
    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{label}</p>
    <p className={`text-2xl font-bold mt-1 ${colorClass}`}>{value}</p>
  </div>
);

export default StatCard;