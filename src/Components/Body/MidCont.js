import React from 'react';
import './MidCont.css';

export default function MidComponent() {
  return (
    <div className='Mid-Body'>
      <div className='Body-mid'>
        <div className='body-cnt'>
          <div className='body-content'>
            <div className='content-row'>
              <div className='content-row-box'>
                <h1>Connect</h1>
                <p>Authenticate & connect to your external APIs/sources.</p>
              </div>
              <div className='content-row-box'>
                <h1>Create Reports</h1>
                <p>Convert data into "Ad Performance", "SEO", "Social Media" reports with beautiful Charts and Graphs</p>
              </div>
              <div className='content-row-box'>
                <h1>Automate</h1>
                <p>Duplicate existing reports, setup scheduling rules and run your reports on Auto-Pilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='body-text'>
        <h1 className='hh1'>Bring your data together</h1>
        <p className='pp1'>Consolidate your Marketing/Product data from different sources into a Report or Dashboard in minutes. Eliminate hours of manual work</p>
      </div>
    </div>
  );
}
