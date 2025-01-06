import React, { useState, useEffect } from 'react';
import slides from '../assets/files/slides';

const Slider = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);


  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [currentIndex, isAutoPlaying]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
console.log("Slide Component Render")
  return (
    <div className="relative max-w-[1400px] h-[500px] w-full mx-auto my-8 px-4">
      <div
        className="relative h-full rounded-2xl bg-cover bg-center transition-all ease-in-out duration-700 transform group"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
        
        {/* Title */}
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-4xl font-bold mb-2">{slides[currentIndex].title}</h2>
          <p className="text-sm">
            {currentIndex + 1} / {slides.length}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-5 items-center justify-center w-10 h-10 rounded-full bg-black/20 text-white cursor-pointer transition-all duration-300 hover:bg-black/40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextSlide}
          className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-5 items-center justify-center w-10 h-10 rounded-full bg-black/20 text-white cursor-pointer transition-all duration-300 hover:bg-black/40"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 right-8 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition-all duration-500 transform
                ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Slider;