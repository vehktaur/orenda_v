import { useRef, useState } from 'react';
import faq from '../../data/faq';
import Accordion from './Accordion';
import text from '../../assets/text.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FAQ = () => {
  const [FAQs, setFAQs] = useState(faq);
  const tl = useRef(null);
  const container = useRef(null);

  const setIsOpen = (question) => {
    setFAQs((prevFAQ) =>
      prevFAQ.map((faq) => ({
        ...faq,
        isOpen: faq.question === question ? !faq.isOpen : false
      }))
    );
  };

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.faq_title',
          start: 'top 70%'
        }
      });

      tl.current
        .from('.faq_title', {
          opacity: 0,
          y: 100
        })
        .from('.faqs > div', {
          rotateX: 90,
          stagger: 0.45,
          ease: 'back'
        })
        .from('.faq_last_text > p', {
          opacity: 0,
          y: 100,
          stagger: 0.2
        });
    },
    { dependencies: [], scope: container }
  );

  return (
    <div ref={container} className="px-5 ~pt-10/32 mb-10 text-justify">
      <div className="max-w-[48.88rem] mx-auto">
        <h1 className="heading ~mb-6/8 faq_title">
          Frequently Asked Questions
        </h1>
        <div className="~space-y-[1.12rem]/[1.25rem] font-open-sans faqs">
          {FAQs.map((faq) => (
            <Accordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
        <div className="font-bold text-center ~mt-8/10 faq_last_text">
          <p className="~text-base/lg">Can't find your question?</p>
          <p className="flex justify-center items-center gap-4 mt-4 ~text-sm/lg font-medium">
            <span className="flex items-center gap-2 mr-4">
              <a
                className="text-orenda-purple font-open-sans flex items-center gap-1"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M19.95 21.5C17.8667 21.5 15.8083 21.046 13.775 20.138C11.7417 19.23 9.89167 17.9423 8.225 16.275C6.55833 14.6077 5.271 12.7577 4.363 10.725C3.455 8.69233 3.00067 6.634 3 4.55C3 4.25 3.1 4 3.3 3.8C3.5 3.6 3.75 3.5 4.05 3.5H8.1C8.33333 3.5 8.54167 3.57933 8.725 3.738C8.90833 3.89667 9.01667 4.084 9.05 4.3L9.7 7.8C9.73333 8.06667 9.725 8.29167 9.675 8.475C9.625 8.65833 9.53333 8.81667 9.4 8.95L6.975 11.4C7.30833 12.0167 7.704 12.6123 8.162 13.187C8.62 13.7617 9.12433 14.316 9.675 14.85C10.1917 15.3667 10.7333 15.846 11.3 16.288C11.8667 16.73 12.4667 17.134 13.1 17.5L15.45 15.15C15.6 15 15.796 14.8877 16.038 14.813C16.28 14.7383 16.5173 14.7173 16.75 14.75L20.2 15.45C20.4333 15.5167 20.625 15.6377 20.775 15.813C20.925 15.9883 21 16.184 21 16.4V20.45C21 20.75 20.9 21 20.7 21.2C20.5 21.4 20.25 21.5 19.95 21.5ZM6.025 9.5L7.675 7.85L7.25 5.5H5.025C5.10833 6.18333 5.225 6.85833 5.375 7.525C5.525 8.19167 5.74167 8.85 6.025 9.5ZM14.975 18.45C15.625 18.7333 16.2877 18.9583 16.963 19.125C17.6383 19.2917 18.3173 19.4 19 19.45V17.25L16.65 16.775L14.975 18.45Z"
                    fill="#2E0086"
                  />
                </svg>
                Call
              </a>
              |
              <a
                className="text-orenda-purple font-open-sans flex items-center gap-1"
                href="#"
              >
                <img src={text} alt="text" />
                Text
              </a>
              |
              <a
                className="text-orenda-purple font-open-sans flex items-center gap-1"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                >
                  <path
                    d="M15 1.5H3C1.89543 1.5 1 2.39543 1 3.5V11.5C1 12.6046 1.89543 13.5 3 13.5H15C16.1046 13.5 17 12.6046 17 11.5V3.5C17 2.39543 16.1046 1.5 15 1.5Z"
                    stroke="#2E0086"
                    stroke-width="2"
                  />
                  <path
                    d="M1 4.5L8.106 8.053C8.3836 8.19172 8.68967 8.26393 9 8.26393C9.31033 8.26393 9.6164 8.19172 9.894 8.053L17 4.5"
                    stroke="#2E0086"
                    stroke-width="2"
                  />
                </svg>
                Email
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
