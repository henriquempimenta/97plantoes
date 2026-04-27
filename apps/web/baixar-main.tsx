import React from 'react';
import { createRoot } from 'react-dom/client';
import DownloadRedirectPage from './components/DownloadRedirectPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DownloadRedirectPage />
  </React.StrictMode>
);
