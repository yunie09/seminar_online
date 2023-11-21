import React from 'react';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Videos</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/a6_8zBcm7xk?si=NBCyIt16ueCJk7Cq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/1-U6QTRTZSc?si=ssbnJCc_i7LyaTdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </ul>
          <ul className='cards__items'>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/hqltE67XN-g?si=FXmEebjFjz6j2Cby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className='vid' width="560" height="315" src="https://www.youtube.com/embed/j1Fj88B46F8?si=C0IaNBIX7eFlHdRr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
