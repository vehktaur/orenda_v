import ProviderInfoUl from './ProviderInfoUl';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsNavigation from './ReviewsNavigation';
import fetchProviders from '../../data/fetchProviders';
import Loading from '../Our Team/Loading';
import { useProviders } from '../../services/queries';
import Error from '../Our Team/Error';

const HR = () => (
  <div className="sm:hidden bg-[rgb(239,235,223)] max-w-[63.75rem] mx-auto mt-6 mb-4">
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
          return state + ' & ';
        } else if (index === states.length - 1) {
          return state;
        } else {
          return state + ', ';
        }
      });
    } else {
      return 'Nil';
    }
  };

  const showAgesSeen = (agesSeen) => {
    if (agesSeen) {
      return agesSeen.map((category, index, array) => {
        const divider = index === array.length - 1 ? '.' : ', ';

        if (category === 'Children') {
          return `${category} (<13 yrs)${divider}`;
        } else if (category === 'Teens') {
          return `${category} (13-17 yrs)${divider}`;
        } else if (category === 'Adults') {
          return `${category} (18-64 yrs)${divider}`;
        } else if (category === 'Seniors') {
          return `${category} (65+ yrs)${divider}`;
        } else {
          return `${category}${divider}`;
        }
      });
    } else {
      return 'Nil';
    }
  };

  if (providers.isLoading) {
    return <Loading data={'Provider'} />;
  } else if (providers.isError) {
    return <Error />;
  } else {
    return (
      <>
        <main className="px-4 sm:~px-6/10 font-dm-sans ~mt-7/[5.5rem]">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-lg sm:border sm:border-[#EFEBDF]">
              <div className="flex flex-col md:rounded-t-lg md:flex-row md:~gap-0/[3.5rem] sm:border md:border-[#EFEBDF]">
                <div className="md:order-last bg-[#f1f1f1] rounded-t-lg w-full md:flex sm:flex-col md:justify-end md:max-w-[39.25rem] relative pt-8">
                  {provider?.status === 'ACTIVE' && (
                    <div className="rounded-lg border w-fit border-[#E1EEE4] bg-[#F0FDF3] py-2 ~px-0.5/[0.62rem] ~text-[0.7rem]/xs text-[#0C3318] font-dm-sans font-medium absolute ~top-2/[1.37rem] ~left-2/6">
                      Available Today
                    </div>
                  )}
                  <img
                    className={`mx-auto ~/md:~max-w-[80%]/[22rem] ~/md:~max-h-[12rem]/[20rem] md:max-h-[75%] h-auto block`}
                    src={provider?.provider_image_url}
                    alt={provider?.provider_name}
                  />
                </div>
                <div className="md:max-w-[50%] sm:~px-2/8 sm:py-6">
                  <h1 className="~text-base/[2rem] font-bold ~mt-[0.63rem]/[2.56rem] mb-2">
                    {provider?.provider_name}
                  </h1>
                  <p className="text-[#7C7C7C] ~text-xs/sm font-bold text-left ">
                    <span>{provider?.credentials}</span>
                  </p>
                  {provider?.do_therapy && (
                    <p className="border border-[#E8DDFF] bg-[#F8F8FF] font-semibold rounded-lg px-2 py-[0.38rem] text-orenda-purple w-fit min-w-[10.94rem] text-left ~mt-2/[1.38rem] ~text-xs/sm text-nowrap">
                      Offers Talk Therapy Sessions
                    </p>
                  )}
                  <p className="whitespace-pre-line ~text-sm/base ~mt-5/6 ">
                    {provider?.provider_description.replace(/(?<!\.)\n/g, ' ')}
                  </p>
                </div>
              </div>

              <HR />

              <div className="sm:flex sm:border border-t-0 sm:border-[#EFEBDF]">
                <div className="flex flex-col gap-6 sm:gap-0 sm:basis-1/2">
                  <div className="sm:border-b sm:border-[#EFEBDF] sm:~px-2/4 sm:~py-3/6">
                    <h2 className="font-bold ~text-sm/xl ~mb-2/4">Ages Seen</h2>
                    <p className="~text-sm/lg">
                      {showAgesSeen(provider?.age_group)}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-center gap-6 sm:gap-0 sm:~px-2/4 sm:~py-3/6 sm:flex-row sm:border-y sm:border-[#EFEBDF]">
                    <div>
                      <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                        Practice Name
                      </h2>
                      <p className="~text-sm/lg">Orenda Psychiatry</p>
                    </div>
                    <div className="hidden sm:block h-[80%] max-h-[3.5rem] w-[2px] rounded-lg bg-[#D0D0D0] mx-7"></div>
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
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="sm:~px-2/4 sm:~py-3/6 sm:border-b border-[#EFEBDF]">
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

                <div className="sm:border-l space-y-6 sm:space-y-0 mb-6 sm:mb-0 sm:border-[#EFEBDF] sm:basis-1/2">
                  <div className="sm:border-b  sm:border-[#EFEBDF] sm:~px-4/8 sm:~py-5/10">
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
                <div className="sm:hidden ~space-y-6/8">
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
                <div className="sm:~px-3/6 ~py-4/8 max-w-[80ch] mx-auto">
                  <h2 className="font-bold ~text-sm/xl ~mb-2/4 md:text-center">
                    Reviews from Clients
                  </h2>
                  <Swiper
                    spaceBetween={50}
                    breakpoints={{
                      768: {
                        autoHeight: true
                      }
                    }}
                  >
                    {provider?.reviews.map((review) => (
                      <SwiperSlide className="swiper-no-swiping">
                        <div>
                          <blockquote className=" ~text-sm/base leading-7 text-justify">
                            {review.review}
                          </blockquote>
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
              <div className="flex flex-col items-center sm:flex-row sm:justify-end">
                <a
                  href={provider?.bookingLink}
                  className="rounded-3xl font-bold border border-orenda-purple w-full max-w-[18.75rem] py-[0.625rem] px-4 text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors text-center"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};
export default ProviderInfo;
