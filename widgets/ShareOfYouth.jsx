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
import { number } from "prop-types";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ShareOfYouth({ items }) {

 const [dataRegion, setDataRegion] = useState([]);
 const [numberColor, setNumberColor] = useState(0);

 const mainColors = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ];

  const bordercolors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];
      useEffect(() => {
        console.log(items.length )

        var label = [];
        var dataset = [];
       items.forEach(item => {
            label.push(item.region)
            dataset.push(item.youngPercent)
        })

        const dataDefault = {
            labels: label,
            datasets: [
              {
                label: "Доля молодежи среди населения по регионам России",
                data: dataset,
                backgroundColor: ["rgba(53, 162, 235, 0.5)"],
                borderWidth: 1,
              },
            ]};
          setDataRegion(dataDefault);
        

        }, [items]);

        return (
            <div>
            { 
                dataRegion.length===0 ?<div> </div> :
            
               <Bar data={dataRegion} /> 
            } </div>
            );
 // return <Bar options={options ?? optionsDefault} data={data} />;
}
