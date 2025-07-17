import Card from "./Card";

const StatsPanel = ({ items }) => {
  const total = items.length;

  const avgTemp =
    total > 0
      ? (items.reduce((sum, i) => sum + i.temp, 0) / total).toFixed(1)
      : "N/A";

  const maxTemp =
    total > 0
      ? Math.max(...items.map((i) => i.temp)).toFixed(1)
      : "N/A";

  const clearCount = items.filter((i) =>
    i.condition.toLowerCase().includes("clear")
  ).length;

  const phaseCounts = {};
  items.forEach(({ moonPhase }) => {
    phaseCounts[moonPhase] = (phaseCounts[moonPhase] || 0) + 1;
  });
  const commonPhase =
    Object.entries(phaseCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  return (
    <div className="card-grid">
      <Card title="Days Displayed" value={total} icon="📅" />
      <Card title="Avg Temp" value={`${avgTemp} °F`} icon="🌡️" />
      <Card title="Max Temp" value={`${maxTemp} °F`} icon="🔥" />
      <Card title="Clear Nights" value={clearCount} icon="🌌" />
      <Card title="Common Phase" value={commonPhase} icon="🌕" />
    </div>
  );
};

export default StatsPanel;
