import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import InputPro from './InputPro';

const SelectGuardian = ({ label, options, name }) => {
  const {
    register,
    resetField,
    watch,
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
      <h3 className="font-medium flex ~gap-1/2 items-baseline ~text-sm/lg">{label}</h3>

      <div className="mt-6 ~text-sm/lg">
        <div className="pt-2 pb-3 border rounded border-[#C9C9C9] ">
          <button
            type="button"
            onClick={() => {
              setSelectOpen((prev) => !prev);
            }}
            className="w-full block relative bg-arrow bg-arrow-position bg-arrow-size bg-no-repeat text-[#070707] text-left pr-6 px-4 "
          >
            {selected}
            <div
              className={`absolute bg-white border border-[#C9C9C9] rounded-lg top-[140%] left-0 right-0 transition-all duration-300 ease-in-out grid justify-items-start overflow-hidden max-h-[13rem] overflow-y-auto p-2 scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-200 scrollbar-thumb-rounded-lg scrollbar-track-rounded-md  z-10 space-y-2 ${
                selectOpen
                  ? 'visible opacity-100'
                  : 'hidden invisible opacity-0'
              }`}
            >
              <label
                key="Select"
                className={`py-1.5 px-2 rounded-md block w-full text-left cursor-pointer ${
                  selected === 'Select' ? 'bg-[#ecf5eb]' : 'hover:bg-[#ecf5eb]'
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
                    selected === radio ? 'bg-[#ecf5eb]' : 'hover:bg-[#ecf5eb]'
                  }`}
                >
                  {radio}
                  <input
                    hidden
                    onClick={(event) => {
                      event.stopPropagation();
                      handleSelect(radio);
                    }}
                    type="radio"
                    value={radio}
                    {...register(name, {
                      required: {
                        value: true,
                        message: 'Please select at least one'
                      }
                    })}
                  />
                </label>
              ))}
            </div>
          </button>
        </div>

        <p className="text-sm text-red-500 ps-1 mt-2">
          {errors?.[name]?.message}
        </p>

        {watch(name) === 'Guardian' && (
          <div className="flex flex-col gap-8 mt-8 pt-4 border-l-4 ps-3 w-2/3">
            <InputPro
              label="Guardian’s First Name"
              type="text"
              id="guardiansFName"
              name="guardiansFName"
              required={true}
            />
            <InputPro
              label="Last Name Initials"
              type="text"
              id="guardiansInitials"
              name="guardiansInitials"
              required={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectGuardian;
