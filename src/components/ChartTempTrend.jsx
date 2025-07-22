// src/components/ChartTempTrend.jsx
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const ChartTempTrend = ({ data }) => {
  const chartData = {
    labels: data.map((i) => `${i.date} ${i.time}`),
    datasets: [
      {
        label: "Temperature (°F)",
        data: data.map((i) => i.temp),
        borderColor: "#00bcd4",
        backgroundColor: "rgba(0, 188, 212, 0.1)",
        tension: 0.4
      }
    ]
  };

  return <Line data={chartData} />;
};

export default ChartTempTrend;
