import BecomeProvider from '../About/BecomeProvider';
import ContactUs from './ContactUs';
import OurTeamIntro from './OurTeamIntro';
import Providers from './Providers';
import Team from './Team';

const OurTeam = () => {
  return (
    <>
      <OurTeamIntro />
      <Providers itemsPerPage={12} numberOfColumns={4} />
      <BecomeProvider bg="white" />
      <Team itemsPerPage={8} />
      <ContactUs />
    </>
  );
};
export default OurTeam;
