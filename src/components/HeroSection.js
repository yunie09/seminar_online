import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video1.mp4' autoPlay loop muted />
      <h1>Navigating the Digital Landscape: </h1>
      <p>A Seminar on the Impact of Technology on Teenagers</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        <a href="https://youtu.be/a6_8zBcm7xk?feature=shared"> WATCH TRAILER <i className='far fa-play-circle' /> </a>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
