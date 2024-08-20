import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const subHeadings = gsap.utils.toArray('h2');
      const paragraphs = gsap.utils.toArray('p');
      const listItems = gsap.utils.toArray('li');
      const elements = [...subHeadings, ...paragraphs, ...listItems];

      elements.forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: el,
            start: 'bottom bottom',
          }
        });
      });
    },
    { dependencies: [], scope: container }
  );

  return (
    <main ref={container} className="px-5">
      <div className="max-w-[69.875rem] mx-auto ~mt-8/28 ~mb-[5.56rem]/[16.88rem]">
        <h1 className="heading ~mb-2/4">Privacy Policy</h1>
        <p className="~text-sm/base text-center">
          <span className="text-[#818181]">Last Updated:</span> March, 2024
        </p>
        <div className="~space-y-8/12 ~mt-8/20">
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Your Privacy at Orenda Psychiatry:
            </h2>
            <p>
              At Orenda Psychiatry, we understand the importance of privacy,
              especially in telehealth and telemedicine services. Our commitment
              to safeguarding your personal information is paramount. We adhere
              to the principle of collecting only the information necessary for
              providing our services effectively.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Collection of Personal Information:
            </h2>
            <p>
              We collect information essential for Telehealth appointments,
              including contact details, medical history, treatment preferences.
              Non-personally-identifying information like browser type and
              language preference is also gathered to improve our website’s
              functionality.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Use and Disclosure of Personal Information:
            </h2>
            <p>
              Your personal information is confidential and use solely for the
              purpose of your treatment and improving our Telehealth services.
              We do not share your information except as required by law or for
              vital operational needs. Any sharing of data complies with
              healthcare privacy regulations, ensuring your confidentiality.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Data Storage and Security:
            </h2>
            <p>
              Personal information is stored securely and only as long as
              necessary to provide our services or as required by law. We employ
              advanced security measures to protect your data from unauthorized
              access.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Visitor Interaction and Consent:
            </h2>
            <p>
              By using our Telehealth services, you consent to our collection
              and use of your personal information as necessary for your care.
              Visitors can choose not to provide certain information, but this
              may affect the availability or quality use of our services.
            </p>
          </div>
          {/* <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              International Data Transfer:
            </h2>
            <p>
              As a Telehealth provider, we may transfer information across
              borders for processing or storage. We ensure all data transfers
              comply with international privacy standards and regulations.
            </p>
          </div> */}
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Cookies and Website Usage:
            </h2>
            <p>
              We use cookies to enhance your experience on our website and to
              understand how our services are used. You can set your browser to
              refuse cookies, but this may limit your ability to use certain
              features of our website effectively.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Policy Changes and Notifications:
            </h2>
            <p>
              We may update this privacy policy occasionally. Significant
              changes will be communicated to our users via email or through our
              website. We encourage you to review our policy regularly.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Contact Information and User Rights:
            </h2>
            <p>
              For any privacy-related concerns or to exercise your rights
              regarding your personal data (access, correction, deletion),
              please contact us at{' '}
              <a
                href="mailto:admin@orendapsych.com"
                className="font-bold underline"
              >
                admin@orendapsych.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Legal Compliances and Best Practices:
            </h2>
            <p>
              Orenda Psychiatry is committed to complying with all applicable
              Telehealth privacy regulations, including HIPAA and other local
              laws. We strive to maintain the highest standards of data
              protection and patient confidentiality. Your continued use of our
              Telehealth services signifies acceptance of these terms and our
              dedication to your privacy.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Text and SMS Communication Policy:
            </h2>
            <p>
              At Orenda Psychiatry, we use text messages and SMS primarily for
              non-clinical purposes. This includes appointment reminders,
              notifications about required intake documents, and other
              service-related information. Patients are able to also opt out of
              text/sms communication here:{' '}
              <Link to="/contact-us" className="underline font-bold">
                https://www.orendapsych.com/contact
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Non-Clinical Use:
            </h2>
            <p>
              Texts/SMS will be used to convey information related to
              appointment times / dates / reminders, intake documentation
              completion, and non-clinical administrative matters.
            </p>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Clinical Information via Text/SMS:
            </h2>
            <ul className="font-dm-sans ~text-sm/xl list-outside list-disc ~pl-4/8 text-justify">
              <li>
                We will only engage in text/SMS communication involving clinical
                information (such as medication refills or changes in pharmacy)
                if initiated by the patient.
              </li>
              <li>
                If you, as a patient, send us an inbound text/SMS requesting
                clinical actions like medication refills or changes in pharmacy
                details, we will respond accordingly. However, we recommend that
                such requests be followed up with a direct communication to our
                office for verification and documentation purposes via our HIPPA
                compliant email:{' '}
                <a
                  href="mailto:admin@orendapsych.com"
                  className="font-bold underline"
                >
                  admin@orendapsych.com
                </a>{' '}
                or speaking directly with your provider.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-heading ~text-base/[1.375rem] ~mb-2/4 font-bold">
              Patient Consent and Security:
            </h2>
            <p>
              By providing your mobile number, you consent to receiving text/SMS
              communications for the purposes outlined above unless you choose
              to opt out as described above.
            </p>
            <ul className="font-dm-sans ~text-sm/xl list-outside list-disc ~pl-4/8 text-justify">
              <li>
                We prioritize the security and confidentiality of all
                communications. However, please be aware that text messaging is
                not the most secure form of communication. For sensitive or
                private health information, we recommend using our secure
                Telehealth platform or direct phone communication.
              </li>
            </ul>
            <p>
              Please contact us if you have any questions or need to update your
              communication preferences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
