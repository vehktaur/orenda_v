import { Swiper, SwiperSlide } from 'swiper/react';
import ProvidersSection from './ProvidersSection';
import { Autoplay } from 'swiper/modules';
import NavButtons from './NavButtons';
import { useRef, useState } from 'react';
import providersData from '../../data/providersData';
import ProviderCard from './ProviderCard';
import { Link } from 'react-router-dom';

const Providers = ({ itemsPerPage, numberOfColumns }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffSet] = useState(itemOffset + itemsPerPage);

  const providerSwiperHanger = useRef();

  const nextSlide = () => {
    setItemOffset((prevOffset) => prevOffset + itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset + itemsPerPage);
  };
  const prevSlide = () => {
    setItemOffset((prevOffset) => prevOffset - itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset - itemsPerPage);
  };

  const handleSlideChange = (swiper) => {
    providerSwiperHanger?.current.scrollIntoView(true);
    if (swiper.activeIndex > swiper.previousIndex) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const numberOfSlides = Math.ceil(providersData.length / itemsPerPage);
  return (
    <>
      <div
        className={`max-w-7xl mx-auto ~mt-12/[4.94rem] px-5 relative ${
          numberOfColumns === 5 ? 'hidden md:block' : ''
        }`}
      >
        <div
          ref={providerSwiperHanger}
          className="absolute -top-28 w-full invisible"
        ></div>
        <Swiper
          onSlideChange={handleSlideChange}
          spaceBetween={50}
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
          <NavButtons numberOfSlides={numberOfSlides} />
        </Swiper>
      </div>
      <div className={`py-8 ${numberOfColumns === 5 ? 'md:hidden' : 'hidden'}`}>
        <Swiper
          autoplay={{
            delay: 2000
          }}
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          modules={[Autoplay]}
          centeredSlides={true}
        >
          {providersData.map((provider) => {
            const index = providersData.findIndex(
              (obj) => obj.name === provider?.name
            );
            return (
              <SwiperSlide
                style={{ width: 'auto', paddingBlock: '1rem' }}
                key={index + 50}
              >
                <ProviderCard
                  numberOfColumns={numberOfColumns}
                  provider={provider}
                  index={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="flex justify-center mt-6">
          <Link
            to="/Our Team"
            className="block w-[80%] max-w-[23rem] ~text-sm/base border border-orenda-purple text-orenda-purple px-4 py-[0.62rem] hover:bg-orenda-purple hover:text-white transition-colors duration-300 rounded-3xl text-center font-bold"
          >
            See all Providers
          </Link>
        </div>
      </div>
    </>
  );
};
export default Providers;
