import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <div className="body_container">

      <div className="body_content">

        <div className="body-text">
          <div className="body-h"> <h1 style={{color:"black"}}>Save tons of time with Data Analytics & Automation.</h1> </div>
          <div className="body-p">
            <p>Cloud Software to get data from different APIs/sources and create reports in no time.</p>
          </div>
          <div className="body-list">
            <div><span>Ad Agencies</span></div>
            <div><span>Digital Marketers</span></div>
            <div><span>Startups</span></div>
            <div><span>Founders</span></div>
            <div><span>Small Businesses</span></div>
            <div><span>Developers</span></div>
          </div>
          
        </div>
        <div className="bu-img">
          <img
            alt=""
            loading="lazy"
            width="571"
            height="426"
            decoding="async"
            data-nimg="1"
            className="bu-img-fluid"
            src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/banner/Facebook%20Ads%20Template%20571x426.jpg&w=1200&q=75"
            style={{
              color: "transparent",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 12px 84px",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
    </div>
  );
}
