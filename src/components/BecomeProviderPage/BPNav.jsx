const BPNav = ({ formStep, handleNext, handlePrev }) => {
  return (
    <div className="~mt-6/10 flex flex-col-reverse sm:flex-row items-center ~gap-6/[4.12rem]">
      {formStep === 2 && (
        <button
          onClick={() => handlePrev()}
          className="block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple hover:bg-orenda-purple rounded-3xl font-semibold transition-colors duration-300"
          type="button"
        >
          Back
        </button>
      )}
      <button
        onClick={() => handleNext()}
        className={`block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple hover:bg-orenda-purple rounded-3xl font-semibold transition-colors duration-300 ${
          formStep === 3 ? 'hidden' : ''
        }`}
        type="submit"
      >
        {formStep === 1 ? 'Proceed' : 'Submit form'}
      </button>
    </div>
  );
};
export default BPNav;
