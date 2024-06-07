import newsletter from '../../assets/newsletter.svg';
import Input from '../Input';

const onSubmit = (event) => {
  event.preventDefault();
};

const Newsletter = () => {
  return (
    <div className="~py-10/14 px-6 mb-8">
      <div className="max-w-7xl mx-auto bg-[#f5f5f5] flex flex-col sm:flex-row ~px-6/28 pb-14 pt-8 items-center gap-6 sm:gap-10">
        <div className="sm:order-last flex-shrink-0">
          <img className="~size-[8.1875rem]/[25.525rem]" src={newsletter}></img>
        </div>
        <div className="text-center sm:text-start">
          <h2 className="heading sm:py-1 mb-3 sm:text-start">
            Subscribe to our Newsletter
          </h2>
          <p className="max-w-[34.5rem]">
            Subscribe to our newsletter for updates and discussions on mental
            health topics.
          </p>
          <form
            className="rounded-2xl ~space-y-10/[3.5rem] ~pt-[2.38rem]/10 ~pb-[2.81rem]/20 mt-10 md:mt-0"
            onSubmit={onSubmit}
          >
            <Input
              label="First Name"
              type="text"
              id="first name"
            />
            <Input
              label="Last Name"
              type="text"
              id="last name"
            />
            <Input
              label="Email*"
              type="email"
              id="email"
            />

            <button className="font-open-sans w-full max-w-[16.31rem] mx-auto sm:mx-0 block border border-orenda-purple text-orenda-purple hover:bg-orenda-purple hover:text-white transition-colors px-4 py-[0.62rem] rounded-3xl font-bold ~text-sm/lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
