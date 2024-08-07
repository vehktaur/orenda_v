import { useContext, useEffect, useState } from 'react';
import Input from '../Input';
import { PageNumberContext } from './Insurance';

const FormSteps = ({ register, watch, errors, setFile }) => {
  //pageNumber context to determine current page
  const pageNumber = useContext(PageNumberContext);

  //States to control input type and determine focus states
  //of insurance carrier input
  const [isFocus, setIsFocus] = useState(false);
  const [fieldType, setFieldType] = useState('text');

  //Functions to control input type of insurance carrier
  const setTypeText = () => {
    if (
      fieldType === 'file' &&
      (watch('Insurance Carrier') === '' ||
        watch('Insurance Carrier')?.length === 0)
    )
      setFieldType('text');
  };
  const setTypeFile = () => {
    setFieldType('file');
  };

  //Blur, Focus and Change Event handlers for Insurance Carrier
  const handleUploadedFile = (event) => {
    if (fieldType === 'file') {
      setFile(event?.target.files[0]);
    } else {
      setFile(null);
    }
  };
  const handleBlur = () => {
    if (watch('Insurance Carrier') === '') {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  };
  const handleFocus = () => setIsFocus(true);

  //Handle Blur and Focus States on Insurance Carrier Input
  useEffect(() => handleBlur(), [pageNumber]);

  if (pageNumber === 1) {
    const pageOneFields = [
      { label: 'Legal First Name', type: 'text', id: 'firstName' },
      { label: 'Legal Last Name', type: 'text', id: 'lastName' },
      { label: 'Date of Birth', type: 'date', id: 'DOB' }
    ];
    return (
      <>
        {pageOneFields.map((field) => (
          <Input
            key={field.id}
            label={field.label}
            type={field.type}
            id={field.id}
            register={register}
            watch={watch}
            errors={errors}
          />
        ))}
      </>
    );
  } else if (pageNumber === 2) {
    const pageTwoFields = [
      { before: 'email', label: 'Email Address', type: 'email', id: 'email' },
      {
        before: 'phone',
        label: 'Phone Number',
        type: 'tel',
        id: 'phoneNumber'
      },
      { label: 'Street Address 1', type: 'text', id: 'address1' },
      { label: 'Street Address 2', type: 'text', id: 'address2' },
      { label: 'City', type: 'text', id: 'city' },
      { label: 'State', type: 'text', id: 'state' },
      { label: 'Zip Code', type: 'number', id: 'zipCode' }
    ];
    return (
      <>
        {pageTwoFields.map((field) => (
          <Input
            before={field.before}
            key={field.id}
            label={field.label}
            type={field.type}
            id={field.id}
            register={register}
            watch={watch}
            errors={errors}
          />
        ))}
      </>
    );
  } else {
    return (
      <>
        <div className="~text-sm/lg relative text-justify bg-inherit field__input">
          <input
            id="insuranceCarrier"
            key={'insuranceCarrier'}
            className="block outline-none bg-transparent w-full border-b border-[#D1D1D1] pb-4 forLabel:pb-2"
            type={fieldType}
            onFocus={handleFocus}
            {...register('Insurance Carrier', {
              onChange: (e) => handleUploadedFile(e),
              onBlur: () => handleBlur(),
              required: {
                value: pageNumber === 3 ? true : false,
                message: 'This field is required'
              },
              validate: {
                acceptedFormats: (files) => {
                  if (fieldType === 'file') {
                    return (
                      ['image/jpeg', 'image/png', 'application/pdf'].includes(
                        files[0]?.type
                      ) || 'Pdf & Jpeg Only!'
                    );
                  }
                }
              }
            })}
            accept="image/jpeg, image/png, application/pdf"
          />
          <label
            onClick={() => setTypeText()}
            className={`block forLabel:text-nowrap font-medium ~text-sm/xl text-left bg-inherit h-[0.1rem] text-[#0F0F0F] absolute top-0 right-0 left-0 transition-all peer-autofill:-translate-y-6 before:overflow-visible peer-autofill:text-[#616161] peer-autofill:~text-xs/sm duration-300 ~pb-8/10 ${
              isFocus && fieldType !== 'file'
                ? '~text-xs/sm text-[#616161] -translate-y-7 bg-transparent pb-0 before:hidden'
                : '~text-sm/lg -translate-y-1'
            }`}
            htmlFor="insuranceCarrier"
          >
            <span className="bg-inherit">Insurance Carrier</span>{' '}
            <span onClick={() => setTypeFile()} className={`bg-inherit`}>
              (Not Sure?{' '}
              <span className="text-orenda-purple underline cursor-pointer bg-inherit">
                {watch('Insurance Carrier') === '' ||
                fieldType === 'text' ||
                watch('Insurance Carrier')?.length === 0
                  ? 'Upload Your card'
                  : 'Card Uploaded!✅'}
              </span>
              )
            </span>
          </label>

          <p className="text-sm text-red-500 mt-2">
            {errors?.['Insurance Carrier']?.message}
          </p>
        </div>
        <Input
          key="membershipID"
          label="Membership ID"
          type="text"
          id="membershipID"
          register={register}
          watch={watch}
          errors={errors}
        />
        <Input
          key="groupNumber"
          label="Group Number"
          type="number"
          id="groupNumber"
          register={register}
          watch={watch}
          errors={errors}
        />
      </>
    );
  }
};
export default FormSteps;
