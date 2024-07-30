import { Autoplay, Keyboard } from 'swiper/modules';
import teamData from '../../data/teamData';
import NavButtons from './NavButtons';
import TeamMemberCard from './TeamMemberCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import TeamMembersSection from './TeamMembersSection';

const Team = ({ itemsPerPage }) => {
  const numberOfSlides = Math.ceil(teamData.length / itemsPerPage);
  const teamSwiperHanger = useRef();

  const [activeIndex, setActiveIndex] = useState(1);
  const handleSlideChange = (swiper) => {
    teamSwiperHanger?.current.scrollIntoView(true);
    setActiveIndex(swiper.activeIndex + 1);
  };

  return (
    <div className="px-5 md:~px-6/12 pb-8 pt-12 bg-[#f6f7fc] bg-dotted bg-cover">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading ~mb-12/[4.81rem]">Meet Our Team</h2>
        <div className="md:block hidden relative">
          <div
            ref={teamSwiperHanger}
            className="absolute -top-28 w-full invisible"
          ></div>
          <Swiper
            onSlideChange={handleSlideChange}
            spaceBetween={50}
            slidesPerView={1}
            autoHeight={true}
            keyboard={{
              enabled: true
            }}
            modules={[Keyboard]}
          >
            {teamData
              .reduce((slidesArray, member, index) => {
                const slideIndex = Math.floor(index / itemsPerPage);

                if (!slidesArray[slideIndex]) {
                  slidesArray[slideIndex] = [];
                }

                slidesArray[slideIndex].push(member);

                return slidesArray;
              }, [])
              .map((slide, index) => (
                <SwiperSlide spaceBetween={50} key={index}>
                  <TeamMembersSection slide={slide} />
                </SwiperSlide>
              ))}

            <div className="max-w-[13.7rem] ms-auto flex justify-end mt-8">
              <NavButtons
                activeIndex={activeIndex}
                numberOfSlides={numberOfSlides}
              />
            </div>
          </Swiper>
        </div>
        <div className="md:hidden">
          <Swiper
            autoplay={{
              delay: 2000
            }}
            slidesPerView="auto"
            spaceBetween={25}
            loop={true}
            modules={[Autoplay]}
          >
            {teamData.map((member, index) => (
              <SwiperSlide style={{ width: '150px' }} key={index + 50}>
                <TeamMemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Team;
