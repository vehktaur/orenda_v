import { useEffect, useState } from 'react';

const BPNav = ({ formComplete, formStep, handleNext, handlePrev }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (formComplete) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [formComplete]);

  return (
    <div className="~mt-6/10 flex flex-col-reverse sm:flex-row items-center ~gap-6/[4.12rem]">
      {formStep === 2 && (
        <button
          onClick={() => handlePrev()}
          className="block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple overflow-hidden z-[1] group relative rounded-3xl font-semibold transition-colors duration-300"
          type="button"
        >
          <span className="block absolute -top-[1px] -left-[1px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
          Back
        </button>
      )}
      <button
        onClick={() => handleNext()}
        disabled={isDisabled}
        className={`block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple overflow-hidden relative z-[1] group rounded-3xl font-semibold transition-colors duration-300 ${
          formStep === 3 ? 'hidden' : formComplete ? 'italic' : ''
        }`}
        type="submit"
      >
        <span className="block absolute -top-[1px] -left-[1px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
        {formStep === 1
          ? 'Proceed'
          : formComplete
          ? 'Submitting...'
          : 'Submit form'}
      </button>
    </div>
  );
};
export default BPNav;
