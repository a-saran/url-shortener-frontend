import React from 'react';
import Url from '../shorten';

import img from '../../assets/ques.png';
import './style.scss';

const Main = () => {
  return (
    <div className='main'>
      <div className="left-container">
        <img src={img} alt="img"/>
      </div>
      <div className="right-container">
        <Url />
      </div>
    </div>
  )
}

export default Main;
