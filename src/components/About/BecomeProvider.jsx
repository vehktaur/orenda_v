import { Link } from "react-router-dom";
import magnifier from "../../assets/magnifier.gif";

const BecomeProvider = ({ bg }) => {
  return (
    <div className={`bg-${bg} px-5 ~py-10/14`}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-2xl bg-lime pb-14 pt-8 ~px-5/28 sm:flex-row sm:gap-10 sm:rounded-sm">
        <div className="flex-shrink-0 sm:order-last">
          <img className="~size-[8.1875rem]/[25.525rem]" src={magnifier}></img>
        </div>
        <div className="w-full">
          <h2 className="heading bp_title mb-3 sm:py-1 sm:text-left">
            Become an Orenda Provider!
          </h2>
          <p className="bp_text max-w-[35.625rem] text-center font-medium ~text-sm/xl sm:text-justify">
            Would you like to join our team of providers? Click the button below
            to start with us.
          </p>

          <Link
            to="/become-a-provider"
            className="bp_btn group relative z-[1] mx-auto mt-[2.12rem] block w-full overflow-hidden rounded-[2.5rem] border border-orenda-green px-4 py-2.5 text-center font-semibold text-orenda-green transition-colors ~text-sm/xl hover:text-white sm:mx-0 sm:max-w-[15.125rem]"
          >
            <span className="absolute -left-[1px] -top-[1px] z-[-1] block h-[calc(100%+2px)] w-0 rounded-3xl bg-orenda-green transition-all duration-500 group-hover:w-[calc(100%+2px)]" />
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BecomeProvider;
