import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"

const options = {
    responsive: true,
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true,
            },
        },
        ],
    },
};

export function LineChart({ labels, coinId, priceData }) {
    const data = {
        labels,
        datasets: [
          {
            label: `Price for ${coinId}`,
            data: priceData,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
    };
    return( 
    <div>
        <Line data={data} options={options} />
    </div>
    );
       
}




