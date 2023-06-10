import React, { useState } from 'react';

const Slider = () => {
  const images = [
    "./img/egypt.jpg",
    "./img/italy.jpg",
    "./img/tailand.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button onClick={goToPreviousSlide}>Назад</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      <button onClick={goToNextSlide}>Вперед</button>
    </div>
  );
};

export default Slider;


