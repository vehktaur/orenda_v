import { useGSAP } from '@gsap/react';
import applied from '../../assets/applied.png';
import close from '../../assets/close_icon.svg';
import { useRef } from 'react';
import gsap from 'gsap';

const Successful = ({ title, content, setModal }) => {
  const modal = useRef(null);
  useGSAP(() => {
    gsap.from(modal.current, {
      opacity: 0,
      scale: 0.45
    });
  });

  return (
    <div
      onClick={() => setModal(false)}
      className="fixed px-5 inset-0 max-h-screen bg-[#070707B3] z-50 grid place-items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        ref={modal}
        className="fieldset flex flex-col gap-4 justify-center pt-20 pb-24 max-w-xl bg-white ring-1 ring-black relative"
      >
        <button
          className="absolute top-6 ~right-6/7 rounded-full bg-gray-300 p-1"
          onClick={() => setModal(false)}
        >
          <img src={close} alt="close modal" />
        </button>
        <div>
          <img
            className="mx-auto ~size-12/[5.44rem]"
            src={applied}
            alt="successfully applied"
          />
        </div>
        <p className="text-center text-lg">
          <strong>{title}</strong>
        </p>
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};
export default Successful;
