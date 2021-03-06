import React, {useState} from 'react';

import Url from '../shorten';

import defaultImg from '../../assets/ques.png';
import errorImg from '../../assets/error.png';
import loadingImg from '../../assets/loading.png';
import successImg from '../../assets/success.png';
import './style.scss';

const Main = () => {
  const [img, setImg] = useState(defaultImg)

  const imgToRender = (type) => {
    console.log(type)
    switch (type) {
      case 'loading':
        setImg(loadingImg)
        break;
      case 'error':
        setImg(errorImg)
        break;
      case 'success':
        setImg(successImg)
        break;
      default:
        setImg(defaultImg)
        break;
    }
  }

  return (
    <div className='main'>
      <div className="left-container">
        <img src={img} alt="img" className='img-main'/>
      </div>
      <div className="right-container">
        <div className="title">
          <h1>Paste the URL to be shortened</h1>
          <p>Build and protect your brand using powerful, recognizable short links.</p>
          <p className='text-blue'>Sometimes it's better to be small</p>
        </div>
        <Url imgRenderer={imgToRender}/>
      </div>
    </div>
  )
}

export default Main;
