import { useState } from "react";
import { states } from "../../data/dataArrays";

const SelectCheckboxes = ({
  number,
  label,
  options,
  register,
  errors,
  name,
  disabled,
  resetField,
}) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selected, setSelected] = useState(["Other (select)"]);

  const otherCheckboxes = states.filter((state) => !options.includes(state));
  const handleSelect = (checkbox) => {
    setSelected((prevSelected) => {
      // Remove 'Other (select)' from the previous selection
      let updatedSelected = prevSelected.filter(
        (item) => item !== "Other (select)",
      );

      if (updatedSelected.includes(checkbox)) {
        // If the checkbox is already selected, remove it
        updatedSelected = updatedSelected.filter((item) => item !== checkbox);

        // If removing the checkbox leaves the selection empty, add 'Other (select)'
        if (updatedSelected.length === 0) {
          updatedSelected = ["Other (select)"];
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
          const divider = index === array.length - 1 ? "" : ", ";
          return item + divider;
        })
        .join("");
    } else {
      setSelected(["Other (select)"]);
      return "Other (select)";
    }
  };

  const clearSelect = (value) => {
    setSelected([value]);
    setSelectOpen(false);
  };

  return (
    <>
      <h3 className="flex items-baseline font-medium ~gap-1/2">
        <span>{number}.</span>
        {label}
      </h3>
      <p className="pl-3 text-[#737373]">(select all that apply)</p>

      <div className="mt-6 space-y-5 ~text-sm/xl">
        {options.map((option) => {
          if (option === "Others") {
            return (
              <div
                key={number + option}
                className="rounded-lg border border-[#C9C9C9] px-4 ~py-[0.94rem]/[1.19rem]"
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectOpen(!selectOpen);
                  }}
                  className="relative block w-full bg-arrow bg-arrow-size bg-arrow-position bg-no-repeat pr-8 text-left text-[#070707]"
                >
                  {showSelected(selected)}
                  <div
                    className={`absolute left-0 right-0 top-[120%] grid max-h-[13rem] justify-items-start overflow-hidden overflow-y-scroll rounded-lg border border-[#C9C9C9] bg-white p-2 transition-all duration-300 ease-in-out scrollbar scrollbar-track-slate-200 scrollbar-thumb-slate-800 scrollbar-track-rounded-md scrollbar-thumb-rounded-lg sm:mr-2 ${
                      selectOpen
                        ? "visible opacity-100"
                        : "invisible hidden opacity-0"
                    }`}
                  >
                    <label
                      key="Other"
                      className={`block w-full cursor-pointer rounded-md px-2 py-1.5 text-left ${
                        selected.includes("Other (select)")
                          ? "bg-lime"
                          : "hover:bg-lime"
                      }`}
                      onClick={(event) => {
                        event.stopPropagation();
                        clearSelect("Other (select)");
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
                        className={`block w-full cursor-pointer rounded-md px-2 py-1.5 text-left ${
                          selected.includes(checkbox)
                            ? "bg-lime"
                            : "hover:bg-lime"
                        }`}
                      >
                        {checkbox}
                        <input
                          hidden
                          onClick={(event) => {
                            event.stopPropagation();
                            handleSelect(checkbox);
                          }}
                          type="checkbox"
                          value={checkbox}
                          {...register(name, {
                            required: {
                              value: true,
                              message: "Please select at least one",
                            },
                            disabled: disabled,
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
                className="flex items-center rounded-lg border border-[#C9C9C9] px-4 ~gap-2/4 ~py-[0.94rem]/[1.19rem] hover:border-lime hover:bg-lime"
              >
                <input
                  className="rounded-sm border border-[#C9C9C9] ~size-[1.125rem]/6"
                  type="checkbox"
                  value={option}
                  id={number + option}
                  {...register(name, {
                    required: {
                      value: true,
                      message: "Please select at least one",
                    },
                    disabled: disabled,
                  })}
                />
                <label
                  className="w-full cursor-pointer text-[#070707]"
                  htmlFor={number + option}
                >
                  {option}
                </label>
              </div>
            );
          }
        })}

        <p className="ps-1 text-sm text-red-500">{errors?.[name]?.message}</p>
      </div>
    </>
  );
};

export default SelectCheckboxes;
