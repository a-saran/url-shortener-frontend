import React from 'react';
import foot from './../../assets/foot.jpg';
import heart from './../../assets/heart.svg';

import globe from './../../assets/www.svg';
import linkedin from './../../assets/linkedin.svg';
import mail from './../../assets/mail.svg';

export default () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="col-1">
          &copy; No  copyright issues.
          Feel free to copy. If you need any help, ping me !
        </div>
        <div className="col-2">
          Made with JS and
          <img src={heart} alt="" width='25px' className='heart-img'/>
          by Saran in India
        </div>
        <div className="col-3">

          <a href="http://saran.ga/" rel="noopener noreferrer" target='_blank'>
            <img src={globe} alt="" width='25px'/>
          </a>
          <a href="https://www.linkedin.com/in/saran-a/" rel="noopener noreferrer" target='_blank'>
            <img src={linkedin} alt="" width='25px'/>
          </a>
          <a href="mailto:asaran234@gmail.com" rel="noopener noreferrer" target='_blank'>
            <img src={mail} alt="" width='25px'/>
          </a>

        </div>

      </div>
      <img src={foot} alt="" className='foot-img'/>
    </div>
  )
}
