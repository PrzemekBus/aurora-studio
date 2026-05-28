import { useState, useEffect } from "react";
import Button from "./button";

function Carousel({ renderItem, items, interval = 4 }) {
  const step = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () =>
    setCurrentIndex(prev => {
      const next = prev + step;
      return next + step > items.length ? 0 : next;
    });

  const goPrev = () =>
    setCurrentIndex(prev => (prev === 0 ? items.length - step : prev - step));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + step;
        return next + step > items.length ? 0 : next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [interval, items.length]);

  const translateX = -(currentIndex / step) * 100;

  return (
    <div className="carousel container mx-auto flex flex-col items-center">
      <div className="track w-full overflow-hidden">
        <div
          className="carousel-wrapper flex items-stretch transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {items.map(item => renderItem(item))}
        </div>
      </div>

      <div className="carousel-buttons">
        <Button onClick={goPrev}> </Button>
        <Button onClick={goNext}> </Button>
      </div>

      <div className="carosel-indicators">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Carousel;
