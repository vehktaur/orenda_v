import bipolar from '../../assets/bipolar.png';
import trauma from '../../assets/trauma.png';
import adhd from '../../assets/adhd.png';
import panic from '../../assets/panic.png';
import depression from '../../assets/depression.png';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Treat = () => {
  const ailments = [
    { image: panic, text: 'Anxiety and Panic Disorders' },
    { image: adhd, text: 'Hyperactivity disorders (ADHD/ADD)' },
    { image: depression, text: 'Depression and mood Disorders' },
    { image: trauma, text: 'Trauma and PTSD' },
    { image: bipolar, text: 'Bipolar Disorder' },
    { image: trauma, text: 'Borderline Personality Disorder' },
    { image: depression, text: 'Eating and Sleeping Disorders' },
    { image: panic, text: 'Relationship Issues' },
    { image: depression, text: 'Stress Management' },
    { image: adhd, text: 'Life changes and Transitions' },
    { image: adhd, text: 'Grief and Loss' },
    { image: depression, text: 'LGBTQ+ Issues' },
    { image: trauma, text: 'Self-esteem and Identity Exploration' },
    { image: panic, text: 'Parenting and Family Dynamics' },
    { image: trauma, text: 'Work-related Stress and Burnout' }
  ];

  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.treat_title',
        start: 'top 80%'
      }
    });

    tl.current
      .from('treat_title', {
        opacity: 0,
        y: 100
      })
      .from('.treat_text', {
        opacity: 0,
        y: 150
      })
      .from('.ailment', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.3
      });
  }, []);
  return (
    <div className="treat-container ~/sm:~px-1/5 sm:~px-8/12">
      <div className="treat-wrapper max-w-7xl mx-auto py-16">
        <div>
          <h1 className="heading mb-4 treat_title">What We Treat</h1>
          <p className="px-2 font-body text-center treat_text">
            We offer therapy and medication management for a wide range of
            mental health concerns, including:
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-6 justify-items-center py-8 max-w-[61.25rem] mx-auto">
          {ailments.map((ailment) => (
            <div
              key={ailment.text}
              className="flex flex-col border rounded justify-center items-center p-4 gap-4 w-full max-h-[10rem] sm:max-h-[unset] ailment"
            >
              <img
                className="w-full ~max-w-[3.38rem]/[5.75rem] object-scale-down"
                src={ailment.image}
                alt=""
              />
              <p className="font-bold text-center ~text-sm/base">
                {ailment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treat;
