// src/components/DetailView.jsx
import { useLocation } from "react-router-dom";
import DashboardRow from "./DashboardRow";

const DetailView = () => {
  const location = useLocation();
  const item = location.state?.item;

  const formatTime = (raw) => {
    const [h] = raw.split(":");
    const hour = parseInt(h);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:00 ${period}`;
  };

  const getForecastInsight = (item) => {
    const { condition, feels_like, humidity, windSpeed, cloudCover } = item;
    let insight = `🌤️ Today’s forecast calls for ${condition}.`;

    if (cloudCover > 80) {
      insight += " Skies are playing peek-a-boo with the sun — prepare for full-on gray mode.";
    } else if (cloudCover < 20) {
      insight += " Not a cloud in sight! Sunglasses recommended. 😎";
    }

    if (humidity >= 80) {
      insight += " Humidity is off the charts — hydration is your best friend today 💦.";
    }

    if (windSpeed > 15) {
      insight += " Wind could be gusty — maybe don’t fight it with an open umbrella indoors. 🌀";
    }

    if (feels_like < 45) {
      insight += " It’s brisk outside — layer up like a stylish onion 🧅.";
    } else if (feels_like > 85) {
      insight += " It’s warm and sunny — sunscreen and iced drinks highly encouraged 🧴🧊.";
    }

    if (
      condition.toLowerCase().includes("rain") ||
      condition.toLowerCase().includes("drizzle") ||
      condition.toLowerCase().includes("thunderstorm")
    ) {
      insight += " Don't forget your umbrella ☔ — and maybe your indoor socks just in case.";
    }

    if (
      condition.toLowerCase().includes("clear") ||
      condition.toLowerCase().includes("sun")
    ) {
      insight += " A great day for a walk, a picnic, or just pointing at the sky and smiling ☀️.";
    }

    const funFacts = [
      "Did you know a cumulus cloud can weigh over a million pounds?",
      "Raindrops aren’t tear-shaped — they’re more like squashed spheres 💧.",
      "The hottest temperature ever recorded on Earth was 134°F in Death Valley 🌵.",
      "A bolt of lightning is five times hotter than the surface of the sun ⚡.",
      "Some frogs can sense rain before it arrives — nature’s weathermen 🐸."
    ];
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    insight += ` Fun fact: ${fact}`;

    return insight;
  };

  if (!item) return <div className="container">No forecast data available.</div>;

  return (
    <div className="container">
      <h2 style={{ marginBottom: "10px" }}>Forecast Detail</h2>
      <DashboardRow item={item} />
      <div style={{ marginTop: "15px" }}>
        <p><strong>Date:</strong> {item.date}</p>
        <p><strong>Time Slot:</strong> {item.time}</p>
        <p><strong>Condition:</strong> {item.condition}</p>
        <p><strong>Moonrise:</strong> {item.moonrise}</p>
        <p><strong>Moon Phase:</strong> {item.moonPhase}</p>
        <p><strong>Feels Like:</strong> {item.feels_like} °F</p>
        <p><strong>Humidity:</strong> {item.humidity}%</p>
        <p><strong>Pressure:</strong> {item.pressure} hPa</p>
        <p><strong>Cloud Coverage:</strong> {item.cloudCover}%</p>
        <p><strong>Wind:</strong> {item.windSpeed} mph at {item.windDirection}°</p>
        <div style={{ marginTop: "15px", backgroundColor: "#1c1f2d", padding: "12px", borderRadius: "6px" }}>
          <p><strong>🌦️ Forecast Summary:</strong></p>
          <p>{getForecastInsight(item)}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
