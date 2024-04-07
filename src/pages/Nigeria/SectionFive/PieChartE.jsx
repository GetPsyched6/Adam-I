import { useEffect, useRef, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, Label } from 'recharts';

function PieChartE() {
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
      name: 'India',
      value: 21.49,
      color: '#FF6347',
    },
    {
      name: 'Spain',
      value: 19.4,
      color: '#7FFF00',
    },
    {
      name: 'France',
      value: 11.93,
      color: '#FFD700',
    },
    {
      name: 'Netherlands',
      value: 10.46,
      color: '#FF69B4',
    },
    {
      name: 'Indonesia',
      value: 7.08,
      color: '#87CEFA',
    },
    {
      name: 'Namibia',
      value: 6.52,
      color: '#FFA07A',
    },
    {
      name: 'South Africa',
      value: 6.19,
      color: '#FFFF66',
    },
    {
      name: 'China',
      value: 5.99,
      color: '#DDA0DD',
    },
    {
      name: 'United States',
      value: 5.51,
      color: '#FFA07A',
    },
    {
      name: 'Canada',
      value: 5.43,
      color: '#00FFFF',
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

export default PieChartE;
