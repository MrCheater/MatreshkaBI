import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Card from '@mui/material/Card'
import { Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export {};

export default function VolunteerCommon({ items }) {
  
 const [dataRegion, setDataRegion] = useState(null);
 const [numberColor, setNumberColor] = useState(2);

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
            labels: ["Доля волонтеров в общей численности", "Общая численность населения"],
            datasets: [
              {
              //  label: items?.region,
                data: [items?.totalRange, items?.total],
                backgroundColor:  [ mainColors[numberColor], mainColors[numberColor+1]
                  ],
                  borderColor: [
                    bordercolors[numberColor], bordercolors[numberColor+1]
                  ]
              }
            ]
          };
         
        /*  if (numberColor == 4){
            setNumberColor(0)
          }else{
            setNumberColor(numberColor+1)
          }*/
          setDataRegion(data2);
        

        }, [items]);
  
//  { items }
  return (
    <div>
    { 
        dataRegion === null ?<div> </div> :
    
        <Card variant="outlined" sx={{ my: 2 }}>
        <Typography align='center'>Соотношение волонтеров к общей численности населения</Typography>
        <Doughnut data={dataRegion} /> 
       </Card>

    } </div>
    );
}
