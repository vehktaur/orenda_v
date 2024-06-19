import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="bg-[#F5F5F5] ~pt-8/[9.69rem] ~pb-[3.22rem]/[9.69rem]">
      <div className="px-5">
        <h2 className="heading ~text-lg/[2rem] ~mb-4/10">Have any Question?</h2>
        <Link to="/contact">
          <button className="flex items-center justify-center bg-transparent hover:bg-orenda-purple transition-colors text-orenda-purple hover:text-white border border-orenda-purple px-4 py-2 font-semibold rounded-[2.5rem] ~min-w-[16.75rem]/[25rem] mx-auto text-[1.125rem]">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ContactUs;
