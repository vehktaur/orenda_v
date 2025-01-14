import { FilterIcon, SearchIcon } from "@/assets/svgs";

const SearchBar = ({ query, setQuery, toggleFilterMenu, numberOfFilters }) => {
  return (
    <div className="flex items-center justify-center gap-4 px-5 ~my-6/10">
      <label className="relative w-full ~max-w-[15.93rem]/[32.56rem]">
        <span className="absolute bottom-0 top-0 grid w-12 place-items-center">
          <SearchIcon />
        </span>
        <input
          className="block w-full rounded-lg border border-[#E7E7E7] bg-[#FCFCFC] px-4 py-3 ps-12 font-dm-sans outline-none ~text-sm/lg placeholder:font-medium placeholder:text-[#878787] placeholder:~text-sm/base"
          type="search"
          name="search"
          value={query.name}
          onChange={(event) =>
            setQuery((prev) => ({
              ...prev,
              name: event.target.value.toLowerCase(),
            }))
          }
          placeholder="Search"
        />
      </label>
      <button
        onClick={() => toggleFilterMenu()}
        className={`relative flex items-center gap-2 rounded-lg border border-[#E7E7E7] px-4 py-[0.85rem] font-dm-sans font-bold active:border-orenda-purple ${
          numberOfFilters > 0 ? "border-orenda-purple" : ""
        }`}
      >
        {numberOfFilters > 0 && (
          <span className="absolute -top-[0.44rem] right-[0.44rem] grid size-[1.0625rem] place-items-center rounded-full bg-orenda-purple font-dm-sans text-[0.625rem] text-white">
            {numberOfFilters}
          </span>
        )}
        <FilterIcon />
        <span className="hidden ~text-sm/base sm:inline-block">Filter</span>
      </button>
    </div>
  );
};
export default SearchBar;
