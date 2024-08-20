import { useForm } from 'react-hook-form';
import newsletter from '../../assets/newsletter.svg';
import Input from '../Input';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Successful from './Successful';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  const [modal, setModal] = useState(false);
  const container = useRef(null);
  const tl = useRef(null);

  const onSubmit = async (data) => {
    console.log(data);

    const templateParams = {
      from: 'Orenda',
      section: 'Newsletter',
      firstName: data['First Name'],
      lastName: data['Last Name'],
      email: data['Email*'],
      subscribed: data['subscribed']
    };
    try {
      await emailjs.send(
        'service_29p9a1p',
        'template_tvlg3pe',
        templateParams,
        'Wv61Pn9AOeH61J_Jm'
      );
      setModal(true);
    } catch (error) {
      console.log(`Email not sent. Error ${JSON.stringify(error)}`);
      toast.error('Failed to subscribe! Please try again');
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        delay: 0.1,
        yoyo: true,
        scrollTrigger: {
          trigger: '.newsletter_img',
          start: 'top center'
        }
      });

      tl.current
        .from('.newsletter_img', {
          rotateZ: 360
        })
        .to('.newsletter_img', {
          scale: 1.2,
          rotateZ: 20,
          ease: 'back'
        })
        .to('.newsletter_img', {
          rotateZ: -20
        })
        .to('.newsletter_img', {
          rotateZ: 0,
          scale: 1
        });
    },
    { dependencies: [], scope: container }
  );

  return (
    <>
      {modal && (
        <Successful
          title="Subscribed!"
          content="Thank you for subscribing! Please check your email to confirm your subscription."
          setModal={setModal}
        />
      )}
      <div ref={container} className="~py-10/14 px-5 mb-8">
        <div className="max-w-7xl mx-auto bg-[#f5f5f5] flex flex-col sm:flex-row ~px-5/28 pb-14 pt-8 items-center gap-6 sm:gap-10">
          <div className="sm:order-last flex-shrink-0 newsletter_img">
            <img
              className="~size-[8.1875rem]/[25.525rem]"
              width={100}
              height={100}
              src={newsletter}
            ></img>
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
              className="rounded-2xl ~pt-[2.38rem]/10 ~pb-[2.81rem]/20 mt-10 md:mt-0"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="~space-y-10/[3.5rem]">
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
              </div>

              <label className="flex items-center gap-3 ~mt-4/8">
                <input
                  {...register('subscribed', {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  })}
                  className="block ~size-[1.125rem]/5 accent-orenda-purple flex-shrink-0"
                  type="checkbox"
                />
                <span className="~text-sm/base font-dm-sans font-medium text-left">
                  I agree to receive newsletters and updates from Orenda
                  Psychiatry
                </span>
              </label>
              <span className="inline-block text-red-500 mt-2 text-sm">
                {errors.subscribed?.message}
              </span>

              <button
                disabled={isSubmitting}
                className={`font-open-sans w-full max-w-[16.31rem] mx-auto sm:mx-0 block border border-orenda-purple text-orenda-purple hover:text-white transition-colors px-4 py-[0.62rem] ~mt-10/12 rounded-3xl font-bold ~text-sm/lg relative overflow-hidden group z-[1] ${
                  isSubmitting ? 'italic' : ''
                }`}
              >
                <span className="inline-block absolute -top-[1px] -left-[1px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-orenda-purple transition-all duration-500 z-[-1] rounded-3xl border hover:border-orenda-purple" />
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsletter;
