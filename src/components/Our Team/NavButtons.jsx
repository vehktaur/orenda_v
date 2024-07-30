import { useSwiper } from 'swiper/react';

const NavButtons = ({ activeIndex, numberOfSlides }) => {
  const swiper = useSwiper();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4 flex items-center justify-center lg:justify-end gap-6">
        <button
          className={`${
            activeIndex == 1
              ? 'bg-[#B0B0B0] cursor-not-allowed'
              : 'bg-orenda-purple'
          } rounded-full ~p-1.5/2.5`}
          onClick={() => swiper.slidePrev()}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrows">
              <path
                id="Icon"
                d="M25.3334 16L8.00004 16M14.6667 24L7.60952 16.9428C7.08882 16.4221 7.08882 15.5779 7.60952 15.0572L14.6667 8"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </button>
        <span className="font-bold">
          {activeIndex} / {numberOfSlides}
        </span>
        <button
          className={`${
            activeIndex == numberOfSlides
              ? 'bg-[#B0B0B0] cursor-not-allowed'
              : 'bg-orenda-purple'
          } rounded-full ~p-1.5/2.5`}
          onClick={() => swiper.slideNext()}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Arrows">
              <path
                id="Icon"
                d="M6.66663 16H24M17.3333 8L24.3905 15.0572C24.9112 15.5779 24.9112 16.4221 24.3905 16.9428L17.3333 24"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default NavButtons;
