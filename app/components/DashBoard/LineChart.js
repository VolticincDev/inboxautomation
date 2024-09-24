import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js';

// Line Chart
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);


function LineChart() {
    const data = {
        labels: ['10am', '11am', '12am', '01am', '02am', '03am', '04am', '05am', '06am', '07am'],
        datasets: [
            {
                data: [50, 60, 45, 35, 60, 40, 55, 45, 70, 50],
                fill: true, // Shading under the line
                backgroundColor: 'rgba(75,192,192,0.2)', // Shaded area color
                borderColor: '#36a2eb', // Line color
                pointBackgroundColor: '#fff', // Point color
                pointBorderColor: '#36a2eb', // Point border color
                pointRadius: 6, // Point size
                tension: 0.4, // Smooth curves
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to fill its parent container
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20, // Sets the interval for ticks on the y-axis
                },
            },
            x: {
                grid: {
                    display: false, // Hide grid lines on the x-axis
                },
            },
        },
    };
    return (
        <div className=''>
            <Line data={data} options={options}  height={320}/>
        </div>
    )
}

export default LineChart
