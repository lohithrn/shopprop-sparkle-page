import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Cell, Label } from 'recharts';

interface DataPoint {
  x: number;
  y: number;
  z: number;
  name: string;
  value: number;
  savings: number;
}

// Define a more specific ViewBox interface that includes x and y
interface CustomViewBox {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const generateRandomSavings = () => Math.floor(Math.random() * (43000 - 10000) + 10000);

const data: DataPoint[] = [
  { x: 100, y: 800, z: 2000, name: "Travel", value: 33112, savings: generateRandomSavings() },
  { x: 700, y: 200, z: 1600, name: "Dining", value: 5424, savings: generateRandomSavings() },
  { x: 400, y: 500, z: 1200, name: "Groceries", value: 1200, savings: generateRandomSavings() },
  { x: 200, y: 300, z: 800, name: "Subscriptions", value: 650, savings: generateRandomSavings() },
  { x: 600, y: 700, z: 800, name: "Entertainment", value: 550, savings: generateRandomSavings() },
  { x: 300, y: 100, z: 600, name: "Bills", value: 250, savings: generateRandomSavings() },
  { x: 500, y: 900, z: 600, name: "Subscriptions", value: 150, savings: generateRandomSavings() },
];

const SavingsBubbleChart = () => {
  const COLORS = ['#1A659E', '#1A659E', '#1A659E', '#1A659E', '#1A659E', '#1A659E', '#1A659E'];

  return (
    <ScatterChart
      width={800}
      height={1000}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <XAxis type="number" dataKey="x" hide domain={[0, 800]} />
      <YAxis type="number" dataKey="y" hide domain={[0, 1000]} />
      <ZAxis type="number" dataKey="z" range={[6000, 60000]} />
      <Scatter data={data} fill="#1A659E">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]}>
            <text
              x={entry.x}
              y={entry.y}
              textAnchor="middle"
              fill="#FFFFFF"
              fontWeight="bold"
              fontSize="14"
            >
              ${entry.savings.toLocaleString()}
            </text>
            <text
              x={entry.x}
              y={entry.y + 20}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="12"
            >
              savings
            </text>
          </Cell>
        ))}
      </Scatter>
    </ScatterChart>
  );
};

export default SavingsBubbleChart;
