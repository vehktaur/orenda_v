import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="font-open-sans bg-m-footer md:bg-md-footer bg-footer-positions md:bg-md-footer-positions bg-no-repeat px-5 pb-[2.81rem] border-t border-[#E2E2E2]">
      <div className="max-w-7xl mx-auto ~pt-9/[5.75rem] ~text-sm/base md:flex md:justify-between md:~gap-[1.69rem]/[5.06rem]">
        <div className="flex justify-between gap-[1.69rem] mb-6 md:~gap-[1.69rem]/[5.06rem]">
          <div className="flex flex-col md:flex-row md:~gap-[1.69rem]/[5.06rem] justify-between">
            <Logo />
            <div className="mb-[2.63rem]">
              <h2 className="footer__heading">Mailing Address</h2>
              <p className="max-w-[14.5rem]">
                347 fifth Ave Suite 1402 - 235, New York, NY 10016
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:~gap-[1.69rem]/[5.06rem]">
            <div className=" min-w-[6.8rem]">
              <h2 className="footer__heading">Office Location</h2>
              <p className="max-w-[14.5rem]">
                80 Fifth Avenue office #903 - 10, New York, NY 10011.
              </p>
            </div>
            <div className="min-w-fit">
              <h2 className="footer__heading">Hours</h2>
              <div className="grid gap-2">
                <p>Monday - Friday</p>
                <p>8am - 7pm</p>
                <p>Saturday</p>
                <p>9am - 12pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="footer__heading">Contact</h2>
          <div>
            <p>Email. Call. Text.</p>
            <p>admin@orendapsych.com</p>
            <p>(347) 707 - 7735</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 font-normal ~text-sm/base">
        <small>Copyright @ 2023 Orendapsych.com</small>
      </div>
    </footer>
  );
};
export default Footer;
