import { useEffect, useRef, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, Label } from 'recharts';

function PieChartI() {
  const [isChartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the chart comes into view, set isChartVisible to true
        if (entry.isIntersecting) {
          setChartVisible(true);
          observer.unobserve(entry.target); // Stop observing once the chart is visible
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Start observing the chart element
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    // Clean up the observer
    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const data = [
    {
      name: 'China',
      value: 38.4,
      color: '#FF9999',
    },
    {
      name: 'Belgium',
      value: 14.3,
      color: '#66B2FF',
    },
    {
      name: 'India',
      value: 10.0,
      color: '#99FF99',
    },
    {
      name: 'Netherlands',
      value: 9.7,
      color: '#FFCC99',
    },
    {
      name: 'United States',
      value: 7.9,
      color: '#FFD700',
    },
    {
      name: 'Norway',
      value: 5.7,
      color: '#FF69B4',
    },
    {
      name: 'Others',
      value: 14.0,
      color: '#FF6347',
    },
  ];

  return (
    <div ref={chartRef}>
      {isChartVisible && (
        <PieChart width={800} height={450}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend align="left" layout="vertical" verticalAlign="middle" />

          <Tooltip />
        </PieChart>
      )}
    </div>
  );
}

export default PieChartI;
