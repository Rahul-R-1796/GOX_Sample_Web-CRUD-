import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="logo">
          <a href="/">
            <img
              alt="Two Minute Reports"
              loading="lazy"
              width="148"
              height="58"
              decoding="async"
              src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/GO%20X%20LOGO%202%20148.png&w=384&q=75"
            />
          </a>
        </div>

       <div class="Footer_div">
        <div class="bu-title bu-is-6 bu-has-text-white bu-mb-5">About</div>
        <ul>
          <li>
            <a href="/"> GoX.ai</a>
          </li>
          <li>
            <a > About Us</a>
          </li>
        </ul>
      </div>

      <div class="Footer_div">
        <div >Brands</div>
        <ul>
          <li>
            <a > Two Minute Reports</a>
          </li>
        </ul>
      </div>

      <div class="Footer_div">
        <div>Resources</div>
        <ul>
          <li>
            <a > Supermetrics vs Fivetran</a>
          </li>
          <li>
            <a > Supermetrics vs Funnel</a>
          </li>
          <li>
            <a > Supermetrics vs Whatagraph</a>
          </li>
          <li>
            <a > Supermetrics vs DashThis</a>
          </li>
          <li>
            <a > Supermetrics vs Portermetrics</a>
          </li>
        </ul>
      </div>

      <div class="Footer_div">
        <div >Company</div>
        <ul>
          <li>
            <a > Affiliate program</a>
          </li>
          <li>
            <a > Terms of Service</a>
          </li>
          <li>
            <a > Privacy Policy</a>
          </li>
          <li >
            <a > Data Security</a>
          </li>
          <li >
            <a> Support Ticket</a>
          </li>
        </ul>
      </div>
      </div>

      <div style={{textAlign: 'center'}} >
        <p >© 2023 Rahul R - All Rights Reserved - GoX.ai </p>
      </div>
    </footer>
  );
}
