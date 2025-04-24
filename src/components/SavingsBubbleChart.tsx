
import React from 'react';
import { BadgeDollarSign } from 'lucide-react';
import { ResponsiveContainer, ScatterChart, Scatter, ZAxis, Tooltip, Cell } from 'recharts';

interface BubbleData {
  value: number;
  label: string;
  radius: number;
  fill: string;
}

const bubbleData: BubbleData[] = [
  { value: 58505, label: "Seller's Savings", radius: 80, fill: "#4ADE80" },
  { value: 26005, label: "Buyer's Rebate", radius: 60, fill: "#2DD4BF" }
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
        <p className="text-white text-sm font-semibold">{data.label}</p>
        <p className="text-white/90 text-lg font-bold">{formatCurrency(data.value)}</p>
      </div>
    );
  }
  return null;
};

const SavingsBubbleChart = () => {
  return (
    <div className="mt-8 md:mt-16 mb-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            They Get It! Potential Savings on a $1M Property
          </h2>
          
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <ZAxis type="number" dataKey="radius" range={[0, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Scatter
                  data={bubbleData}
                  fill="#fff"
                >
                  {bubbleData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-6">
            {bubbleData.map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  style={{ backgroundColor: `${item.fill}10` }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
                    <BadgeDollarSign className="h-5 w-5" style={{ color: item.fill }} />
                    {item.label}
                  </h3>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {formatCurrency(item.value)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsBubbleChart;
