import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ChartCard = ({ logs }) => {
  const allowed = logs.filter(l => l.status === "allowed").length;
  const blocked = logs.filter(l => l.status === "blocked").length;

  const data = {
    labels: ["Allowed", "Blocked"],
    datasets: [
      {
        label: "Requests",
        data: [allowed, blocked],
        backgroundColor: ["#22c55e", "#ef4444"]
      }
    ]
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>&gt; Live Traffic Monitor</h3>
      <Bar data={data} />
    </div>
  );
};

export default ChartCard;