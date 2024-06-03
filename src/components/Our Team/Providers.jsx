import { providersData } from '../../data/providersData';

const Providers = () => {
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

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto mt-[4.94rem]">
        <div className="grid auto-cols-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-10 justify-items-center content-center items-center">
          {providersData.map((provider) => {
            return (
              <div className="max-w-[20.7rem] w-[100%] rounded-md shadow relative">
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-1000 text-white p-6 flex flex-col gap-4 rounded-md cursor-pointer">
                  <h3 className='font-semibold'>About Provider</h3>
                  <p className='text-clip overflow-hidden text-[0.85rem]'>{provider.about}</p>
                  <button className='w-full border rounded-[1.5rem] px-2 py-1 text-[0.875rem] hover:bg-white hover:text-black transition-colors mt-6'>Book now</button>
                  <div className='flex justify-center'><a className='text-[0.875rem] font-semibold hover:underline' href="/">More Info</a></div>
                </div>
                <div className="bg-[#f1f1f1] ~h-[9.5rem]/[13.75rem] flex items-end justify-center">
                  <img
                    className="w-[80%] h-[90%] block object-contain"
                    src={provider.image}
                    alt=""
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs">{provider.credentials}</p>
                  <h3 className="~text-base/lg font-bold py-2">
                    {provider.name}
                  </h3>
                  <div className="pt-1 px-1 pb-2 bg-[#f5f5f5] rounded-[0.25rem]">
                    <p className="text-xs font-medium text-[#6A6A6A] pb-1">
                      Ages seen
                    </p>
                    <p className="~text-base/xs">
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
                    <h3 className="font-medium text-[#6A6A6A] text-[0.875rem]">
                      States Licensed
                    </h3>
                    <p className="text-sm font-medium">
                      {showStatesLicensed(provider.statesLicensed)}
                    </p>
                  </div>
                  <div className="flex justify-between pt-4 gap-3">
                    {provider.availability && (
                      <span className="rounded-lg border w-fit border-[#E1EEE4] bg-[#ECF5EB] p-1 py-2 ~px-0.5/[0.62rem] text-xs">
                        {provider.availability}
                      </span>
                    )}

                    <button className="w-fit block ms-auto rounded-[1.5rem] text-white text-xs bg-orenda-purple py-[0.62rem] px-4 min-w-[9rem] md:min-w-[4.81rem] xl:min-w-[6.81rem]">
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
export default Providers;
