// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import StatsPanel from "../components/StatsPanel";
import SearchBar from "../components/SearchBar";
import FilterSlider from "../components/FilterSlider";
import Button from "../components/Button";
import DashboardList from "../components/DashboardList";
import ChartTempTrend from "../components/ChartTempTrend";
import ChartConditionDist from "../components/ChartConditionDist";
import Card from "../components/Card";

const formatTime = (raw) => {
  const [hourStr] = raw.split(":");
  const hour = parseInt(hourStr);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:00 ${period}`;
};

const allowedConditions = [
  "clear", "cloud", "rain", "snow", "fog", "mist", "drizzle", "thunderstorm", "haze", "overcast"
];

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [illuminationRange, setIlluminationRange] = useState(100);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [showCharts, setShowCharts] = useState(true);
  const [city, setCity] = useState("Miami");

  const weatherKey = import.meta.env.VITE_OPENWEATHERMAP_KEY;

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${weatherKey}`
      );
      const weatherData = await res.json();

      const enriched = weatherData.list.slice(0, 20).map((entry) => {
        const [date, rawTime] = entry.dt_txt.split(" ");
        const time = formatTime(rawTime);
        return {
          date,
          time,
          temp: entry.main.temp,
          feels_like: entry.main.feels_like,
          humidity: entry.main.humidity,
          pressure: entry.main.pressure,
          condition: entry.weather[0].description,
          cloudCover: entry.clouds.all,
          windSpeed: entry.wind.speed,
          windDirection: entry.wind.deg,
          moonIllumination: Math.floor(Math.random() * 100),
          moonrise: "N/A",
          moonPhase: "Unavailable"
        };
      });

      setData(enriched);
      setFiltered(enriched);
      setLastUpdated(new Date());
      setSearchQuery("");
    } catch (err) {
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const normalized = searchQuery.toLowerCase();
    const result = data
      .filter((item) => {
        if (!normalized) return true;
        const isValid = allowedConditions.some((term) => normalized.includes(term));
        if (!isValid) return false;
        return item.condition.toLowerCase().includes(normalized);
      })
      .filter((item) => item.moonIllumination <= illuminationRange);

    setFiltered(result);
  }, [searchQuery, illuminationRange, data]);

  const moonrise = filtered[0]?.moonrise || "N/A";
  const moonPhase = filtered[0]?.moonPhase || "N/A";

  return (
    <div className="container">
      <div className="card-row">
        <Card title="City" value={city} icon="🏙️" />
        <Card title="Moonrise" value={moonrise} icon="🌙" />
        <Card title="Moon Phase" value={moonPhase} icon="🌕" />
      </div>

      <StatsPanel items={filtered} />

      <div className="controls-row">
        <SearchBar
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          tooltip="Valid forecast terms: clear, cloud, rain, snow, fog, mist, drizzle, thunderstorm, haze, overcast."
        />
        <input
          type="text"
          placeholder="Enter city name"
          className="input"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={fetchData} label={loading ? "Refreshing..." : "Refresh Forecast 🔄"} />
        <Button onClick={() => setShowCharts(!showCharts)} label={showCharts ? "Hide Charts" : "Show Charts"} />
      </div>

      {lastUpdated && <div className="updated-label">Forecast updated at {lastUpdated.toLocaleTimeString()}</div>}
      {loading && <div className="loading-message">Refreshing forecast…</div>}

      <FilterSlider setPhaseRange={setIlluminationRange} />

      {showCharts && (
        <div className="chart-section">
          <h3>🌡️ Temperature Trend Over Time</h3>
          <ChartTempTrend data={filtered} />
          <p className="chart-note">This line chart shows how temperatures shift across forecast intervals.</p>

          <h3>☁️ Condition Distribution</h3>
          <ChartConditionDist data={filtered} />
          <p className="chart-note">This bar chart shows how often each weather condition appears.</p>
        </div>
      )}

      <DashboardList items={filtered} />
    </div>
  );
};

export default Dashboard;
