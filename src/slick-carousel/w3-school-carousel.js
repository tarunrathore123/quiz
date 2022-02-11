import React, { useEffect, useState } from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import "./w3-carousel.css";

const W3SchoolCarousel = () => {
  const slides = [
    {
      numberText: "1/3",
      src: img1,
      text: "Caption Text",
      active: true,
    },
    {
      numberText: "2/3",
      src: img2,
      text: "Caption Two",
      active: false,
    },
    {
      numberText: "3/3",
      src: img3,
      text: "Caption Three",
      active: false,
    },
  ];
  let [slideIndex, setSlideIndex] = useState(0);
  //   console.log(slides[2].active);

  const showSlides = () => {
    if (slideIndex >= 3) slideIndex = 0;
    if (slideIndex < 0) slideIndex = 2;

    slides[0].active = false;
    slides[1].active = false;
    slides[2].active = false;
    slides[slideIndex].active = true;
  };
  useEffect(() => {
    // showSlides();
  }, [slideIndex]);
  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide) => (
          <div
            key={slide.src}
            className={`${slide.active ? "mySlides2" : "mySlides"} fade`}
          >
            <div className="numbertext">{slide.numberText}</div>
            <img src={slide.src} style={{ width: "100%" }} />
            <div className="text">{slide.text}</div>
          </div>
        ))}

        <a className="prev" onClick={() => setSlideIndex(slideIndex - 1)}>
          {"<"}
        </a>
        <a className="next" onClick={() => setSlideIndex(1)}>
          {">"}
        </a>
      </div>
      <br />
    </div>
  );
};

export default W3SchoolCarousel;
