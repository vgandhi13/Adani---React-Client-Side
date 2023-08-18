import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
 
ChartJS.register(ArcElement, Tooltip, Legend);


 
const PieChart = ({allResources}) => {
  console.log(allResources)
  const currentDate = new Date();

  const resourcesWithin1Month = [];
  const resourcesWithin3Months = [];
  const resourcesWithin6Months = [];
  const resourcesWithin12Months = [];
  const resourcesBeyond12Months = [];

  allResources.forEach(obj => {
    const dateString = obj.last_use_time; //change this to last_use_time
    const [year, month, day] = dateString.split("-").map(Number);

    const lastRefreshDate = new Date(year, month - 1, day); // Months are 0-based

    const timeDifference = currentDate - lastRefreshDate;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    const monthsDifference = daysDifference / 30; // Approximate months

    if (monthsDifference <= 1) {
      resourcesWithin1Month.push(obj);
    } else if (monthsDifference <= 3) {
      resourcesWithin3Months.push(obj);
    } else if (monthsDifference <= 6) {
      resourcesWithin6Months.push(obj);
    } else if (monthsDifference <= 12) {
      resourcesWithin12Months.push(obj);
    } else {
      resourcesBeyond12Months.push(obj);
    }
  });


  const data = {
    labels: ['<=1 month', '1 < month <=3', '3 < month <= 6', '6 < month <= 12', 'month > 12'],
    datasets: [
      {
        label: 'Resources',
        data: [resourcesWithin1Month.length, resourcesWithin3Months.length, resourcesWithin6Months.length, resourcesWithin12Months.length, resourcesBeyond12Months.length],
        backgroundColor: [
          'pink',
          '#17a2b8',
          '#ffc107',
          'rgb(87, 185, 96)',
          'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <>
      <div className='header'>
        
        <div className='links'>
           
        </div>
      </div>
      <Pie data={data}  />
    </>
  );
} 
 
export default PieChart;