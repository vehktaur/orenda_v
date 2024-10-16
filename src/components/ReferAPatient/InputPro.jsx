import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const InputPro = ({
  before,
  label,
  type,
  id,
  name,
  required,
  placeholder,
  optional
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => setIsFocus(true);

  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext();

  const handleBlur = () => {
    if (watch(name) === '') {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  };

  let pattern;
  if (type === 'email') {
    pattern = {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    };
  } else {
    pattern = false;
  }

  return (
    <div className='relative text-justify bg-inherit'>
      {type == 'textarea' ? (
        <textarea
          type={type}
          placeholder={placeholder}
          {...register(name, {
            onBlur: () => handleBlur(),
            required: {
              value: required,
              message: 'This field is required'
            },
            pattern: pattern
          })}
          id={id}
          onFocus={handleFocus}
          className={`~text-sm/[0.95rem] outline-none block bg-transparent w-full border-b border-[#D1D1D1] pb-2 peer`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, {
            onBlur: () => handleBlur(),
            required: {
              value: required,
              message: 'This field is required'
            },
            pattern: pattern
          })}
          id={id}
          onFocus={handleFocus}
          className={`~text-sm/[0.95rem] placeholder:text-sm outline-none block bg-transparent w-full border-b border-[#D1D1D1] pb-2 peer`}
        />
      )}
      <label
        className={`block font-medium font-dm-sans ~text-sm/[0.95rem] bg-inherit h-[0.1rem] text-[444] absolute top-0 right-0 left-0 transition-all peer-autofill:-translate-y-6 before:overflow-visible peer-autofill:text-[#616161] peer-autofill:~text-xs/sm duration-300 pb-6 sm:pb-8 peer-autofill:pb-0 peer-autofill:before:hidden peer-autofill:shadow-blue-300 ${
          before === 'email' && 'before:content-email before:mr-2'
        } ${
          before === 'phone' && 'before:content-phone before:mr-2 before:mt-4'
        } ${
          isFocus
            ? '~text-xs/sm text-[#616161] -translate-y-7 bg-transparent !pb-0 before:hidden'
            : '~text-sm/[0.95rem] -translate-y-1'
        } `}
        htmlFor={id}
      >
        {label}{' '}
        {optional && (
          <small className={`text-gray-500 ~text-xs/sm`}>{optional}</small>
        )}
      </label>

      <p className='text-sm text-red-500 mt-2'>{errors?.[name]?.message}</p>
    </div>
  );
};
export default InputPro;
