import React from 'react';
import style from './MainSlider.module.css';
import image1 from '../../assets/mobile.jpeg';
import image2 from '../../assets/queen.jpeg';
import image3 from '../../assets/watch.webp';
import image4 from '../../assets/veg2.webp';

import Slider from 'react-slick';

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
    <div className="flex">
      <div className="w-3/4">
        <Slider {...settings}>
          <img src={image1} alt="Bakery" className="w-full h-[400px] object-cover" />
          <img src={image4} alt="Vegetables" className="w-full h-[400px] object-cover" />
          
        </Slider>
      </div>
      <div className="w-1/4 flex flex-col">
        <img src={image2} alt="Vegetables" className="h-[200px] object-cover " />
        <img src={image3} alt="Fruits" className="h-[200px] object-cover" />
      </div>
    </div>
  );
}
