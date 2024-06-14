import { Swiper, SwiperSlide } from 'swiper/react';
import ProvidersSection from './ProvidersSection';
import { Navigation, Pagination } from 'swiper/modules';
import NavButtons from './NavButtons';
import { useState } from 'react';
import providersData from '../../data/providersData';

const Providers = ({ itemsPerPage, numberOfColumns }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffSet] = useState(itemOffset + itemsPerPage);

  const nextSlide = () => {
    setItemOffset((prevOffset) => prevOffset + itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset + itemsPerPage);
  };
  const prevSlide = () => {
    setItemOffset((prevOffset) => prevOffset - itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset - itemsPerPage);
  };

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex > swiper.previousIndex) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const numberOfSlides = Math.ceil(providersData.length / itemsPerPage);
  return (
    <div>
      <Swiper
        onSlideChange={handleSlideChange}
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
      >
        {[...Array(numberOfSlides)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProvidersSection
              itemOffset={itemOffset}
              endOffset={endOffset}
              numberOfColumns={numberOfColumns}
            />
          </SwiperSlide>
        ))}
        <NavButtons />
      </Swiper>
    </div>
  );
};
export default Providers;
