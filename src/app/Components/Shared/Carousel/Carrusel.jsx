import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3000); // Cambia la imagen cada 3 segundos (3000 ms)
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, // Desactiva el autoplay de react-slick
      autoplaySpeed: 3000, // Tiempo de cambio de imagen
    };
  
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ marginRight: '200px' }} className='imagen-slider'>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              layout="responsive"
            /> 
          </div>
        ))}
      </Slider>
    );
};

export default Carousel;
