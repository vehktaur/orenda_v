import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BPStepOne from './BPStepOne';
import BPStepTwo from './BPStepTwo';
import BPApplied from './BPApplied';
import BPNav from './BPNav';

const BecomeProviderPage = () => {
  const [formStep, setFormStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    resetField,
    formState: { errors, isDirty, isValid }
  } = useForm();

  const onSubmit = (data) => {
    if (formStep === 3) {
      console.log(data);
    }
  };

  const handlePrev = () => {
    window.scrollTo(0, 100);
    setFormStep((step) => step - 1);
  };

  const handleNext = () => {
    if (isValid && isDirty) {
      setFormStep((step) => step + 1);
      setTimeout(() => clearErrors(), 1);
      window.scrollTo(0, 100);
    }
  };


  return (
    <main className="px-5 mb-40">
      <div className="max-w-7xl mx-auto ~mt-8/[7.5rem]">
        <h1 className="heading ~mb-2/4">Become an Orenda Provider</h1>
        <p className="text-center">
          Please fill out this form below correctly and we will get back to you.
        </p>

        <div className="~mt-4/6">
          {formStep < 3 && (
            <p className="~text-xs/xl text-center">
              <strong>Step {formStep} of 2</strong>
            </p>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="~mt-6/8 max-w-[43.13rem] mx-auto"
          >
            {formStep === 1 && (
              <BPStepOne
                register={register}
                watch={watch}
                errors={errors}
                resetField={resetField}
              />
            )}

            {formStep === 2 && (
              <BPStepTwo register={register} errors={errors} />
            )}

            {formStep === 3 && <BPApplied />}

            <BPNav
              formStep={formStep}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </form>
        </div>
      </div>
    </main>
  );
};
export default BecomeProviderPage;
