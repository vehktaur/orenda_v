import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar/Navbar'

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Outlet />

      <Footer />
    </>
  );
};
export default Layout;
