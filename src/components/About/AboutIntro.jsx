import { LazyLoadImage } from 'react-lazy-load-image-component';
import about_skyscraper from '../../assets/about_skyscraper.png';
import about_skyscraper_small from '../../assets/about_skyscraper-small.png';

const AboutIntro = () => {
  return (
    <div className="px-5 sm:~px-8/12">
      <div className="max-w-7xl mx-auto my-12 md:flex md:justify-between md:gap-8 py-[2.5rem]/[7.22rem]">
        <h1 className="md:max-w-[35.875rem] heading ~mb-5/7 md:hidden">
          Medication Management and Therapy at Your Convenience
        </h1>
        <div className="mx-auto max-w-[30rem] md:max-w-[43.125rem] md:order-last flex-shrink-[1.1]">
          <LazyLoadImage
            effect="blur"
            className="w-full"
            src={about_skyscraper}
            placeholderSrc={about_skyscraper_small}
            width={100}
            height={100}
            wrapperProps={{
              style: {transitionDelay: "0.1s"},
          }}
            alt="Management buildings"
          />
        </div>
        <div className="md:grid content-start">
          <h1 className="md:block hidden md:max-w-[35.875rem] heading md:~mb-0/7 md:text-left">
            Medication Management and Therapy at Your Convenience
          </h1>
          <p className="max-w-[35rem] mx-auto md:mx-0 md:max-w-[31.125rem] mt-4 md:mt-0  sm:text-center md:text-justify">
            We believe in providing compassionate and comprehensive mental
            health care to our clients, and we recognize that each person is
            unique and requires personalized care. We understand that seeking
            therapy can be a significant step towards healing and personal
            growth. Our dedicated team of experienced therapists is here to
            support you on your journey to emotional well-being.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutIntro;
