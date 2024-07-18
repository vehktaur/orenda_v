const Radios = ({ number, label, register, errors, name, moreInfo }) => {
  return (
    <div>
      <h3 className="font-medium flex ~gap-1/2 items-baseline">
        <span>{number}.</span>
        {label}
      </h3>
      <div className="px-3">
        <div className="mt-6 flex gap-8 ~text-sm/xl items-center">
          <div className="flex items-center gap-2">
            <input
              className="size-5"
              type="radio"
              id={number + 'Yes'}
              {...register(name)}
              value="Yes"
            />{' '}
            <label htmlFor={number + 'Yes'}>Yes</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="size-5"
              type="radio"
              id={number + 'No'}
              {...register(name, {
                required: { value: true, message: 'This field is required' }
              })}
              value="No"
            />{' '}
            <label htmlFor={number + 'No'}>No</label>
          </div>
        </div>

        <p className="text-sm text-red-500 mt-2">{errors?.[name]?.message}</p>
        {moreInfo && (
          <input
            className="~pb-4/[1.12rem] border-b border-[#D1D1D1] block ~text-sm/xl placeholder:text-[#737373] ~mt-6/8 w-full outline-none"
            placeholder="If Yes, Please state"
            {...register(`${name} info`)}
            type="text"
          />
        )}
      </div>
    </div>
  );
};
export default Radios;
