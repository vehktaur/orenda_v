import { FormProvider, useForm } from 'react-hook-form';
import Input from '../Input';
import { useEffect } from 'react';
import SelectGuardian from './SelectGuardian';

const ReferAPatient = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <main className="px-5 mb-40">
      <div className="max-w-7xl mx-auto ~mt-8/14">
        <h1 className="heading ~mb-2/4">
          Refer a Patient to Orenda Psychiatry
        </h1>

        <div className="~mt-8/14">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="~mt-6/8 max-w-[43.13rem] mx-auto"
            >
              <div className="space-y-6">
                <fieldset className="fieldset">
                  <h3 className="mb-10 font-medium">Referrer's Information</h3>
                  <div className="~space-y-10/12">
                    {[
                      { label: 'First Name', type: 'text', id: 'firstName' },
                      { label: 'Last Name', type: 'text', id: 'lastName' },
                      {
                        label: 'Referrer’s Email',
                        type: 'email',
                        id: 'refEmail'
                      },
                      {
                        label: 'Organization',
                        type: 'text',
                        id: 'organization'
                      }
                    ].map((field) => (
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
                  </div>
                </fieldset>

                <fieldset className="fieldset">
                  <h3 className="mb-10 font-medium">
                    Referred Patient's Information
                  </h3>
                  <div className="~space-y-10/12 bg-white">
                    {[
                      {
                        label: 'Patient’s First Name',
                        type: 'text',
                        id: 'patientsFirstName'
                      },
                      {
                        label: 'Last Name Initial',
                        type: 'text',
                        id: 'lastNameInitial'
                      },
                      {
                        label: 'Patient’s Date of Birth',
                        type: 'date',
                        id: 'patientsDOB'
                      },
                      {
                        label: 'Patient’s Insurance Plan',
                        type: 'text',
                        id: 'patientsInsurance'
                      }
                    ].map((field) => (
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
                  </div>
                </fieldset>

                <fieldset className="fieldset">
                  <h3 className="mb-10 font-medium">
                    Patient's Contact Information
                  </h3>
                  <div className="~space-y-10/12 bg-white">
                    <Input
                      key="patientsTel"
                      label="Phone number"
                      type="tel"
                      id="patientsTel"
                      register={register}
                      watch={watch}
                      errors={errors}
                    />
                    <SelectGuardian
                      label="Is this the patient's phone number? Or their guardians?"
                      options={['Patient', 'Guardian']}
                      name="Numbers Owner"
                    />
                    <Input
                      key="contactEmail"
                      label="Contact Email"
                      type="email"
                      id="contactEmail"
                      register={register}
                      watch={watch}
                      errors={errors}
                    />
                    <Input
                      key="timeToContact"
                      label="Best time to contact patient"
                      type="text"
                      id="timeToContact"
                      register={register}
                      watch={watch}
                      errors={errors}
                    />
                  </div>
                </fieldset>

                <fieldset className="fieldset">
                  <div className="~space-y-10/12 bg-white pt-6">
                    <h3 className="mb-10 font-medium">
                      Anything else you'd like us to know?{' '}
                      <small className=" text-gray-500">(optional)</small>
                    </h3>
                    <Input
                      key="moreInfo"
                      label="Please place additional information here"
                      type="textarea"
                      id="moreInfo"
                      register={register}
                      watch={watch}
                      errors={errors}
                    />
                  </div>
                </fieldset>
              </div>
              <div className='mt-8'>
                <button
                  disabled={isSubmitting}
                  className={`block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple overflow-hidden relative z-[1] group rounded-3xl font-semibold transition-colors duration-300 `}
                  type="submit"
                >
                  <span className="block absolute -top-[1px] -left-[1px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1]" />
                  Submit form
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
};
export default ReferAPatient;
