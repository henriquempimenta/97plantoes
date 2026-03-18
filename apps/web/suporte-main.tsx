import React from 'react';
import { createRoot } from 'react-dom/client';
import SupportPage from './components/SupportPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SupportPage />
  </React.StrictMode>
);
