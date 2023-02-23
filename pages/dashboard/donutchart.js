import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Donutchart(props) {

    const data = {
        labels: ['Business', 'Testing', 'Development'],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }],
      };
    
      const options = {
        cutoutPercentage: 70,
        responsive: true,
        maintainAspectRatio: false,
        
      };
  return (
    <div style={{ width: '500px', height: '400px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
