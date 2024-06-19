import providersData from '../../data/providersData';
import { Link } from 'react-router-dom';

const ProvidersSection = ({ itemOffset, endOffset, numberOfColumns }) => {
  const showStatesLicensed = (states) => {
    if (states.length === 1) {
      return `${states[0]}`;
    } else if (states.length === 2) {
      return `${states[0]} & ${states[1]}`;
    } else if (states.length > 2) {
      return `${states[0]}, ${states[1]} & more.`;
    } else {
      return '';
    }
  };

  const sectionProvidersData = providersData.slice(itemOffset, endOffset);

  let gridClasses = `grid auto-cols-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${
    numberOfColumns === 5
      ? 'gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      : '~gap-x-0/7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  } gap-y-10 justify-items-center items-center`;

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto mt-[4.94rem] lg:grid-cols-4">
        <div className={gridClasses}>
          {sectionProvidersData.map((provider) => {
            const index = providersData.findIndex(
              (obj) => obj.name === provider.name
            );
            return (
              <div
                className={`${
                  numberOfColumns === 5
                    ? 'max-w-[18rem] pb-[0.94rem]'
                    : 'max-w-[20.7rem] pb-4'
                } w-full rounded-md shadow relative`}
              >
                <div
                  className={`absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-1000 text-white flex flex-col ${
                    numberOfColumns === 5 ? 'gap-1 px-3 py-4' : '~p-4/6'
                  } justify-between rounded-md cursor-pointer`}
                >
                  <div
                    className={`grid ${
                      numberOfColumns === 5 ? 'gap-2' : 'gap-4'
                    }`}
                  >
                    <h3 className="font-semibold">About Provider</h3>
                    <p
                      className={`${
                        numberOfColumns === 5
                          ? 'line-clamp-[9]'
                          : 'line-clamp-[10] md:line-clamp-[13]'
                      } overflow-hidden text-[0.85rem]`}
                    >
                      {provider.about}
                    </p>
                  </div>
                  <div
                    className={`grid ${
                      numberOfColumns === 5 ? 'gap-2' : 'gap-4'
                    }`}
                  >
                    <button className="w-full border rounded-3xl px-2 py-1 text-[0.875rem] hover:bg-white hover:text-black transition-colors mt-6 font-medium">
                      Book now
                    </button>
                    <div className="flex justify-center">
                      <Link
                        className="text-[0.875rem] font-semibold hover:underline"
                        to={`/provider/${index}`}
                      >
                        More Info
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-[#f1f1f1] ${
                    numberOfColumns === 5
                      ? '~h-[9.5rem]/[7.25rem]'
                      : '~h-[9.5rem]/[13.75rem]'
                  } flex items-end justify-center`}
                >
                  <img
                    className="w-[80%] h-[90%] block object-contain"
                    src={provider.image}
                    alt={provider.name}
                  />
                </div>
                <div className={numberOfColumns === 5 ? 'px-3' : 'px-4'}>
                  <p
                    className={`${
                      numberOfColumns === 5 ? 'text-xs mt-2' : 'text-sm ~mt-2/4'
                    } font-medium font-dm-sans`}
                  >
                    {provider.credentials}
                  </p>
                  <h3
                    className={`~text-base/lg font-bold font-open-sans ${
                      numberOfColumns === 5 ? 'py-1' : 'py-2'
                    }`}
                  >
                    {provider.name}
                  </h3>
                  <div className="pt-1 px-1 pb-2 bg-[#f5f5f5] rounded-[0.25rem]">
                    <p className="text-xs font-medium font-dm-sans text-[#6A6A6A] pb-1">
                      Ages seen
                    </p>
                    <p
                      className={`${
                        numberOfColumns === 5 ? 'text-[0.625rem]' : 'text-xs'
                      } font-open-sans`}
                    >
                      {provider.agesSeen.children && (
                        <span>{`Children: (${provider.agesSeen.children}) `}</span>
                      )}
                      {provider.agesSeen.teens && (
                        <span>{`Teens: (${provider.agesSeen.teens}) `}</span>
                      )}
                      {provider.agesSeen.adults && (
                        <span>{`Adults: (${provider.agesSeen.adults})`}</span>
                      )}
                    </p>
                  </div>
                  <div className="pt-[0.62rem]">
                    <h3 className="font-medium font-dm-sans text-[#6A6A6A] text-[0.875rem]">
                      States Licensed
                    </h3>
                    <p
                      className={`${
                        numberOfColumns === 5 ? 'text-xs' : 'text-sm'
                      } font-medium font-dm-sans`}
                    >
                      {showStatesLicensed(provider.statesLicensed)}
                    </p>
                  </div>
                  <div className="flex justify-between pt-4 gap-3">
                    {provider.availability && (
                      <span
                        className={`rounded-lg grid place-items-center border border-[#E1EEE4] bg-[#F0FDF3] ${
                          numberOfColumns === 5
                            ? 'p-1 text-[0.625rem]'
                            : '~px-3/[0.625rem] py-2 ~text-[0.625rem]/xs'
                        } font-dm-sans`}
                      >
                        {provider.availability}
                      </span>
                    )}

                    <button
                      className={`w-fit block ms-auto rounded-3xl text-white text-xs bg-orenda-purple px-4 min-w-[9rem] md:min-w-[2.81rem] xl:min-w-fit font-open-sans ${
                        numberOfColumns === 5 ? 'py-2' : ' py-[0.62rem]'
                      }`}
                    >
                      Book online
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProvidersSection;
