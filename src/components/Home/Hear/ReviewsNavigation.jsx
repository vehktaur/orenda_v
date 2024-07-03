import { useState } from 'react';
import { useSwiper } from 'swiper/react';

const ReviewsNavigation = () => {
  const swiper = useSwiper();

  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex + 1);
  const numberOfSlides = swiper.slides.length;

  return (
    <div className="flex gap-4 sm:ms-auto justify-between sm:justify-start sm:max-w-28 sm:absolute bottom-1 right-0 z-[2] ">
      <button
        className={activeIndex == 1 && 'cursor-not-allowed'}
        onClick={() => {
          swiper.slidePrev();
          setActiveIndex(swiper.activeIndex + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M31.6667 20H9.99999M18.3333 10L9.51184 18.8215C8.86096 19.4724 8.86096 20.5276 9.51184 21.1785L18.3333 30"
            stroke={activeIndex === 1 ? '#D5D5D5' : '#2E0086'}
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button
      className={activeIndex == numberOfSlides && 'cursor-not-allowed'}
        onClick={() => {
          swiper.slideNext();
          setActiveIndex(swiper.activeIndex + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M8.33398 20H30.0007M21.6673 10L30.4888 18.8215C31.1397 19.4724 31.1397 20.5276 30.4888 21.1785L21.6673 30"
            stroke={activeIndex === numberOfSlides ? '#D5D5D5' : '#2E0086'}
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  );
};
export default ReviewsNavigation;
