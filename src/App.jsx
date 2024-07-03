import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUsPage from './components/Contact Us/ContactUsPage';
import OurTeam from './components/Our Team/OurTeam';
import Blogs from './components/Blog/Blogs';
import Insurance from './components/Insurance/Insurance';
import Bloginfo from './components/Blog/Bloginfo'
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
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="provider/:index" element={<ProviderInfo />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="become-a-provider" element={<BecomeProviderPage />} />
          <Route path="blog info" element={<Bloginfo />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
