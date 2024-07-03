import { useForm } from 'react-hook-form';
import newsletter from '../../assets/newsletter.svg';
import Input from '../Input';
import { useEffect } from 'react';

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <div className="~py-10/14 px-5 mb-8">
      <div className="max-w-7xl mx-auto bg-[#f5f5f5] flex flex-col sm:flex-row ~px-5/28 pb-14 pt-8 items-center gap-6 sm:gap-10">
        <div className="sm:order-last flex-shrink-0">
          <img className="~size-[8.1875rem]/[25.525rem]" src={newsletter}></img>
        </div>
        <div className="text-center sm:text-justify">
          <h2 className="heading sm:py-1 mb-3 ~text-xl/[2.625rem] sm:text-left">
            Subscribe to our Newsletter
          </h2>
          <p className="max-w-[34.5rem]">
            Subscribe to our newsletter for updates and discussions on mental
            health topics.
          </p>
          <form
            className="rounded-2xl ~space-y-10/[3.5rem] ~pt-[2.38rem]/10 ~pb-[2.81rem]/20 mt-10 md:mt-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              key="firstName"
              label="First Name"
              type="text"
              id="firstName"
              register={register}
              watch={watch}
              errors={errors}
            />
            <Input
              key="lastName"
              label="Last Name"
              type="text"
              id="lastName"
              register={register}
              watch={watch}
              errors={errors}
            />
            <Input
              key="newsLetterEmail"
              label="Email*"
              type="email"
              id="email"
              register={register}
              watch={watch}
              errors={errors}
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
