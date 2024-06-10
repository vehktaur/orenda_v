import Header from '../Header';
import Footer from '../Footer';
import Input from '../Input';
import close from '../../assets/close_icon.svg';
import { useState } from 'react';

const Insurance = () => {
  const [pageNumber, changePageNumber] = useState(1);
  const pageNext = () => {
    if (pageNumber < 3) changePageNumber(pageNumber + 1);
  };

  const pagePrev = () => {
    if (pageNumber > 1) changePageNumber(pageNumber - 1);
  };

  const showPage = (pageNumber) => {
    if (pageNumber === 1) {
      return (
        <>
          <Input label="Your Name" type="text" id="yourName" />
          <Input label="Second Name" type="text" id="secondName" />
          <Input label="Date of Birth" type="date" id="DOB" />
        </>
      );
    } else if (pageNumber === 2) {
      return (
        <>
          <Input label="Email Address" type="email" id="email" />
          <Input label="Phone Number" type="tel" id="phoneNumber" />
          <Input label="Street Address 1" type="text" id="address1" />
          <Input label="Street Address 2" type="text" id="address2" />
          <Input label="City" type="text" id="city" />
          <Input label="State" type="text" id="state" />
          <Input label="Zip Code" type="number" id="zipCode" />
        </>
      );
    } else {
      return (
        <>
          <div className="~text-sm/lg relative text-left bg-inherit">
            <input
              id="insuranceCarrier"
              name="Insurance Carrier"
              className="block bg-transparent w-full border-b border-[#D1D1D1] pb-2"
              type="file"
              required
            />
            <label
              className="block text-nowrap font-medium bg-inherit h-full text-[#0F0F0F] absolute -top-1 right-0 -left-[0.05rem] transition-all pb-8"
              htmlFor="insuranceCarrier"
            >
              Insurance Carrier (Not Sure?{' '}
              <span className="text-orenda-purple underline cursor-pointer">
                Upload Your card
              </span>
              )
            </label>
          </div>
          <Input label="Membership ID" type="text" id="membershipID" />
          <Input label="Group Number" type="number" id="groupNumber" />
        </>
      );
    }
  };
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative font-dm-sans">
      {
      false && (
        <div className="absolute px-6 inset-0 max-h-screen bg-[#070707B3] z-50 grid place-items-center">
          <div className="w-full bg-[#FAFAFA] rounded-3xl max-w-[41.44rem] ~px-4/10 ~pt-6/[2.38rem] ~pb-[2.69rem]/[3.38rem]">
            <h2 className="flex justify-between font-medium ~text-lg/[1.75rem] ~mb-8/[2.81rem]">
              <span>Insurance Details</span>
              <span className="cursor-pointer">
                <img src={close} alt="close modal" />
              </span>
            </h2>

            <div>
              <table className="table-fixed border-separate border-spacing-y-4 gap-y-7 ">
                <tr>
                  <td className="text-[#565656] font-medium ~text-sm/lg pe-8">
                    Name:
                  </td>
                  <td className="font-bold ~text-sm/lg">John Doe</td>
                </tr>
                <tr>
                  <td className="text-[#565656] font-medium ~text-sm/lg pe-8">
                    Insurance:
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-[#565656] font-medium ~text-sm/lg pe-8">
                    Member ID:
                  </td>
                  <td className="font-bold ~text-sm/lg">K324908599477</td>
                </tr>
                <tr>
                  <td className="text-[#565656] font-medium ~text-sm/lg pe-8">
                    Group ID:
                  </td>
                  <td className="font-bold ~text-sm/lg">TUN33645</td>
                </tr>
                <tr>
                  <td className="text-[#565656] font-medium ~text-sm/lg pe-8">
                    Payment:
                  </td>
                  <td className="font-bold ~text-sm/lg">
                    You have a copay of $25 for each session
                  </td>
                </tr>
              </table>
            </div>

            <button className="border w-full max-w-[31.5rem] border-orenda-purple rounded-3xl px-4 ~py-2/[0.62rem] block mx-auto text-orenda-purple hover:bg-orenda-purple hover:text-white transition ~mt-10/12 font-semibold">
              Book Now
            </button>
          </div>
        </div>
      )}
      <Header />
      <main className="px-6 ~mt-8/[7.5rem] ~mb-[3.31rem]/[10rem]">
        <h1 className="heading ~mb-2/4">Let's check your plan!</h1>
        <p className="max-w-[38.32rem] mx-auto text-center">
          Please complete this form to verify if your insurance is in network
          and what your Co-pay will be.
        </p>

        <div className="~mt-8/16">
          <form
            onSubmit={handleSubmit}
            className="bg-[#FAFAFA] max-w-[41.44rem] mx-auto rounded-3xl ~px-4/10 ~pt-6/10 ~pb-[2.13rem]/[4.44rem] border border-[#D9D9D9]"
          >
            <div className="flex justify-between gap-2 items-center ~mb-10/[4.13rem]">
              <div>
                <h2 className="font-dm-sans font-bold ~text-lg/[1.75rem] mb-1">
                  {showHeading()}
                </h2>
                <p className="~text-xs/sm">{showSubHeading()}</p>
              </div>
              <p className="~text-xs/base text-nowrap">
                Step {pageNumber} of 3
              </p>
            </div>

            <div className="grid ~gap-y-10/20 bg-inherit transition-all duration-300 ease-in-out grid-rows-[1fr]">
              {showPage(pageNumber)}
            </div>

            <div className="~mt-10/16 grid gap-6 font-semibold ~text-sm/base font-open-sans">
              <button
                onClick={() => pageNext()}
                className="border w-full max-w-[31.5rem] border-orenda-purple rounded-3xl px-4 ~py-2/[0.62rem] block mx-auto text-orenda-purple hover:bg-orenda-purple hover:text-white transition"
              >
                {pageNumber == 3 ? 'Verify' : 'Proceed'}
              </button>
              {pageNumber > 1 && (
                <button
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
      <Footer />
    </div>
  );
};
export default Insurance;
