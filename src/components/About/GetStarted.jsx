import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="bg-orenda-purple bg-logo bg-repeat-round bg-center ~pt-8/[9.69rem] bg-fixed bg-[length:100px] sm:bg-[length:150px] ~pb-[3.22rem]/[9.69rem] mt-8">
      <div className="px-5">
        <h2 className="heading text-white mb-4">Get Started</h2>
        <p className="text-white max-w-[42.44rem] mx-auto text-center ~mb-8/10">
          Taking the first step towards therapy can feel daunting, but we are
          here to guide you through the process. Contact us to guide you through
          the process of receiving quality mental health care.
        </p>
        <a
          target="_blank"
          href="https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits"
          className="block bg-white hover:bg-transparent transition-colors text-orenda-purple hover:text-white hover:border hover:border-white px-4 py-2 font-semibold rounded-[2.5rem] ~max-w-[12rem]/[23rem] mx-auto text-[1.125rem] text-center"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};
export default GetStarted;
