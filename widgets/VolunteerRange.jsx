import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card'
ChartJS.register(ArcElement, Tooltip, Legend);

export {};

export default function VolunteerRange({ items }) {
  
 const [dataRegion, setDataRegion] = useState(null);
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
        console.log(items)
         const data2 = {
            maintainAspectRatio: false,
            responsive: false,
            label: items?.region,
            labels: ["7-13 лет", "14-30 лет", "31-54 года", "55 лет и старше"],
            datasets: [
              {
              //  label: items?.region,
                data: [items?.range_7_13, items?.range_14_30, items?.range_31_54, items?.range_55],
                backgroundColor:  [ mainColors[numberColor], mainColors[numberColor+1], mainColors[numberColor+2], mainColors[numberColor+3]
                  ],
                  borderColor: [
                    bordercolors[numberColor], bordercolors[numberColor+1], bordercolors[numberColor+2], bordercolors[numberColor+3]
                  ]
              }
            ]
          };
        
          setDataRegion(data2);
        

        }, [items]);
  
//  { items }
  return (
    <div>
    { 
        dataRegion === null ?<div> </div> :
      <Card variant="outlined" sx={{ my: 2 }}>
        <Typography align='center'>Возраст волонтеров</Typography>
        <Doughnut data={dataRegion} /> 
       </Card>
    } </div>
    );
}
