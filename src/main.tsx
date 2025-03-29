import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";


import './assets/css/style.css';

import Dashboard from './pages/dashboard';
import ThemeEditor from './pages/client/theme-editor/theme-editor';
import ChatToAdmin from './pages/client/chat-admin/chat-admin';
import ManageBusinesses from './pages/client/businesses/businesses';
import SalesReport from './pages/client/sales/sales';
import PromoPage from './pages/client/promo/promo';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/theme" element={<ThemeEditor />} />
        <Route path="/chat-admin" element={<ChatToAdmin />} />
        <Route path="/manage-food" element={<ManageBusinesses />} />
        <Route path="/sales" element={<SalesReport />} />
        <Route path="/promo" element={<PromoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
