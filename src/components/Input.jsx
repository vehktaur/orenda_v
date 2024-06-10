import { useState } from 'react';

const Input = ({ label, type, id, className }) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => {
    if (value === '') {
      setIsFocus(false);
    }
  };

  return (
    <div className="relative text-left bg-inherit">
      {type == 'textarea' ? (
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
        className={`block font-medium bg-inherit h-[0.1rem] text-[#0F0F0F] absolute top-0 right-0 left-0 transition-all peer-autofill:-translate-y-6 peer-autofill:text-[#616161] peer-autofill:~text-xs/sm duration-300 pb-8 ${
          isFocus
            ? '~text-xs/sm text-[#616161] -translate-y-7 bg-transparent pb-0'
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
