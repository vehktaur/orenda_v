import { LazyLoadImage } from 'react-lazy-load-image-component';
import streets_mission from '../../assets/streets_mission.jpg';
import streets_mission_small from '../../assets/streets_mission-small.jpg';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const tl = useRef(null);
  const borderTL = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.mission_title',
        start: 'top 80%'
      }
    });
    borderTL.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.mission_title',
        start: 'top 80%'
      },
      delay: 0.8
    });

    borderTL.current
      .from('#mission', {
        borderLeftWidth: 0,
        borderLeftColor: 'transparent'
      })
      .from('#mission', {
        borderTopWidth: 0,
        borderTopColor: 'transparent'
      })
      .from('#mission', {
        borderRightWidth: 0,
        borderRightColor: 'transparent'
      })
      .from('#mission', {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent'
      });

    tl.current
      .from('.mission_title', {
        opacity: 0,
        yPercent: 90
      })
      .from('.mission_img', {
        scale: 0.8,
        opacity: 0,
        ease: 'back'
      })
      .from(
        '.mission_text',
        {
          opacity: 0,
          yPercent: -50,
          ease: 'back'
        },
        '-=0.4'
      );
  }, []);

  return (
    <div
      id="mission"
      className="max-w-[80rem] mx-auto ~pt-2/[5.25rem] pb-[1.37rem] border border-[#E7DAFF] rounded-b-2xl ~mt-10/16 px-5 sm:~px-6/12"
    >
      <div className="max-w-[74rem] mx-auto">
        <h2 className="sm:hidden heading mb-4 mission_title">Our Mission</h2>
        <div className="sm:flex sm:justify-between sm:items-center ~gap-8/12">
          <div className="sm:order-last mission_img">
            <LazyLoadImage
              effect="blur"
              className="w-full object-cover max-w-[32.25rem] mx-auto sm:mx-0"
              src={streets_mission}
              placeholderSrc={streets_mission_small}
              width={150}
              height={100}
              wrapperProps={{
                style: { transitionDelay: '0.1s' }
              }}
              alt="Our Mission Img"
            />
          </div>
          <div className=" flex-shrink-[1.1]">
            <h2 className="heading mb-4 sm:text-justify hidden sm:block mission_title">
              Our Mission
            </h2>
            <div className="overflow-hidden">
              <p className="mt-4 sm:max-w-[37.2rem] mission_text">
                Our mission is to provide a safe and supportive environment
                where individuals can explore their thoughts, feelings, and
                experiences without judgment. We strive to empower our patients
                to develop coping skills, build resilience, and enhance their
                overall quality of life. At Orenda, we are committed to
                promoting mental health awareness and reducing the stigma
                associated with seeking help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mission;
