import React from 'react';
import './Logos.css';

export default function Logos() {
  return (
    <div className="body-logo-container">

      <h4 className='bu-heading'>Trusted by 4000+ Brands and Agencies</h4>

      <div className="brands-wrapper">
      
          <div className="brands_image">
            <img className='logo-img'
                alt="Zynga"
                src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/zynga.png&amp;w=1920&amp;q=75"
                />
          </div>


  
          <div className="brands_image">
          <img className='logo-img'
              alt="Cossette"

             src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/cossette.png&amp;w=1920&amp;q=75"
             
            />
          </div>

          <div className="brands_image">
          <img className='logo-img'

              alt="Yelp" src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/yelp.png&w=1920&q=75"
            />
          </div>

          <div className="brands_image">
          <img className='logo-img'
                alt="Lupage"
                src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/lupage.png&w=1920&q=75"/>
          </div>
          
          <div className="brands_image">
          <img className='logo-img'
                alt="KPI"
                src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/kpimedia.png&w=1920&q=75"
             />
          </div>
          <div className="brands_image">
          <img className='logo-img'
            alt="G2"
          src="https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/g2.png&w=1920&q=75"
          />
          </div>


         

      </div>
    </div>
  );
}
