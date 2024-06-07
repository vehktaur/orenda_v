import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="~w-[5rem]/[7.8125rem] ~h-[1.75rem]/[2.8rem] flex-shrink-0">
      <img className="h-full" src={logo} alt="Orenda Psychiatry" />
    </div>
  );
};
export default Logo;
