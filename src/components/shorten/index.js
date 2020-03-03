import React, { useState } from 'react';
import isUrl from 'is-url';
import axois from 'axios';

import './style.scss';

const Main = () => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = () => {
    if(!valid) {
      setErrorMsg('please enter a valid url')
    } else {
      setIsFetching(true);
      const url=`${process.env.REACT_APP_BASE_API_URL}/api/url/shorten`;
      axois.post(url, {
        longUrl: value
      }, {
        "Content-Type":"application/json"
      }).then(({data}) => setData(data))
      .catch(err=> console.log(err))
    }
  }

  const handleChange = (e) => {
    const typedUrl = e.target.value
    const isvalidUrl = isUrl(typedUrl);
    setValue(typedUrl);
    setValid(isvalidUrl);
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
          <input type="text" className="input" value={value} placeholder="Enter a url.." onChange={handleChange}/>
          <button className='submit-btn' onClick={onSubmit}>Shorten URL</button>
        </div>
        <br/>
        {data && (<div className="result-container">
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
        </div>)}
      </div>

    </div>
  )
  
}

export default Main;
