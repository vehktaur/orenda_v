import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn, linkIsActive } from "@/lib/utils";
import { DownArrowIcon, RightArrowIcon2 } from "@/assets/svgs";
import NavbarAccordion from "./ui/NavbarAccordion";
import { Accordion } from "./ui/accordion";
import Button from "./ui/custom-button";
import { zocLink } from "@/lib/definitions";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const header = useRef();
  let navMenu = useRef();
  let navMenuLayer = useRef();

  const menuItems = [
    { label: "Home", path: "/", icon: "fa-solid fa-house" },
    {
      label: "Meet Our Team",
      path: "/our-team/1",
      icon: "fa-solid fa-people-group",
    },
    { label: "Insurance", path: "/insurance", icon: "fa-solid fa-hands-bound" },
    { label: "About", path: "/about", icon: "fa-solid fa-address-card" },
    { label: "Blog", path: "/blog", icon: "fa-solid fa-blog" },
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
      icon: "fa-solid fa-file-shield",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
      icon: "fa-solid fa-comment-dots",
    },
    {
      label: "Join Our Team",
      path: "/become-a-provider",
      icon: "fa-solid fa-person-circle-plus",
    },
  ];

  const linkWithSubLinks = [
    {
      label: "Refer A Patient",
      icon: "fa-solid fa-user-group",
      sublinks: [
        {
          label: "Refer a patient to orenda",
          path: "/refer-a-patient",
        },
        { label: "Our partners", path: "/our-partners" },
      ],
    },
  ];

  const timeline = useRef();

  // useGSAP(() => {
  //   gsap.to(header.current, {
  //     backgroundColor: 'rgb(255 255 255)',
  //     scrollTrigger: {
  //       start: 'top+=70',
  //       end: '+=0',
  //       toggleActions: 'play none none reverse',
  //       scrub: 2
  //     },
  //     ease: 'power1.inOut'
  //   });
  // }, []);

  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current.fromTo(
      [navMenuLayer, navMenu],
      {
        xPercent: 110,
      },
      { xPercent: 0, duration: 0.6, stagger: 0.1, ease: "power1.inOut" },
    );
  });

  const displayMenu = () => {
    if (!navOpen) {
      timeline.current.play();
      document.body.classList.toggle("no-scroll");
    } else {
      timeline.current.reverse();
      document.body.classList.toggle("no-scroll");
    }

    setNavOpen((prev) => !prev);
  };

  return (
    <>
      {navOpen && (
        <div
          onClick={() => displayMenu()}
          className="fixed inset-0 z-[2] bg-purple-200 opacity-5"
        ></div>
      )}
      <header
        ref={header}
        className="sticky top-0 z-10 bg-white p-5 text-center font-dm-sans ~text-sm/[1.1rem]"
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between">
          <div className={`flex-shrink-0 ~w-20/[5.8125rem]`}>
            <img width={150} height={100} src={logo} alt="Orenda Psychiatry" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden forNav:block">
            <nav>
              <ul className="flex items-center justify-between transition duration-1000 ~forNav/2xl:~gap-6/8">
                {menuItems.map(({ label, path }) => {
                  return (
                    <li key={label}>
                      <NavLink
                        className={({ isActive }) =>
                          cn({
                            "hover:font-bold": true,
                            "font-bold text-orenda-purple": isActive,
                            "text-green-700": label === "Join Our Team",
                          })
                        }
                        to={path}
                      >
                        {label}
                      </NavLink>
                    </li>
                  );
                })}

                {linkWithSubLinks.map((link) => {
                  return (
                    <li key={link.label}>
                      <button
                        className={cn(
                          "group relative flex items-center gap-1.5 text-orenda-purple hover:font-bold",
                          {
                            "font-bold": linkIsActive(link),
                          },
                        )}
                      >
                        {link.label}

                        <DownArrowIcon className="size-5 stroke-orenda-purple transition-transform duration-300 group-hover:rotate-180" />

                        <ul className="absolute left-1/2 top-full hidden min-w-72 -translate-x-1/2 animate-fadeIn rounded-2xl border border-[#EAEAEA] bg-white px-6 py-1 text-left text-black shadow-sm duration-300 ~text-sm/base zoom-in group-hover:block">
                          {link.sublinks.map((link) => (
                            <li
                              key={link.path}
                              className="border-[#d6d6d6] first:border-b first:*:pb-4 last:*:pt-4"
                            >
                              <NavLink
                                className={cn(
                                  "group/link flex items-center justify-between gap-2 font-medium transition duration-500 hover:font-bold",
                                )}
                                to={link.path}
                              >
                                {link.label}

                                <RightArrowIcon2 className="mr-2 mt-0.5 size-5 transition-all duration-300 group-hover/link:mr-0" />
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <Button
            link
            target="_blank"
            to={zocLink}
            className="hidden w-fit px-4 py-[0.62rem] font-semibold ~text-sm/lg forNav:block"
          >
            Book Now
          </Button>
          <div className="relative ~xs/xl:~size-6/8 forNav:hidden">
            <button
              onClick={() => displayMenu()}
              className="absolute inset-0 z-[5] grid items-center"
            >
              <span
                className={`block h-1 w-full rounded-full transition-all duration-1000 ${
                  navOpen
                    ? "absolute rotate-45 bg-white"
                    : "rotate-0 bg-[#212121]"
                }`}
              ></span>
              <span
                className={`block h-1 w-full rounded-full transition-all duration-1000 ${
                  navOpen ? "-translate-x-8 bg-white opacity-0" : "bg-[#212121]"
                }`}
              ></span>
              <span
                className={`block h-1 w-full rounded-full transition-all duration-1000 ${
                  navOpen
                    ? "absolute -rotate-45 bg-white"
                    : "relative bg-[#212121]"
                }`}
              ></span>
            </button>
            {/* <button onClick={() => displayMenu()}></button> */}
          </div>

          {/* Mobile Menu */}
          <div
            ref={(el) => (navMenuLayer = el)}
            className="fixed bottom-0 right-0 top-0 z-[3] w-[75%] max-w-[25rem] rounded-s-sm bg-purple-300 forNav:hidden"
          >
            <div
              ref={(el) => (navMenu = el)}
              className="absolute inset-0 h-full rounded-s-sm bg-[#333] pb-12 pt-20"
            >
              <nav className="grid h-full items-start gap-5">
                <ul className="grid justify-items-start gap-1">
                  {menuItems.map(({ label, path, icon }) => (
                    <li
                      onClick={() => displayMenu()}
                      className="w-full text-left"
                      key={label}
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "block w-full bg-[#eee] font-medium text-[#333] transition-colors duration-300 ~text-base/xl ~px-5/12 ~py-2/3"
                            : "block w-full font-medium text-white transition-colors duration-300 ~text-base/xl ~px-5/12 ~py-2/3 hover:bg-[#eee] hover:text-[#333]"
                        }
                        to={path}
                      >
                        <span className="mr-3 hover:text-[#333]">
                          <FontAwesomeIcon icon={icon} />
                        </span>
                        {label}
                      </NavLink>
                    </li>
                  ))}

                  {linkWithSubLinks.map((link) => {
                    return (
                      <NavbarAccordion
                        key={link.path}
                        link={link}
                        closeMenu={displayMenu}
                        navOpen={navOpen}
                      />
                    );
                  })}
                </ul>
                <a
                  target="_blank"
                  href={zocLink}
                  className="mx-8 mb-8 mt-auto rounded-3xl border bg-[#eee] px-4 py-2 font-semibold text-[#333] transition-colors hover:bg-[#ccc]"
                >
                  Book Now
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
