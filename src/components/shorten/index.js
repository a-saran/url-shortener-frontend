import React, { useState ,useRef} from "react";
import isUrl from "is-url";
import axois from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./style.scss";

const Main = ({ imgRenderer }) => {
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);
  const clipboardText = useRef(null);

  const onSubmit = () => {
    const isvalidUrl = isUrl(value);

    if (!isvalidUrl) {
      setErrorMsg("Please enter a valid URL");
      imgRenderer("error");
    } else {
      imgRenderer("loading");
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
        console.log(data)
      })
      .catch(err=> {
        console.log(err)
        setIsFetching(false);
      })
      setTimeout(() => {
        const data = {
          _id: "5e6330b9a7c5cc001788d1fa",
          longUrl: "https://www.rafaelalucas.com/dailyui/17/",
          shortUrl: "http://localhost:5000/09PnKj7d",
          urlCode: "09PnKj7d",
          date:
            "Sat Mar 07 2020 05:27:21 GMT+0000 (Coordinated Universal Time)",
          __v: 0
        };
        imgRenderer("success");
        setData(data);
        setIsFetching(false);
      }, 1000);
    }
  };

  const handleChange = e => {
    const typedUrl = e.target.value;
    setValue(typedUrl);
  };

  return (
    <div className="url-func-container">
      <div className="container">
        <div className="url-container">
          <input
            type="text"
            className={`input ${errorMsg ? "error" : ""} ${
              data && !isFetching ? "success" : ""
            }`}
            value={value}
            placeholder="Enter a url.."
            onChange={handleChange}
          />

          <div className={`error-container ${errorMsg ? "show" : ""}`}>
            {errorMsg}
          </div>

          <div
            className={`anime-container ${data && !isFetching ? "show" : ""}`}
          >
            <div
              className={`submit-btn ${data && !isFetching ? "hide" : ""}`}
              onClick={() =>data ? null : onSubmit()}
              tabIndex='0'
              onKeyDown={e => e.keyCode === 13 ? onSubmit() : null}
            >
              <div className="text">Shorten URL</div>
            </div>

            <div className={`result-container ${data ? "show" : ""}`}>
              <div className="long-url">
                <div className="heading">Original Link</div>
                <div className="value">
                  {value.length < 100 ? value : value.slice(0, 100) + "..."}
                </div>
              </div>
              <div className="result" >
                <span ref={clipboardText}>{data && data.shortUrl}</span>
                <CopyToClipboard text={data ? data.shortUrl : ''}
                >
                 <button className="copy-btn " >
                    copy
                </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
