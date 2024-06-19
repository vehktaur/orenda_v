import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`py-4 ~px-3/6 border hover:bg-[#f8f8ff] border-${
        accordionOpen ? 'orenda-purple' : '[#E3E3E3]'
      } ${accordionOpen ? 'bg-[#f8f8ff]' : ''} rounded-lg`}
    >
      <div className="">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between items-center gap-2 w-full"
        >
          <span className="font-bold ~text-[0.78rem]/lg">{question}</span>
          <svg
            className="fill-[#606060] shrink-0"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden ${
            accordionOpen ? 'py-2' : ''
          } transition-all duration-300 ease-in-out text-slate-600 ~text-sm/base ${
            accordionOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
