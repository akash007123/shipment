'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Exception', 'Intransit', 'Pending', 'Delivered', 'Out for delivery'],
  datasets: [
    {
      data: [40, 80, 120, 100, 54],
      backgroundColor: [
        '#4B3C2F',
        '#6E5A3F',
        '#F0B775',
        '#F9DEB8',
        '#FCF0DE',
      ],
      borderColor: [
        '#4B3C2F',
        '#6E5A3F',
        '#F0B775',
        '#F9DEB8',
        '#FCF0DE',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          return `${context.label}: ${context.raw}`;
        }
      }
    }
  },
};

export default function ShipmentUpdatesChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Shipment Updates</h3>
      <div className="flex justify-between mb-4">
        <span>Total Orders: 394</span>
        <button className="text-gray-600 hover:text-gray-800">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      <div className="w-full h-64">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#4B3C2F] mr-2"></span>
          <span>Exception</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#6E5A3F] mr-2"></span>
          <span>Intransit</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#F0B775] mr-2"></span>
          <span>Pending</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#F9DEB8] mr-2"></span>
          <span>Delivered</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-[#FCF0DE] mr-2"></span>
          <span>Out for delivery</span>
        </div>
      </div>
    </div>
  );
}