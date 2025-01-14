import ProviderInfoUl from "./ProviderInfoUl";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsNavigation from "./ReviewsNavigation";
import fetchProviders from "../../data/fetchProviders";
import Loading from "../Our Team/Loading";
import { useProviders } from "../../services/queries";
import Error from "../Our Team/Error";

const HR = () => (
  <div className="mx-auto mb-4 mt-6 max-w-[63.75rem] bg-[rgb(239,235,223)] sm:hidden">
    <hr />
  </div>
);

const ProviderInfo = () => {
  const { name } = useParams();

  const providers = useProviders();
  const provider = providers?.data?.find((obj) => obj.provider_name === name);

  const showStatesLicensed = (states) => {
    if (states) {
      return states.map((state, index) => {
        if (index === states.length - 2) {
          return state + " & ";
        } else if (index === states.length - 1) {
          return state;
        } else {
          return state + ", ";
        }
      });
    } else {
      return "Nil";
    }
  };

  const showAgesSeen = (agesSeen) => {
    if (agesSeen) {
      return agesSeen.map((category, index, array) => {
        const divider = index === array.length - 1 ? "." : ", ";

        if (category === "Children") {
          return `${category} (<13 yrs)${divider}`;
        } else if (category === "Teens") {
          return `${category} (13-17 yrs)${divider}`;
        } else if (category === "Adults") {
          return `${category} (18-64 yrs)${divider}`;
        } else if (category === "Seniors") {
          return `${category} (65+ yrs)${divider}`;
        } else {
          return `${category}${divider}`;
        }
      });
    } else {
      return "Nil";
    }
  };

  if (providers.isLoading) {
    return <Loading data={"Provider"} />;
  } else if (providers.isError) {
    return <Error />;
  } else {
    return (
      <>
        <main className="px-4 font-dm-sans ~mt-7/[5.5rem] sm:~px-6/10">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg border-[#EFEBDF] sm:border">
              <div className="flex flex-col sm:border md:flex-row md:rounded-t-lg md:border-[#EFEBDF] md:~gap-0/[3.5rem]">
                <div className="relative w-full rounded-t-lg border-[#EFEBDF] ~pt-8/12 sm:flex-col md:order-last md:flex md:max-w-[39.25rem] md:items-center md:justify-center md:border-l">
                  <div className="mx-auto w-4/5 overflow-hidden ~max-h-72/[28rem] ~max-w-80/[28rem] md:mx-0 md:size-[28rem] md:max-h-none">
                    <img
                      className={`mx-auto block size-full object-cover`}
                      src={provider?.provider_image_url}
                      alt={provider?.provider_name}
                    />
                  </div>
                </div>
                <div className="sm:py-6 sm:~px-2/8 md:max-w-[50%]">
                  <div className="flex items-center justify-between ~mt-[1.5rem]/[2.56rem]">
                    <div className="">
                      <h1 className="mb-2 font-bold ~text-base/[2rem]">
                        {provider?.provider_name}
                      </h1>
                      <p className="text-left font-bold text-[#7C7C7C] ~text-xs/sm">
                        <span>{provider?.provider_code}</span>
                      </p>
                    </div>
                    <a
                      target="_blank"
                      href={provider?.booking_link}
                      className="group relative z-[1] me-4 w-full overflow-hidden rounded-3xl border border-orenda-purple px-2 text-center font-bold text-orenda-purple transition-colors ~text-base/lg ~max-w-[5.5rem]/[6rem] ~py-1/2 hover:text-white"
                    >
                      <span className="absolute -left-[1px] -top-[1px] z-[-1] block h-[calc(100%+2px)] w-0 rounded-3xl bg-orenda-purple transition-all duration-500 group-hover:w-[calc(100%+2px)]" />
                      Book
                    </a>
                  </div>
                  {provider?.do_therapy && (
                    <p className="w-fit min-w-[10.94rem] text-nowrap rounded-lg border border-[#E8DDFF] bg-purple-mist px-2 py-[0.38rem] text-left font-semibold text-orenda-purple ~text-xs/sm ~mt-2/[1.38rem]">
                      Offers Talk Therapy Sessions
                    </p>
                  )}
                  <p className="whitespace-pre-line ~text-sm/base ~mt-5/6">
                    {provider?.provider_description.replace(
                      /(\.\n|\n)/g,
                      (match) => {
                        return match === ".\n" ? ".\n\n" : " ";
                      },
                    )}
                  </p>
                </div>
              </div>

              <HR />

              <div className="border-t-0 sm:flex sm:border sm:border-[#EFEBDF]">
                <div className="flex flex-col gap-6 sm:basis-1/2 sm:gap-0">
                  <div className="sm:border-b sm:border-[#EFEBDF] sm:~px-2/4 sm:~py-3/6">
                    <h2 className="font-bold ~text-sm/xl ~mb-2/4">Ages Seen</h2>
                    <p className="~text-sm/lg">
                      {showAgesSeen(provider?.age_group)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-0 sm:border-y sm:border-[#EFEBDF] sm:~px-2/4 sm:~py-3/6">
                    <div>
                      <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                        Practice Name
                      </h2>
                      <p className="~text-sm/lg">Orenda Psychiatry</p>
                    </div>
                    <div className="mx-7 hidden h-[80%] max-h-[3.5rem] w-[2px] rounded-lg bg-[#D0D0D0] sm:block"></div>
                    <div>
                      <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                        Languages Spoken
                      </h2>
                      <p className="~text-sm/lg">
                        {provider?.languages.map(
                          (language, index, languages) => {
                            if (index === languages.length - 1) {
                              return language;
                            } else {
                              return `${language}, `;
                            }
                          },
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="border-[#EFEBDF] sm:border-b sm:~px-2/4 sm:~py-3/6">
                    <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                      States Licensed
                    </h2>
                    <p className="~text-sm/lg">
                      {showStatesLicensed(provider?.licensed_states)}
                    </p>
                  </div>
                  <div className="hidden ~space-y-6/10 sm:block sm:~px-2/4 sm:~py-3/6">
                    <ProviderInfoUl
                      h2="Education"
                      listArray={provider?.education}
                      classes={{ mb: 1.31 }}
                    />
                    <ProviderInfoUl
                      h2="Board Certification"
                      listArray={provider?.certification}
                      classes={{ mb: 1.06 }}
                    />
                    <ProviderInfoUl
                      h2="Treatment Approaches"
                      listArray={provider?.treatment_approaches}
                      classes={{ mb: 1.06 }}
                    />

                    <HR />
                  </div>
                </div>

                <HR />

                <div className="mb-6 space-y-6 sm:mb-0 sm:basis-1/2 sm:space-y-0 sm:border-l sm:border-[#EFEBDF]">
                  <div className="sm:border-b sm:border-[#EFEBDF] sm:~px-4/8 sm:~py-5/10">
                    <ProviderInfoUl
                      h2="Specialties"
                      listArray={provider?.specialisation}
                      classes={{ mb: 1.06 }}
                    />
                  </div>
                  <div className="sm:~px-4/8 sm:~py-5/10">
                    <ProviderInfoUl
                      h2="Focus Areas"
                      listArray={provider?.focus_areas}
                      classes={{ mb: 1.06 }}
                    />
                  </div>
                </div>
                <div className="~space-y-6/8 sm:hidden">
                  <ProviderInfoUl
                    h2="Education"
                    listArray={provider?.education}
                    classes={{ mb: 1.31 }}
                  />
                  <ProviderInfoUl
                    h2="Board Certification"
                    listArray={provider?.certification}
                    classes={{ mb: 1.06 }}
                  />
                  <ProviderInfoUl
                    h2="Treatment Approaches"
                    listArray={provider?.treatment_approaches}
                    classes={{ mb: 1.06 }}
                  />
                  <HR />
                </div>
              </div>

              {provider?.reviews && provider?.reviews.length > 0 && (
                <div className="mx-auto max-w-[80ch] ~py-4/8 sm:~px-3/6">
                  <h2 className="font-bold ~text-sm/xl ~mb-2/4 md:text-center">
                    Reviews from Clients
                  </h2>
                  <Swiper
                    spaceBetween={50}
                    breakpoints={{
                      768: {
                        autoHeight: true,
                      },
                    }}
                  >
                    {provider?.reviews.map((review) => (
                      <SwiperSlide className="swiper-no-swiping">
                        <div>
                          <blockquote className="text-justify leading-7 ~text-sm/base">
                            {review.review}
                          </blockquote>
                          {review.name && (
                            <p className="flex justify-end font-medium italic ~text-sm/base">
                              &#8212; {review.name}
                            </p>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}

                    <HR />

                    <ReviewsNavigation />
                  </Swiper>
                </div>
              )}
            </div>

            <div className="mt-12 ~mb-[6.13rem]/[11.44rem] sm:~mr-0/[3rem]">
              {/* <div className="flex flex-col items-center sm:flex-row sm:justify-end">
                <a
                  target="_blank"
                  href={provider?.booking_link}
                  className="rounded-3xl font-bold border border-orenda-purple w-full max-w-[18.75rem] py-[0.625rem] px-4 text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors text-center relative group z-[1] overflow-hidden"
                >
                           <span className="block absolute -top-[1px] -left-[1px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-orenda-purple transition-all duration-500 rounded-3xl border hover:border-orenda-purple" />
                  Book
                </a>
              </div> */}
            </div>
          </div>
        </main>
      </>
    );
  }
};
export default ProviderInfo;
