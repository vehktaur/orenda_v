import { LazyLoadImage } from 'react-lazy-load-image-component';
import streets_mission from '../../assets/streets_mission.jpg';
import streets_mission_small from '../../assets/streets_mission-small.jpg';

const Mission = () => {
  return (
    <div className="max-w-[80rem] mx-auto ~pt-2/[5.25rem] pb-[1.37rem] border border-[#E7DAFF] rounded-b-2xl ~mt-10/16 px-5">
      <div className="max-w-[74rem] mx-auto">
        <h2 className="sm:hidden heading mb-4">Our Mission</h2>
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="sm:order-last">
            <LazyLoadImage
              effect="blur"
              className="w-full object-cover max-w-[32.25rem] mx-auto sm:mx-0"
              src={streets_mission}
              placeholderSrc={streets_mission_small}
              wrapperProps={{
                style: { transitionDelay: '0.1s' }
              }}
              alt="Our Mission Img"
            />
          </div>
          <div>
            <h2 className="heading mb-4 sm:text-justify hidden sm:block ">
              Our Mission
            </h2>
            <p className="mt-4 sm:max-w-[37.2rem]">
              Our mission is to provide a safe and supportive environment where
              individuals can explore their thoughts, feelings, and experiences
              without judgment. We strive to empower our patients to develop
              coping skills, build resilience, and enhance their overall quality
              of life. At Orenda, we are committed to promoting mental health
              awareness and reducing the stigma associated with seeking help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mission;
