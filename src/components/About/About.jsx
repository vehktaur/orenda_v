import HR from '../HR';
import Header from '../Header';
import BecomeProvider from './BecomeProvider';
import AboutIntro from './AboutIntro';
import Mission from './Mission';
import GetStarted from './GetStarted';
import Footer from '../Footer';
import ProvidersInAbout from './ProvidersInAbout';
import TeamInAbout from './TeamInAbout';
const About = () => (
  <>
    <Header />
    <main className="font-dm-sans">
      <AboutIntro />
      <HR />
      <ProvidersInAbout />
      <HR />
      <TeamInAbout />
      <BecomeProvider bg="#f5f5f5" />
      <Mission />
      <GetStarted />
    </main>
    <Footer />
  </>
);

export default About;
