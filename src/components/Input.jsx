import { useEffect, useState, useContext } from 'react';
import { PageNumberContext } from './Insurance/Insurance';

const Input = ({ before, label, type, id, register, watch }) => {
  const { name, ref, onChange } = register(label);

  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => {
    if (watch(label) === '') {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  };
  const pageNumber = useContext(PageNumberContext);

  useEffect(() => handleBlur(), [pageNumber]);

  return (
    <div className="relative text-justify bg-inherit">
      {type == 'textarea' ? (
        <textarea
          id={id}
          name={name}
          ref={ref}
          onFocus={handleFocus}
          onChange={onChange}
          onBlur={handleBlur}
          className={`~text-sm/lg outline-none block bg-transparent w-full border-b border-[#D1D1D1] pb-2 peer`}
          type={type}
        />
      ) : (
        <input
          id={id}
          name={name}
          ref={ref}
          onFocus={handleFocus}
          onChange={onChange}
          onBlur={handleBlur}
          className={`~text-sm/lg outline-none block bg-transparent w-full border-b border-[#D1D1D1] pb-2 peer`}
          type={type}
        />
      )}
      <label
        className={`block font-medium bg-inherit h-[0.1rem] text-[#0F0F0F] absolute top-0 right-0 left-0 transition-all peer-autofill:-translate-y-6 before:overflow-visible peer-autofill:text-[#616161] peer-autofill:~text-xs/sm duration-300 pb-8 peer-autofill:pb-0 peer-autofill:before:hidden peer-autofill:shadow-blue-300 ${
          before === 'email' && 'before:content-email before:mr-2'
        } ${
          before === 'phone' && 'before:content-phone before:mr-2 before:mt-4'
        } ${
          isFocus
            ? '~text-xs/sm text-[#616161] -translate-y-7 bg-transparent pb-0 before:hidden'
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
