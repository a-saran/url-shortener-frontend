import React from 'react';
import logo from '../../assets/S-icon.png';
import Globe from '../../assets/globe-icon.svg';

export default () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo"/>
      <p>Url-shortener</p>
      <a href="http://saran.ga/" rel="noopener noreferrer" target='_blank'>
        <img src={Globe} alt="globe"/>Portfolio
      </a>
    </div>
  )
}
