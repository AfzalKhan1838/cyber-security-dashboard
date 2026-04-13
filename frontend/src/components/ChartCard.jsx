// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale);

// const ChartCard = ({ data }) => {
//   return (
//     <div>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default ChartCard;



// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale);

// const ChartCard = ({ data }) => {
//   return <Bar data={data} />;
// };

// export default ChartCard;



// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

// ChartJS.register(BarElement, CategoryScale, LinearScale);

// const ChartCard = ({ data }) => {
//   return <Bar data={data} />;
// };

// export default ChartCard;




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