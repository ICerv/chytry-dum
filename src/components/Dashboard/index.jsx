import React from 'react';
import './style.css';
import { Lights } from './Lights';

export const Dashboard = ({ data }) => {
  const { lights } = data;

  return (
    <main className="dashboard">
      <Lights lights={lights} />
    </main>
  );
};
