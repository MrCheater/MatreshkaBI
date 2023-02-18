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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

export default function HorizontalBar({ url, options }) {
  const dataDefault = {
    labels: ["Red", "Orange", "Blue"],
    datasets: [
      {
        label: "",
        data: [55, 23, 96],
        backgroundColor: ["rgba(53, 162, 235, 0.5)"],
        borderWidth: 1,
      },
    ],
  };
  const optionsDefault = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
      },
    },
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
  
      setData(data);
    };
  
    fetchData();
    }, []);
  
    let preparedData;
  
    if (data.length) {
      preparedData = {
        ...dataDefault,
        labels: data?.map((item) => item[options.labels]),
        datasets: [
          {
            ...dataDefault.datasets[0],
            data: data?.map((item) => item[options.data]),
            label: options.label,
          }
        ],
      }
    }

  return <Bar options={optionsDefault} data={preparedData ?? dataDefault} />;
}
