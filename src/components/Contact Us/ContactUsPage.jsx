import Team from '../Our Team/Team';
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
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Successful from './Successful';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  const container = useRef(null);
  const [modal, setModal] = useState(false);

  const onSubmit = async (data) => {
    const templateParams = {
      from: 'Orenda',
      section: 'Contact Us',
      name: data['Your Name'],
      email: data['Email Address'],
      phone: data['Phone Number'],
      subject: data['Subject'],
      message: data['Message']
    };

    try {
      await emailjs.send(
        'service_d7svcgq',
        'template_h74ln0c',
        templateParams,
        'f_xOBciJvcABV_wmq'
      );
      setModal(true);
    } catch (error) {
      console.log(`Email not sent. Error: ${JSON.stringify(error)}}`);
      toast.error('Error!. Please try again');
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  useGSAP(
    () => {
      const subHeadings = gsap.utils.toArray('h2');
      const paragraphs = gsap.utils.toArray('p');
      const buttons = gsap.utils.toArray('button');
      const inputs = gsap.utils.toArray(
        'form .relative.text-justify.bg-inherit'
      );

      const elements = [...subHeadings, ...paragraphs, ...buttons];

      elements.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: el,
            start: 'bottom bottom'
          }
        });
      });

      inputs.forEach((input) => {
        gsap.from(input, {
          xPercent: -150,
          scrollTrigger: {
            trigger: input,
            start: 'bottom bottom'
          }
        });
      });

      gsap.from('#insuranceProviders span', {
        x: 500,
        opacity: 0,
        scrollTrigger: {
          trigger: '#insuranceProviders',
          start: 'bottom bottom'
        },
        stagger: {
          amount: 1,
          grid: 'auto'
        }
      });
    },
    { dependencies: [], scope: container }
  );

  return (
    <>
      {modal && (
        <Successful
          title="Message Sent!"
          content="Your message has been successfully sent. We will send you a response
          shortly!"
          setModal={setModal}
        />
      )}
      <main ref={container} className="px-5 md:~px-10/14 ~mt-8/[7.5rem]">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading">Contact Us</h1>
          <div className="~mt-8/[3.75rem] text-center md:text-left md:flex gap-10">
            <div className="md:flex-1">
              <div>
                <h2 className="font-heading font-bold ~text-lg/[1.375rem] mb-4">
                  Providing Mental Healthcare with Convenience
                </h2>
                <p className="~leading-6/8 max-w-[32.13rem] mx-auto md:mx-0 text-center md:text-justify">
                  We have a team of over 30 Customer support specialists and
                  registered nurses, contact them over your preferred choice of
                  communication
                </p>
                <div className="grid gap-4 mt-8  max-w-[27.5rem] mx-auto md:mx-0">
                  <a
                    href="tel:+13477077735"
                    className="font-open-sans px-4 ~py-2/3 border font-semibold flex justify-center gap-2 items-center border-orenda-purple bg-orenda-purple text-white rounded-3xl cursor-pointer"
                  >
                    <span>
                      <img className="w-6" src={call} alt="call icon" />
                    </span>
                    Call
                  </a>
                  <a
                    href="sms:+13477077735"
                    className="font-open-sans px-4 ~py-2/3 border font-semibold flex justify-center gap-2 items-center border-orenda-purple rounded-3xl hover:border-none transition-colors relative overflow-hidden group cursor-pointer z-[1]"
                  >
                    <span className="block absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-indigo-300 transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
                    Text
                    <span>
                      <img src={text} alt="text icon" />
                    </span>
                  </a>
                  <a
                    href="mailto:admin@orendapsych.com"
                    className="font-open-sans px-4 ~py-2/3 border font-semibold flex justify-center gap-2 items-center border-orenda-purple rounded-3xl hover:border-none transition-colors relative overflow-hidden group cursor-pointer z-[1]"
                  >
                    <span className="block absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-indigo-300 transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
                    Email
                    <span>
                      <img src={email} alt="email icon" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="hidden md:block ~mt-10/16 ~space-y-10/12">
                <div>
                  <h2 className="font-heading font-bold ~text-lg/[1.375rem] ~mb-2/4">
                    Operating Hours
                  </h2>
                  <div>
                    <p>
                      <strong className="font-medium">
                        Mondays - Sundays:
                      </strong>{' '}
                      <br />
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="font-heading font-bold ~text-lg/[1.375rem] ~mb-2/4">
                    Emergency Contact Information{' '}
                  </h2>
                  <p className="max-w-[32rem] ~text-sm/lg">
                    If you are experiencing a psychiatric emergency, please
                    call:
                    <br />{' '}
                    <span className="text-red-900 font-semibold">911</span>,
                    <span className="text-red-900 font-semibold">
                      {' '}
                      1-800-LIFE-NET
                    </span>{' '}
                    (within the 5 boroughs of NYC), <br />{' '}
                    <span className="text-red-900 font-semibold">
                      1-800-273-TALK
                    </span>{' '}
                    (nationwide), or go directly to your nearest emergency room.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <form
                className="text-justify bg-[#fafafa] border rounded-2xl ~px-[1.69rem]/10 ~space-y-10/[3.5rem] ~pt-[2.38rem]/10 ~pb-[2.81rem]/20 mt-10 md:mt-0 overflow-hidden"
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
                <button
                  disabled={isSubmitting}
                  className="font-open-sans w-full max-w-[31.5rem] mx-auto block border border-orenda-purple text-orenda-purple hover:border-transparent hover:text-white transition-colors px-4 py-[0.62rem] rounded-3xl font-bold ~text-sm/lg relative z-1 overflow-hidden group"
                >
                  <span className="block absolute top-0 left-0 bottom-0 w-0 group-hover:w-full bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1] border hover:border-orenda-purple" />
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="text-center md:text-left mt-6 space-y-10 md:flex mb-10 ~md/2xl:~gap-8/[15rem]">
            <div className="md:hidden sm:flex gap-20 items-start">
              <div className="flex-shrink-0">
                <h2 className="font-heading font-bold ~text-lg/[1.375rem] ~mb-2/4">
                  Operating Hours
                </h2>
                <div className="~leading-6/8">
                  <p className="text-center md:text-left">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-center md:text-left">
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                  <p className="text-center md:text-left">Sunday: Closed</p>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
                <h2 className="font-heading font-bold ~text-lg/[1.375rem] ~mb-2/4">
                  Emergency Contact Information{' '}
                </h2>
                <p className="text-center md:text-left">
                  If you are experiencing a psychiatric emergency, please call:
                  <br /> <span className="text-red-900 font-semibold">911</span>
                  ,
                  <span className="text-red-900 font-semibold">
                    {' '}
                    1-800-LIFE-NET
                  </span>{' '}
                  (within the 5 boroughs of NYC), <br />{' '}
                  <span className="text-red-900 font-semibold">
                    1-800-273-TALK
                  </span>{' '}
                  (nationwide), or go directly to your nearest emergency room.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div>
                <h2 className="font-heading font-bold ~text-lg/[1.375rem] ~mb-2/4">
                  Main Contact Information
                </h2>
                <div>
                  <p className="text-center md:text-left ~text-sm/lg">
                    Phone: <a href="tel:+13477077735">(347) 707-7735</a>
                  </p>
                  <p className="text-center md:text-left ~text-sm/lg">
                    Fax: (347) 745-0992
                  </p>
                  <p className="text-center md:text-left ~text-sm/lg">
                    Email:{' '}
                    <a
                      className="underline"
                      href="mailto:admin@orendapsych.com"
                    >
                      admin@orendapsych.com
                    </a>
                  </p>
                  <p className="grid ~gap-2/4 text-center md:text-left mt-4 ~text-sm/lg">
                    <address className="not-italic font-dm-sans">
                      <strong className="font-medium">New York Office:</strong>{' '}
                      <br />
                      80 Fifth Avenue, Office #903-10, New York, NY 10011.
                    </address>
                    <address className="not-italic font-dm-sans">
                      <strong className="font-medium">Boston Office:</strong>{' '}
                      <br />
                      75 Arlington Street, Ste 500 Boston, MA 02116.
                    </address>
                  </p>
                </div>
              </div>
              <div>
                <p className="my-8 flex flex-col text-center md:text-left">
                  <strong>For NEW patients, please email: </strong>
                  <a className="underline" href="mailto:intake@orendapsych.com">
                    intake@orendapsych.com
                  </a>
                </p>
                <p className="flex flex-col text-center md:text-left overflow-hidden">
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
              <div className="~mb-6/10">
                <h2 className="font-heading font-bold ~text-lg/[1.375rem] ~mb-2/4">
                  Appointment Scheduling
                </h2>
                <p className="text-center md:text-left">
                  <a
                    className="text-orenda-purple font-semibold underline"
                    href="tel:+13477077735"
                  >
                    Call us
                  </a>{' '}
                  to book an appointment
                </p>
              </div>
              <div>
                <h2 className="font-heading font-bold ~text-lg/[1.375rem] ~mb-2/4">
                  Insurance and Payment Information
                </h2>
                <p className="text-center md:text-left">
                  We accept the following insurance providers:
                </p>
                <div
                  id="insuranceProviders"
                  className="flex flex-wrap gap-6 items-center justify-center md:justify-start mt-8 overflow-x-hidden"
                >
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
      <FAQ />
      <Newsletter />
    </>
  );
};
export default ContactUsPage;
