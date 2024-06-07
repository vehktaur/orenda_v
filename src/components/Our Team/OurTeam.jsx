import BecomeProvider from '../About/BecomeProvider';
import ContactUs from './ContactUs';
import Footer from '../Footer';
import Header from '../Header';
import OurTeamIntro from './OurTeamIntro';
import Providers from './Providers';
import Team from './Team';

const OurTeam = () => {
  return (
    <>
      <Header />
      <OurTeamIntro />
      <Providers itemsPerPage={12} numberOfColumns={4} />
      <BecomeProvider bg="white" />
      <Team itemsPerPage={8}/>
      <ContactUs />
      <Footer />
    </>
  );
};
export default OurTeam;
