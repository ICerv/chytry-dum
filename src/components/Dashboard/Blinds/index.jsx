import React, { useState } from 'react';
import './style.css';
import blindsOpenImg from './img/blinds-open.svg';
import blindsClosedImg from './img/blinds-closed.svg';

export const Blinds = ({ state }) => {
  const [blindsState, setBlindsState] = useState(state);

  const openBlinds = () => {
    setBlindsState('open');
  };
  const closeBlinds = () => {
    setBlindsState('closed');
  };

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img
          src={blindsState === 'open' ? blindsOpenImg : blindsClosedImg}
          alt="Blinds"
        />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={`button ${blindsState === 'open' ? 'button--active' : ''}`}
          onClick={openBlinds}
        >
          Otevřeno
        </button>
        <button
          className={`button ${
            blindsState === 'closed' ? 'button--active' : ''
          }`}
          onClick={closeBlinds}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};
