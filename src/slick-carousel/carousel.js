import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div style={{ height: "100px", backgroundColor: "black" }}>
            <h3>1</h3>
          </div>
          <div style={{ height: "100px", backgroundColor: "black" }}>
            <h3>2</h3>
          </div>
          <div style={{ height: "100px", backgroundColor: "black" }}>
            <h3>3</h3>
          </div>
          <div style={{ height: "100px", backgroundColor: "black" }}>
            <h3>4</h3>
          </div>
          <div style={{ height: "100px", backgroundColor: "black" }}>
            <h3>5</h3>
          </div>
          <div style={{ height: "100px", backgroundColor: "black" }}>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
