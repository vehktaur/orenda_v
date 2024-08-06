import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BPStepOne from './BPStepOne';
import BPStepTwo from './BPStepTwo';
import BPApplied from './BPApplied';
import BPNav from './BPNav';
import emailjs from '@emailjs/browser';

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

  const onSubmit = async (data) => {
    if (formStep === 3) {
      console.log(data);
      const templateParams = {
        from: 'Orenda',
        section: 'Become A Provider',
        fullName: data['Full Name'],
        FNPCertified: data['FNPCertifiedOrOthers'],
        CV: data['CV/Resume'],
        email: data['Email Address'],
        FNPinfo: data['FNPCertifiedOrOthers Info'],
        PMHNPCertified: data['PMHNPCertified'],
        licensedStated: data['States Licensed'],
        deaStates: data['States with DEA'],
        agesSeen: data['agesSeen'],
        comfortableWithTalkTherapy: data['comfortableWithTalkTherapy'],
        hasExperienceInMentalHealth: data['hasExperienceInMentalHealth'],
        hasExperienceWithPrescriptionManagement:
          data['hasExperienceWithPrescriptionManagement']
      };
      try {
        await emailjs.send(
          'service_d7svcgq',
          'template_mktb9jd',
          templateParams,
          'f_xOBciJvcABV_wmq'
        );
      } catch (error) {
        console.log(`Email not sent. Error ${error}`);
      }
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

        <div className="~mt-6/8">
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
