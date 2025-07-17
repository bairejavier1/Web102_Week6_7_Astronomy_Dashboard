const DashboardRow = ({ item }) => (
  <div className="dashboard-row">
    <span>{item.date}</span>
    <span>{item.time}</span>
    <span>{item.temp} °F</span>
    <span>{item.moonPhase}</span>
    <span>{item.condition}</span> {/* 🌦️ Weather condition added */}
  </div>
);

export default DashboardRow;
