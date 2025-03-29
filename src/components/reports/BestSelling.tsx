import React from "react";

interface Item {
  name: string;
  sales: number;
}

const bestSellingItems: Item[] = [
  { name: "Kimchi", sales: 120 },
  { name: "Jjangmyeon", sales: 95 },
  { name: "Kimbap", sales: 80 },
];

const BestSellingItems: React.FC = () => (
  <div className="p-4 bg-white shadow rounded-lg">
    {/* Adjust title font size for mobile */}
    <h3 className="text-md sm:text-lg font-bold mb-3">Best-Selling Items</h3>
    <ul>
      {bestSellingItems.map((item, index) => (
        <li key={index} className="flex justify-between text-sm sm:text-base">
          <span>{item.name}</span>
          <span>{item.sales} sold</span>
        </li>
      ))}
    </ul>
  </div>
);

export default BestSellingItems;
