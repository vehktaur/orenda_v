import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  let navMenu = useRef();
  let navMenuLayer = useRef();

  const timeline = useRef();

  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current.fromTo(
      [navMenuLayer, navMenu],
      {
        x: '110vw'
      },
      { x: 0, duration: 0.6, stagger: 0.1, ease: 'power1.inOut' }
    );
  });

  const displayMenu = () => {
    if (!navOpen) {
      timeline.current.play();
      document.body.classList.toggle('no-scroll');
    } else {
      timeline.current.reverse();
      document.body.classList.toggle('no-scroll');
    }

    setNavOpen(!navOpen);
  };

  return (
    <>
      {navOpen && (
        <div
          onClick={() => displayMenu()}
          className="fixed inset-0 z-[2] opacity-5 bg-purple-200"
        ></div>
      )}
      <header className="p-5 text-center ~text-sm/[1.1rem] font-dm-sans sticky bg-white top-0 z-10">
        <div className="max-w-[90rem] mx-auto flex justify-between items-center">
          <Logo />
          <div className=" hidden forProviders:block">
            <nav>
              <ul className="flex items-center justify-between ~forProviders/2xl:~gap-6/12 transition duration-1000 ">
                {[
                  ['Home', '/'],
                  ['Meet Our Team', '/our-team'],
                  ['Insurance', '/insurance'],
                  ['About', '/about'],
                  ['Blog', '/'],
                  ['Privacy Policy', '/privacy-policy'],
                  ['Contact Us', '/contact-us'],
                  ['Join Our Team', '/become-a-provider']
                ].map(([title, url]) => (
                  <li key={title}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `font-bold ${
                              title === 'Join Our Team'
                                ? 'text-green-700'
                                : 'text-orenda-purple '
                            }`
                          : `hover:font-bold ${
                              title === 'Join Our Team'
                                ? 'text-green-700 font-medium'
                                : 'hover:text-orenda-purple '
                            }`
                      }
                      to={url}
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <a
            target="_blank"
            href="https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits"
            className="text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors px-4 py-2 border border-orenda-purple rounded-3xl font-semibold hidden forProviders:block"
          >
            Book Now
          </a>
          <div className="~xs/xl:~size-6/8 relative forProviders:hidden">
            <button
              onClick={() => displayMenu()}
              className="absolute inset-0 grid items-center forProviders:hidden z-[5]"
            >
              <span
                className={`w-full block h-1 rounded-full transition-all duration-1000 ${
                  navOpen
                    ? 'bg-white absolute rotate-45'
                    : 'bg-[#212121] rotate-0'
                }`}
              ></span>
              <span
                className={`w-full block h-1 rounded-full transition-all duration-1000 ${
                  navOpen ? 'bg-white -translate-x-8 opacity-0' : 'bg-[#212121]'
                }`}
              ></span>
              <span
                className={`w-full block h-1 rounded-full transition-all duration-1000 ${
                  navOpen
                    ? 'bg-white absolute -rotate-45'
                    : 'bg-[#212121] relative'
                }`}
              ></span>
            </button>
            {/* <button onClick={() => displayMenu()}></button> */}
          </div>
          <div
            ref={(el) => (navMenuLayer = el)}
            className="fixed right-0 w-[75%] max-w-[25rem] bg-purple-300 top-0 bottom-0 forProviders:hidden rounded-s-sm z-[3]"
          >
            <div
              ref={(el) => (navMenu = el)}
              className="bg-[#333] absolute inset-0 pt-20 pb-12 rounded-s-sm h-full"
            >
              <nav className="grid items-start gap-5 h-full">
                <ul className="grid gap-1 justify-items-start">
                  {[
                    ['Home', '/', 'fa-solid fa-house'],
                    ['Meet Our Team', '/our-team', 'fa-solid fa-people-group'],
                    ['Insurance', '/insurance', 'fa-solid fa-hands-bound'],
                    ['About', '/about', 'fa-solid fa-address-card'],
                    ['Blog', '/', 'fa-solid fa-blog'],
                    [
                      'Privacy Policy',
                      '/privacy-policy',
                      'fa-solid fa-file-shield'
                    ],
                    ['Contact Us', '/contact-us', 'fa-solid fa-comment-dots'],
                    ['Join Our Team', '/become-a-provider', 'fa-solid fa-person-circle-plus']
                  ].map(([title, url, icon]) => (
                    <li
                      onClick={() => displayMenu()}
                      className="w-full text-left"
                      key={title}
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? 'block ~px-5/12 ~py-2/3 w-full ~text-base/xl bg-[#eee] text-[#333] font-medium transition-colors duration-300'
                            : 'block ~px-5/12 ~py-2/3 w-full ~text-base/xl text-white hover:bg-[#eee] hover:text-[#333] font-medium transition-colors duration-300'
                        }
                        to={url}
                      >
                        <span className="mr-3 hover:text-[#333]">
                          <FontAwesomeIcon icon={icon} />
                        </span>
                        {title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <a
                  target="_blank"
                  href="https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits"
                  className="mt-auto mb-8 mx-8 bg-[#eee] text-[#333] hover:bg-[#ccc] transition-colors px-4 py-2 border rounded-3xl font-semibold"
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
