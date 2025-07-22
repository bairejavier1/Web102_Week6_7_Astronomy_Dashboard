// src/components/DashboardList.jsx
import { Link } from "react-router-dom";
import DashboardRow from "./DashboardRow";

const DashboardList = ({ items }) => (
  <div className="dashboard-wrapper">
    {items.length === 0 ? (
      <p>No matching forecasts found. Try searching for: "clear", "fog", "rain", etc.</p>
    ) : (
      <>
        <div className="dashboard-header">
          <span>Date</span>
          <span>Time</span>
          <span>Temperature</span>
          <span>Moon Phase</span>
          <span>Condition</span>
          <span>Details</span>
        </div>
        {items.map((item, index) => (
          <Link
            key={index}
            to={`/details/${item.date}`}
            state={{ item }}
            style={{ textDecoration: "none", color: "inherit" }}
            title="View forecast details"
          >
            <DashboardRow item={item} />
          </Link>
        ))}
      </>
    )}
  </div>
);

export default DashboardList;
