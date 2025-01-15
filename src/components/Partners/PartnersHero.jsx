import Button from "../ui/custom-button";
import partners from "@/assets/partners.png";
import Partnerships from "./ui/Partnerships";

const PartnersHero = () => {
  return (
    <section className="padding-inline overflow-clip ~pt-6/16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between ~gap-6/28 sm:flex-row-reverse">
        {/* Partner Hero Image */}
        <Partnerships />

        {/* Partner Hero Intro */}
        <div className="max-w-[40rem]">
          <h1 className="heading ~mb-2/4 sm:text-left">
            Expanding Care Through Trusted Partnership
          </h1>
          <p className="mb-6 text-center ~text-sm/lg sm:text-left">
            At Orenda, we build partnerships with trusted healthcare providers
            to enhance patient care. These collaborations ensure access to
            expert referrals and a seamless care experience for our community.
          </p>

          <Button
            link
            to="/contact-us"
            className="text-center ~max-w-32/[11.5rem]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
export default PartnersHero;
