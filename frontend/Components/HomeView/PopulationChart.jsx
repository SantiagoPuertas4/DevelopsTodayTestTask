import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PopulationChart = ({ populationData }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (populationData) {
      const years = populationData.map(item => item.year);
      const population = populationData.map(item => item.value);

      setChartData({
        labels: years,
        datasets: [
          {
            label: 'Population over Time',
            data: population,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
          },
        ],
      });
    }
  }, [populationData]);

  return (
    <div className="chart-container">
      {chartData ? (
        <Line data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Population Over Time' } } }} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

PopulationChart.propTypes = {
  populationData: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default PopulationChart;