import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Doughnut, PolarArea } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card'
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

export {};

export default function OrganizationRange({ items }) {
  
 const [dataRegion, setDataRegion] = useState(null);
 const [numberColor, setNumberColor] = useState(0);

 const mainColors = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
    "rgba(149, 149, 149, 0.2)",
  ];

  const bordercolors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(149, 149, 149, 1)",
  ];
      useEffect(() => {
        console.log(items)
         const data2 = {
            maintainAspectRatio: false,
            responsive: false,
            label: items?.region,
            labels: ["образование", "здравохранение", "социальная защита и социальное обслуживание", 
            "культура", "физическая культура и спорт", "охрана природы", "строительство и ЖКХ"],
            datasets: [
              {
              //  label: items?.region,
                data: [items?.education, items?.healthcare, items?.social, items?.culture,
                  items?.sport, items?.nature, items?.communal],
                backgroundColor:  [ 
                  mainColors[numberColor], 
                  mainColors[numberColor+1], 
                  mainColors[numberColor+2], 
                  mainColors[numberColor+3],
                  mainColors[numberColor+4],
                  mainColors[numberColor+5],
                  mainColors[numberColor+6]
                  ],
                  borderColor: [
                    bordercolors[numberColor], 
                    bordercolors[numberColor+1], 
                    bordercolors[numberColor+2], 
                    bordercolors[numberColor+3],
                    bordercolors[numberColor+4], 
                    bordercolors[numberColor+5],
                    bordercolors[numberColor+6],
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
        <Typography align='center'>Количество государственных учреждений работающих с волонтерами в сферах</Typography>
        <PolarArea data={dataRegion} /> 
       </Card>
    } </div>
    );
}
