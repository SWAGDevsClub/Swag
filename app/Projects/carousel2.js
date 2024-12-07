// components/Carousel.js
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousell = () => (
  <Carousel className="w-[50%] ml-[25%] mr-[25%] lg:top-[-1135px] md:top-[-1335px] sm:top-[-1145px] top-[-1220px] ">
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide11.jpg" alt="First slide" />
      <Carousel.Caption>
        {/* <h3>First slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide12.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide13.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide14.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide15.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide16.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide17.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-40 lg:ml-[40%] lg:mr-[40%] md:ml-[30%] md:mr-[30%] sm:ml-[25%] sm:mr[25%] ml-[15%] mr-[15%]" src="/slide18.jpg" alt="Second slide" />
      <Carousel.Caption>
        {/* <h3>Second slide label</h3> */}
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
);

export default Carousell;
