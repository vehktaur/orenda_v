import applied from '../../assets/applied.png';
const Contacted = () => {
  return (
    <div className="min-h-[70vh] grid place-items-center ~px-8/12">
      <div className="fieldset ~pt-[2.87rem]/[3.44rem] ~pb-[5.13rem]/[9.87rem] max-w-xl">
        <div className="mb-4">
          <img
            className="mx-auto ~size-12/[5.44rem]"
            src={applied}
            alt="successfully applied"
          />
        </div>
        <p className="~mb-2/6 text-center text-lg">
          <strong>Message Sent!</strong>
        </p>
        <p className="text-center">
        Your message has been successfully sent. We will send you a response shortly!
        </p>
      </div>
    </div>
  );
};
export default Contacted;
