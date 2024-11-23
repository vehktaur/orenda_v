import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

const ProviderCard = ({ provider, setProvidersData }) => {
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
      onClick={(event) => {
        event.stopPropagation();
        setProvidersData((prevProviders) =>
          prevProviders.map((oldProvider) =>
            oldProvider.provider_name === provider.provider_name
              ? { ...oldProvider, mobileOverlay: true }
              : { ...oldProvider, mobileOverlay: false }
          )
        );
      }}
      onMouseLeave={() =>
        setProvidersData((prevProviders) =>
          prevProviders.map((oldProvider) => ({
            ...oldProvider,
            mobileOverlay: false
          }))
        )
      }
      className={`pb-[0.94rem] max-w-[18.625rem] h-[27.25rem] md:h-[unset] w-full rounded-md relative card__shadow flex flex-col cursor-pointer`}
    >
      <div
        className={`absolute inset-0 bg-black opacity-0 md:hover:opacity-100 transition-opacity duration-1000 text-white flex flex-col gap-1 px-3 py-4 md:visible md:animate-none ${
          provider?.mobileOverlay
            ? 'flex animate-fadeIn md:opacity-0'
            : 'md:flex invisible'
        } justify-between rounded-md cursor-pointer`}
      >
        <div className={`grid gap-2`}>
          <h3 className='font-semibold'>About Provider</h3>
          <p className={`line-clamp-[9] overflow-hidden text-[0.85rem]`}>
            {provider?.provider_description.replace(/(\.\n|\n)/g, (match) => {
              return match === '.\n' ? '.\n\n' : ' ';
            })}
          </p>
        </div>
        <div className={`grid gap-2`}>
          <a
            target='_blank'
            href={provider?.booking_link}
            className='border block rounded-3xl px-2 py-1 text-[0.875rem] hover:text-black transition-colors mt-6 font-medium text-center relative overflow-hidden group z-[1]'
          >
            <span className='block absolute -top-[1px] -left-[1.3px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-white transition-all duration-500 rounded-3xl z-[-1] border' />
            Book now
          </a>
          <div className='flex justify-center'>
            <Link
              className='text-[0.875rem] font-semibold hover:underline'
              to={`/provider/${provider.provider_name}`}
            >
              See Profile
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#f1f1f1] h-[13.25rem] flex items-end justify-center rounded-t-md overflow-hidden`}
      >
        <img
          className='size-full block object-cover object-top'
          src={provider?.provider_image_url}
          alt={provider?.provider_name}
          width={100}
          height={100}
        />
      </div>
      <div className={`flex flex-col flex-1 px-3`}>
        <p className={`text-xs mt-2 font-medium font-dm-sans`}>
          {provider?.provider_code}
        </p>
        <h3 className={`~text-base/lg font-bold font-open-sans py-1`}>
          {provider?.provider_name}
        </h3>
        <div className='pt-1 px-1 pb-2 bg-[#f5f5f5] h-[3.7rem] rounded-[0.25rem]'>
          <p className='text-[0.7rem] font-medium font-dm-sans text-[#6A6A6A] pb-[1px]'>
            Ages seen
          </p>
          <p className={`text-[0.7rem] font-open-sans`}>
            {showAgesSeen(provider?.age_group)}
          </p>
        </div>
        <div className='pt-[0.62rem] mt-auto'>
          {/* <h3 className="font-medium font-dm-sans text-[#6A6A6A] text-[0.8rem]">
            States Licensed
          </h3>
          <p className={`text-xs font-medium font-dm-sans`}>
            {showStatesLicensed(provider?.licensed_states)}
          </p> */}
          <h3 className='font-medium font-dm-sans text-[#6A6A6A] text-[0.8rem] flex gap-1 items-center'>
            States Licensed
            <MdLocationPin className='text-orenda-green flex-shrink-0 size-[0.85rem] font-bold -mt-[2px]' />
          </h3>
          <p
            className={`text-xs font-medium font-dm-sans flex gap-1 items-center`}
          >
            <span>{showStatesLicensed(provider?.licensed_states)}</span>
          </p>
        </div>
        <div className='flex justify-between pt-2 gap-3'>
          <a
            target='_blank'
            href={provider?.booking_link}
            className={`w-full block ms-auto rounded-3xl text-white text-xs text-center bg-orenda-purple md:min-w-[2.81rem] xl:min-w-fit font-open-sans py-2 min-w-[7.5rem] ~px-2/3`}
          >
            Book online
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProviderCard;
