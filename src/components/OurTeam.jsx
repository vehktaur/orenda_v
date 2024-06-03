import BecomeProvider from './BecomeProvider';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Header from './Header';
import OurTeamIntro from './OurTeamIntro';

const OurTeam = () => {
  return (
    <>
      <Header />
      <OurTeamIntro />
      <BecomeProvider bg="white" />
      <ContactUs />
      <Footer />
    </>
  );
};
export default OurTeam;
