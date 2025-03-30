import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import './assets/css/style.css';

import { SidebarProvider } from './layouts/sidebarcontent'; // Import SidebarProvider
import Header from './layouts/header'; // Import Header
import Sidemenu from './layouts/sidemenu'; 

import Dashboard from './pages/dashboard';
import ThemeEditor from './pages/client/theme-editor/theme-editor';
import ChatToAdmin from './pages/client/chat-admin/chat-admin';
import FoodMenu from './pages/client/managemenu/FoodMenu';
import SalesReport from './pages/client/sales/sales';
import PromoPage from './pages/client/promo/promo';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider> {/* Wrap everything inside SidebarProvider */}
        <Header />
        <Sidemenu />
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