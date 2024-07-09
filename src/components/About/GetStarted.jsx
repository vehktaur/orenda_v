import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="bg-orenda-purple bg-logo">
      <div className=" ~pt-8/[9.69rem] ~pb-[3.22rem]/[9.69rem] mt-8">
        <div className="px-5">
          <h2 className="heading text-white mb-4">Get Started</h2>
          <p className="text-white max-w-[42.44rem] mx-auto text-center ~mb-8/10">
            Taking the first step towards therapy can feel daunting, but we are
            here to guide you through the process. Contact us to guide you through
            the process of receiving quality mental health care.
          </p>
          <Link to='/contact-us' className="flex items-center justify-center bg-white hover:bg-orenda-purple transition-colors text-orenda-purple hover:text-white hover:border hover:border-white px-4 py-2 font-semibold rounded-[2.5rem] ~min-w-[16.75rem]/[23rem] mx-auto text-[1.125rem] text-center max-w-[10rem] ">Get Started</Link>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
