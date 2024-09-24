import React from 'react'
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
    labels: ['Deliverable emails', 'Undeliverable emails', 'Unknown emails', 'Risky emails'],
    datasets: [
        {
            label: 'Email categories',
            data: [46, 26, 18, 10],
            backgroundColor: ['#66E0E0', '#A065E0', '#FF8C8C', '#FF6363'],
            borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
            borderWidth: 2,
        },
    ],
};

const options = {
    scales: {
        r: {
            ticks: {
                display: false, // Hides the numbers on the axes
            },
        },
    },
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

function PlotArea() {
    return (
        <div>
            <PolarArea data={data} options={options} />
        </div>
    )
}

export default PlotArea
