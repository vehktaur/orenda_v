import magnifier from '../assets/magnifier.gif';

const BecomeProvider = ({ bg }) => {
  return (
    <div className={`bg-${bg} ~py-10/14`}>
      <div className="max-w-7xl mx-auto bg-[#ECF5EB] flex flex-col sm:flex-row ~px-6/28 pb-14 pt-8 items-center gap-6 sm:gap-10 rounded-2xl">
        <div className="sm:order-last flex-shrink-0">
          <img className="~size-[8.1875rem]/[25.525rem]" src={magnifier}></img>
        </div>
        <div className="">
          <h2 className="heading sm:py-1 mb-3 sm:text-left">
            Become an Orenda Provider!
          </h2>
          <p className="max-w-[35.625rem] font-medium text-center sm:text-left">
            Would you like to join our team of providers? Click the button below
            to start with us.
          </p>
          <button className="mt-[2.12rem] mx-auto sm:mx-0 ~min-w-[18.75rem]/[15.125rem] border text-orenda-green border-orenda-green py-2.5 px-4 flex justify-center items-center rounded-[2.5rem] hover:bg-orenda-green hover:text-white font-semibold transition-colors">
            Fill Form
          </button>
        </div>
      </div>
    </div>
  );
};
export default BecomeProvider;
