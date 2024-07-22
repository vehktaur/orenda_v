import { Link } from 'react-router-dom';

const ProviderCardTest = ({ provider, index }) => {
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
    <div className=" w-full rounded-md relative flex flex-col max-w-[18rem] overflow-hidden pb-[0.94rem] min-w-[18.625rem] h-[23.5rem]">
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-1000 text-white flex flex-col gap-1 px-3 py-4 justify-between rounded-md cursor-pointer">
        <div className={`grid gap-2`}>
          <h3 className="font-semibold">About Provider</h3>
          <p className="overflow-hidden text-[0.85rem] line-clamp-[9]">
            {provider?.about}
          </p>
        </div>
        <div className="grid gap-2">
          <a
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
      <div className="bg-[#f1f1f1] ~h-[9.5rem]/[7.25rem] flex items-end justify-center">
        <img
          className="size-[90%] block object-contain"
          src={provider?.image}
          alt={provider?.name}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col flex-1 px-3">
        <p className="text-xs mt-2 font-medium font-dm-sans">
          {provider?.credentials}
        </p>
        <h3 className="~text-base/lg font-bold font-open-sans py-1">
          {provider?.name}
        </h3>
        <div className="pt-1 px-1 pb-2 bg-[#f5f5f5] rounded-[0.25rem]">
          <p className="text-[0.8rem] font-medium font-dm-sans text-[#6A6A6A] pb-1">
            Ages seen
          </p>
          <p className="text-[0.7rem] font-open-sans">
            {showAgesSeen(provider?.agesSeen)}
          </p>
        </div>
        <div className="pt-[0.62rem] mt-auto">
          <h3 className="font-medium font-dm-sans text-[#6A6A6A] text-[0.8rem]">
            States Licensed
          </h3>
          <p className="font-medium font-dm-sans text-xs">
            {showStatesLicensed(provider?.statesLicensed)}
          </p>
        </div>
        <div className="flex justify-between pt-4 gap-3">
          {provider?.availability && (
            <span className="font-dm-sans rounded-lg grid place-items-center border border-[#E1EEE4] bg-[#F0FDF3] text-nowrap p-1 px-1.5 text-[0.7rem]">
              {provider?.availability}
            </span>
          )}
          <a
            href={provider?.bookingLink}
            className="w-fit block ms-auto rounded-3xl text-white text-xs text-center bg-orenda-purple md:min-w-[2.81rem] xl:min-w-fit font-open-sans py-2 min-w-[7.5rem] ~px-2/3"
          >
            Book online
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProviderCardTest;
