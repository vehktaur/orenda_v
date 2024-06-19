import providersData from '../../data/providersData';
import ProviderInfoUl from './ProviderInfoUl';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReviewsNavigation from './ReviewsNavigation';

const HR = () => (
  <div className="sm:hidden bg-[rgb(239,235,223)] max-w-[63.75rem] mx-auto mt-6 mb-4">
    <hr />
  </div>
);

const ProviderInfo = () => {
  const { index } = useParams();

  const provider = providersData[index];
  const focusAreas = [
    'Academic Stress',
    'Attention-Deficit / Hyperactivity Disorder (ADHD)',
    'Medication Management',
    'Pre-College Fears',
    'Anxiety',
    'Depression',
    'Panic Attack',
    'Prescription / Refill'
  ];
  const treatmentApproaches = [
    'Humanistic',
    'Psychodynamic',
    'Person-Centered'
  ];
  const educationAndBackground = [
    'Case Western Reserve University, Master’s in Psychiatric Mental Health Nursing',
    'Massachusetts College of Pharmacy and Health Sciences (Bachelor’s)',
    'State University of New York, Binghamton (Bachelor’s)'
  ];
  const specialties = ['Adult Psychiatric & Mental Health Nurse Practitioner'];
  const boardCertification = ['American Nurses Credentialing Center'];

  const showStatesLicensed = (states) => {
    return states.map((state, index) => {
      if (index === states.length - 2) {
        return state + ' & ';
      } else if (index === states.length - 1) {
        return state;
      } else {
        return state + ', ';
      }
    });
  };

  return (
    <>
      <main className="px-4 font-dm-sans ~mt-7/[5.5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg sm:border sm:border-[#EFEBDF]">
            <div className="flex flex-col md:rounded-t-lg md:flex-row sm:~gap-8/[3.5rem] sm:border md:border-[#EFEBDF]">
              <div className="md:order-last bg-[#f1f1f1] rounded-t-lg w-full md:flex sm:flex-col md:justify-end md:max-w-[39.25rem] relative">
                {provider.availability && (
                  <div className="rounded-lg border w-fit border-[#E1EEE4] bg-[#F0FDF3] py-2 ~px-0.5/[0.62rem] ~text-[0.7rem]/xs font-dm-sans font-medium absolute ~top-2/[1.37rem] ~left-2/6">
                    {provider.availability}
                  </div>
                )}
                <img
                  className="md:min-w-[80%] mx-auto max-h-[38.5rem] h-auto ~/md:~max-w-[10.48rem]/[22rem] block"
                  src={provider.image}
                  alt={provider.name}
                />
              </div>
              <div className="md:max-w-[50%] sm:~px-2/10 sm:py-6">
                <h1 className="~text-base/[2rem] font-bold ~mt-[0.63rem]/[2.56rem] mb-2">
                  {provider.name}
                </h1>
                <p className="flex flex-col sm:flex-row gap-2 text-[#7C7C7C] ~text-xs/sm font-bold">
                  <span>{provider.credentials}</span>
                  <span>
                    Adult Psychiatric & Mental Health Nurse Practitioner, NY
                  </span>
                </p>
                <p className="border border-[#E8DDFF] bg-[#F8F8FF] font-semibold rounded-lg px-2 py-[0.38rem] text-orenda-purple w-fit min-w-[10.94rem] text-center ~mt-2/[1.38rem] ~mb-5/6">
                  Specialising in geriatric care
                </p>
                <p className="whitespace-pre-line leading-6">
                  {provider.about}
                </p>
              </div>
            </div>

            <HR />

            <div className="sm:flex sm:border border-t-0 sm:border-[#EFEBDF]">
              <div className="flex flex-col gap-6 sm:gap-0 sm:basis-1/2">
                <div className="sm:border-b sm:border-[#EFEBDF] sm:~px-3/6 sm:~py-4/8">
                  <h2 className="font-bold ~text-sm/xl ~mb-2/4">Ages Seen</h2>
                  <p>
                    {provider.agesSeen.children && (
                      <span>{`Children: (${provider.agesSeen.children}) `}</span>
                    )}
                    {provider.agesSeen.teens && (
                      <span>{`Teens: (${provider.agesSeen.teens}) `}</span>
                    )}
                    {provider.agesSeen.adults && (
                      <span>{`Adults: (${provider.agesSeen.adults})`}</span>
                    )}
                  </p>
                </div>
                <div className="flex flex-col sm:items-center gap-6 sm:gap-0 sm:~px-2/4 sm:~py-3/6 sm:flex-row sm:border-y sm:border-[#EFEBDF]">
                  <div>
                    <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                      Practice Name
                    </h2>
                    <p>Orenda Psychiatry</p>
                  </div>
                  <div className="hidden sm:block h-[80%] max-h-[3.5rem] w-[2px] rounded-lg bg-[#D0D0D0] mx-7"></div>
                  <div>
                    <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                      Languages Spoken
                    </h2>
                    <p>English, Bengali</p>
                  </div>
                </div>
                <div className="sm:~px-2/4 sm:~py-3/6 sm:border-b border-[#EFEBDF]">
                  <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                    States Licensed
                  </h2>
                  <p>{showStatesLicensed(provider.statesLicensed)}</p>
                </div>
                <div className="hidden sm:block sm:~px-2/4 sm:~py-3/6">
                  <ProviderInfoUl
                    h2="Education & Background"
                    listArray={educationAndBackground}
                    classes={{ mb: 1.31, lineHeight: 'normal' }}
                  />
                  <ProviderInfoUl
                    h2="Specialties"
                    listArray={specialties}
                    classes={{ mb: 1.06, lineHeight: 'normal' }}
                  />
                  <ProviderInfoUl
                    h2="Board Certification"
                    listArray={boardCertification}
                    classes={{ mb: 1.06, lineHeight: 'normal' }}
                  />

                  <HR />
                </div>
              </div>

              <HR />

              <div className="sm:border border-t-0 sm:border-[#EFEBDF] sm:basis-1/2">
                <div className="sm:border-b  sm:border-[#EFEBDF] sm:~px-4/8 sm:~py-5/10">
                  <ProviderInfoUl
                    h2="Focus Areas"
                    listArray={focusAreas}
                    classes={{ mb: 1.06, lineHeight: 'normal' }}
                  />
                </div>
                <div className="sm:~px-4/8 sm:~py-5/10">
                  <ProviderInfoUl
                    h2="Treatment Approaches"
                    listArray={treatmentApproaches}
                    classes={{ mb: 1.06, lineHeight: 'normal' }}
                  />
                </div>
              </div>
              <div className="sm:hidden">
                <ProviderInfoUl
                  h2="Education & Background"
                  listArray={educationAndBackground}
                  classes={{ mb: 1.31, lineHeight: 'normal' }}
                />
                <ProviderInfoUl
                  h2="Specialties"
                  listArray={specialties}
                  classes={{ mb: 1.06, lineHeight: 'normal' }}
                />
                <ProviderInfoUl
                  h2="Board Certification"
                  listArray={boardCertification}
                  classes={{ mb: 1.06, lineHeight: 'normal' }}
                />

                <HR />
              </div>
            </div>

            <div className="sm:~px-3/6 sm:~py-4/8">
              <h2 className="font-bold ~text-sm/xl ~mb-2/4">
                Reviews from Clients
              </h2>
              <Swiper modules={[Navigation, Pagination]}>
                <SwiperSlide>
                  <div className="leading-6 grid gap-6">
                    <p>
                      “provider actually cares about your needs, your unique
                      situation, and how your meds are affecting you. He takes
                      the time to check in with care in check-ups, and isn't a
                      5-minute “hi, here's a prescription, bye,” kind of
                      practitioner, which is rare and VERY appreciated. I would
                      recommend to anyone looking for long-lasting care that
                      feels compassionate and well-informed!”
                    </p>
                    <p>
                      “Dr. Rahman was very kind, thoughtful and helpful. Highly
                      recommend!”
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="leading-6 grid gap-6">
                    <p>
                      “provider actually cares about your needs, your unique
                      situation, and how your meds are affecting you. He takes
                      the time to check in with care in check-ups, and isn't a
                      5-minute “hi, here's a prescription, bye,” kind of
                      practitioner, which is rare and VERY appreciated. I would
                      recommend to anyone looking for long-lasting care that
                      feels compassionate and well-informed!”
                    </p>
                    <p>
                      “Dr. Rahman was very kind, thoughtful and helpful. Highly
                      recommend!”
                    </p>
                  </div>
                </SwiperSlide>

                <HR />

                <ReviewsNavigation />
              </Swiper>
            </div>
          </div>

          <div className="mt-12 ~mb-[6.13rem]/[11.44rem]">
            <div className="flex gap-6 flex-col items-center sm:flex-row sm:justify-end">
              <button className="rounded-3xl font-bold border border-orenda-purple w-full max-w-[18.75rem] py-[0.625rem] px-4 text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors">
                Write a Review
              </button>
              <button className="rounded-3xl font-bold border border-orenda-purple w-full max-w-[18.75rem] py-[0.625rem] px-4 text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors">
                Book
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default ProviderInfo;
