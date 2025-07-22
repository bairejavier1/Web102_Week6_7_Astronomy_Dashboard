// src/components/DashboardRow.jsx
const DashboardRow = ({ item }) => (
  <div className="dashboard-row">
    <span>{item.date}</span>
    <span>{item.time}</span>
    <span>{item.temp} °F</span>
    <span>{item.moonPhase}</span>
    <span>{item.condition}</span>
    <span>🔗</span> {/* Icon only; full row is clickable now */}
  </div>
);

export default DashboardRow;
