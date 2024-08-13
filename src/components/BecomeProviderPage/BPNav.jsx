const BPNav = ({ formStep, handleNext, handlePrev }) => {
  return (
    <div className="~mt-6/10 flex flex-col-reverse sm:flex-row items-center ~gap-6/[4.12rem]">
      {formStep === 2 && (
        <button
          onClick={() => handlePrev()}
          className="block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple hover:border-none overflow-hidden z-[1] group relative rounded-3xl font-semibold transition-colors duration-300"
          type="button"
        >
          <span className="block absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
          Back
        </button>
      )}
      <button
        onClick={() => handleNext()}
        className={`block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple hover:border-none overflow-hidden relative z-[1] group rounded-3xl font-semibold transition-colors duration-300 ${
          formStep === 3 ? 'hidden' : ''
        }`}
        type="submit"
      >
        <span className="block absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
        {formStep === 1 ? 'Proceed' : 'Submit form'}
      </button>
    </div>
  );
};
export default BPNav;
