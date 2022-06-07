import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          datasets: [
            {
              label: 'hehe',
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
            {
              label: 'hehe',
              data: [55, 40, 65, 59, 80, 81, 56, 65, 59, 80, 81, 56],
              fill: false,
              borderColor: 'rgb(153, 102, 255)',
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
};

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          datasets: [
            {
              label: 'hehe',
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export { BarChart, LineChart, DoughnutChart };
