import DashboardRow from "./DashboardRow";

const DashboardList = ({ items }) => (
  <div className="mt-4">
    {items.length === 0 ? (
      <p>
        No results match your search. Try one of: "clear", "cloud", "rain", "snow", "fog", "mist", "drizzle", "thunderstorm", "haze", "overcast".
      </p>
    ) : (
      <>
        <div className="dashboard-header">
          <span>Date</span>
          <span>Time</span>
          <span>Temperature</span>
          <span>Moon Phase</span>
          <span>Condition</span>
        </div>
        {items.map((item, index) => (
          <DashboardRow key={`${item.date}-${index}`} item={item} />
        ))}
      </>
    )}
  </div>
);

export default DashboardList;
