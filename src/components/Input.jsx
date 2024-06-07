import { useState } from 'react';

const Input = ({ label, type, id, className, textArea }) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => {
    if (value === '') {
      setIsFocus(false);
    }
  };

  return (
    <div className="relative text-left">
      {textArea ? (
        <textarea
          rows={1}
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={label}
          onChange={(event) => setValue(event.target.value)}
          value={value}
          className={`${className} ~text-sm/lg outline-none block bg-transparent w-full border-b border-[#D1D1D1] pb-2 peer resize-y`}
          type={type}
          required
        />
      ) : (
        <input
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={label}
          onChange={(event) => setValue(event.target.value)}
          value={value}
          className={`${className} ~text-sm/lg outline-none block bg-transparent w-full border-b border-[#D1D1D1] pb-2 peer`}
          type={type}
          required
        />
      )}
      <label
        className={`block font-medium text-[#0F0F0F] absolute inset-0 transition-all peer-autofill:-translate-y-6 peer-autofill:text-[#616161] peer-autofill:~text-xs/sm duration-200 pb-10 ${
          isFocus
            ? '~text-xs/sm text-[#616161] -translate-y-6'
            : '~text-sm/lg -translate-y-1'
        } `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
