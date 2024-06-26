import applied from '../../assets/applied.png';
const BPApplied = () => {
  return (
    <div>
      <div className="fieldset ~pt-[2.87rem]/[3.44rem] ~pb-[5.13rem]/[9.87rem]">
        <div className="mb-4">
          <img
            className="mx-auto ~size-12/[5.44rem]"
            src={applied}
            alt="successfully applied"
          />
        </div>
        <p className="~mb-2/6 text-center">
          <strong>Application Sent!</strong>
        </p>
        <p className="text-center">
          Thank you for your interest in joining Orenda Psychiatry. We will
          review your application and get back to you shortly.
        </p>
      </div>
    </div>
  );
};
export default BPApplied;
