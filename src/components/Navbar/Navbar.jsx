import { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import close from '../../assets/hamburger-close.svg';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to('.nav-list-mobile', {
      top: '90%',
      duration: 0.8,
      ease: 'back.out(1.2)'
    });
  });

  const openSesame = () => {
    if (!navOpen) {
      tl.current.play();
      document.body.classList.toggle('no-scroll');
    } else {
      tl.current.reverse();
      document.body.classList.toggle('no-scroll');
    }

    setNavOpen(!navOpen);
  };

  return (
    <div className="nav-container">
      {navOpen && <div onClick={() => openSesame()} className="overlay"></div>}
      <div className="nav-wrapper">
        <div className="~w-[5rem]/[7.8125rem] ~h-[1.75rem]/[2.8rem] flex-shrink-0">
          <img className="h-full" src={logo} alt="Orenda Psychiatry" />
        </div>

        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Our Team">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/Insurance">Insurance</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to={'/blogs'}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/privacypolicy">Privacy policy</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>

        <div className="contact">
          <button>Book Now</button>
        </div>

        <button onClick={() => openSesame()} className="hamburger-btn">
          <img src={navOpen ? close : hamburger} alt="" className="hamburger" />
        </button>

        <ul className={`nav-list-mobile`}>
          <li onClick={() => openSesame()}>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li onClick={() => openSesame()}>
            <NavLink className="nav-link" to="/Our Team">
              Our Team
            </NavLink>
          </li>
          <li onClick={() => openSesame()}>
            <NavLink className="nav-link" to="/Insurance">
              Insurance
            </NavLink>
          </li>
          <li onClick={() => openSesame()}>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li onClick={() => openSesame()}>
            <NavLink className="nav-link" to={'/blogs'}>
              Blog
            </NavLink>
          </li>
          <li onClick={() => openSesame()}>
            <NavLink className="nav-link" to="/privacypolicy">
              Privacy policy
            </NavLink>
          </li>

          <li onClick={() => openSesame()}>
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
