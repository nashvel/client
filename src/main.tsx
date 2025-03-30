import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/css/style.css";

import { SidebarProvider } from "./layouts/sidebarcontent"; // Import SidebarProvider
import Header from "./layouts/header"; // Import Header
import Sidemenu from "./layouts/sidemenu";

import Dashboard from "./pages/dashboard";
import ThemeEditor from "./pages/client/theme-editor/theme-editor";
import ChatToAdmin from "./pages/client/chat-admin/chat-admin";
import FoodMenu from "./pages/client/managemenu/FoodMenu";
import SalesReport from "./pages/client/sales/sales";
import PromoPage from "./pages/client/promo/promo";

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  // ✅ Register Service Worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("[Service Worker] Registered:", registration);
          })
          .catch((error) => {
            console.error("[Service Worker] Registration failed:", error);
          });
      });
    }

    // ✅ Listen for install prompt
    window.addEventListener("beforeinstallprompt", (e: any) => {
      e.preventDefault(); // Prevent auto-prompt
      setDeferredPrompt(e); // Store event
      setShowInstallButton(true); // Show install button
    });

    // Clean up event listener
    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, []);

  // ✅ Handle PWA Installation
  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // Show prompt

    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("[PWA] App Installed");
    } else {
      console.log("[PWA] Installation Rejected");
    }

    setDeferredPrompt(null); // Reset
    setShowInstallButton(false); // Hide button
  };

  return (
    <StrictMode>
      <BrowserRouter>
        <SidebarProvider>
          <Header />
          <Sidemenu />

          {/* ✅ Show Install Button if Available */}
          {showInstallButton && (
            <button
              onClick={handleInstall}
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px 20px",
                background: "linear-gradient(135deg, #4caf50, #81c784)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                zIndex: 1000,
              }}
            >
              Install App
            </button>
          )}

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/theme" element={<ThemeEditor />} />
            <Route path="/chat-admin" element={<ChatToAdmin />} />
            <Route path="/foodmenu" element={<FoodMenu />} />
            <Route path="/sales" element={<SalesReport />} />
            <Route path="/promo" element={<PromoPage />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
