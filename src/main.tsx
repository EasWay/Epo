/// <reference types="vite/client" />
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Security Trap: Subtle debugger calls in specific conditions
if (import.meta.env.PROD) {
  setInterval(() => {
    (function () {
      return false;
    }
    // @ts-ignore
    ["constructor"]("debugger")
    ["call"]());
  }, 5000);
}

registerSW({ immediate: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
