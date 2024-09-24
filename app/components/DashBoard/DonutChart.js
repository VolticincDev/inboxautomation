import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering ArcElement and Tooltip
ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to write "Total 4" in the middle
const customCenterText = {
  id: 'customCenterText',
  beforeDraw: function (chart) {
    const { width, height, ctx } = chart;
    ctx.restore();
    const fontSize = (height / 160).toFixed(2); // Adjust font size relative to chart size
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000'; // Text color inside the chart

    const text = 'Total 4';
    const textX = Math.round((width - ctx.measureText(text).width) / 2); // Center the text horizontally
    const textY = height / 2; // Center the text vertically

    ctx.fillText(text, textX, textY); // Draw the text inside the doughnut
    ctx.save();
  },
};

function DonutChart() {
  const data = {
    labels: ['Part 1', 'Part 2', 'Part 3', 'Part 4'], // These labels won't show because legend is disabled
    datasets: [
      {
        data: [40, 20, 15, 25], // Values for each part
        backgroundColor: ['#08E1D2', '#AD44FF', '#FF6B6B', '#FF8C62'], // Colors for each part
        hoverBackgroundColor: ['#08E1D2', '#AD44FF', '#FF6B6B', '#FF8C62'],
        borderWidth: 0.5, // Decreased border width
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true, // Maintain aspect ratio for default size
    plugins: {
      legend: {
        display: false, // Remove labels below the chart
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
  };

  return (
    <div style={{ width: '240px', height: '240px' , margin: '0 auto' }}>
      <Doughnut data={data} options={options} plugins={[customCenterText]} />
    </div>
  );
}

export default DonutChart;
