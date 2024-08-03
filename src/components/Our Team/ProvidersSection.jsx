import ProviderCardSmall from './ProviderCardSmall';

const ProvidersSection = ({ slide, numberOfColumns, setProvidersData }) => {
  return (
    <div
      className={`grid ${
        numberOfColumns === 5
          ? 'gap-x-4 grid-cols-autofill xl:grid-cols-maxfill'
          : '~gap-x-0/7 sm:grid-cols-2 lg:grid-cols-3 forProviders:grid-cols-4'
      } gap-y-10 justify-items-center items-stretch pb-6`}
    >
      {slide.map((provider) => {
        return (
          <ProviderCardSmall
            key={provider.id}
            provider={provider}
            setProvidersData={setProvidersData}
          />
        );
      })}
    </div>
  );
};
export default ProvidersSection;
