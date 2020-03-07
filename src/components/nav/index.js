import React from 'react';
import logo from '../../assets/S-icon.png';
import Globe from '../../assets/globe-icon.svg';

export default function index() {
  return (
    <div className="nav">
      <img src={logo} alt="logo"/>
      <p>Url-shortener</p>
      <a a href="#">
        <img src={Globe} alt="globe"/>Portfolio
      </a>
    </div>
  )
}
