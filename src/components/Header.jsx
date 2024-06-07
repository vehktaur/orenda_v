import Logo from './Logo';

const Header = () => {
  return (
    <header className="p-5 text-center ~text-sm/lg font-dm-sans sticky bg-white top-0 z-10">
      <div className="max-w-7xl mx-auto flex ~md/xl:~gap-6/[9rem] justify-between items-center">
        <Logo />
        <div className=" hidden md:flex items-center justify-between flex-1">
          <nav>
            <ul className="flex ~md/xl:~gap-3.5/12 items-center justify-between">
              {[
                ['Home', '/'],
                ['Our Team', '/'],
                ['Insurance', '/'],
                ['About', '/'],
                ['Privacy Policy', '/'],
                ['Contact Us', '/']
              ].map(([title, url]) => (
                <li key={title}>
                  <a
                    className="cursor-pointer transition block hover:text-orenda-purple hover:font-bold"
                    href={url}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors px-4 py-2.5 border border-orenda-purple rounded-3xl font-semibold">
            Book Now
          </button>
        </div>
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
