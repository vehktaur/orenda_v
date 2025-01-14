import { partners } from "@/data/partnersData";
import PartnerItem from "./ui/PartnerItem";
import { Accordion } from "../ui/accordion";
import { SidebarTrigger } from "../ui/sidebar";

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
          let children = null;
          if (partner.name === "Greenpoint Psychotherapy") {
            children = (
              <>
                {/* link for green point referral */}
                <h4 className="font-semibold text-[#6D6D6D] ~text-base/lg ~mt-4/8">
                  Refer a patient
                </h4>
                <a className="underline" href="#">
                  Link
                </a>
              </>
            );
          }
          return (
            <PartnerItem
              key={partner.id}
              partner={partner}
              children={children}
            />
          );
        })}
      </Accordion>
    </section>
  );
};
export default PartnersList;
