import React from 'react';
import './style.css';
import { Lights } from './Lights';
import { Climate } from './Climate';
import { Blinds } from './Blinds';
import { Energy } from './Energy';

export const Dashboard = ({ data }) => {
  const { lights, climate, energyConsumption } = data;
  const { temperature, humidity } = climate;
  const { electricity, water } = energyConsumption;

  return (
    <main className="dashboard">
      <Lights lights={lights} />
      <Climate temperature={temperature} humidity={humidity} />
      <Blinds state={data.blinds} />
      <Energy electricity={electricity} water={water} />
    </main>
  );
};
