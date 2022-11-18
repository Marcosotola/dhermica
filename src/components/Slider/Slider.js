import React from 'react';
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';
import Promo1 from './promoDepi.png'
import Promo2 from './promoFacial.png'
import Promo3 from './promoManiPedi.png'

function CarouselFadeExample() {
  return (
    <div className='promos'>
    <Carousel fade variant="dark">
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Promo1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Promo2}
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Promo3}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;