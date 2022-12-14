import React, { Component } from "react";
import Slider from "react-slick";

export default class MaySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img width={500} height={250} src="./img/first.jpg" />
          </div>
          <div>
            <img width={500} height={250} src="./img/second.jpg" />
          </div>
          <div>
            <img width={500} height={250} src="./img/three.jpg" />
          </div>
          <div>
            <img width={500} height={250} src="./img/four.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
