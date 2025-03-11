import { useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrums";
import { Link } from "react-router-dom";
import Header from "../layouts/header";
import Sidemenu from "../layouts/sidemenu";
import catGif from "../assets/cat.gif"; // Transparent background cat image
import carGif from "../assets/car.gif"; // Transparent background car gif

function Dashboard() {
  // Admin Stats
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBusinesses: 0,
    systemLoad: "Normal",
  });

  // Recent Activity Logs
  const [activityLogs, setActivityLogs] = useState<string[]>([]);

  useEffect(() => {
    // Simulated API Call for Stats
    setStats({
      totalUsers: 1200,
      totalBusinesses: 2,
      systemLoad: "Optimal",
    });

    // Simulated Activity Logs
    setActivityLogs([
      "User 'john_doe' logged in",
      "New business 'Pizza World' registered",
      "Admin updated theme settings",
      "Server backup completed successfully",
    ]);
  }, []);

  return (
    <>
      <Header />
      <Sidemenu />
      <div
        className="main-content app-content"
        style={{
          background: "linear-gradient(135deg, #ffffff, #e3f2fd, #d1c4e9)",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div className="container-fluid">
          <Breadcrumb />

          {/* Overview Stats */}
          <div className="grid grid-cols-3 gap-4 relative">
            {/* Total Users Box with Cat Above */}
            <div className="relative">
              <div className="box p-4 bg-white shadow rounded-lg text-center relative z-10">
                <h3 className="text-lg font-semibold">Total Users</h3>
                <p className="text-2xl font-bold">{stats.totalUsers}</p>
              </div>
{/* 🐱 Cat Standing on Top */}
<img
  src={catGif} // Use the transparent GIF
  alt="Cat"
  className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-60 h-auto z-20"
/>

            </div>

            {/* Total Businesses */}
            <div className="box p-4 bg-white shadow rounded-lg text-center">
              <h3 className="text-lg font-semibold">Total Businesses</h3>
              <p className="text-2xl font-bold">{stats.totalBusinesses}</p>
            </div>

            {/* System Load Box with Car Above */}
            <div className="relative box p-4 bg-white shadow rounded-lg text-center">
            <img
  src={carGif}
  alt="Car"
  style={{ position: "absolute", top: "-70px", left: "50%", transform: "translateX(-50%)" }}
  className="w-24 h-auto z-20"
/>

  <h3 className="text-lg font-semibold">System Load</h3>
  <p className="text-2xl font-bold text-green-600">{stats.systemLoad}</p>
</div>

          </div>

          {/* Recent Activity Logs */}
          <div className="box mt-6 p-5 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul className="list-disc pl-5">
              {activityLogs.map((log, index) => (
                <li key={index} className="text-gray-700">{log}</li>
              ))}
            </ul>
          </div>

          {/* System Management & Customization */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Manage Theme */}
            <div className="box p-5 bg-white shadow rounded-lg">
  <h2 className="text-xl font-bold mb-3">Manage Theme</h2>
  <p className="text-gray-600">Customize the dashboard's appearance.</p>
  <Link to="/theme-editor">
    <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      Open Theme Settings
    </button>
  </Link>
</div>

            {/* Developer Tools */}
            <div className="box p-5 bg-white shadow rounded-lg">
              <h2 className="text-xl font-bold mb-3">Developer Tools</h2>
              <p className="text-gray-600">Monitor API status, error logs, and database health.</p>
              <button className="mt-3 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                Open Dev Tools
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
