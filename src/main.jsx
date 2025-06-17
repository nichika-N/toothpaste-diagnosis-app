import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ← 変更ここだけ！
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* ← これでOK */}
      <App />
    </HashRouter>
  </StrictMode>
);
