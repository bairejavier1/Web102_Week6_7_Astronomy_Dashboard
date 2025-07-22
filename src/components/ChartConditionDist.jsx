// src/components/ChartConditionDist.jsx
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const ChartConditionDist = ({ data }) => {
  const counts = {};

  data.forEach((entry) => {
    counts[entry.condition] = (counts[entry.condition] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "# of Forecasts",
        data: Object.values(counts),
        backgroundColor: "#ff9800"
      }
    ]
  };

  return <Bar data={chartData} />;
};

export default ChartConditionDist;
