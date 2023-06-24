import React from 'react';
import './style.css';
import { Lights } from './Lights';
import { Climate } from './Climate';

export const Dashboard = ({ data }) => {
  const { lights, climate } = data;
  const { temperature, humidity } = climate;

  return (
    <main className="dashboard">
      <Lights lights={lights} />
      <Climate temperature={temperature} humidity={humidity} />
    </main>
  );
};
