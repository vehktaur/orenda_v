import FormSteps from './FormSteps';
import close from '../../assets/close_icon.svg';
import { useRef, useState, createContext, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useForm } from 'react-hook-form';
import Network from './Network';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

gsap.registerPlugin(useGSAP);

export const PageNumberContext = createContext();

const Insurance = () => {
  //React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting },
    clearErrors
  } = useForm();

  //Declare page state and gsap animation Page scope
  const [pageNumber, changePageNumber] = useState(1);
  const formElement = useRef(null);
  const [file, setFile] = useState(null);

  //showHeading function to dynamically heading and subheading for each page
  const showHeading = (pageNumber) => {
    if (pageNumber === 1) {
      return 'Personal Details';
    } else if (pageNumber === 2) {
      return 'Contacts';
    } else {
      return 'Insurance Details';
    }
  };

  const showSubHeading = (pageNumber) => {
    if (pageNumber === 1) {
      return 'Specify as it is on your insurance card.';
    } else if (pageNumber === 2) {
      return 'Enter your contact details in the field below.';
    } else {
      return 'Complete the details below, and we take it from here.';
    }
  };

  //Control modal opening
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    window.scrollTo(0, 0);
    document.body.classList.toggle('overflow-hidden');
  };
  const closeModal = () => {
    setShowModal(false);
    document.body.classList.toggle('overflow-hidden');
    changePageNumber(1);
    reset();
    animateFields();
  };

  //handle form submission

  const onSubmit = async (data) => {
    if (pageNumber === 3) {
      console.log(data, file);

      const templateParams = {
        from: 'Orenda',
        section: 'Insurance',
        firstName: data['Legal First Name'],
        lastName: data['Legal Last Name'],
        dob: data['Date of Birth'],
        email: data['Email Address'],
        number: data['Phone Number'],
        address1: data['Street Address 1'],
        address2: data['Street Address 2'],
        city: data['City'],
        state: data['State'],
        zipCode: data['Zip Code'],
        insurance: data['Insurance Carrier'],
        memberId: data['Membership ID'],
        groupNumber: data['Group Number']
      };

      const sendEmail = async () => {
        try {
          await emailjs.send(
            'service_84eiwj9',
            'template_o5ovc1q',
            templateParams,
            'f_xOBciJvcABV_wmq'
          );
          openModal();
        } catch (error) {
          console.log(`Email not sent. Error ${error}`);
          toast.error('Error! Please try again');
        }
      };

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          templateParams.insurance = reader.result;
          console.log(reader.result);
          await sendEmail();
        };
      } else {
        await sendEmail();
      }
    }
  };

  //modal table data
  const tableData = [
    { label: 'Name:', value: 'John Doe' },
    { label: 'Insurance:', value: '' },
    { label: 'Member ID:', value: 'K324908599477' },
    { label: 'Group ID:', value: 'TUN33645' },
    { label: 'Payment:', value: 'You have a copay of $25 for each session' }
  ];

  //Setup contextSafe functions for GSAP animations
  const { contextSafe } = useGSAP();
  const animateFields = contextSafe(() => {
    gsap.fromTo(
      formElement.current,
      {
        height: 100,
        opacity: 0
      },
      { height: 'auto', opacity: 1, duration: 0.8 }
    );
  });

  //Page Navigation Functions
  const pageNext = () => {
    if (pageNumber < 3) {
      if (isDirty && isValid) {
        changePageNumber((prevPageNumber) => prevPageNumber + 1);
        animateFields();
        setTimeout(() => clearErrors(), 1);
      }
    }
  };

  const pagePrev = () => {
    if (pageNumber > 1) {
      changePageNumber((prevPageNumber) => prevPageNumber - 1);
      animateFields();
    }
  };

  //Insurance Component return:
  return (
    <PageNumberContext.Provider value={pageNumber}>
      <div className="font-dm-sans bg-dotted">
        {showModal && (
          <div className="fixed px-5 inset-0 max-h-screen bg-[#070707B3] z-50 grid place-items-center">
            <div className="w-full bg-[#FAFAFA] rounded-3xl max-w-[41.44rem] ~px-4/10 ~pt-6/[2.38rem] ~pb-[2.69rem]/[3.38rem]">
              <h2 className="flex justify-between font-medium ~text-lg/[1.75rem] ~mb-8/[2.81rem]">
                <span>Insurance Details</span>
                <button onClick={() => closeModal()}>
                  <img src={close} alt="close modal" />
                </button>
              </h2>

              <div>
                <table className="table-fixed border-separate border-spacing-y-4 gap-y-7 ">
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index}>
                        <td className="text-[#565656] font-medium ~text-sm/lg pe-8">
                          {row.label}
                        </td>
                        <td className="font-bold ~text-sm/lg">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button className="border w-full max-w-[31.5rem] border-orenda-purple rounded-3xl px-4 ~py-2/[0.62rem] block mx-auto text-orenda-purple hover:bg-orenda-purple hover:text-white transition ~mt-10/12 font-semibold">
                Book Now
              </button>
            </div>
          </div>
        )}
        <div className="mt-0"></div>
        <main className="px-5 ~pb-[3.31rem]/[10rem] ~mt-12/28">
          <h1 className="heading">Let's check your plan!</h1>
          <Network />
          <p className="w-4/5 max-w-[38.32rem] mx-auto text-center">
            Please complete this form to verify if your insurance is in network
            and what your Co-pay will be.
          </p>

          <div className="~mt-8/16">
            <form
              id="formElement"
              ref={formElement}
              enctype="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
              className="overflow-y-hidden bg-[#FAFAFA] max-w-[41.44rem] mx-auto rounded-3xl ~xs/xl:~px-3/10 ~pt-6/10 ~pb-[2.13rem]/[4.44rem] border border-[#D9D9D9]"
            >
              <div className="grid grid-flow-col justify-between gap-4 items-center ~mb-10/[4.13rem]">
                <div>
                  <h2 className="font-dm-sans font-bold ~text-lg/[1.75rem] mb-1">
                    {showHeading(pageNumber)}
                  </h2>
                  <p className="~text-xs/sm text-left">
                    {showSubHeading(pageNumber)}
                  </p>
                </div>
                <span className="~text-xs/base text-nowrap text-right">
                  Step {pageNumber} of 3
                </span>
              </div>

              <div className="stuff grid ~gap-y-10/20 bg-inherit transition-all duration-300 ease-in-out pe-8 sm:pe-0">
                <FormSteps
                  register={register}
                  watch={watch}
                  errors={errors}
                  setFile={setFile}
                />
              </div>

              <div className="~mt-10/16 grid gap-6 font-semibold ~text-sm/base font-open-sans">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  onClick={() => pageNext()}
                  className="border w-full max-w-[31.5rem] border-orenda-purple rounded-3xl px-4 ~py-2/[0.62rem] block mx-auto text-orenda-purple hover:bg-orenda-purple hover:text-white transition cursor-pointer"
                >
                  {pageNumber === 3 ? 'Verify' : 'Proceed'}
                </button>

                {pageNumber > 1 && (
                  <button
                    type="button"
                    onClick={() => pagePrev()}
                    className="block mx-auto hover:underline"
                  >
                    Back
                  </button>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
    </PageNumberContext.Provider>
  );
};
export default Insurance;
