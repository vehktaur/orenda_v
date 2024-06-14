import BecomeProvider from './BecomeProvider';
import AboutIntro from './AboutIntro';
import Mission from './Mission';
import GetStarted from './GetStarted';
import ProvidersInAbout from './ProvidersInAbout';
import TeamInAbout from './TeamInAbout';
import Treat from './Treat/Treat';

const HR = () => {
  return (
    <div className="bg-[#E3E3E3] max-w-[63.75rem] mx-auto my-[3.5rem]">
      <hr />
    </div>
  );
};

const About = () => (
  <>
    <main className="font-dm-sans">
      <AboutIntro />
      <HR />
      <ProvidersInAbout />
      <HR />
      <TeamInAbout />
      <BecomeProvider bg="#f5f5f5" />
      <Mission />
      <Treat />
      <GetStarted />
    </main>
  </>
);

export default About;
