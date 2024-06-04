import { Navigation, Pagination } from 'swiper/modules';
import { teamData } from '../../data/teamData';
import NavButtons from './NavButtons';
import TeamMemberCard from './TeamMemberCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Team = ({ itemsPerPage }) => {
  const numberOfSlides = Math.ceil(teamData.length / itemsPerPage);
  return (
    <div className="px-5 py-8 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading mb-[4.81rem]">Meet Our Team</h2>
        <div className="md:block hidden">
          <Swiper
            spaceBetween={50}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="grid grid-cols-4 gap-4 items-center justify-center">
                {teamData.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
          <NavButtons
            itemsPerPage={itemsPerPage}
            numberOfSlides={numberOfSlides}
          />
        </div>
        <div className="md:hidden">
          <Swiper
            slidesPerView={2}
            breakpoints={{
                400: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            spaceBetween={50}
            modules={[Pagination]}
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.image}>
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
