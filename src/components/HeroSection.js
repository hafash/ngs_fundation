import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted/>
      <h1>NGS FOUNDATION: NIYONSHUTI GREEN STRIVE FOUNDATION</h1>
      <p> We strive with trust and responsibly to Internationally vigorously excellence (STRIVE)</p>
      <div className="hero-btns">
        <Button className='btns'
         buttonStyle='btn-outline'
        buttonSize='btn--large'
        > welcome to our website
        </Button>

       <Button 
          className='btns'
         buttonStyle='btn-primary'
        buttonSize='btn--large'
        > Media< i className='far fa-play-circle'/>
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
