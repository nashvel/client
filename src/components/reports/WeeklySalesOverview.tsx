import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { day: "Mon", sales: 1200 },
  { day: "Tue", sales: 2100 },
  { day: "Wed", sales: 800 },
  { day: "Thu", sales: 1600 },
  { day: "Fri", sales: 2500 },
  { day: "Sat", sales: 1900 },
  { day: "Sun", sales: 3000 },
];

interface WeeklySalesOverviewProps {
  isMobile: boolean;
}

const WeeklySalesOverview: React.FC<WeeklySalesOverviewProps> = ({ isMobile }) => (
  <div
    className={`p-6 bg-white shadow-lg rounded-lg mt-6 
                ${isMobile ? "bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] rounded-2xl" : "shadow-md"}`}
  >
    <h2 className="text-xl font-bold mb-4 text-gray-700">Weekly Sales Overview</h2>
    <ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
      <LineChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" stroke={isMobile ? "#d1d9e6" : "#ccc"} />
        <XAxis dataKey="day" stroke="#555" />
        <YAxis stroke="#555" />
        <Tooltip contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px" }} />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} dot={{ r: 4, fill: "#8884d8" }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default WeeklySalesOverview;