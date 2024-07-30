import { Swiper, SwiperSlide } from 'swiper/react';
import ProvidersSection from './ProvidersSection';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import NavButtons from './NavButtons';
import { useEffect, useRef, useState } from 'react';
// import providersData from '../../data/providersData';
import ProviderCardSmall from './ProviderCardSmall';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useProviders } from '../../services/queries';
import Error from './Error';

const Providers = ({ itemsPerPage, numberOfColumns, forHome }) => {
  const providers = useProviders();
  const [providersData, setProvidersData] = useState(providers.data);

  const providerSwiperHanger = useRef();
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    providerSwiperHanger?.current.scrollIntoView(true);
    setActiveIndex(swiper.activeIndex + 1);
  };

  const numberOfSlides = Math.ceil(providers?.data?.length / itemsPerPage);

  useEffect(() => {
    if (!providersData) {
      setProvidersData(providers.data);
      console.log('Set Providers data');
    }
  }, [providers.data]);

  if (providers.isLoading) {
    return <Loading data={'Providers'} />;
  } else if (providers.isError) {
    return <Error />;
  } else {
    return (
      <>
        <div id="providers" className="px-5 md:~px-5/8">
          <div
            className={`max-w-7xl mx-auto mt-12 relative ${
              forHome ? 'hidden md:block' : ''
            }`}
          >
            <div
              ref={providerSwiperHanger}
              className="absolute -top-28 w-full invisible"
            ></div>
            <Swiper
              onSlideChange={handleSlideChange}
              spaceBetween={80}
              slidesPerView={1}
              autoHeight={true}
            >
              {providersData
                ?.reduce((slidesArray, provider, index) => {
                  const slideIndex = Math.floor(index / itemsPerPage);

                  if (!slidesArray[slideIndex]) {
                    slidesArray[slideIndex] = [];
                  }

                  slidesArray[slideIndex].push(provider);

                  return slidesArray;
                }, [])
                .map((slide, index) => (
                  <SwiperSlide key={index}>
                    <ProvidersSection
                      slide={slide}
                      numberOfColumns={numberOfColumns}
                      setProvidersData={setProvidersData}
                    />
                  </SwiperSlide>
                ))}
              <NavButtons
                activeIndex={activeIndex}
                numberOfSlides={numberOfSlides}
              />
            </Swiper>
          </div>
        </div>
        <div className={`py-8 ${forHome ? 'md:hidden' : 'hidden'}`}>
          <Swiper
            autoplay={(true, { delay: 3000 })}
            slidesPerView="auto"
            spaceBetween={40}
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            centeredSlides={true}
          >
            {providersData?.map((provider, i) => {
              return (
                <SwiperSlide
                  style={{
                    width: '275px',
                    paddingBlock: '1rem'
                  }}
                  key={i + 50}
                >
                  <ProviderCardSmall
                    provider={provider}
                    setProvidersData={setProvidersData}
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
  }
};
export default Providers;
