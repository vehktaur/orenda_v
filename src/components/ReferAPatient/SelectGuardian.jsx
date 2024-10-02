import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../Input';

const SelectGuardian = ({
  label,
  options,

  name
}) => {
  const {
    register,
    resetField,
    watch,
    formState: { errors }
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

  return (
    <div>
      <h3 className="font-medium flex ~gap-1/2 items-baseline">{label}</h3>

      <div className="mt-6 ~text-sm/xl">
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
                  clearSelect('Other (select)');
                  resetField(label);
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

        <p className="text-sm text-red-500 ps-1">{errors?.[name]?.message}</p>

        {watch(name) === 'Guardian' && (
          <div className="flex flex-col gap-4 mt-12 border-l-4 w-2/3 px-4">
            <Input
              label="Guardian’s First Name"
              type="text"
              id="guardiansFName"
              register={register}
              watch={watch}
              errors={errors}
            />
            <Input
              label="Last Name Initials"
              type="text"
              id="guardiansInitials"
              register={register}
              watch={watch}
              errors={errors}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectGuardian;
