import ProviderCardSmall from './ProviderCardSmall';

const ProvidersSection = ({
  newProviders,
  itemOffset,
  endOffset,
  numberOfColumns,
  setNewProviders
}) => {
  const sectionProvidersData = newProviders.slice(itemOffset, endOffset);

  let gridClasses = `grid auto-cols-fr grid-cols-1 ${
    numberOfColumns === 5
      ? 'gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      : '~gap-x-0/7 sm:grid-cols-2 lg:grid-cols-3 forProviders:grid-cols-4'
  } gap-y-10 justify-items-center items-stretch pb-6`;

  return (
    <div className={gridClasses}>
      {sectionProvidersData.map((provider) => {
        const index = newProviders.findIndex(
          (obj) => obj.name === provider?.name
        );
        return (
          <ProviderCardSmall
            provider={provider}
            index={index}
            setNewProviders={setNewProviders}
          />
        );
      })}
    </div>
  );
};
export default ProvidersSection;
