import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProviderCard = ({ numberOfColumns, provider, index }) => {
  const showStatesLicensed = (states) => {
    if (states && states.length === 1) {
      return `${states[0]}`;
    } else if (states && states.length === 2) {
      return `${states[0]} & ${states[1]}`;
    } else if (states && states.length > 2) {
      return `${states[0]}, ${states[1]} & more.`;
    } else {
      return 'Nil';
    }
  };

  const showAgesSeen = (agesSeen) => {
    if (agesSeen) {
      return agesSeen.map((category, index, array) => {
        const divider = index === array.length - 1 ? '.' : ', ';

        if (category === 'Children') {
          return `${category} (<13 yrs)${divider}`;
        } else if (category === 'Teens') {
          return `${category} (13-17 yrs)${divider}`;
        } else if (category === 'Adults') {
          return `${category} (18-64 yrs)${divider}`;
        } else if (category === 'Seniors') {
          return `${category} (65+ yrs)${divider}`;
        } else {
          return `${category}${divider}`;
        }
      });
    } else {
      return 'Nil';
    }
  };

  return (
    <div
      className={`${
        numberOfColumns === 5
          ? 'max-w-[18rem] pb-[0.94rem] min-w-[18.625rem] h-[23.5rem] md:min-w-[unset] md:h-[unset]'
          : 'max-w-[20.7rem] pb-4'
      } w-full rounded-md relative card__shadow flex flex-col`}
    >
      <div
        className={`absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-1000 text-white flex flex-col ${
          numberOfColumns === 5 ? 'gap-1 px-3 py-4' : '~p-4/6'
        }
         justify-between rounded-md cursor-pointer`}
      >
        <div className={`grid ${numberOfColumns === 5 ? 'gap-2' : 'gap-4'}`}>
          <h3 className="font-semibold">About Provider</h3>
          <p
            className={`${
              numberOfColumns === 5
                ? 'line-clamp-[9]'
                : 'line-clamp-[10] md:line-clamp-[13]'
            } overflow-hidden text-[0.85rem]`}
          >
            {provider?.about}
          </p>
        </div>
        <div className={`grid ${numberOfColumns === 5 ? 'gap-2' : 'gap-4'}`}>
          <a
            target="_blank"
            href={provider?.bookingLink}
            className="border block rounded-3xl px-2 py-1 text-[0.875rem] hover:bg-white hover:text-black transition-colors mt-6 font-medium text-center"
          >
            Book now
          </a>
          <div className="flex justify-center">
            <Link
              className="text-[0.875rem] font-semibold hover:underline"
              to={`/provider/${index}`}
            >
              See Profile
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#f1f1f1] ${
          numberOfColumns === 5
            ? '~h-[9.5rem]/[7.25rem]'
            : '~h-[9.5rem]/[13.75rem]'
        } flex items-end justify-center rounded-t-md`}
      >
        <img
          className="size-[90%] block object-contain"
          src={provider?.image}
          alt={provider?.name}
          width={100}
          height={100}
        />
      </div>
      <div
        className={`flex flex-col flex-1 ${
          numberOfColumns === 5 ? 'px-3' : 'px-4'
        }`}
      >
        <p
          className={`${
            numberOfColumns === 5 ? 'text-xs mt-2' : 'text-sm ~mt-2/4'
          } font-medium font-dm-sans`}
        >
          {provider?.credentials}
        </p>
        <h3
          className={`~text-base/lg font-bold font-open-sans ${
            numberOfColumns === 5 ? 'py-1' : 'py-2'
          }`}
        >
          {provider?.name}
        </h3>
        <div className="pt-1 px-1 pb-2 bg-[#f5f5f5] rounded-[0.25rem]">
          <p className="text-[0.8rem] font-medium font-dm-sans text-[#6A6A6A] pb-1">
            Ages seen
          </p>
          <p
            className={`${
              numberOfColumns === 5 ? 'text-[0.7rem]' : 'text-xs'
            } font-open-sans`}
          >
            {showAgesSeen(provider?.agesSeen)}
          </p>
        </div>
        <div className="pt-[0.62rem] mt-auto">
          <h3 className="font-medium font-dm-sans text-[#6A6A6A] text-[0.8rem]">
            States Licensed
          </h3>
          <p
            className={`${
              numberOfColumns === 5 ? 'text-xs' : 'text-sm'
            } font-medium font-dm-sans`}
          >
            {showStatesLicensed(provider?.statesLicensed)}
          </p>
        </div>
        <div className="flex justify-between pt-4 gap-3">
          {provider?.availability && (
            <span
              className={`rounded-lg grid place-items-center border border-[#E1EEE4] bg-[#F0FDF3] text-nowrap ${
                numberOfColumns === 5
                  ? 'p-1 px-1.5 text-[0.7rem]'
                  : '~xl/2xl:~px-1.5/3 py-2 ~text-[0.625rem]/xs'
              } font-dm-sans`}
            >
              {provider?.availability}
            </span>
          )}
          <a
            target="_blank"
            href={provider?.bookingLink}
            className={`w-fit block ms-auto rounded-3xl text-white text-xs text-center bg-orenda-purple md:min-w-[2.81rem] xl:min-w-fit font-open-sans ${
              numberOfColumns === 5
                ? 'py-2 min-w-[7.5rem] ~px-2/3'
                : ' py-[0.62rem] min-w-[9rem] ~px-2/4'
            }`}
          >
            Book online
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProviderCard;
