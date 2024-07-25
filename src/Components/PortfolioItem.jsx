import React from 'react';
import './PortfolioItem.css';
;

function PortfolioItem ({ image, title,icon }) {
  return (
    <div className="item-container">
      <img src={image} alt={title} className="item-image"  />
      <div className="overlay">
        <img src={icon} alt="icon" className="icon" />
      </div>
      <h3 className="item-title">{title}</h3>
    </div>
  );
};

export default PortfolioItem;