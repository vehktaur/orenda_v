import Team from '../Our Team/Team';
import ContactUs from '../Our Team/ContactUs';
import call from '../../assets/call.svg';
import text from '../../assets/text.svg';
import email from '../../assets/email.svg';
import uhc from '../../assets/uhc_insurance.svg';
import aetna from '../../assets/aetna_insurance.svg';
import oscar from '../../assets/oscar_insurance.png';
import tricare from '../../assets/tricare_insurance.png';
import cigna from '../../assets/cigna_insurance.png';
import compsych from '../../assets/compsych_insurance.png';
import abc from '../../assets/abc_insurance.png';
import multiplan from '../../assets/multiplan_insurance.png';
import FAQ from './FAQ';
import Newsletter from './Newsletter';
import Input from '../Input';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm({
    reValidateMode: 'onChange'
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <>
      <main className="px-5 ~mt-8/[7.5rem]">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading">Contact Us</h1>
          <div className="~mt-8/[3.75rem] text-center md:text-left md:flex gap-10">
            <div className="md:flex-1">
              <div>
                <h2 className="font-heading ~text-lg/[1.375rem] mb-4">
                  Providing Mental Healthcare with Convenience
                </h2>
                <p className="~leading-6/8 max-w-[32.13rem] mx-auto md:mx-0 text-center md:text-justify">
                  We have a team of over 25 Customer support specialists and
                  registered nurses, contact them over your preferred choice of
                  communication
                </p>
                <div className="grid gap-4 mt-8  max-w-[27.5rem] mx-auto md:mx-0">
                  <button className="font-open-sans px-4 ~py-2/3 border font-semibold flex justify-center gap-2 items-center border-orenda-purple bg-orenda-purple text-white rounded-3xl">
                    <span>
                      <img className="w-6" src={call} alt="call icon" />
                    </span>
                    Call
                  </button>
                  <button className="font-open-sans px-4 ~py-2/3 border font-semibold flex justify-center gap-2 items-center border-orenda-purple rounded-3xl hover:bg-indigo-300 transition-colors">
                    Text
                    <span>
                      <img src={text} alt="text icon" />
                    </span>
                  </button>
                  <button className="font-open-sans px-4 ~py-2/3 border font-semibold flex justify-center gap-2 items-center border-orenda-purple rounded-3xl hover:bg-indigo-300 transition-colors">
                    Email
                    <span>
                      <img src={email} alt="email icon" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden md:block ~mt-10/16 ~space-y-10/12">
                <div>
                  <h2 className="font-heading ~text-lg/[1.375rem] ~mb-2/4">
                    Operating Hours
                  </h2>
                  <div>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div>
                  <h2 className="font-heading ~text-lg/[1.375rem] ~mb-2/4">
                    Emergency Contact Information{' '}
                  </h2>
                  <p className="max-w-[22.44rem]">
                    If you are in immediate danger, call{' '}
                    <span className="text-red-900 font-semibold">911</span> or
                    visit your nearest emergency room
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <form
                className="text-justify bg-[#fafafa] border rounded-2xl ~px-[1.69rem]/10 ~space-y-10/[3.5rem] ~pt-[2.38rem]/10 ~pb-[2.81rem]/20 mt-10 md:mt-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h2 className="font-bold font-dm-sans ~mb-2/4 ~text-lg/[1.75rem]">
                  Send Us a Message
                </h2>
                <Input
                  key="yourName"
                  label="Your Name"
                  type="text"
                  id="yourName"
                  register={register}
                  watch={watch}
                  errors={errors}
                />
                <Input
                  key="emailAddress"
                  label="Email Address"
                  type="email"
                  id="emailAddress"
                  register={register}
                  watch={watch}
                  errors={errors}
                />
                <Input
                  key="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  register={register}
                  watch={watch}
                  errors={errors}
                />
                <Input
                  key="subject"
                  label="Subject"
                  type="text"
                  id="subject"
                  register={register}
                  watch={watch}
                  errors={errors}
                />
                <Input
                  key="message"
                  label="Message"
                  type="textarea"
                  id="message"
                  register={register}
                  watch={watch}
                  errors={errors}
                />
                <button className="font-open-sans w-full max-w-[31.5rem] mx-auto block border border-orenda-purple text-orenda-purple hover:bg-orenda-purple hover:text-white transition-colors px-4 py-[0.62rem] rounded-3xl font-bold ~text-sm/lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="text-center md:text-left mt-6 space-y-10 md:flex mb-10 sm:~gap-0/[21rem]">
            <div className="md:hidden sm:flex gap-20 items-start">
              <div className="flex-shrink-0">
                <h2 className="font-heading ~text-lg/[1.375rem] ~mb-2/4">
                  Operating Hours
                </h2>
                <div className="~leading-6/8">
                  <p className='text-center md:text-left'>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className='text-center md:text-left'>Saturday: 9:00 AM - 1:00 PM</p>
                  <p className='text-center md:text-left'>Sunday: Closed</p>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <h2 className="font-heading ~text-lg/[1.375rem] ~mb-2/4">
                  Emergency Contact Information{' '}
                </h2>
                <p className='text-center md:text-left'>
                  If you are in immediate danger, call{' '}
                  <span className="text-red-900 font-semibold">911</span> or
                  visit your nearest emergency room
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div>
                <h2 className="font-heading ~text-lg/[1.375rem] ~mb-2/4">
                  Main Contact Information
                </h2>
                <div>
                  <p className='text-center md:text-left'>Address: 80 5th Avenue</p>
                  <p className='text-center md:text-left'>Phone: (347) 707-7735</p>
                  <p className='text-center md:text-left'>Fax: (347) 745-0992</p>
                  <p className='text-center md:text-left'>
                    Email:
                    <a
                      className="underline"
                      href="mailto:admin@orendapsych.com"
                    >
                      admin@orendapsych.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <p className="my-8 flex flex-col text-center md:text-left">
                  <strong>For new appointments, please email: </strong>
                  <a className="underline" href="mailto:intake@orendapsych.com">
                    intake@orendapsych.com
                  </a>
                </p>
                <p className="flex flex-col text-center md:text-left">
                  <strong>For billing questions, please email: </strong>
                  <a
                    className="underline"
                    href="mailto:accounts@orendapsych.com"
                  >
                    accounts@orendapsych.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div>
                <h2 className="font-heading ~text-lg/[1.375rem] ~mb-2/4">
                  Appointment Scheduling
                </h2>
                <p className='text-center md:text-left'>
                  <a
                    className="text-orenda-purple font-semibold underline"
                    href="/"
                  >
                    Call us
                  </a>{' '}
                  to book an appointment
                </p>
              </div>
              <div>
                <h3>Insurance and Payment Information</h3>
                <p className='text-center md:text-left'>We accept the following insurance providers:</p>
                <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start mt-6">
                  <span className="max-w-[8.54rem]">
                    <img
                      src={uhc}
                      alt="United Health Care Insurance Provider"
                    />
                  </span>
                  <span className=" max-w-[3.6rem]">
                    <img src={oscar} alt="Oscar Insurance Provider" />
                  </span>
                  <span className="max-w-[3.7rem]">
                    <img src={aetna} alt="Aetna Insurance Provider" />
                  </span>
                  <span className="max-w-[3.6rem]">
                    <img src={tricare} alt="Tricare Insurance Provider" />
                  </span>
                  <span className="max-w-[4.3rem]">
                    <img src={cigna} alt="Cigna Insurance Provider" />
                  </span>
                  <span className="max-w-[5.31rem]">
                    <img src={compsych} alt="ComPsychInsurance Provider" />
                  </span>
                  <span className="max-w-[5rem]">
                    <img
                      src={abc}
                      alt="Anthem BlueCross BlueShield Insurance Provider"
                    />
                  </span>
                  <span className="max-w-[5.79rem]">
                    <img src={multiplan} alt=" Multiplan Insurance Provider" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Team itemsPerPage={12} />
      <ContactUs />
      <FAQ />
      <Newsletter />
    </>
  );
};
export default ContactUsPage;
