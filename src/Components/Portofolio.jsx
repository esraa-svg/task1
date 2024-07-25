import React from 'react';
import PortfolioItem from './PortfolioItem';
import houseIcon from '../assets/images/house.png';  // Replace with your actual image paths
import bookIcon from '../assets/images/book.png';
import tentIcon from '../assets/images/tent.png';
import game from '../assets/images/game.png';
import safe from '../assets/images/safe.png';
import sunmai from '../assets/images/sunmai.png';
import './Portfolio.css';
import iconSrc from '../assets/images/iconSrc.jpeg'
export default function Portfolio(){
  const items = [
    { id: 1, image: houseIcon, title: '' ,icon:iconSrc},
    { id: 2, image: bookIcon, title: '' ,icon:iconSrc},
    { id: 3, image: tentIcon, title: '' ,icon:iconSrc},
      { id: 4, image: game, title: '',icon:iconSrc },
      { id: 5, image: safe, title: '',icon:iconSrc },
      { id: 6, image: sunmai, title: '',icon:iconSrc},
     
    
  ];


  return (
    <div className="portfolio-container">
      <h1 className='edit'>PORTFOLIO</h1>
      <div class=".portofolio1">
        <div class="line2"></div>
        <div class="star2"></div>
        <div class="line2"></div>
    </div>
      <div className="portfolio-grid">
        {items.map(item => (
          <PortfolioItem key={item.id} image={item.image} title={item.title} icon={item.icon}  />
          
        ))}
       
      </div>
    </div>
  );
};


