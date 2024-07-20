import logo from '../assets/logo1.png';

const Logo = (size) => {
  return (
    <div className={`${size} flex-shrink-0`}>
      <img width={150} height={100} src={logo} alt="Orenda Psychiatry" />
    </div>
  );
};
export default Logo;
