import BecomeProvider from '../About/BecomeProvider';
import ContactUs from './ContactUs';
import Footer from '../Footer';
import Header from '../Header';
import OurTeamIntro from './OurTeamIntro';
import Providers from './Providers';

const OurTeam = () => {
  return (
    <>
      <Header />
      <OurTeamIntro />
      <Providers />
      <BecomeProvider bg="white" />
      <ContactUs />
      <Footer />
    </>
  );
};
export default OurTeam;
