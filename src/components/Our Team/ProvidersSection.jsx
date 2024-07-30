import ProviderCardSmall from './ProviderCardSmall';

const ProvidersSection = ({ slide, numberOfColumns, setProvidersData }) => {

  let gridClasses = `grid auto-cols-fr grid-cols-1 ${
    numberOfColumns === 5
      ? 'gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      : '~gap-x-0/7 sm:grid-cols-2 lg:grid-cols-3 forProviders:grid-cols-4'
  } gap-y-10 justify-items-center items-stretch pb-6`;

  return (
    <div className={gridClasses}>
      {slide.map((provider) => {
        return (
          <ProviderCardSmall
            provider={provider}
            setProvidersData={setProvidersData}
          />
        );
      })}
    </div>
  );
};
export default ProvidersSection;
