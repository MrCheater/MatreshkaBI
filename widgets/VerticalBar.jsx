import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function VerticalBar({ url, options }) {
  const optionsDefault = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const dataDefault = {
    labels: ["Red", "Orange", "Blue"],
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        backgroundColor: ["rgba(53, 162, 235, 0.5)"],
        borderWidth: 1,
      },
      {
        label: "Popularity of trends",
        data: [5, 53, 23],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        borderWidth: 1,
      },
    ],
  };

  const [data, setData] = useState(dataDefault);

  /*
useEffect(async () => {
  if (url) {
    const result = await fetch(url);
    const data = result.json();

  if (data) {
    setData(data);
  }
  }
});
*/

  return <Bar options={options ?? optionsDefault} data={data} />;
}
