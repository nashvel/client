import { useState, useEffect } from "react";
import Breadcrumb from "../components/breadcrums";
import Header from "../layouts/header";
import Sidemenu from "../layouts/sidemenu";
import TotalSales from "../components/reports/TotalSales.tsx";
import Transactions from "../components/reports/Transactions.tsx";
import Revenue from "../components/reports/Revenue.tsx";
import WeeklySalesOverview from "../components/reports/WeeklySalesOverview.tsx";
import BestSellingItems from "../components/reports/BestSelling.tsx";
import RecentTransactions from "../components/reports/RecentTransactions";

function Dashboard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360);
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
          padding: isMobile ? "8px" : "20px",
          marginTop: "0",
          paddingTop: "0",
        }}
      >
        <div className="container-fluid">
          <Breadcrumb />

          {/* Summary Cards - Mobile Stack / Desktop Grid */}
          <div
            className="grid gap-3 mt-4"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? "12px" : "20px",
            }}
          >
            <TotalSales />
            <Transactions />
            <Revenue />
          </div>

          {/* Sales Graph */}
          <div
            style={{
              marginTop: isMobile ? "14px" : "30px",
              padding: isMobile ? "8px" : "16px",
            }}
          >
            <WeeklySalesOverview isMobile={isMobile} />
          </div>

          {/* Best-Selling Items & Recent Transactions */}
          <div
            className="grid gap-3 mt-5"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? "10px" : "20px",
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
