import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="~w-20/[7.8125rem] flex-shrink-0">
      <img
        width={150}
        height={100}
        src={logo}
        alt="Orenda Psychiatry"
      />
    </div>
  );
};
export default Logo;
