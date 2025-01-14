import Button from "../ui/custom-button";

const ContactUsSection = () => {
  return (
    <section className="padding-inline ~my-12/20">
      <div className="mx-auto max-w-7xl rounded-[1.25rem] bg-lime px-6 pb-24 pt-16 text-center">
        <h2 className="mb-2 font-heading font-bold ~text-xl/[2rem]">
          Join Orenda partner’s network
        </h2>
        <p className="mx-auto max-w-[64rem] ~text-sm/lg">
          Expand your reach and enhance patient care by becoming a part of
          Orenda’s network of healthcare partners. Let's collaborate to provide
          seamless, quality care to our community.
        </p>

        <Button
          className="mt-10 border-orenda-green text-orenda-green sm:mx-auto"
          hoverClass="bg-orenda-green"
          link
          to="/contact-us"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};
export default ContactUsSection;
