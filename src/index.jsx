import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import { Header } from './components/Header';

const App = () => (
  <div className="container">
    <Header title="Chytrý dům" />
  </div>
);

createRoot(document.querySelector('#app')).render(<App />);
