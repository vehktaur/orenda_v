import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import executives from '../../data/executives';
import { Link } from 'react-router-dom';

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
    <div ref={container} className='px-5 sm:~px-8/12 ~pt-8/12 ~pb-24/36'>
      <div className='max-w-[70rem] mx-auto'>
        <h2 className='heading ~mb-8/12'>Executive Team</h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 ~gap-4/8'>
          {executives.map((executive) => (
            <div
              className='rounded-2xl overflow-hidden max-w-64 mx-auto'
              key={executive.name}
            >
              <div className='~h-[15rem]/[18rem] w-full rounded-2xl overflow-hidden max-h-[21rem] bg-gray-50'>
                <img
                  className='size-full object-cover'
                  src={executive.image}
                  alt={executive.name}
                />
              </div>
              <div className='px-2 py-5 pt-2'>
                <h3 className='font-medium ~text-base/lg'>{executive.name}</h3>
                <p className='flex gap-2 items-center mt-1 mb-2'>
                  <span className='size-2 fill-orenda-green'>
                    <svg
                      width='8'
                      height='8'
                      viewBox='0 0 8 8'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle id='Ellipse 263' cx='4' cy='4' r='4' />
                    </svg>
                  </span>
                  <span className='~text-xs/sm font-open-sans'>
                    {executive.position}
                  </span>
                </p>

                <p className='text-justify text-sm line-clamp-5'>
                  {executive.bio}
                </p>

             
                  <Link
                    className='font-medium ~text-sm block mt-1'
                    to={`/executive/${executive.name}`}
                  >
                    Read more
                  </Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExecutiveTeam;
