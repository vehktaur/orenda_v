import { useState, useRef, createRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import imgUnavailable from '../../assets/unavailable-image-icon.png';
import { useProviderImages } from '../../services/queries';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProvidersInAbout = () => {
  const providers = useProviderImages();
  const providerImages = providers.data;
  const numImages = 20;

  const [indices, setIndices] = useState(() =>
    Array.from({ length: numImages }, (_, i) => i)
  );

  const itemsRef = useRef([]);
  if (itemsRef.current.length !== numImages) {
    itemsRef.current = Array(numImages)
      .fill()
      .map(() => createRef());
  }

  const shuffledIndicesRef = useRef([]);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef(null);
  const tl = useRef(null);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const getNextIndex = () => {
    if (currentIndexRef.current >= shuffledIndicesRef.current.length) {
      shuffledIndicesRef.current = Array.from(
        { length: numImages },
        (_, i) => i
      );
      shuffleArray(shuffledIndicesRef.current);
      currentIndexRef.current = 0;
    }

    const newIndex = shuffledIndicesRef.current[currentIndexRef.current];
    currentIndexRef.current++;
    return newIndex;
  };

  const { contextSafe } = useGSAP();
  const animateOpacity = contextSafe((index) => {
    const element = itemsRef.current[index]?.current;
    if (element) {
      gsap.fromTo(
        element,
        {
          opacity: 0.3
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: 'slow(0.7,0.7,false)'
        }
      );
    }
  });

  const imageShuffle = () => {
    const randomIndex = getNextIndex();
    let newIndex = Math.floor(Math.random() * providerImages?.length);
    if (navigator.onLine)
      setIndices((prevIndices) => {
        if (providerImages?.length >= numImages) {
          while (prevIndices.includes(newIndex)) {
            newIndex = (newIndex + 1) % providerImages?.length;
          }
        }
        const newIndices = [...prevIndices];
        newIndices[randomIndex] = newIndex;
        return newIndices;
      });
  };

  const startInterval = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(imageShuffle, 3000);
    }
  };

  const clearIntervalFunc = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleOnlineStatus = () => {
    if (navigator.onLine) {
      startInterval();
    } else {
      clearIntervalFunc();
    }
  };

  useEffect(() => {
    handleOnlineStatus();
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      clearIntervalFunc();
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [providerImages?.length]);

  useGSAP(() => {
    gsap.defaults({ duration: 0.7 });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.providers_text',
        start: 'top 70%'
      }
    });

    tl.current
      .from('.providers_title', {
        y: -50,
        opacity: 0,
        ease: 'easeIn'
      })
      .from(
        '.providers_text',
        {
          y: 50,
          opacity: 0,
          ease: 'easeIn'
        },
        '-=0.3'
      );

    gsap.from('.providers_images', {
      scale: 0.5,
      y: 50,
      opacity: 0,
      ease: 'easeIn',
      duration: 1,
      scrollTrigger: {
        trigger: '.providers_images',
        start: 'top 70%'
      }
    });
  }, []);

  return (
    <div className="px-5 sm:~px-8/12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="heading mb-4 providers_title">Meet Our Providers</h2>
        <p className="~mt-4/6 ~mb-6/[3.25rem] max-w-[65.75rem] mx-auto text-center providers_text">
          Our team consists of licensed, board-certified Psychiatric & Mental
          Health Nurse Practitioners who are dedicated to providing
          compassionate and client-centered care in partnership with our
          dedicated HIPPA-certified support team. We are committed to ongoing
          professional development and staying abreast of the latest research
          and therapeutic techniques to ensure that our patients receive the
          highest standards of care. 
        </p>
        <div className="container mx-auto ~p-0/4 max-w-[67.75rem] providers_images">
          {!providers.isLoading && !providers.isError && (
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5 justify-items-center">
              {indices.map((index, i) => {
                const provider = providerImages?.[index] ?? {
                  image: imgUnavailable,
                  name: 'unavailable'
                };

                return (
                  <div
                    key={i}
                    className="bg-[#F1F1F1] ~xs/xl:~size-[4rem]/[5.625rem] rounded-lg overflow-hidden flex flex-col justify-end"
                  >
                    <img
                      ref={itemsRef.current[i]}
                      width={64}
                      height={64}
                      src={provider?.image}
                      alt={provider?.name}
                      className={`size-full object-contain`}
                      onLoad={() => {
                        animateOpacity(i);
                      }}
                      onError={(event) => {
                        event.target.src = imgUnavailable;
                        event.onerror = null;
                        console.log(`${provider?.name} image Didn't load`);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProvidersInAbout;
