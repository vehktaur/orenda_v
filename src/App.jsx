import About from './components/About/About';
import ContactUsPage from './components/Contact Us/ContactUsPage';
import OurTeam from './components/Our Team/OurTeam';
import ProviderInfo from './components/Our Team/Provider Info/ProviderInfo';
import Insurance from './components/Insurance/Insurance';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/About" element={<About />} />
          <Route path="/Our Team" element={<OurTeam />} />
          <Route path="/Contact Us" element={<ContactUsPage />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/Provider/:index" element={<ProviderInfo />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
