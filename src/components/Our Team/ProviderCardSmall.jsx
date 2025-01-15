import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import Button from "../ui/custom-button";

const ProviderCard = ({ provider, setProvidersData }) => {
  const showStatesLicensed = (states) => {
    if (states && states.length === 1) {
      return `${states[0]}`;
    } else if (states && states.length === 2) {
      return `${states[0]} & ${states[1]}`;
    } else if (states && states.length > 2) {
      return `${states[0]}, ${states[1]} & more.`;
    } else {
      return "Nil";
    }
  };

  const showAgesSeen = (agesSeen) => {
    if (agesSeen) {
      return agesSeen.map((category, index, array) => {
        const divider = index === array.length - 1 ? "." : ", ";

        if (category === "Children") {
          return `${category} (<13 yrs)${divider}`;
        } else if (category === "Teens") {
          return `${category} (13-17 yrs)${divider}`;
        } else if (category === "Adults") {
          return `${category} (18-64 yrs)${divider}`;
        } else if (category === "Seniors") {
          return `${category} (65+ yrs)${divider}`;
        } else {
          return `${category}${divider}`;
        }
      });
    } else {
      return "Nil";
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
              : { ...oldProvider, mobileOverlay: false },
          ),
        );
      }}
      onMouseLeave={() =>
        setProvidersData((prevProviders) =>
          prevProviders.map((oldProvider) => ({
            ...oldProvider,
            mobileOverlay: false,
          })),
        )
      }
      className={`card__shadow relative flex h-[27.25rem] w-full max-w-[18.625rem] cursor-pointer flex-col rounded-md pb-[0.94rem] md:h-[unset]`}
    >
      {/* Card Overlay */}
      <div
        className={`absolute inset-0 flex flex-col gap-1 bg-black px-3 py-4 text-white opacity-0 transition-opacity duration-1000 md:visible md:animate-none md:hover:opacity-100 ${
          provider?.mobileOverlay
            ? "flex animate-fadeIn md:opacity-0"
            : "invisible md:flex"
        } cursor-pointer justify-between rounded-md`}
      >
        <div className={`grid gap-2`}>
          <h3 className="font-semibold">About Provider</h3>
          <p className={`line-clamp-[9] overflow-hidden text-[0.85rem]`}>
            {provider?.provider_description.replace(/(\.\n|\n)/g, (match) => {
              return match === ".\n" ? ".\n\n" : " ";
            })}
          </p>
        </div>
        <div className={`grid gap-2`}>
          <Button
            link
            target="_blank"
            to={provider?.booking_link}
            className="border-white px-2 py-1 text-center text-sm font-medium text-white hover:text-black"
            hoverClass="bg-white"
          >
            Book now
          </Button>
          <div className="flex justify-center">
            <Link
              className="text-sm font-semibold hover:underline"
              to={`/provider/${provider.provider_name}`}
            >
              See Profile
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`flex h-[13.25rem] items-end justify-center overflow-hidden rounded-t-md bg-[#f1f1f1]`}
      >
        <img
          className="block size-full object-cover object-top"
          src={provider?.provider_image_url}
          alt={provider?.provider_name}
          width={100}
          height={100}
        />
      </div>
      <div className={`flex flex-1 flex-col px-3`}>
        <p className={`mt-2 font-dm-sans text-xs font-medium`}>
          {provider?.provider_code}
        </p>
        <h3 className={`py-1 font-open-sans font-bold ~text-base/lg`}>
          {provider?.provider_name}
        </h3>
        <div className="h-[3.7rem] rounded-[0.25rem] bg-[#f5f5f5] px-1 pb-2 pt-1">
          <p className="pb-[1px] font-dm-sans text-[0.7rem] font-medium text-[#6A6A6A]">
            Ages seen
          </p>
          <p className={`font-open-sans text-[0.7rem]`}>
            {showAgesSeen(provider?.age_group)}
          </p>
        </div>
        <div className="mt-auto pt-[0.62rem]">
          {/* <h3 className="font-medium font-dm-sans text-[#6A6A6A] text-[0.8rem]">
            States Licensed
          </h3>
          <p className={`text-xs font-medium font-dm-sans`}>
            {showStatesLicensed(provider?.licensed_states)}
          </p> */}
          <h3 className="flex items-center gap-1 font-dm-sans text-[0.8rem] font-medium text-[#6A6A6A]">
            States Licensed
            <MdLocationPin className="-mt-[2px] size-[0.85rem] flex-shrink-0 font-bold text-orenda-green" />
          </h3>
          <p
            className={`flex items-center gap-1 font-dm-sans text-xs font-medium`}
          >
            <span>{showStatesLicensed(provider?.licensed_states)}</span>
          </p>
        </div>
        <div className="flex justify-between gap-3 pt-2">
          <a
            target="_blank"
            href={provider?.booking_link}
            className={`ms-auto block w-full min-w-[7.5rem] rounded-3xl bg-orenda-purple py-2 text-center font-open-sans text-xs text-white ~px-2/3 md:min-w-[2.81rem] xl:min-w-fit`}
          >
            Book online
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProviderCard;
