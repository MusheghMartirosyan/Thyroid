import Carousel from 'react-bootstrap/Carousel';
import CarouselImg from "../../images/carousel-1.png"
import "./Carousel.css"

function ThyroidCarousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <div className='carousel-img'></div>
        <Carousel.Caption>
          <h3>Lorem Ipsum is simply dummy text of the printing and</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
          <button>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-img'></div>
        <Carousel.Caption>
          <h3>Lorem Ipsum is simply dummy text of the printing and</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
          <button>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel-img'></div>
        <Carousel.Caption>
          <h3>Lorem Ipsum is simply dummy text of the printing and</h3>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
          <button>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ThyroidCarousel;