import PartnerItem from "./ui/PartnerItem";
import { Accordion } from "../ui/accordion";
import { partners } from "@/data/partnersData";

const PartnersList = () => {
  return (
    <section className="~mt-[5.5rem]/24">
      <h2 className="text-center font-heading font-bold ~text-2xl/[2.625rem] ~mb-4/8">
        Our Partners
      </h2>

      <Accordion
        type="single"
        collapsible
        className="divide-y divide-light-grey border-y border-light-grey"
      >
        {partners.map((partner) => {
          return <PartnerItem key={partner.id} partner={partner} />;
        })}
      </Accordion>
    </section>
  );
};
export default PartnersList;
