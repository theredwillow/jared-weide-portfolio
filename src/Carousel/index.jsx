import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = ({tiles}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const carouselItem = (tile) => (
    <Carousel.Item key={tile.img}>
        <img
            className="d-block w-100"
            src={tile.img}
            alt="First slide"
        />
    </Carousel.Item>
  );

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        { tiles.map(tile => carouselItem(tile)) }
    </Carousel>
  );
}

export default ControlledCarousel;
