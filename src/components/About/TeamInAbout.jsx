import teamData from '../../data/teamData';
import { useState, useRef, createRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import imgUnavailable from '../../assets/unavailable-image-icon.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    gsap.defaults({ duration: 0.7 });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.team_image',
        start: 'top 70%'
      }
    });

    tl.current
      .from('.about_team_title', {
        opacity: 0,
        y: 50
      })
      .from(
        '.team_image',
        {
          opacity: 0,
          x: 500,
          duration: 1.5,
          stagger: {
            amount: 1,
            grid: 'auto'
          }
        },
        '-=0.6'
      );
  }, []);

  return (
    <div className="mb-[5rem] text-center px-5 sm:~px-8/12">
      <div className="max-w-[67.75rem] mx-auto ">
        <h2 className="heading ~mb-6/8 about_team_title">Meet The Team</h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3 justify-items-center overflow-x-hidden">
          {indices.map((index, i) => {
            const member = teamData[index];
            return (
              <div
                key={i}
                className="rounded-lg overflow-hidden ~xs/xl:~size-[4rem]/[5.625rem] bg-[#F1F1F1] team_image"
              >
                <img
                  ref={itemsRef.current[i]}
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                  src={member.image}
                  alt={member.name}
                  onLoad={() => {
                    animateOpacity(i);
                  }}
                  onError={(event) => {
                    event.target.src = imgUnavailable;
                    event.onerror = null;
                    console.log(`${member.name} image didn't load`);
                  }}
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
