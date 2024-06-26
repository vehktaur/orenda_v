import { useState } from 'react';

const SelectCheckboxes = ({
  number,
  label,
  options,
  register,
  errors,
  name,
  selected,
  setSelected,
  resetField,
  trigger
}) => {
  const [selectOpen, setSelectOpen] = useState(false);

  const otherCheckboxes = [
    'Illinois',
    'California',
    'Pennsylvania',
    'Maryland'
  ];

  const handleSelect = (checkbox) => {
    setSelected(checkbox);
    setSelectOpen(false);
  };

  return (
    <fieldset className="fieldset font-dm-sans text-left">
      <h3 className="font-medium flex ~gap-1/2 items-baseline">
        <span>{number}.</span>
        {label}
      </h3>
      <p className="text-[#737373] pl-3">(select all that apply)</p>

      <div className="mt-6 space-y-5 ~text-sm/xl">
        {options.map((option) => {
          if (option === 'Others') {
            return (
              <div
                key={number + option}
                className="px-4 ~py-[0.94rem]/[1.19rem] border border-[#C9C9C9] rounded-lg"
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectOpen(!selectOpen);
                  }}
                  className="w-full block relative bg-arrow bg-arrow-position bg-arrow-size bg-no-repeat text-[#070707] text-left"
                >
                  {selected}
                  <div
                    className={`absolute bg-white border border-[#C9C9C9] rounded-lg top-[120%] left-0 right-0 transition-all duration-300 ease-in-out grid justify-items-start overflow-hidden p-2${
                      selectOpen
                        ? 'visible opacity-100'
                        : 'hidden invisible opacity-0'
                    }`}
                  >
                    <label
                      key="Other"
                      className={`py-1.5 px-2 rounded-md block w-full text-left cursor-pointer ${
                        selected === 'Other (select)'
                          ? 'bg-[#f3f3f3]'
                          : 'hover:bg-[#f3f3f3]'
                      }`}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleSelect('Other (select)');
                        resetField(`Other States Licensed`);
                        // trigger('States Licensed', { shouldFocus: true });
                      }}
                    >
                      Other (select)
                    </label>
                    {otherCheckboxes.map((checkbox) => (
                      <label
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                        key={checkbox}
                        className={`py-1.5 px-2 rounded-md block w-full text-left cursor-pointer ${
                          selected === checkbox
                            ? 'bg-[#f3f3f3]'
                            : 'hover:bg-[#f3f3f3]'
                        }`}
                      >
                        {checkbox}
                        <input
                          hidden
                          onClick={(event) => {
                            event.stopPropagation();
                            handleSelect(checkbox);
                          }}
                          type="radio"
                          value={checkbox}
                          {...register(`Other ${name}`)}
                        />
                      </label>
                    ))}
                  </div>
                </button>
              </div>
            );
          } else {
            return (
              <div
                key={number + option}
                className="flex ~gap-2/4 items-center px-4 ~py-[0.94rem]/[1.19rem] border border-[#C9C9C9] rounded-lg"
              >
                <input
                  className="~size-[1.125rem]/6 border border-[#C9C9C9] rounded-sm"
                  type="checkbox"
                  value={option}
                  id={number + option}
                  {...register(name, {
                    required: {
                      value: name !== 'States Licensed',
                      message: 'Please select at least one'
                    }
                  })}
                />
                <label className="text-[#070707]" htmlFor={number + option}>
                  {option}
                </label>
              </div>
            );
          }
        })}

        <p className="text-sm text-red-500 ps-1">{errors?.[name]?.message}</p>
      </div>
    </fieldset>
  );
};

export default SelectCheckboxes;
