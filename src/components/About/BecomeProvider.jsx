import { Link } from 'react-router-dom';
import magnifier from '../../assets/magnifier.gif';

const BecomeProvider = ({ bg }) => {
  return (
    <div className={`bg-${bg} ~py-10/14 px-5`}>
      <div className="max-w-7xl mx-auto bg-[#ECF5EB] flex flex-col sm:flex-row ~px-5/28 pb-14 pt-8 items-center gap-6 sm:gap-10 rounded-2xl sm:rounded-sm">
        <div className="sm:order-last flex-shrink-0">
          <img className="~size-[8.1875rem]/[25.525rem]" src={magnifier}></img>
        </div>
        <div className="w-full">
          <h2 className="heading sm:py-1 mb-3 sm:text-left bp_title">
            Become an Orenda Provider!
          </h2>
          <p className="max-w-[35.625rem] font-medium text-center sm:text-justify ~text-sm/xl bp_text">
            Would you like to join our team of providers? Click the button below
            to start with us.
          </p>

          <Link
            to="/become-a-provider"
            className="mt-[2.12rem] mx-auto sm:mx-0 sm:max-w-[15.125rem] border text-orenda-green border-orenda-green py-2.5 px-4 block rounded-[2.5rem] hover:border-none hover:text-white font-semibold transition-colors ~text-sm/xl w-full text-center bp_btn relative group overflow-hidden z-[1]"
          >
            <span className="block absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-orenda-green transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-green" />
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BecomeProvider;
