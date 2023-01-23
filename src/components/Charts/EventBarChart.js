import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Presentation is Good', 'Useful Product', 'Not Boring', 'Product May help me', 'Are you Buying', 'Do you want to Recomend', 'Do you want to Subscribe'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,20,12,34,12,45,67],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [10,2,4,44,22,88,1],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function EventBarChart() {
  return <Bar options={options} data={data} />;
}
