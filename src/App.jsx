import About from './components/About/About';
import ContactUsPage from './components/Contact Us/ContactUsPage';
import OurTeam from './components/Our Team/OurTeam';
import Insurance from './components/Insurance/Insurance';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/Privacy/PrivacyPolicy';
import ProviderInfo from './components/Provider Info/ProviderInfo';
import BecomeProviderPage from './components/BecomeProviderPage/BecomeProviderPage';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="provider/:index" element={<ProviderInfo />} />
          <Route path="become-a-provider" element={<BecomeProviderPage />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
