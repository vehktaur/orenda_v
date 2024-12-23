import About from "./components/About/About";
import ContactUsPage from "./components/Contact Us/ContactUsPage";
import OurTeam from "./components/Our Team/OurTeam";
import Insurance from "./components/Insurance/Insurance";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import ProviderInfo from "./components/Provider Info/ProviderInfo";
import BecomeProviderPage from "./components/BecomeProviderPage/BecomeProviderPage";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getProviders } from "./services/api";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import ReferAPatient from "./components/ReferAPatient/ReferAPatient";
import ExecutiveInfo from "./components/Executive Info/ExecutiveInfo";
import Blog from "./components/Blogs/Blog";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["providers"],
      queryFn: getProviders,
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="our-team/:slide" element={<OurTeam />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          {/* <Route
            path='message-sent'
            element={
              <Successful
                title='Thank You for Your Referral to Orenda Psychiatry!'
                content='Thank you for referring a patient to Orenda Psychiatry! A dedicated member of our team will respond to you soon.'
              />
            }
          /> */}
          <Route path="insurance" element={<Insurance />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="provider/:name" element={<ProviderInfo />} />
          <Route path="executive/:name" element={<ExecutiveInfo />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:title" element={<Blog />} />
          <Route path="become-a-provider" element={<BecomeProviderPage />} />
          <Route path="refer-a-patient" element={<ReferAPatient />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

library.add(fab, fas, far);
