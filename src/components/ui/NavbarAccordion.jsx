import { cn, linkIsActive } from "@/lib/utils";
import { DownArrowIcon, RightArrowIcon2 } from "@/assets/svgs";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavbarAccordion = ({ link, closeMenu, navOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!navOpen) {
      setIsOpen(false);
    }
  }, [navOpen]);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
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
            "mt-0.5 size-6 stroke-white transition-all duration-300 group-hover:stroke-[#333]",
            { "stroke-[#333]": linkIsActive(link), "rotate-180":isOpen },
          )}
        />
      </button>
      <div
        className={cn("grid overflow-hidden transition-all duration-300", {
          "grid-rows-[1fr] opacity-100": isOpen,
          "grid-rows-[0fr] opacity-0": !isOpen,
        })}
      >
        <div
          className={cn(
            "mx-4 mt-2 space-y-1 overflow-hidden rounded-lg bg-neutral-200 transition-all duration-300",
            { "py-1": isOpen },
          )}
        >
          {link.sublinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  "group/link flex justify-between gap-2 py-2 text-left transition duration-500 ~text-base/lg ~ps-4/8 ~pe-2/20 hover:bg-neutral-500 hover:font-medium",
                  { "bg-neutral-500": isActive },
                )
              }
              key={link.path}
              onClick={() => closeMenu()}
              to={link.path}
            >
              {link.label}

              <RightArrowIcon2 className="mr-5 mt-0.5 size-5 transition-all duration-300 ![rotate:z_0deg] group-hover/link:mr-0" />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavbarAccordion;
