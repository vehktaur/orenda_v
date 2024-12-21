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
          href="https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits"
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
