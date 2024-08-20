import { LazyLoadImage } from 'react-lazy-load-image-component';
import about_skyscraper from '../../assets/about_skyscraper.png';
import about_skyscraper_small from '../../assets/about_skyscraper-small.png';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  const tl = useRef(null);
  const heading = useRef(null);
  const mdHeading = useRef(null);
  const image = useRef(null);
  const text = useRef(null);

  useGSAP(() => {
    gsap.defaults({ duration: 0.7 });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '#about'
      },
      delay: 0
    });

    tl.current
      .fromTo(
        [heading.current, mdHeading.current],
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          opacity: 0,
          y: 100,
          duration: 1
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          opacity: 1,
          y: 0,
          ease: 'back(0.7)',
          duration: 1
        }
      )
      .from(
        image.current,
        {
          scale: 0.8,
          opacity: 0,
          ease: 'back(3)',
          duration: 1
        },
        '-=0.5'
      )
      .from(
        text.current,
        {
          yPercent: -100,
          opacity: 0
        },
        '-=1.1'
      );
  }, []);

  return (
    <div id="about" className="px-5 sm:~px-8/12">
      <div className="max-w-7xl mx-auto my-12 md:flex md:justify-between md:gap-8 py-[2.5rem]/[7.22rem]">
        <div className="overflow-hidden">
          <h1
            ref={heading}
            className="md:max-w-[35.875rem] heading ~mb-5/7 md:hidden"
          >
            Medication Management and Therapy at Your Convenience
          </h1>
        </div>
        <div
          ref={image}
          className="mx-auto max-w-[30rem] md:max-w-[40rem] md:content-center md:order-last flex-shrink-[1.1]"
        >
          <LazyLoadImage
            effect="blur"
            className="w-full"
            src={about_skyscraper}
            placeholderSrc={about_skyscraper_small}
            width={120}
            height={100}
            wrapperProps={{
              style: { transitionDelay: '0.1s' }
            }}
            alt="Management buildings"
          />
        </div>
        <div className="md:grid content-start">
          <div className="overflow-hidden">
            <h1
              ref={mdHeading}
              className="md:block hidden md:max-w-[35.875rem] heading md:~mb-0/7 md:text-left"
            >
              Medication Management and Therapy at Your Convenience
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              ref={text}
              className="max-w-[35rem] mx-auto md:mx-0 md:max-w-[31.125rem] mt-4 md:mt-0  sm:text-center md:text-justify"
            >
              We believe in providing compassionate and comprehensive mental
              health care to our clients, and we recognize that each person is
              unique and requires personalized care. We understand that seeking
              mental health support can be a significant step towards healing and personal
              growth. Our dedicated team of experienced providers are here to
              support you on your journey to emotional and mental well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutIntro;
