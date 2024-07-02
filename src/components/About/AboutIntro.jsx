import { LazyLoadImage } from 'react-lazy-load-image-component';
import about_skyscraper from '../../assets/about_skyscraper.png';
import about_skyscraper_small from '../../assets/about_skyscraper-small.png';

const AboutIntro = () => {
  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto my-12 sm:flex sm:justify-between sm:gap-6 py-[2.5rem]/[7.22rem]">
        <h1 className="sm:max-w-[35.875rem] heading ~mb-5/7 sm:hidden">
          Medication Management and Therapy at Your Convenience
        </h1>
        <div className="mx-auto max-w-[43.125rem] sm:order-last">
          <LazyLoadImage
            effect="blur"
            className="w-full bg-[]"
            src={about_skyscraper}
            placeholderSrc={about_skyscraper_small}
            wrapperProps={{
              style: {transitionDelay: "0.1s"},
          }}
            alt="Management buildings"
          />
        </div>
        <div className="sm:grid content-start">
          <h1 className="sm:block hidden sm:max-w-[35.875rem] heading ~mb-5/7 sm:text-left">
            Medication Management and Therapy at Your Convenience
          </h1>
          <p className="sm:max-w-[31.125rem] mt-4 sm:mt-0">
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
