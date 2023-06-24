import React, { useState } from 'react';
import './style.css';
import temperatureImg from './img/temp.svg';

export const Climate = ({ temperature, humidity }) => {
  const [currentTemperature, setCurrentTemperature] = useState(temperature);

  const increaseTemperature = () => {
    setCurrentTemperature(currentTemperature + 1);
  };
  const decreaseTemperature = () => {
    setCurrentTemperature(currentTemperature - 1);
  };

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temperatureImg} alt="Temperature" />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{currentTemperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button className="button" onClick={increaseTemperature}>
          +
        </button>
        <button className="button" onClick={decreaseTemperature}>
          -
        </button>
      </div>
    </div>
  );
};
