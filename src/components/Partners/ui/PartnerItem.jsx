import { DownArrowIcon } from "@/assets/svgs";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PartnerItem = ({ partner }) => {
  return (
    <AccordionItem
      className="padding-inline transition-colors ~text-sm/lg ~py-5/[1.94rem] [&[data-state=open]]:bg-purple-mist"
      value={partner.id}
    >
      <div className="mx-auto max-w-7xl ~pe-0/24">
        {/* dropdown button */}
        <AccordionTrigger className="flex items-center justify-between ~gap-6/12">
          {/* partner name and logo */}
          <div className="flex items-center ~gap-3/5">
            {/* partner logo */}
            <div className="grid flex-shrink-0 place-items-center rounded-2xl border-[1.891px] border-[#E4DBF6] bg-[#F3EDFF] ~size-16/[7.5rem]">
              <img
                className="rounded-full object-cover ~size-12/[5.6rem]"
                src={partner.image}
                alt={partner.name}
              />
            </div>
            {/* partner name and states */}
            <div className="~space-y-0/1">
              <h3 className="font-bold ~text-lg/3xl ~leading-7/10">
                {partner.name}
              </h3>
              <p className="font-dm-sans font-normal ~text-sm/lg">
                Operating States: {partner.operatingStates}
              </p>
            </div>
          </div>

          <div className="grid flex-shrink-0 place-items-center rounded-full border-2 border-[#E4DBF6] ~size-10/16">
            <DownArrowIcon className="stroke-[#696969] transition-all duration-300 ~size-8/10" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-8 font-dm-sans ~text-sm/lg">
          {/* about partner */}
          <h4 className="font-semibold text-[#6D6D6D] ~text-base/lg">About</h4>
          <p className="~mb-4/8">{partner.about}</p>

          {/* biography of partner */}
          <h4 className="font-semibold text-[#6D6D6D] ~text-base/lg">
            Biography
          </h4>
          <p>{partner.biography}</p>

          {/* link for green point referral */}
          {partner.referral && (
            <>
              <h4 className="font-semibold text-[#6D6D6D] ~text-base/lg ~mt-4/8">
                Refer a patient
              </h4>
              <a className="underline" href={partner.referral.link}>
                {partner.referral.label}
              </a>

              {partner.referral.extra}
            </>
          )}
        </AccordionContent>
      </div>
    </AccordionItem>
  );
};
export default PartnerItem;
