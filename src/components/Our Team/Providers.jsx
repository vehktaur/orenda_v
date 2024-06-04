import { Swiper, SwiperSlide } from 'swiper/react';
import ProvidersSection from './ProvidersSection';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavButtons from './NavButtons';
import { useState } from 'react';
import { providersData } from '../../data/providersData';

const Providers = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffSet] = useState(itemOffset + itemsPerPage);

  const numberOfSlides = Math.ceil(providersData.length / itemsPerPage);
  return (
    <div>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
      >
        {[...Array(numberOfSlides)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProvidersSection itemOffset={itemOffset} endOffset={endOffset} />
          </SwiperSlide>
        ))}
        <NavButtons
          setItemOffset={setItemOffset}
          itemOffset={itemOffset}
          endOffset={endOffset}
          setEndOffSet={setEndOffSet}
          itemsPerPage={itemsPerPage}
          numberOfSlides={numberOfSlides}
        />
      </Swiper>
    </div>
  );
};
export default Providers;
