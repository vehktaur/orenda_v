import { cn, linkIsActive } from "@/lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { DownArrowIcon, RightArrowIcon2 } from "@/assets/svgs";
import { NavLink } from "react-router-dom";

const NavbarAccordion = ({ link, closeMenu }) => {
  return (
    <AccordionItem value={link.label} className="w-full">
      <AccordionTrigger
        className={cn(
          "group flex w-full items-center justify-between font-medium text-white transition-colors duration-300 ~text-base/xl ~px-5/12 ~py-2/3 hover:bg-[#eee] hover:text-[#333]",
          {
            "bg-[#eee] text-[#333]": linkIsActive(link),
          },
        )}
      >
        {link.label}

        <DownArrowIcon
          className={cn(
            "mt-0.5 size-6 stroke-white transition-colors duration-300 group-hover:stroke-[#333]",
            { "stroke-[#333]": linkIsActive(link) },
          )}
        />
      </AccordionTrigger>
      <AccordionContent>
        <div className="mx-4 mt-2 space-y-1 rounded-lg bg-neutral-200 py-1">
          {link.sublinks.map((link) => (
            <AccordionTrigger
              className={cn(
                "group/link flex justify-between gap-2 px-8 py-2 font-medium transition duration-500 ~text-base/lg hover:bg-neutral-500 hover:font-semibold",
              )}
              key={link.path}
              onClick={() => closeMenu()}
              asChild
            >
              <NavLink to={link.path}>
                {link.label}

                <RightArrowIcon2 className="mr-5 size-5 transition-all duration-300 ![rotate:z_0deg] group-hover/link:mr-0" />
              </NavLink>
            </AccordionTrigger>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
export default NavbarAccordion;
