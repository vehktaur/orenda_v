import { useRef } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamMembersSection = ({ slide }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from('.grid > div', {
        opacity: 0,
        filter: 'blur(10px)',
        // xPercent: -100,
        rotateY: 180,
        stagger: 0.3,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%'
        }
      });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div
      ref={container}
      className="grid grid-cols-team gap-x-8 gap-y-12 justify-between items-stretch overflow-x-hidden"
    >
      {slide.map((member, index) => (
        <TeamMemberCard key={index + 50} member={member} />
      ))}
    </div>
  );
};
export default TeamMembersSection;
