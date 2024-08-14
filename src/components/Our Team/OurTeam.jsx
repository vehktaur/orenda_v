import BecomeProvider from '../About/BecomeProvider';
import ContactUs from './ContactUs';
import OurTeamIntro from './OurTeamIntro';
import Providers from './Providers';
import Team from './Team';

const OurTeam = () => {
  return (
    <>
      <OurTeamIntro />
      <Providers itemsPerPage={10} numberOfColumns={5} forHome={false} />
      <BecomeProvider bg="white" />
      <Team itemsPerPage={8} />
      <ContactUs />
    </>
  );
};
export default OurTeam;
