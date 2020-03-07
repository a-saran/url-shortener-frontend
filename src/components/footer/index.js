import React from 'react';
import foot from './../../assets/foot.jpg';
import heart from './../../assets/heart.svg';

export default function index() {
  return (
    <div className="footer">
      <div className="info">
        <div className="one">
          No  copyright issues.
          Feel free to copy. If you need any help, ping me !
        </div>
        <div className="two">
          Made with JS and
          <img src={heart} alt="" width='25px'/>
           in India
        </div>
        <div className="three">
          Contact: <br/>

        </div>

      </div>
      <img src={foot} alt="" className='foot-img'/>
    </div>
  )
}
