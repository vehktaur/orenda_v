import { Swiper, SwiperSlide } from 'swiper/react';
import ProvidersSection from './ProvidersSection';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavButtons from './NavButtons';
import { useState } from 'react';
import providersData from '../../data/providersData';

const Providers = ({ itemsPerPage, numberOfColumns }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffSet] = useState(itemOffset + itemsPerPage);

  const [prevIndex, setPrevIndex] = useState(1);

  const nextSlide = () => {
    setItemOffset((prevOffset) => prevOffset + itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset + itemsPerPage);
    setPrevIndex((index) => (index == numberOfSlides ? index : index + 1));
  };
  const prevSlide = () => {
    setItemOffset((prevOffset) => prevOffset - itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset - itemsPerPage);
    setPrevIndex((index) => (index == 1 ? index : index - 1));
  };

  const numberOfSlides = Math.ceil(providersData.length / itemsPerPage);
  return (
    <div>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
      >
        {[...Array(numberOfSlides)].map((_, index) => (
          <SwiperSlide className='swiper-no-swiping' key={index}>
            <ProvidersSection itemOffset={itemOffset} endOffset={endOffset} numberOfColumns={numberOfColumns} />
          </SwiperSlide>
        ))}
        <NavButtons
          numberOfSlides={numberOfSlides}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          prevIndex={prevIndex}
        />
      </Swiper>
    </div>
  );
};
export default Providers;
