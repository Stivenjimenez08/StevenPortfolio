import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="ruta/a/tu/icono1.png" alt="Red Social 1" />
      </div>
      <div>
        <img src="ruta/a/tu/icono2.png" alt="Red Social 2" />
      </div>
      {/* Agrega más imágenes para tus otras redes sociales */}
    </Slider>
  );
};
