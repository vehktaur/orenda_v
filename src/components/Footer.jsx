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
              <p>Mon - Fri: 8am - 7pm</p>
              <p>Sat: 9am - 12pm</p>
            </div>
          </div>
          <div className=" min-w-[6.8rem]">
            <h2 className="footer__heading">Office Location</h2>
            <address className="max-w-[14.5rem] not-italic font-dm-sans">
              80 Fifth Avenue office #903 - 10, New York, NY 10011.
            </address>
          </div>
          <div>
            <h2 className="footer__heading">Contact</h2>
            <div>
              <p className="mb-1.5">
                Email:
                <br />
                <a href="mailto:admin@orendapsych.com">
                  admin@orenda&shy;psych.&shy;com
                </a>
              </p>
              <p>
                Call or text:
                <br />
                <a href="tel:+13477077735">(347) 707 - 7735</a>
                <br />
                Fax: (347) 707 - 7735
              </p>
            </div>
          </div>
          <div>
            <h2 className="footer__heading">Mailing Address</h2>
            <address className="max-w-[14.5rem] not-italic font-dm-sans">
              347 fifth Ave Suite 1402 - 235, New York, NY 10016
            </address>
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
