import { useState } from 'react';
import { states } from '../../data/dataArrays';

const SelectCheckboxes = ({
  number,
  label,
  options,
  register,
  errors,
  name,
  disabled,
  resetField
}) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selected, setSelected] = useState(['Other (select)']);

  const otherCheckboxes = states.filter((state) => !options.includes(state));
  const handleSelect = (checkbox) => {
    setSelected((prevSelected) => {
      // Remove 'Other (select)' from the previous selection
      let updatedSelected = prevSelected.filter(
        (item) => item !== 'Other (select)'
      );

      if (updatedSelected.includes(checkbox)) {
        // If the checkbox is already selected, remove it
        updatedSelected = updatedSelected.filter((item) => item !== checkbox);

        // If removing the checkbox leaves the selection empty, add 'Other (select)'
        if (updatedSelected.length === 0) {
          updatedSelected = ['Other (select)'];
        }
      } else {
        // If the checkbox is not selected, add it to the selection
        updatedSelected = [...updatedSelected, checkbox];
      }

      return updatedSelected;
    });
    setSelectOpen(false);
  };

  const showSelected = (selected, setSelected) => {
    if (selected && selected.length > 0) {
      return selected
        .map((item, index, array) => {
          const divider = index === array.length - 1 ? '' : ', ';
          return item + divider;
        })
        .join('');
    } else {
      setSelected(['Other (select)']);
      return 'Other (select)';
    }
  };

  const clearSelect = (value) => {
    setSelected([value]);
    setSelectOpen(false);
  };

  return (
    <>
      <h3 className='font-medium flex ~gap-1/2 items-baseline'>
        <span>{number}.</span>
        {label}
      </h3>
      <p className='text-[#737373] pl-3'>(select all that apply)</p>

      <div className='mt-6 space-y-5 ~text-sm/xl'>
        {options.map((option) => {
          if (option === 'Others') {
            return (
              <div
                key={number + option}
                className='px-4 ~py-[0.94rem]/[1.19rem] border border-[#C9C9C9] rounded-lg'
              >
                <button
                  type='button'
                  onClick={() => {
                    setSelectOpen(!selectOpen);
                  }}
                  className='w-full block relative bg-arrow bg-arrow-position bg-arrow-size bg-no-repeat text-[#070707] text-left pr-8'
                >
                  {showSelected(selected)}
                  <div
                    className={`absolute bg-white border border-[#C9C9C9] rounded-lg top-[120%] left-0 right-0 transition-all duration-300 ease-in-out grid justify-items-start overflow-hidden max-h-[13rem] overflow-y-scroll p-2 scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-200 scrollbar-thumb-rounded-lg scrollbar-track-rounded-md sm:mr-2 ${
                      selectOpen
                        ? 'visible opacity-100'
                        : 'hidden invisible opacity-0'
                    }`}
                  >
                    <label
                      key='Other'
                      className={`py-1.5 px-2 rounded-md block w-full text-left cursor-pointer ${
                        selected.includes('Other (select)')
                          ? 'bg-[#ecf5eb]'
                          : 'hover:bg-[#ecf5eb]'
                      }`}
                      onClick={(event) => {
                        event.stopPropagation();
                        clearSelect('Other (select)');
                        resetField(name);
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
                          selected.includes(checkbox)
                            ? 'bg-[#ecf5eb]'
                            : 'hover:bg-[#ecf5eb]'
                        }`}
                      >
                        {checkbox}
                        <input
                          hidden
                          onClick={(event) => {
                            event.stopPropagation();
                            handleSelect(checkbox);
                          }}
                          type='checkbox'
                          value={checkbox}
                          {...register(name, {
                            required: {
                              value: true,
                              message: 'Please select at least one'
                            },
                            disabled: disabled
                          })}
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
                className='flex ~gap-2/4 items-center px-4 ~py-[0.94rem]/[1.19rem] border border-[#C9C9C9] rounded-lg hover:border-[#ecf5eb] hover:bg-[#ecf5eb]'
              >
                <input
                  className='~size-[1.125rem]/6 border border-[#C9C9C9] rounded-sm'
                  type='checkbox'
                  value={option}
                  id={number + option}
                  {...register(name, {
                    required: {
                      value: true,
                      message: 'Please select at least one'
                    },
                    disabled: disabled
                  })}
                />
                <label
                  className='text-[#070707] w-full cursor-pointer'
                  htmlFor={number + option}
                >
                  {option}
                </label>
              </div>
            );
          }
        })}

        <p className='text-sm text-red-500 ps-1'>{errors?.[name]?.message}</p>
      </div>
    </>
  );
};

export default SelectCheckboxes;
