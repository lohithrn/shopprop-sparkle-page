
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell } from 'recharts';

interface DataPoint {
  x: number;
  y: number;
  z: number;
  name: string;
  value: number;
}

const data: DataPoint[] = [
  { x: 100, y: 200, z: 2000, name: "Travel", value: 33112 },
  { x: 120, y: 100, z: 1600, name: "Dining", value: 5424 },
  { x: 170, y: 300, z: 1200, name: "Groceries", value: 1200 },
  { x: 140, y: 250, z: 800, name: "Subscriptions", value: 650 },
  { x: 150, y: 400, z: 800, name: "Entertainment", value: 550 },
  { x: 110, y: 280, z: 600, name: "Bills", value: 250 },
  { x: 130, y: 150, z: 600, name: "Subscriptions", value: 150 },
];

const SavingsBubbleChart = () => {
  const COLORS = ['#F2FCE2', '#F2FCE2', '#F2FCE2', '#333333', '#F2FCE2', '#F2FCE2', '#F2FCE2'];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-bold">${data.value.toLocaleString()}</p>
          <p className="text-gray-600">{data.name}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ScatterChart
      width={800}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <XAxis type="number" dataKey="x" hide domain={[0, 200]} />
      <YAxis type="number" dataKey="y" hide domain={[0, 500]} />
      <ZAxis type="number" dataKey="z" range={[100, 1000]} />
      <Tooltip content={<CustomTooltip />} />
      <Scatter data={data} fill="#F2FCE2">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Scatter>
    </ScatterChart>
  );
};

export default SavingsBubbleChart;
