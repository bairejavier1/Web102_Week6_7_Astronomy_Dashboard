// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import StatsPanel from "./components/StatsPanel";
import SearchBar from "./components/SearchBar";
import FilterSlider from "./components/FilterSlider";
import DashboardList from "./components/DashboardList";
import Card from "./components/Card";
import Button from "./components/Button";
import Search from "./pages/Search";
import About from "./pages/About";

const allowedConditions = [
  "clear", "cloud", "rain", "snow", "fog",
  "mist", "drizzle", "thunderstorm", "haze", "overcast"
];

// Optional time formatter
const formatTime = (raw) => {
  const [hourStr] = raw.split(":");
  const hour = parseInt(hourStr);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:00 ${period}`;
};

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [illuminationRange, setIlluminationRange] = useState(100);
  const [filtered, setFiltered] = useState([]);
  const [city, setCity] = useState("Miami");
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const weatherKey = import.meta.env.VITE_OPENWEATHERMAP_KEY;

  const fetchData = async () => {
    setLoading(true);
    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${weatherKey}`
      );
      const weatherData = await weatherRes.json();

      const enriched = await Promise.all(
        weatherData.list.slice(0, 10).map(async (entry) => {
          const [date, rawTime] = entry.dt_txt.split(" ");
          const time = formatTime(rawTime);

          let moonPhase = "Loading...";
          try {
            const astroRes = await fetch("http://localhost:3001/api/moon", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                observer: {
                  latitude: weatherData.city.coord.lat,
                  longitude: weatherData.city.coord.lon,
                  date
                },
                view: "phase"
              })
            });
            const astroData = await astroRes.json();
            moonPhase = astroData?.data?.phase?.name || "Unavailable";
          } catch {
            moonPhase = "Unavailable";
          }

          return {
            date,
            time,
            temp: entry.main.temp,
            condition: entry.weather[0].description,
            moonrise: "N/A",
            moonIllumination: Math.floor(Math.random() * 100),
            moonPhase
          };
        })
      );

      setData(enriched);
      setFiltered(enriched);
      setLastUpdated(new Date());
      setSearchQuery("");
    } catch (err) {
      console.error("Failed to fetch weather data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  useEffect(() => {
    const normalized = searchQuery.toLowerCase();
    const result = data
      .filter((item) => {
        if (!normalized) return true;
        const isValid = allowedConditions.some((term) =>
          normalized.includes(term)
        );
        if (!isValid) return false;
        return item.condition.toLowerCase().includes(normalized);
      })
      .filter((item) => item.moonIllumination <= illuminationRange);

    setFiltered(result);
  }, [searchQuery, illuminationRange, data]);

  const moonrise = filtered[0]?.moonrise || "N/A";
  const moonPhase = filtered[0]?.moonPhase || "N/A";

  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
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
                <Button
                  onClick={fetchData}
                  label={loading ? "Refreshing..." : "Refresh Forecast 🔄"}
                />
              </div>

              {lastUpdated && (
                <div className="updated-label">
                  Forecast updated at {lastUpdated.toLocaleTimeString()}
                </div>
              )}
              {loading && (
                <div className="loading-message">Refreshing forecast…</div>
              )}

              <FilterSlider setPhaseRange={setIlluminationRange} />
              <DashboardList items={filtered} />
            </div>
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
