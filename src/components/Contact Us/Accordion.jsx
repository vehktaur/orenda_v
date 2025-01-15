const Accordion = ({ question, answer, isOpen, setIsOpen }) => {
  return (
    <div
      className={`border py-4 ~px-3/6 hover:bg-purple-mist border-${
        isOpen ? "orenda-purple" : "[#E3E3E3]"
      } ${isOpen ? "bg-purple-mist" : ""} rounded-lg`}
    >
      <div>
        <button
          onClick={() => setIsOpen(question)}
          className="flex w-full items-center justify-between gap-2"
        >
          <span className="text-left font-bold ~text-[0.78rem]/lg">
            {question}
          </span>
          <svg
            className="shrink-0 fill-[#606060]"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center transform transition duration-200 ease-out ${
                isOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                isOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden ${
            isOpen && "py-2"
          } text-slate-600 transition-all duration-300 ease-in-out ~text-sm/base ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
