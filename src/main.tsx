import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/style.css';

import Dashboard from './pages/dashboard';
import ThemeEditor from './pages/admin/theme-editor/theme-editor';
import GithubRepo from './pages/admin/github-repo/github-repo';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/theme-editor" element={<ThemeEditor />} />
        <Route path="/github-repo" element={<GithubRepo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
