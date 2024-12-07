// components/Carousel.js
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => (
  <Carousel className="w-[50%] ml-[25%] mr-[25%] xl:mt-[-1240px] lg:mt-[-1190px] md:mt-[-1360px] sm:mt-[-1330px] mt-[-1330px]">
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide1.jpg" alt="First slide" />
      <Carousel.Caption>
        {/* <h3>SGGS APP</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide2.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide3.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide4.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide5.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;
