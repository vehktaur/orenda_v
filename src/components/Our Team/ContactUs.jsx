import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const container = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.group',
          start: 'top 75%'
        }
      });

      tl.current
        .from('h2', {
          opacity: 0,
          y: 100
        })
        .from('button', {
          opacity: 0,
          y: 100
        });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-dotted bg-[#f6f7fc] bg-cover pt-8 ~pb-[3.22rem]/16"
    >
      <div className="px-5 overflow-y-hidden">
        <h2 className="heading ~text-lg/[2rem] mt-4 ~mb-4/6">
          Have any Question?
        </h2>
        <Link to="/contact-us">
          <button className="flex items-center justify-center bg-transparent hover:border-none transition-colors text-orenda-purple hover:text-white border border-orenda-purple px-4 py-2 font-semibold rounded-[2.5rem] w-full ~max-w-[16.75rem]/[25rem] mx-auto text-[1.125rem] overflow-hidden group z-[1] relative">
            <span className="block absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ContactUs;
