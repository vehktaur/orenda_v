import providersData from '../../data/providersData';
import { useState, useRef, createRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ProvidersInAbout = () => {
  const numImages = 20;

  const [indices, setIndices] = useState(
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
          opacity: 0
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
    let newIndex = Math.floor(Math.random() * providersData.length);
    if (navigator.onLine)
      setIndices((prevIndices) => {
        if (providersData.length >= numImages) {
          while (prevIndices.includes(newIndex)) {
            newIndex = (newIndex + 1) % providersData.length;
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
  }, [providersData.length]);

  return (
    <div className="px-5 sm:~px-8/12">
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
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5 justify-items-center">
            {indices.map((index, i) => (
              <div
                key={i}
                className="bg-[#F1F1F1] ~xs/xl:~size-[4rem]/[5.625rem] rounded-lg overflow-hidden flex flex-col justify-end"
              >
                <img
                  ref={itemsRef.current[i]}
                  src={providersData[index].image}
                  alt={`Provider ${index}`}
                  className={`size-full object-contain`}
                  onLoad={() => {
                    animateOpacity(i);
                  }}
                  onError={() =>
                    console.log(`Provider image ${index} Didn't load`)
                  }
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
