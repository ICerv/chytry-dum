import React, { useState } from 'react';
import './style.css';
import lightOnImg from './img/light-on.svg';
import lightOffImg from './img/light-off.svg';

export const Light = ({ name, state }) => {
  const [lightState, setLightState] = useState(state);

  const toggleLight = () => {
    setLightState(lightState === 'on' ? 'off' : 'on');
  };

  return (
    <div className="light" onClick={toggleLight}>
      <div className="light__icon">
        <img src={lightState === 'on' ? lightOnImg : lightOffImg} alt="Light" />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};
