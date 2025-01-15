import Button from "../ui/custom-button";

const ReferPatientSection = () => {
  return (
    <section className="padding-inline ~my-12/20">
      <div className="mx-auto max-w-7xl rounded-[1.25rem] bg-purple-mist px-6 pb-24 pt-16 text-center">
        <h2 className="mb-2 font-heading font-bold ~text-xl/[2rem]">
          Refer a patient to Orenda
        </h2>
        <p className="~text-sm/lg">
          We’re committed to providing compassionate and comprehensive care
          every step of the way.
        </p>

        <Button
          className="mt-10 bg-orenda-purple text-white hover:text-orenda-purple sm:mx-auto"
          hoverClass="bg-purple-mist"
          link
          to="/refer-a-patient"
        >
          Refer a patient
        </Button>
      </div>
    </section>
  );
};
export default ReferPatientSection;
