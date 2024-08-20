import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExecutiveTeam = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from('h2', {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: 'h2',
          start: 'top 65%'
        }
      });
    },
    { dependencies: [], scope: container }
  );
  return (
    <div ref={container} className="px-5 sm:~px-8/12 ~pt-8/12 ~pb-24/36">
      <div className="max-w-[70rem] mx-auto">
        <h2 className="heading">Executive Team</h2>
      </div>
    </div>
  );
};
export default ExecutiveTeam;
