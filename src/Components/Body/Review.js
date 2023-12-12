import React, { useState } from 'react';
import './Review.css';

 function Review() {
  const reviewsPerPage = 1; 
  const [currentPage, setCurrentPage] = useState(1); 
  const reviews = [
    {
      content: "If you are after a simple & affordable way to pull data from FB/Google Ads, you can't go past two minute reports! The product & customer support has been exceptional.",
      author: "Mark Lenno",
      position: "Head of Growth at Relevant Digital, Melbourne",
      imageUrl: "https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/mark.png&w=96&q=75"
    },
    {
      content: "I've been searching for a replacement for Supermetrics for waaaaay too long and Paul & his team solved all my problems. After having tried out virtually every data visualisation tool, I knew that Google Sheets was much more flexible and the option for me. Two Minute Reports has been a wonderful addition to my MarTech stack and anyone hesitating on buying it...............don't. I literally never give reviews, but this product is so damn good that this is the least I could do to show my support. Thank you, Paul, for building such an amazing, affordable and user-friendly product, I am a very happy customer. Sending love from Sunny Singapore.",
      author: "Yashwin Naidu",
      position: "CEO at KPI Media, Singapore",
      imageUrl: "https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/yashwin.png&w=96&q=75"
    },
    {
      content: "Super support, and a fantastic product. Has saved us thousands compared to a similar product. Have personally gotten at least 4 other marketing agency owners to invest in this tool. WELL worthwhile.",
      author: "Luke James",
      position: "Digital Marketer at Impactiv8",
      imageUrl: "https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/luke.png&w=96&q=75"
    },
    {
      content: "This is an amazing client reporting tool for web agencies and freelancers. From Google Sheets, you connect to a range of analytics (for example Google Analytics and Google Search Console) and decide how to display the graphs or charts from the raw data. Similar to Monster Insights, but you need to decide what to show on the report. The impressive thing is that I can create a custom report from my Wordpress MySQL database! We have a membership client and with Two Minute Reports I can show renewals and new membership purchases for the month. Lay it out nicely and schedule an email to the exec committee to track performance. This is alongside the analytics and SEO data.",
      author: "John Crumpton",
      position: "Digital Growth Specialist at DoubleSided, London",
      imageUrl: "https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/john.png&w=48&q=75"
    },
    {
      content: "This tool at least saves 2 hrs of my daily time. As a Growth Marketer, I need to get data from a lot of sources to analyze it. Prior to TMR, I used to do it manually and it cost me a lot of time. Once I started using TMR, I was really impressed by the simplicity & robust performance of it. If you are a data-savvy marketer, You should 100% consider this tool.",
      author: "Sai Vivek",
      position: "Growth at SkinKraft & Vedix, India",
      imageUrl: "https://d1qmiclz1yvka8.cloudfront.net/_next/image?url=/images/client/sai.png&w=48&q=75"
    }
  ];
  


  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div className="review-container"> 
    <div className="review-box-container"> 
      {currentReviews.map((review, index) => (
        <div key={index}>
          <p className="review-text">{review.content}</p>
          <div>
            <span className="avatar">
              <img
                alt={review.author}
                loading="lazy"
                width="42.5"
                height="42.5"
                decoding="async"
                data-nimg="1"
                className="icon__image undefined"
                style={{ color: 'transparent' }}
                srcSet={review.imageUrl}
              />
            </span>
            <div>
              <p style={{ fontWeight: 'bold' }}>{review.author}</p>
              <p style={{ fontWeight: 'lighter', marginTop: '2px' }}>{review.position}</p>
            </div>
          </div>
        </div>
      ))}
</div>
   
      <div className="pagination">
        {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, index) => index + 1).map((pageNumber) => (
          <div key={pageNumber} onClick={() => paginate(pageNumber)} className={pageNumber === currentPage ? 'pagination-button active' : 'pagination-button'}>
            {}
          </div>
        ))}
      </div>
    </div>
  );
  }
  
  export default Review;
  

