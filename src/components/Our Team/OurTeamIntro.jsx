import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const OurTeamIntro = () => {
  const container = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        delay: 0.75,
        scrollTrigger: {
          trigger: container.current
        }
      });

      tl.current
        .from('h1', {
          opacity: 0,
          y: 100
        })
        .from('p', {
          opacity: 0,
          y: 100
        });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div
      ref={container}
      className="~mt-4/[5.5rem] px-5 sm:~px-10/12 overflow-y-hidden"
    >
      <h1 className="heading ~mb-2/4">Meet Our Providers</h1>
      <p className="text-justify ~w-[15rem]/full mx-auto text-black ~text-sm/xl max-w-[80rem]">
        We have assembled a team of over 70+ experienced, board-certified
        providers across various specialties to ensure you receive the best
        possible care. Our diverse team is dedicated to supporting your growth
        and well-being. If at any point you feel that another provider may
        better meet your needs, be rest assured that you can reach out to us and
        choose the provider that's right for you.
      </p>
    </div>
  );
};
export default OurTeamIntro;
