import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Programs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/02.jpg'
              text=' Many charitable foundations 
              have a primary focus on education and may offer various 
              programs to support different educational needs. These programs 
              can be diverse and cater to different age groups, topics, 
              and educational levels'
              label='Education
              Program'
              path='/services'
            />
            <CardItem
              src='images/images.jpeg'
              text='title about event'
              label='Youth Program'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='title about event'
              label='Health Program'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='title about event'
              label='Green and Sustainable
               Environmental Program'
              path='/products'
            />
            {/* <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;


