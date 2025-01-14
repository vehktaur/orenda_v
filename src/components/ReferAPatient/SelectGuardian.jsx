import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputPro from "./InputPro";

const SelectGuardian = ({ label, options, name }) => {
  const {
    register,
    resetField,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext();

  const [selectOpen, setSelectOpen] = useState(false);
  const [selected, setSelected] = useState("Select");

  const handleSelect = (radio) => {
    setSelected(radio);
    setSelectOpen(false);
  };

  const clearSelect = () => {
    setSelected("Select");
    setSelectOpen(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      clearSelect();
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <h3 className="flex items-baseline font-medium ~text-sm/lg ~gap-1/2">
        {label}
      </h3>

      <div className="mt-6 ~text-sm/lg">
        <div className="rounded border border-[#C9C9C9] pb-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setSelectOpen((prev) => !prev);
            }}
            className="relative block w-full bg-arrow bg-arrow-size bg-arrow-position bg-no-repeat px-4 pr-6 text-left text-[#070707]"
          >
            {selected}
            <div
              className={`absolute left-0 right-0 top-[140%] z-10 grid max-h-[13rem] justify-items-start space-y-2 overflow-hidden overflow-y-auto rounded-lg border border-[#C9C9C9] bg-white p-2 transition-all duration-300 ease-in-out scrollbar scrollbar-track-slate-200 scrollbar-thumb-slate-800 scrollbar-track-rounded-md scrollbar-thumb-rounded-lg ${
                selectOpen
                  ? "visible opacity-100"
                  : "invisible hidden opacity-0"
              }`}
            >
              <label
                key="Select"
                className={`block w-full cursor-pointer rounded-md px-2 py-1.5 text-left ${
                  selected === "Select" ? "bg-lime" : "hover:bg-lime"
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
                  className={`block w-full cursor-pointer rounded-md px-2 py-1.5 text-left ${
                    selected === radio ? "bg-lime" : "hover:bg-lime"
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
                        message: "Please select at least one",
                      },
                    })}
                  />
                </label>
              ))}
            </div>
          </button>
        </div>

        <p className="mt-2 ps-1 text-sm text-red-500">
          {errors?.[name]?.message}
        </p>

        {watch(name) === "Guardian" && (
          <div className="mt-8 flex w-2/3 flex-col gap-8 border-l-4 ps-3 pt-4">
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
