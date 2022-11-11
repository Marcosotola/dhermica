import React from 'react';
import './Boot.css'
import Carousel from 'react-bootstrap/Carousel';
import Promo1 from './promoDepi.png'
import Promo2 from './promoFacial.png'
import Promo3 from './promoManiPedi.png'

function CarouselFadeExample() {
  return (
    <div className='Carousel'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Promo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Promo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          src={Promo3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;