import React, { useState, useEffect } from "react";

const Transactions: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        padding: isMobile ? "20px" : "16px",
        background: isMobile
          ? "rgba(255, 255, 255, 0.15)" // Soft glass effect
          : "white",
        backdropFilter: isMobile ? "blur(20px)" : "none",
        WebkitBackdropFilter: isMobile ? "blur(20px)" : "none",
        borderRadius: isMobile ? "18px" : "8px",
        boxShadow: isMobile
          ? "0 10px 30px rgba(0, 0, 0, 0.2)" // Stronger shadow for depth
          : "0 2px 4px rgba(0, 0, 0, 0.1)",
        border: isMobile ? "1px solid rgba(255, 255, 255, 0.25)" : "none",
        color: isMobile ? "rgba(255, 255, 255, 0.95)" : "black",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h3
        style={{
          fontSize: isMobile ? "0.9rem" : "1.125rem",
          fontWeight: isMobile ? 600 : "bold",
          textTransform: isMobile ? "uppercase" : "none",
          letterSpacing: isMobile ? "1px" : "normal",
        }}
      >
        Transactions
      </h3>
      <p
        style={{
          fontSize: isMobile ? "1.6rem" : "2rem",
          fontWeight: isMobile ? 800 : 600,
          marginTop: isMobile ? "6px" : "0px",
          textShadow: isMobile
            ? "0px 3px 10px rgba(0, 0, 0, 0.3)" // Ensures visibility
            : "none",
          opacity: 1, // Prevents fading issues
        }}
      >
        320
      </p>
    </div>
  );
};

export default Transactions;
