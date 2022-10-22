import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrousel(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagen}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagen}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.imagen}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel