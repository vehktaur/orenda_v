import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const Dropdown = ({ label, options, name, className }) => {
  const {
    register,
    required = true,
    resetField,
    formState: { errors, isSubmitSuccessful }
  } = useFormContext();

  const [selectOpen, setSelectOpen] = useState(false);
  const [selected, setSelected] = useState('Select');

  const handleSelect = (radio) => {
    setSelected(radio);
    setSelectOpen(false);
  };

  const clearSelect = () => {
    setSelected('Select');
    setSelectOpen(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      clearSelect();
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <h3
        className={`font-medium flex ~gap-1/2 items-baseline ~text-sm/[0.95rem] ${className}`}
      >
        {label}
      </h3>

      <div className='mt-4 ~text-sm/[0.95rem]'>
        <div className='pt-2 pb-3 border-b border-[#C9C9C9] '>
          <button
            type='button'
            onClick={() => {
              setSelectOpen((prev) => !prev);
            }}
            className='w-full block relative bg-arrow bg-arrow-position bg-arrow-size bg-no-repeat text-[#070707] text-left pr-6 px-2 '
          >
            {selected}
            <div
              className={`absolute bg-white border border-[#C9C9C9] rounded-lg top-[140%] left-0 right-0 transition-all duration-300 ease-in-out grid justify-items-start overflow-hidden overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-[#666] max-h-[15rem] scrollbar-track-slate-200 scrollbar-thumb-rounded scrollbar-track-rounded z-[1] space-y-2 ${
                selectOpen
                  ? 'visible opacity-100'
                  : 'hidden invisible opacity-0'
              }`}
            >
              <label
                key='Select'
                className={`py-1.5 px-2 rounded-md block w-full text-left cursor-pointer ${
                  selected === 'Select'
                    ? 'bg-violet-200'
                    : 'hover:bg-violet-100'
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  clearSelect();
                  resetField(name);
                }}
              >
                Select
              </label>
              {options.map((radio) => (
                <label
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  key={radio}
                  className={`py-1.5 px-2 rounded-md block w-full text-left cursor-pointer ${
                    selected === radio ? 'bg-violet-200' : 'hover:bg-violet-100'
                  }`}
                >
                  {radio}
                  <input
                    hidden
                    onClick={(event) => {
                      event.stopPropagation();
                      handleSelect(radio);
                    }}
                    type='radio'
                    value={radio}
                    {...register(name, {
                      required: {
                        value: required,
                        message: 'Please select at least one'
                      }
                    })}
                  />
                </label>
              ))}
            </div>
          </button>
        </div>

        <p className='text-sm text-red-500 ps-1 mt-2'>
          {errors?.[name]?.message}
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
