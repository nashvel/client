import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";


import './assets/css/style.css';

import Dashboard from './pages/dashboard';
import ThemeEditor from './pages/admin/theme-editor/theme-editor';
import GithubRepo from './pages/admin/github-repo/github-repo';
import ChatToClients from './pages/admin/chat-clients/chat-clients';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/theme-editor" element={<ThemeEditor />} />
        <Route path="/github-repo" element={<GithubRepo />} />
        <Route path="/chat-clients" element={<ChatToClients />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
