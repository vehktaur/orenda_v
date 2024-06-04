import { useState } from 'react';
import { useSwiper } from 'swiper/react';

const NavButtons = ({
  setItemOffset,
  setEndOffSet,
  itemsPerPage,
  numberOfSlides
}) => {
  const swiper = useSwiper();

  const [prevIndex, setPrevIndex] = useState(1);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-4 flex items-center justify-center md:justify-end gap-6">
        <button
          disabled={prevIndex == 1}
          className={`${
            prevIndex == 1
              ? 'bg-[#B0B0B0] cursor-not-allowed'
              : 'bg-orenda-purple'
          } rounded-full p-2.5`}
          onClick={() => {
            setItemOffset((prevOffset) => prevOffset - itemsPerPage);
            setEndOffSet((prevOffset) => prevOffset - itemsPerPage);
            setPrevIndex((index) => (index == 1 ? index : index - 1));
            swiper.slidePrev();
          }}
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
          {prevIndex} / {numberOfSlides}
        </span>
        <button
          disabled={prevIndex === numberOfSlides}
          className={`${
            prevIndex == numberOfSlides ? 'bg-[#B0B0B0] cursor-not-allowed' : 'bg-orenda-purple'
          } rounded-full p-2.5`}
          onClick={() => {
              setItemOffset((prevOffset) => prevOffset + itemsPerPage);
              setEndOffSet((prevOffset) => prevOffset + itemsPerPage);
            setPrevIndex((index) =>
              index == numberOfSlides ? index : index + 1
            );
            swiper.slideNext();
          }}
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
