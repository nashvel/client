import { useState, useEffect } from "react";
import Breadcrumb from "../components/breadcrums";
import Header from "../layouts/header";
import Sidemenu from "../layouts/sidemenu";
import TotalSales from "../components/reports/TotalSales";
import Transactions from "../components/reports/Transactions";
import Revenue from "../components/reports/Revenue";
import WeeklySalesOverview from "../components/reports/WeeklySalesOverview"; // Fixed import
import BestSellingItems from "../components/reports/BestSelling";
import RecentTransactions from "../components/reports/RecentTransactions";

function Dashboard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <Sidemenu />
      <div
        className="main-content app-content"
        style={{
          background: "linear-gradient(135deg, #f8e1e7, #ffffff, #f8e1e7, #d9e7ff, #fff7db)",
          minHeight: "100vh",
          padding: isMobile ? "10px" : "30px",
          marginTop: "0",  
          paddingTop: "0",
        }}
      >
        <div className="container-fluid">
          <Breadcrumb />

          {/* Summary Cards */}
          <div
            className="grid gap-4 mt-4"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            }}
          >
            <TotalSales />
            <Transactions />
            <Revenue />
          </div>

          {/* Sales Graph */}
          <WeeklySalesOverview /> {/* Removed isMobile prop */}

          {/* Best-Selling Items & Recent Transactions */}
          <div
            className="grid gap-4 mt-6"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            }}
          >
            <BestSellingItems />
            <RecentTransactions />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
