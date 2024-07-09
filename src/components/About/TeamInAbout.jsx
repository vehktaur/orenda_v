import teamData from '../../data/teamData';
import { useState, useRef, createRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const TeamInAbout = () => {
  const numImages = 10;

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
    let newIndex = Math.floor(Math.random() * teamData.length);
    if (navigator.onLine)
      setIndices((prevIndices) => {
        if (teamData.length >= numImages) {
          while (prevIndices.includes(newIndex)) {
            newIndex = (newIndex + 1) % teamData.length;
          }
        }
        const newIndices = [...prevIndices];
        newIndices[randomIndex] = newIndex;
        return newIndices;
      });
  };

  const startInterval = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(imageShuffle, 5000);
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
  }, [teamData.length]);

  return (
    <div className="mb-[5rem] text-center px-5 sm:~px-8/12">
      <div className="max-w-[67.75rem] mx-auto ">
        <h2 className="heading ~mb-6/8">Meet The Team</h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3 justify-items-center">
          {indices.map((index, i) => {
            const member = teamData[index];
            return (
              <div
                key={member.name}
                className="rounded-lg overflow-hidden ~xs/xl:~size-[4rem]/[5.625rem] bg-[#F1F1F1]"
              >
                <img
                  ref={itemsRef.current[i]}
                  className="w-full h-full object-cover"
                  src={member.image}
                  alt={`Team member ${index}`}
                  onLoad={() => {
                    animateOpacity(i);
                  }}
                  onError={() =>
                    console.log(`Provider image ${index} Didn't load`)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamInAbout;
