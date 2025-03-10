import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/custom-button";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const container = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".group",
          start: "top 75%",
        },
      });

      tl.current
        .from("h2", {
          opacity: 0,
          y: 100,
        })
        .from("button", {
          opacity: 0,
          y: 100,
        });
    },
    { dependencies: [], scope: container },
  );

  return (
    <div
      ref={container}
      className="bg-[#f6f7fc] bg-dotted bg-cover pt-8 ~pb-[3.22rem]/12"
    >
      <div className="overflow-y-hidden px-5 pb-6">
        <h2 className="heading mt-4 ~text-lg/[2rem] ~mb-4/6">
          Have any Question?
        </h2>
        <Link to="/contact-us">
          <Button asChild className="sm:mx-auto">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ContactUs;
