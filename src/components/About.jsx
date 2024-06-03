import HR from './HR';
import Header from './Header';
import Team from './Team';
import BecomeProvider from './BecomeProvider';
import AboutIntro from './AboutIntro';
import Mission from './Mission';
import GetStarted from './GetStarted';
import Footer from './Footer';
import ProvidersInAbout from './ProvidersInAbout';
const About = () => (
  <>
    <Header />
    <main className='font-body'>
      <AboutIntro />
      <HR />
      <ProvidersInAbout />
      <HR />
      <Team />
      <BecomeProvider bg="#f5f5f5"/>
      <Mission />
      <GetStarted />
    </main>
    <Footer />
  </>
);

export default About;
