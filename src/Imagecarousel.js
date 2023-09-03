import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Imagecarousel.scss';

const ImageCarousel = ({ images }) => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleImageClick = (index) => {
    setFocusedIndex(index);
  };

  const handleCloseClick = () => {
    setFocusedIndex(null);
  };

  return (
    <div className="image-carousel">
      <Carousel showThumbs={false} selectedItem={focusedIndex}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="carousel-image"
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      {focusedIndex !== null && (
        <div className="enlarged-image">
          <img src={images[focusedIndex]} alt={`Image ${focusedIndex}`} />
          <button onClick={handleCloseClick}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;