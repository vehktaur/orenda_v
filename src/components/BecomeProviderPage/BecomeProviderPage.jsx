import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BPStepOne from './BPStepOne';
import BPStepTwo from './BPStepTwo';
import BPApplied from './BPApplied';
import BPNav from './BPNav';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const BecomeProviderPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [formComplete, setFormComplete] = useState(false);
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    resetField,
    formState: { errors, isDirty, isValid, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    if (formComplete) {
      console.log(data);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const templateParams = {
          from: 'Orenda',
          section: 'Become A Provider',
          fullName: data['Full Name'],
          FNPCertified: data['FNPCertifiedOrOthers'],
          CV: reader.result,
          email: data['Email Address'],
          FNPinfo: data['FNPCertifiedOrOthers Info'] || 'None',
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
            'service_3uga78g',
            'template_rg8wzrk',
            templateParams,
            'Wv61Pn9AOeH61J_Jm'
          );
          console.log('Email sent successfully');
          setFormStep(3);
        } catch (error) {
          toast.error('Error! Please try again');
          console.log(`Email not sent. Error ${JSON.stringify(error)}`);
        } finally {
          setFormComplete(false);
        }
      };
    }
  };

  const handlePrev = () => {
    window.scrollTo(0, 100);
    setFormStep(1);
  };

  const handleNext = () => {
    if (isValid && isDirty) {
      if (formStep === 2) {
        setFormComplete(true);
      } else {
        setFormStep(2);
        setTimeout(() => clearErrors(), 1);
        window.scrollTo(0, 100);
      }
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
              <BPStepTwo
                register={register}
                errors={errors}
                setFile={setFile}
              />
            )}

            {formStep === 3 && <BPApplied />}

            <BPNav
              isSubmitting={isSubmitting}
              formComplete={formComplete}
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
