import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition:Slide
      />
    </>
  );
};
export default Layout;
