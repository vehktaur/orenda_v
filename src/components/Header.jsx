import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="p-5 text-center ~text-sm/lg font-dm-sans sticky bg-white top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className=" hidden md:block">
          <nav>
            <ul className="flex items-center justify-between ~md/xl:~gap-2.5/12 transition duration-1000">
              {[
                ['Home', '/home'],
                ['Our Team', '/our team'],
                ['Insurance', '/insurance'],
                ['About', '/about'],
                ['Blog', '/blog'],
                ['Privacy Policy', '/privacy policy'],
                ['Contact Us', '/contact']
              ].map(([title, url]) => (
                <NavLink
                  key={title}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-orenda-purple font-bold'
                      : 'hover:text-orenda-purple hover:font-bold'
                  }
                  to={url}
                >
                  {title}
                </NavLink>
              ))}
            </ul>
          </nav>
          <Link
            to="/our team"
            className="text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors px-4 py-2 border border-orenda-purple rounded-3xl font-semibold md:hidden"
          >
            Book Now
          </Link>
        </div>
        <Link
          to="/our team"
          className="text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors px-4 py-2 border border-orenda-purple rounded-3xl font-semibold hidden md:block"
        >
          Book Now
        </Link>
        <button className="~xs/md:~size-6/8 grid items-center md:hidden">
          <span className="w-full block ~h-[0.19rem]/[0.25rem] rounded-full bg-[#070707]"></span>
          <span className="w-full block ~h-[0.19rem]/[0.25rem] rounded-full bg-[#070707]"></span>
          <span className="w-full block ~h-[0.19rem]/[0.25rem] rounded-full bg-[#070707]"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
