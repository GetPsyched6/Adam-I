import { useEffect, useRef, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, Label } from 'recharts';

export default function PieChartX() {
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
      name: 'Agriculture',
      value: 31.9,
      color: '#FE6347',
    },
    {
      name: 'Industry',
      value: 23.7,
      color: '#87CEEA',
    },
    {
      name: 'Services',
      value: 44.4,
      color: '#006401',
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
