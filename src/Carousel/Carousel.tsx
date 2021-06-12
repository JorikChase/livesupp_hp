import clsx from "clsx";
import React from "react";

import "./Carousel.css";

export type CarouselProps = React.PropsWithChildren<{
  className?: string;
  id: string;
  slides: React.ReactNode[];
}>;

export default function Carousel({ id, slides, className }: CarouselProps) {
  return (
    <div className={clsx("Carousel", className)}>
      <div className="Carousel_slides">
        {slides.map((slide, slideIndex) => (
          <div
            className="Carousel_slide"
            id={`${id}-${slideIndex}`}
            key={`${id}-${slideIndex}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="Carousel_controls">
        {slides.map((_, slideIndex) => (
          <a
            href={`#${id}-${slideIndex}`}
            key={`${id}-${slideIndex}`}
            className="Carousel_link"
          >
            <span className="Carousel_screenReaderOnly">
              Slide: {slideIndex}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
