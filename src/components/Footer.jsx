import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="font-dm-sans bg-m-footer md:bg-md-footer bg-footer-positions md:bg-md-footer-positions bg-no-repeat px-5 md:~px-6/10 pb-[2.81rem] pt-8 border-t border-[#E2E2E2]">
      <div className="max-w-7xl mx-auto ~text-sm/base ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ~gap-y-6/8 ~gap-x-6/8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="min-w-fit">
            <h2 className="footer__heading">Hours</h2>
            <div className="grid gap-2">
              <p>
                <strong className="font-medium">Mondays - Sundays:</strong>
                <br />
                8am - 10:30pm
              </p>
            </div>
          </div>
          <div>
            <h2 className="footer__heading">Mailing Address</h2>
            <address className="max-w-[14.5rem] not-italic font-dm-sans">
              347 Fifth Ave, Suite 1402-235, New York, NY 10016
            </address>
          </div>
          <div className="forLabel:min-w-[10.75rem]">
            <h2 className="footer__heading">Contact</h2>
            <div className="grid gap-1.5">
              <p>
                <strong className="font-medium">Call or text:</strong>
                <br />
                <a href="tel:+13477077735">(347) 707-7735</a>
              </p>
              <p>
                <strong className="font-medium">Fax:</strong>
                <br />
                (347) 745-0992
              </p>
              <p>
                <strong className="font-medium">Email:</strong>
                <br />
                <a href="mailto:admin@orendapsych.com">
                  admin@orenda&shy;psych.&shy;com
                </a>
              </p>
            </div>
          </div>
          <div className=" min-w-[6.8rem]">
            <h2 className="footer__heading">Office Location</h2>
            <div className="grid ~gap-2/4">
              <address className="max-w-[14.5rem] not-italic font-dm-sans">
                <strong className="font-medium">New York Office:</strong> <br />
                80 Fifth Avenue, Office #903-10, New York, NY 10011.
              </address>
              <address className="max-w-[14.5rem] not-italic font-dm-sans">
                <strong className="font-medium">Boston Office:</strong> <br />
                75 Arlington Street, Ste 500 Boston, MA 02116.
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 font-normal ~text-sm/base">
        <small>Copyright @ 2024 Orendapsych.com</small>
      </div>
    </footer>
  );
};
export default Footer;
