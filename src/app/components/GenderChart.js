// app/components/GenderChart.js
"use client";
import "./gender.css";

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


export default function GenderChart({ data }) {
  const chartData = data.genderSummary.map(item => ({
    name: item._id,
    value: item.count
  }));
  
  const COLORS = ['#0088FE', '#FF6384'];
    
  return (
    <div className="container">
      <h3 className="title">Gender Distribution</h3>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={100} fill="#8884d8" label>
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
