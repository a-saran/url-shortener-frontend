import React, { useState } from 'react';
import isUrl from 'is-url';
import axois from 'axios';

import './style.scss';

const Main = ({imgRenderer}) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = () => {
    const isvalidUrl = isUrl(value);
    setValid(isvalidUrl);

    if(!isvalidUrl) {
      setErrorMsg('please enter a valid url')
      imgRenderer('error')
    } else {
      imgRenderer('loading')
      setErrorMsg(null);
      setIsFetching(true);
      const url=`${process.env.REACT_APP_BASE_API_URL}/api/url/shorten`;
      axois.post(url, {
        longUrl: value
      }, {
        "Content-Type":"application/json"
      })
      .then(({data}) => {
        imgRenderer('success')
        setData(data)
        setIsFetching(false);
      })
      .catch(err=> {
        console.log(err)
        setIsFetching(false);
      })
    }
  }

  const handleChange = (e) => {
    const typedUrl = e.target.value
    setValue(typedUrl);
  }

  const copyText = () => {
    const {shortUrl} = data;
    shortUrl.select();
  
    document.execCommand("copy");
  }

  return (
    <div className="url-func-container">
      <div className="container">

        <div className="url-container">
          <input type="text" className={`input ${errorMsg ? 'error': ''} ${data && !isFetching ? 'success' : ''}`} value={value} placeholder="Enter a url.." onChange={handleChange}/>

          <div className={`error-container ${errorMsg ? 'show' : ''}`}>
            {errorMsg}
          </div>

          <div className={`submit-btn ${data && !isFetching ? 'hide' : ''}`} onClick={onSubmit}>
            <span className='text'>Shorten URL</span>
          </div>
        </div>

        <div className={`result-container ${data && !isFetching ? 'show' : ''}`}>
          <div className="long-url">
            <div className="heading">
              Original Link
            </div>
            <div className="value">
              {value.length < 100 ? value : value.slice(0, 100)+ '...'}
            </div>
          </div>
          <div className="result">
            {data && data.shortUrl}
            <button className='copy-btn' onClick={copyText}>copy</button>
          </div>
        </div>


        {/* {data && (
        <div className="result-container">
          <div className="long-url">
            <div className="heading">
              Original Link
            </div>
            <div className="value">
              {value}
            </div>
          </div>
          <div className="result">
            {data && data.shortUrl}
            <button className='copy-btn' onClick={copyText}>copy</button>
          </div>
        </div>)
        } */}
      </div>

    </div>
  )
  
}

export default Main;
