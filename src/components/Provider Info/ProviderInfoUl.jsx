import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';

const ProviderInfoUl = ({ h2, listArray, classes }) => {
  const effectiveListArray =
    listArray && listArray.length > 0
      ? listArray
      : [h2 === 'Treatment Approaches' ? 'Psychodynamic' : 'Nil'];

  const moreItems = listArray?.slice(8);
  const [showMoreItems, setShowMoreItems] = useState(false);
  const showMoreButton = useRef(null);

  useGSAP(() => {
    if (moreItems)
      gsap.from(showMoreButton?.current, {
        opacity: 0,
        xPercent: -100,
        duration: 0.7
      });
  }, [showMoreItems]);

  return (
    <div>
      <h2 className='~text-sm/xl font-bold ~mb-2/4'>{h2}</h2>
      <div
        className={`md:max-h-[28rem] ${
          showMoreItems ? 'overflow-y-auto' : 'overflow-y-hidden'
        } scrollbar-thin scrollbar-thumb-[#ccc] `}
      >
        <ul className={`list-image-dot ps-4 ~space-y-2/[1.06rem]`}>
          {effectiveListArray.slice(0, 8).map((item) => {
            if (h2 === 'Education') {
              item = `${item.school}, Certificate in ${item.course}`;
            }
            return (
              <li
                className={`~mb-4/[${classes?.mb}rem] leading-normal ~ps-1.5/3 ~text-sm/lg text-left`}
                key={item}
              >
                {item}
              </li>
            );
          })}
          {moreItems?.length > 0 && !showMoreItems && (
            <button
              ref={showMoreButton}
              onClick={() => setShowMoreItems(true)}
              className='~text-sm/lg font-semibold hover:underline ~ps-1.5/3 text-[#333] italic'
            >
              Show more
            </button>
          )}
        </ul>
        <div
          className={`grid overflow-hidden ease-in-out transition-all duration-700 ~mt-2/[1.06rem] ${
            showMoreItems
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <ul className='list-image-dot ps-4 overflow-y-hidden ~space-y-2/[1.06rem]'>
            {moreItems?.map((item) => {
              if (h2 === 'Education') {
                item = `${item.school}, Certificate in ${item.course}`;
              }
              return (
                <li
                  className={`~mb-4/[${classes?.mb}rem] leading-normal ~ps-1.5/3 ~text-sm/lg text-left`}
                  key={item}
                >
                  {item}
                </li>
              );
            })}
            <button
              onClick={() => setShowMoreItems(false)}
              className='~text-sm/lg font-semibold hover:underline ~ps-1.5/3 text-[#333] italic'
            >
              Show less
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProviderInfoUl;
