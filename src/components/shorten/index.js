import React, { useState } from "react";
import isUrl from "is-url";
import axois from "axios";

import "./style.scss";

const Main = ({ imgRenderer }) => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = () => {
    const isvalidUrl = isUrl(value);
    setValid(isvalidUrl);

    if (!isvalidUrl) {
      setErrorMsg("please enter a valid url");
      imgRenderer("error");
    } else {
      imgRenderer("loading");
      setErrorMsg(null);
      setIsFetching(true);
      // const url=`${process.env.REACT_APP_BASE_API_URL}/api/url/shorten`;
      // axois.post(url, {
      //   longUrl: value
      // }, {
      //   "Content-Type":"application/json"
      // })
      // .then(({data}) => {
      //   imgRenderer('success')
      //   setData(data)
      //   setIsFetching(false);
      //   console.log(data)
      // })
      // .catch(err=> {
      //   console.log(err)
      //   setIsFetching(false);
      // })
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

  const copyText = () => {
    const { shortUrl } = data;
    shortUrl.select();

    document.execCommand("copy");
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
              onClick={onSubmit}
            >
              <p className="text">Shorten URL</p>
            </div>

            <div className={`result-container ${data ? "show" : ""}`}>
              <div className="long-url">
                <div className="heading">Original Link</div>
                <div className="value">
                  {value.length < 100 ? value : value.slice(0, 100) + "..."}
                </div>
              </div>
              <div className="result">
                {data && data.shortUrl}
                <button className="copy-btn" onClick={copyText}>
                  copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
