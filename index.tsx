import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './A1';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
