import { Swiper, SwiperSlide } from 'swiper/react';
import ProvidersSection from './ProvidersSection';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import NavButtons from './NavButtons';
import { useEffect, useRef, useState } from 'react';
// import providersData from '../../data/providersData';
import ProviderCardSmall from './ProviderCardSmall';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useProviders } from '../../services/queries';
import Error from './Error';
import Filters from './Filters';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useForm } from 'react-hook-form';

gsap.registerPlugin(useGSAP);

const Providers = ({ itemsPerPage, numberOfColumns, forHome }) => {
  const providers = useProviders();
  const [providersData, setProvidersData] = useState(providers.data);
  const [activeIndex, setActiveIndex] = useState(1);
  const [filterMenu, setFilterMenu] = useState(false);
  const [query, setQuery] = useState({ name: '' });
  const { register, watch, reset, handleSubmit } = useForm({
    defaultValues: {
      'Ages Seen': [],
      States: [],
      Specialties: []
    }
  });

  const filters = watch();
  const filterKeys = ['Ages Seen', 'States', 'Specialties'];
  const numberOfFilters = filterKeys.reduce(
    (total, key) => total + (filters[key]?.length ?? 0),
    0
  );

  const filterMenuRef = useRef();
  const timeline = useRef();
  const providerSwiperHanger = useRef();

  const handleSlideChange = (swiper) => {
    providerSwiperHanger?.current.scrollIntoView(true);
    setActiveIndex(swiper.activeIndex + 1);
  };

  const toggleFilterMenu = () => {
    !filterMenu ? timeline.current.play() : timeline.current.reverse();
    setFilterMenu((prev) => !prev);
  };

  const onSubmit = (data) => {
    toggleFilterMenu();
    providerSwiperHanger?.current.scrollIntoView(true);
    setQuery((prev) => ({ name: prev.name, ...data }));
  };

  useGSAP(() => {
    if (!providers.isLoading) {
      timeline.current = gsap.timeline({ paused: true });

      timeline.current.fromTo(
        filterMenuRef.current,
        {
          width: 0,
          minWidth: 0
        },
        {
          width: '20rem',
          minWidth: '20rem',
          duration: 0.4
        }
      );
    }
  }, [providers.data]);

  const filterProviders = () => {
    const normalize = (str, term) => {
      return str.replace(new RegExp(`\\s+|${term}`, 'g'), '').toLowerCase();
    };

    let filteredProviders = providersData;

    for (const key in query) {
      if (query[key] && query[key].length > 0) {
        const normalizedQueryValues =
          key !== 'name'
            ? query[key].map((value) =>
                normalize(value, key === 'Ages Seen' ? 'years' : '')
              )
            : normalize(query[key], '');

        filteredProviders = filteredProviders.filter((provider) => {
          let providerValues = [];
          if (key === 'States') {
            providerValues =
              provider.licensed_states?.map((state) => normalize(state, '')) ||
              [];
          } else if (key === 'Specialties') {
            providerValues = [
              ...(provider.specialization?.map((item) => normalize(item, '')) ||
                []),
              ...(provider.focus_areas?.map((item) => normalize(item, '')) ||
                [])
            ];
          } else if (key === 'Ages Seen') {
            providerValues =
              provider.age_group?.map((age) => normalize(age, 'yrs')) || [];
          } else if (key === 'name') {
            return provider.provider_name
              ?.toLowerCase()
              .includes(query.name.toLowerCase());
          }

          return normalizedQueryValues.every((value) => {
            if (key === 'Ages Seen')
              return providerValues.some((providerAge) =>
                providerAge.includes(value)
              );
            return providerValues.includes(value);
          });
        });
      }
    }

    return filteredProviders;
  };

  const filteredProviders = filterProviders();
  const numberOfSlides = Math.ceil(filteredProviders?.length / itemsPerPage);

  useEffect(() => {
    if (!providersData) {
      setProvidersData(providers.data);
    }
  }, [providers.data]);

  return (
    <>
      <div>
        {/* Search input which only ever shows on the Our Team Page (Not for homepage) */}
        {!forHome && (
          <div className="flex gap-4 justify-center items-center ~my-6/10 px-5">
            <label
              className="w-full ~max-w-[15.93rem]/[32.56rem] relative"
              htmlFor="search"
            >
              <span className="absolute top-0 bottom-0 w-12 grid place-items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Search" clip-path="url(#clip0_2563_10424)">
                    <path
                      id="Icon"
                      d="M13.803 14.8633C14.0959 15.1562 14.5708 15.1562 14.8637 14.8633C15.1566 14.5704 15.1566 14.0956 14.8637 13.8027L13.803 14.8633ZM12.6618 7.37222C12.6618 10.2934 10.2937 12.6614 7.37256 12.6614V14.1614C11.1221 14.1614 14.1618 11.1218 14.1618 7.37222H12.6618ZM7.37256 12.6614C4.45141 12.6614 2.08334 10.2934 2.08334 7.37222H0.583344C0.583344 11.1218 3.62298 14.1614 7.37256 14.1614V12.6614ZM2.08334 7.37222C2.08334 4.45107 4.45141 2.08301 7.37256 2.08301V0.583008C3.62298 0.583008 0.583344 3.62264 0.583344 7.37222H2.08334ZM7.37256 2.08301C10.2937 2.08301 12.6618 4.45107 12.6618 7.37222H14.1618C14.1618 3.62264 11.1221 0.583008 7.37256 0.583008V2.08301ZM11.156 12.2163L13.803 14.8633L14.8637 13.8027L12.2166 11.1556L11.156 12.2163Z"
                      fill="#B0B0B0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2563_10424">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                className="block w-full bg-[#FCFCFC] border border-[#E7E7E7] rounded-lg px-4 py-3 font-dm-sans ~text-sm/lg placeholder:~text-sm/base placeholder:font-medium placeholder:text-[#878787] outline-none ps-12"
                type="search"
                name="search"
                value={query.name}
                onChange={(event) =>
                  setQuery((prev) => ({
                    ...prev,
                    name: event.target.value.toLowerCase()
                  }))
                }
                id="search"
                placeholder="Search"
              />
            </label>
            <button
              onClick={() => toggleFilterMenu()}
              className={`flex items-center border border-[#E7E7E7] px-4 py-[0.85rem] gap-2 font-bold font-dm-sans rounded-lg active:border-orenda-purple relative ${
                numberOfFilters > 0 ? 'border-orenda-purple' : ''
              }`}
            >
              {numberOfFilters > 0 && (
                <span className="absolute text-[0.625rem] text-white font-dm-sans rounded-full bg-orenda-purple size-[1.0625rem] -top-[0.44rem] right-[0.44rem] grid place-items-center">
                  {numberOfFilters}
                </span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.3905 3.33301H3.60947C3.01553 3.33301 2.71809 4.0511 3.13807 4.47108L6.4714 7.80441C6.59642 7.92944 6.66666 8.09901 6.66666 8.27582V10.9997C6.66666 11.2095 6.76546 11.4071 6.93333 11.533L8.79999 12.933C9.01974 13.0978 9.33333 12.941 9.33333 12.6663V8.27582C9.33333 8.09901 9.40357 7.92944 9.52859 7.80441L12.8619 4.47108C13.2819 4.0511 12.9845 3.33301 12.3905 3.33301Z"
                  stroke="#615D5D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <span className="hidden sm:inline-block ~text-sm/base ">
                Filter
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Side Filter Menu, also just for the Our Team Page (Not for homepage) */}
      <div className={`${forHome ? '' : 'border-t border-[#E9E9E9] flex'}`}>
        {filterMenu && (
          // dark overlay to be shown in mobile screens when filterMenu is open
          <div
            onClick={() => toggleFilterMenu()}
            className="fixed z-[2] inset-0 bg-[rgba(7,_7,_7,_0.50)] md:hidden"
          />
        )}
        {!forHome && (
          //The actual aside menu
          <aside
            ref={filterMenuRef}
            className={`absolute z-[3] left-0 top-20 md:static border-r bg-white border-[#E7E7E7] rounded-r-lg md:rounded-none pt-10 md:py-5 w-0 min-w-0 overflow-hidden flex flex-col ${
              filterMenu
                ? 'max-h-[74.65rem]'
                : 'max-h-[74.65rem] sm:max-h-[20rem]'
            }`}
          >
            <div className="w-full px-5 max-w-[16.75rem] mx-auto flex justify-between flex-nowrap items-center">
              <h2 className="font-bold font-dm-sans ~text-base/xl flex-shrink-0">
                Filter by:
              </h2>
              <button
                onClick={() => toggleFilterMenu()}
                className="block size-6 rounded-full bg-[#F5F5F5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.2983 5.70827C18.2058 5.61557 18.0959 5.54202 17.9749 5.49184C17.8539 5.44166 17.7242 5.41583 17.5933 5.41583C17.4623 5.41583 17.3326 5.44166 17.2116 5.49184C17.0907 5.54202 16.9808 5.61557 16.8883 5.70827L11.9983 10.5883L7.10827 5.69827C7.01569 5.60569 6.90578 5.53225 6.78481 5.48214C6.66385 5.43204 6.5342 5.40625 6.40327 5.40625C6.27234 5.40625 6.14269 5.43204 6.02173 5.48214C5.90076 5.53225 5.79085 5.60569 5.69827 5.69827C5.60569 5.79085 5.53225 5.90076 5.48214 6.02173C5.43204 6.14269 5.40625 6.27234 5.40625 6.40327C5.40625 6.5342 5.43204 6.66385 5.48214 6.78481C5.53225 6.90578 5.60569 7.01569 5.69827 7.10827L10.5883 11.9983L5.69827 16.8883C5.60569 16.9809 5.53225 17.0908 5.48214 17.2117C5.43204 17.3327 5.40625 17.4623 5.40625 17.5933C5.40625 17.7242 5.43204 17.8538 5.48214 17.9748C5.53225 18.0958 5.60569 18.2057 5.69827 18.2983C5.79085 18.3909 5.90076 18.4643 6.02173 18.5144C6.14269 18.5645 6.27234 18.5903 6.40327 18.5903C6.5342 18.5903 6.66385 18.5645 6.78481 18.5144C6.90578 18.4643 7.01569 18.3909 7.10827 18.2983L11.9983 13.4083L16.8883 18.2983C16.9809 18.3909 17.0908 18.4643 17.2117 18.5144C17.3327 18.5645 17.4623 18.5903 17.5933 18.5903C17.7242 18.5903 17.8538 18.5645 17.9748 18.5144C18.0958 18.4643 18.2057 18.3909 18.2983 18.2983C18.3909 18.2057 18.4643 18.0958 18.5144 17.9748C18.5645 17.8538 18.5903 17.7242 18.5903 17.5933C18.5903 17.4623 18.5645 17.3327 18.5144 17.2117C18.4643 17.0908 18.3909 16.9809 18.2983 16.8883L13.4083 11.9983L18.2983 7.10827C18.6783 6.72827 18.6783 6.08827 18.2983 5.70827Z"
                    fill="#070707"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4 ">
              <div className="divide-y-2 divide-[#E7E7E7] max-w-[16.75rem] mx-auto px-5">
                <Filters register={register} h2="Ages Seen" search={false} />
                <Filters register={register} h2="States" search={true} />
                <Filters register={register} h2="Specialties" search={true} />
              </div>

              <div className=" border-y border-[#E7E7E7] px-5">
                <div className="w-full px-5 flex justify-between items-center py-[1.94rem] max-w-[16.75rem] mx-auto ">
                  <button
                    onClick={() => reset()}
                    className="font-dm-sans font-bold text-[#070707] text-sm"
                    type="reset"
                  >
                    Clear all
                  </button>
                  <button
                    className={`text-sm font-bold text-white p-2 rounded-3xl w-[7.375rem] ${
                      numberOfFilters > 0 ? 'bg-orenda-purple' : 'bg-[#A1A1A1]'
                    }`}
                    type="submit"
                  >
                    Show results
                  </button>
                </div>
              </div>
            </form>
          </aside>
        )}

        {/* Handle Loading and Error states when fetching providers */}
        {!providers.isError && (providers.isLoading || !filteredProviders) && (
          <Loading data={'Providers'} />
        )}
        {providers.isError && <Error />}

        {/* Providers component after data has been fetched */}
        {!providers.isLoading && !providers.isError && filteredProviders && (
          <div className="px-5 md:~px-5/8 ~pt-8/20 min-w-0 w-full">
            <div
              className={`max-w-7xl mx-auto relative ${
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
                keyboard={{
                  enabled: true
                }}
                autoHeight={true}
                modules={[Keyboard]}
              >
                {filteredProviders?.length > 0 ? (
                  filteredProviders
                    ?.reduce((slidesArray, provider, index) => {
                      const slideIndex = Math.floor(index / itemsPerPage);
                      if (!slidesArray[slideIndex]) {
                        slidesArray[slideIndex] = [];
                      }
                      slidesArray[slideIndex].push(provider);
                      return slidesArray;
                    }, [])
                    .map((slide, index) => (
                      <SwiperSlide
                        data-history={`slide${index + 1}`}
                        key={index}
                      >
                        <ProvidersSection
                          slide={slide}
                          numberOfColumns={numberOfColumns}
                          setProvidersData={setProvidersData}
                        />
                      </SwiperSlide>
                    ))
                ) : (
                  <SwiperSlide>
                    <p className="text-center italic">No Providers Found</p>
                  </SwiperSlide>
                )}
                {filteredProviders?.length > 10 && (
                  <NavButtons
                    activeIndex={activeIndex}
                    numberOfSlides={numberOfSlides}
                  />
                )}
              </Swiper>
            </div>
          </div>
        )}
      </div>

      {/* This slider component is for and only displays on the homepage */}
      {!providers.isLoading && !providers.isError && (
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
      )}
    </>
  );
};
export default Providers;
