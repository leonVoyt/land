import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import {
  carusel1,
  carusel2,
  carusel3,
  carusel4,
  carusel5,
} from "../../../../../assets/images";
import { useRef, useState } from "react";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  {
    url: carusel1,
  },
  {
    url: carusel2,
  },
  {
    url: carusel3,
  },
  {
    url: carusel4,
  },
  {
    url: carusel5,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderImageUrl.length;
  const carouselRef = useRef(null);

  const handleSliderChange = (e) => {
    const newIndex = parseInt(e.target.value);
    setCurrentIndex(newIndex);

    if (carouselRef.current) {
      carouselRef.current.goToSlide(newIndex);
    }
  };
  return (
    <div className="parent">
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        beforeChange={(nextSlide) => {
          const actualIndex = nextSlide % totalSlides;
          setCurrentIndex(actualIndex);
        }}
        partialVisible={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {sliderImageUrl.map(({ url }, index) => {
          return (
            <div className="slider" key={index}>
              <div className="slider_img--container">
                <span className="slider__container first">
                  <img src={url} alt="movie" />
                </span>
                <span className="slider__container second">
                  <img src={url} alt="movie" />
                </span>
              </div>
              <div className="slider__text--container">
                <p>250+ Корпоративних сайтів</p>
                <div>
                  <ul className="slider__text--points">
                    <li className="sub--title">стартапи</li>
                    <li className="sub--title">
                      фінансові та юридичні послуги
                    </li>
                    <li className="sub--title">медичні послуги</li>
                    <li className="sub--title">бізнес-конференції</li>
                    <li className="sub--title">туристичні послуги</li>
                    <li className="sub--title">
                      сільськогосподарська продукція
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="slider__footer">
        <input
          type="range"
          min="0"
          max={totalSlides - 1}
          value={currentIndex}
          onChange={handleSliderChange}
          className="slider__control"
        />
      </div>
    </div>
  );
};
export default Slider;
