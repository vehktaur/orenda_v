const Accordion = ({ question, answer, isOpen, setIsOpen }) => {
  return (
    <div
      className={`py-4 ~px-3/6 border hover:bg-[#f8f8ff] border-${
        isOpen ? 'orenda-purple' : '[#E3E3E3]'
      } ${isOpen ? 'bg-[#f8f8ff]' : ''} rounded-lg`}
    >
      <div>
        <button
          onClick={() => setIsOpen(question)}
          className="flex justify-between items-center gap-2 w-full"
        >
          <span className="font-bold ~text-[0.78rem]/lg text-left">
            {question}
          </span>
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
                isOpen && '!rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                isOpen && '!rotate-180'
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden ${
            isOpen ? 'py-2' : ''
          } transition-all duration-300 ease-in-out text-slate-600 ~text-sm/base ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
