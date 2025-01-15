import { Swiper, SwiperSlide } from "swiper/react";
import ProvidersSection from "./ProvidersSection";
import {
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  History,
} from "swiper/modules";
import NavButtons from "./NavButtons";
import { useEffect, useRef, useState } from "react";
// import providersData from '../../data/providersData';
import ProviderCardSmall from "./ProviderCardSmall";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useProviders } from "../../services/queries";
import Error from "./Error";
import Filters from "./Filters";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import SearchBar from "../ui/SearchBar";
import { XIcon } from "@/assets/svgs";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

const Providers = ({ itemsPerPage, numberOfColumns, forHome }) => {
  const providers = useProviders();
  const [providersData, setProvidersData] = useState(providers.data);
  const [activeIndex, setActiveIndex] = useState(1);
  const [filterMenu, setFilterMenu] = useState(false);
  const [query, setQuery] = useState({ name: "" });
  const { register, watch, reset, handleSubmit } = useForm({
    defaultValues: {
      "Ages Seen": [],
      States: [],
      Specialties: [],
    },
  });

  const filters = watch();
  const filterKeys = ["Ages Seen", "States", "Specialties"];
  const numberOfFilters = filterKeys.reduce(
    (total, key) => total + (filters[key]?.length ?? 0),
    0,
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
        filterMenuRef?.current,
        {
          width: 0,
          minWidth: 0,
        },
        {
          width: "20rem",
          minWidth: "20rem",
          duration: 0.4,
          ease: "sine.inOut",
        },
      );
    }
  }, [providers.data]);

  const filterProviders = () => {
    const normalize = (str, term) => {
      return str.replace(new RegExp(`\\s+|${term}`, "g"), "").toLowerCase();
    };

    let filteredProviders = providersData;

    for (const key in query) {
      if (query[key] && query[key].length > 0) {
        const normalizedQueryValues =
          key !== "name"
            ? query[key].map((value) =>
                normalize(
                  value,
                  key === "Ages Seen"
                    ? "years"
                    : key === "Specialties"
                      ? "Issues"
                      : "",
                ),
              )
            : normalize(query[key], "");

        filteredProviders = filteredProviders?.filter((provider) => {
          let providerValues = [];
          if (key === "States") {
            providerValues =
              provider.licensed_states?.map((state) => normalize(state, "")) ||
              [];
          } else if (key === "Specialties") {
            providerValues = [
              ...(provider.specialisation?.map((item) => normalize(item, "")) ||
                []),
              ...(provider.focus_areas?.map((item) => normalize(item, "")) ||
                []),
            ];
          } else if (key === "Ages Seen") {
            providerValues =
              provider.age_group?.map((age) => normalize(age, "yrs")) || [];
          } else if (key === "name") {
            return provider.provider_name
              ?.toLowerCase()
              .includes(query.name.toLowerCase());
          }

          return normalizedQueryValues.every((value) => {
            if (key === "Ages Seen" || key === "Specialties")
              return providerValues.some((providerProp) =>
                providerProp.includes(value),
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
          <SearchBar
            query={query}
            setQuery={setQuery}
            toggleFilterMenu={toggleFilterMenu}
            numberOfFilters={numberOfFilters}
          />
        )}
      </div>

      <div className={`${forHome ? "" : "flex border-t border-[#E9E9E9]"}`}>
        {filterMenu && (
          // dark overlay to be shown in mobile screens when filterMenu is open
          <div
            onClick={() => toggleFilterMenu()}
            className="fixed inset-0 z-[2] bg-[rgba(7,_7,_7,_0.50)] md:hidden"
          />
        )}
        {!forHome && (
          //Side Filter Menu, also just for the Our Team Page (Not for homepage)
          <aside
            ref={filterMenuRef}
            className={cn(
              "absolute left-0 top-20 z-[3] flex w-0 min-w-0 flex-col overflow-hidden rounded-r-lg border-r border-[#E7E7E7] bg-white pt-10 md:static md:rounded-none md:py-5",
              {
                "max-h-[74.65rem]": filterMenu,
                "max-h-[74.65rem] sm:max-h-[30rem]": !filterMenu,
              },
            )}
          >
            <div className="mx-auto flex w-full max-w-[16.75rem] flex-nowrap items-center justify-between px-5">
              <h2 className="flex-shrink-0 font-dm-sans font-bold ~text-base/xl">
                Filter by:
              </h2>
              <button
                onClick={() => toggleFilterMenu()}
                className="block size-6 rounded-full bg-[#F5F5F5]"
              >
                <XIcon />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 w-full">
              <div className="mx-auto max-w-[16.75rem] divide-y-2 divide-[#E7E7E7] px-5">
                <Filters register={register} h2="Ages Seen" search={false} />
                <Filters register={register} h2="States" search={true} />
                <Filters register={register} h2="Specialties" search={true} />
              </div>

              <div className="border-y border-[#E7E7E7] px-5">
                <div className="mx-auto flex w-full max-w-[16.75rem] items-center justify-between px-5 py-[1.94rem]">
                  <button
                    onClick={() => reset()}
                    className="font-dm-sans text-sm font-bold text-[#070707]"
                    type="reset"
                  >
                    Clear all
                  </button>
                  <button
                    className={`w-[7.375rem] rounded-3xl p-2 text-sm font-bold text-white ${
                      numberOfFilters > 0 ? "bg-orenda-purple" : "bg-[#A1A1A1]"
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
        {providers.isLoading || (!filteredProviders && !providers.isError) ? (
          <Loading data={"Providers"} />
        ) : providers.isError ? (
          <Error />
        ) : (
          <div className="w-full min-w-0 px-5 ~pt-8/20 md:~px-5/8">
            <div
              className={`relative mx-auto max-w-7xl ${
                forHome ? "hidden md:block" : ""
              }`}
            >
              <div
                ref={providerSwiperHanger}
                className="invisible absolute -top-28 w-full"
              ></div>
              <Swiper
                onSlideChange={handleSlideChange}
                spaceBetween={80}
                slidesPerView={1}
                keyboard={{
                  enabled: true,
                }}
                history={{
                  key: "our-team",
                }}
                autoHeight={true}
                modules={[Keyboard, History]}
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
                      <SwiperSlide data-history={`${index + 1}`} key={index}>
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
        <div className={`py-8 ${forHome ? "md:hidden" : "hidden"}`}>
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
                    width: "275px",
                    paddingBlock: "1rem",
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

          <div className="mt-6 flex justify-center">
            <Link
              to="/Our Team"
              className="block w-[80%] max-w-[23rem] rounded-3xl border border-orenda-purple px-4 py-[0.62rem] text-center font-bold text-orenda-purple transition-colors duration-300 ~text-sm/base hover:bg-orenda-purple hover:text-white"
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
