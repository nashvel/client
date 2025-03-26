import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Breadcrumb from "../components/breadcrums";
import Header from "../layouts/header";
import Sidemenu from "../layouts/sidemenu";

const salesData = [
  { day: "Mon", sales: 1200 },
  { day: "Tue", sales: 2100 },
  { day: "Wed", sales: 800 },
  { day: "Thu", sales: 1600 },
  { day: "Fri", sales: 2500 },
  { day: "Sat", sales: 1900 },
  { day: "Sun", sales: 3000 },
];

const bestSellingItems = [
  { name: "Kimchi", sales: 120 },
  { name: "Jjangmyeon", sales: 95 },
  { name: "Kimbap", sales: 80 },
];

const recentTransactions = [
  { id: "#001", item: "Beef Bulgogi", amount: "₱699" },
  { id: "#002", item: "Kimbap", amount: "₱899" },
  { id: "#003", item: "Kimchi", amount: "₱199" },
];

function Dashboard() {
  return (
    <>
      <Header />
      <Sidemenu />
      <div
        className="main-content app-content"
        style={{
          background: 'linear-gradient(135deg, #f8e1e7, #ffffff, #f8e1e7, #d9e7ff, #fff7db)',
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div className="container-fluid">
          <Breadcrumb />

          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-bold">Total Sales</h3>
              <p className="text-2xl font-semibold">₱12,500</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-bold">Transactions</h3>
              <p className="text-2xl font-semibold">320</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-bold">Revenue</h3>
              <p className="text-2xl font-semibold">₱18,200</p>
            </div>
          </div>

          {/* Sales Graph */}
          <div className="box p-6 bg-white shadow rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">Weekly Sales Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Best-Selling Items */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-bold mb-3">Best-Selling Items</h3>
              <ul>
                {bestSellingItems.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.sales} sold</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Transactions */}
            <div className="p-4 bg-white shadow rounded-lg">
              <h3 className="text-lg font-bold mb-3">Recent Transactions</h3>
              <ul>
                {recentTransactions.map((tx, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{tx.id}</span>
                    <span>{tx.item}</span>
                    <span>{tx.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
