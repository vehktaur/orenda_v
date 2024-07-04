import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
      { x: 0, duration: 0.5, stagger: 0.14 }
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
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <div className=" hidden lg:block">
            <nav>
              <ul className="flex items-center justify-between ~lg/xl:~gap-6/12 transition duration-1000">
                {[
                  ['Home', '/'],
                  ['Our Team', '/our-team'],
                  ['Insurance', '/insurance'],
                  ['About', '/about'],
                  ['Blog', '/'],
                  ['Privacy Policy', '/privacy-policy'],
                  ['Contact Us', '/contact-us']
                ].map(([title, url]) => (
                  <li key={title}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-orenda-purple font-bold'
                          : 'hover:text-orenda-purple hover:font-bold'
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
          <Link
            to="/our-team"
            className="text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors px-4 py-2 border border-orenda-purple rounded-3xl font-semibold hidden lg:block"
          >
            Book Now
          </Link>
          <div className="placeholder ~xs/lg:~size-6/8 relative">
            <button
              onClick={() => displayMenu()}
              className="absolute inset-0 grid items-center lg:hidden z-[5]"
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
                  navOpen ? 'bg-white absolute -rotate-45' : 'bg-[#212121] relative'
                }`}
              ></span>
            </button>
          </div>
          <div
            ref={(el) => (navMenuLayer = el)}
            className="fixed right-0 w-[75%] max-w-[25rem] bg-purple-300 top-0 bottom-0 lg:hidden rounded-s-sm z-[3]"
          >
            <div
              ref={(el) => (navMenu = el)}
              className="bg-[#333] absolute inset-0 pt-20 pb-12 rounded-s-sm"
            >
              <nav className="grid items-start gap-5">
                <ul className="grid gap-1 justify-items-start">
                  {[
                    ['Home', '/', 'fa-solid fa-house'],
                    ['Our Team', '/our-team', 'fa-solid fa-people-group'],
                    ['Insurance', '/insurance', 'fa-solid fa-hands-bound'],
                    ['About', '/about', 'fa-solid fa-address-card'],
                    ['Blog', '/', 'fa-solid fa-blog'],
                    [
                      'Privacy Policy',
                      '/privacy-policy',
                      'fa-solid fa-file-shield'
                    ],
                    ['Contact Us', '/contact-us', 'fa-solid fa-comment-dots']
                  ].map(([title, url, icon]) => (
                    <li
                      onClick={() => displayMenu()}
                      className="w-full text-left"
                      key={title}
                    >
                      <NavLink
                        className="block ~px-5/12 ~py-2/3 w-full ~text-base/lg text-white hover:bg-[#eee] hover:text-[#333] font-medium transition-colors duration-300"
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
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
