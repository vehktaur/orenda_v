import providersData from '../../data/providersData';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ProvidersInAbout = () => {
  const numImages = 20;

  const [indices, setIndices] = useState(
    Array.from({ length: numImages }, (_, i) => i)
  );

  let image = useRef(null);

  const { contextSafe } = useGSAP();
  const animateOpacity = contextSafe(() => {
    gsap.fromTo(
      '.provider__images',
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        ease: 'slow(0.7,0.7,false)',
        stagger: {
          amount: 0.5,
          from: 'edges',
          grid: 'auto',
          ease: 'slow(0.1,0.1,false)'
        }
      }
    );
  });

  useEffect(() => {
    // Function to update indices
    const rotateImages = () => {
      animateOpacity();
      setIndices((prevIndices) =>
        prevIndices.map((index) => (index + numImages) % providersData.length)
      );
    };

    // Set interval to update indices every 2 seconds
    const interval = setInterval(rotateImages, 7000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="heading mb-4">Meet Our Providers</h2>
        <p className="~mt-4/6 ~mb-6/[3.25rem] max-w-[65.75rem] mx-auto text-center">
          We believe in providing compassionate and comprehensive mental health
          care to our clients, and we recognize that each person is unique and
          requires personalized care. We understand that seeking therapy can be
          a significant step towards healing and personal growth. Our dedicated
          team of experienced therapists is here to support you on your journey
          to emotional well-being.
        </p>
        <div className="container mx-auto ~p-0/4 max-w-[67.75rem]">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5">
            {indices.map((index, i) => (
              <div
                key={i}
                className="bg-[#F1F1F1] ~xs/xl:~size-[3.2rem]/[5.625rem] rounded-lg overflow-hidden flex flex-col justify-end"
              >
                <img
                  ref={image}
                  src={providersData[index].image}
                  alt={`Provider ${index}`}
                  className="provider__images size-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProvidersInAbout;
