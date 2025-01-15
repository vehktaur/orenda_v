import { zocLink } from "@/lib/definitions";
import clsx from "clsx";

const GetStarted = ({ className }) => {
  return (
    <div
      className={clsx(
        "mt-8 bg-orenda-purple bg-logo bg-[length:100px] bg-fixed bg-center bg-repeat-round ~pt-8/[9.69rem] ~pb-[3.22rem]/[9.69rem] sm:bg-[length:150px]",
        className,
      )}
    >
      <div className="px-5">
        <h2 className="heading mb-4 text-white">Get Started</h2>
        <p className="mx-auto max-w-[42.44rem] text-center text-white ~text-sm/lg ~mb-8/10">
          Taking the first step towards therapy can feel daunting, but we are
          here to guide you through the process. Contact us to guide you through
          the process of receiving quality mental health care.
        </p>
        <a
          target="_blank"
          href={zocLink}
          className="group relative z-[1] mx-auto block max-h-10 overflow-hidden rounded-[2.5rem] bg-white px-4 py-2 text-center text-[1.125rem] font-semibold text-orenda-purple transition-colors ~max-w-[12rem]/[23rem] hover:border hover:border-white hover:text-white"
        >
          <span className="absolute left-0 top-0 z-[-1] block h-full w-0 rounded-3xl border bg-orenda-purple transition-all duration-500 group-hover:w-full hover:border-white" />
          Get Started
        </a>
      </div>
    </div>
  );
};
export default GetStarted;
