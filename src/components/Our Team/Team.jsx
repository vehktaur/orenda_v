import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import teamData from '../../data/teamData';
import NavButtons from './NavButtons';
import TeamMemberCard from './TeamMemberCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import TeamMembersSection from './TeamMembersSection';

const Team = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffSet] = useState(itemOffset + itemsPerPage);
  const numberOfSlides = Math.ceil(teamData.length / itemsPerPage);

  const nextSlide = () => {
    setItemOffset((prevOffset) => prevOffset + itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset + itemsPerPage);
  };
  const prevSlide = () => {
    setItemOffset((prevOffset) => prevOffset - itemsPerPage);
    setEndOffSet((prevOffset) => prevOffset - itemsPerPage);
  };

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex > swiper.previousIndex) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div className="px-5 md:~px-6/12 py-8 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading ~mb-12/[4.81rem]">Meet Our Team</h2>
        <div className="md:block hidden">
          <Swiper
            onSlideChange={handleSlideChange}
            spaceBetween={50}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            autoHeight={true}
          >
            {[...Array(numberOfSlides)].map((_, index) => (
              <SwiperSlide spaceBetween={50} key={index}>
                <TeamMembersSection
                  itemOffset={itemOffset}
                  endOffset={endOffset}
                />
              </SwiperSlide>
            ))}

            <div className="max-w-[13.7rem] ms-auto flex justify-end mt-8">
              <NavButtons numberOfSlides={numberOfSlides} />
            </div>
          </Swiper>
        </div>
        <div className="md:hidden">
          <Swiper
            autoplay={{
              delay: 2000
            }}
            slidesPerView="auto"
            spaceBetween={50}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {teamData.map((member, index) => (
              <SwiperSlide style={{ width: 'auto' }} key={index + 50}>
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
