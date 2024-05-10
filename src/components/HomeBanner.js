import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/12.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Pahuni Choudhary</div>
              <div className="staticTitle">
                Data Scientist
          {/*      <div className='hrLine'></div>
              */} </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/pahuni-choudhary-7b1713252/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
            <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
        </div>

    </div>
  )
}
