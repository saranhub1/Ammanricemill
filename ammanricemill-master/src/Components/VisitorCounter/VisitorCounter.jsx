import React, { useState, useEffect } from 'react';
import './VisitorCounter.css'; // Import your CSS file for styling

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(() => {
    // Get the visitor count from localStorage or default to 0
    const currentCount = localStorage.getItem('visitorCount');
    return currentCount ? parseInt(currentCount, 10) : 0;
  });

  useEffect(() => {
    // Increment the visitor count when the component mounts
    const incrementVisitorCount = () => {
      setVisitorCount(prevCount => prevCount + 1); // Increment the count by 1
      localStorage.setItem('visitorCount', visitorCount + 1); // Update localStorage
    };

    incrementVisitorCount();
  }, []); // Run this effect only once, on component mount

  return (
    <div className="visitor-counter">
      <h2 className="heading">Thank you for visiting us!</h2>
      <div className="count-container">
        <h3 className="heading">Total Visitors:</h3>
        <span className="count">{visitorCount}</span>
      </div>
      <p className="heading">Explore our wide range of products and services.</p>
      {/* Add any additional content or styling here */}
    </div>
  );
};

export default VisitorCounter;
