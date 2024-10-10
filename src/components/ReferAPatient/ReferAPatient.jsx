import { FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import SelectGuardian from './SelectGuardian';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import InputPro from './InputPro';
import MinorDropdown from './MinorDropdown';
import Dropdown from './Dropdown';

const ReferAPatient = () => {
  const methods = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = methods;

  const onSubmit = async (data) => {
    const templateParams = {
      from: 'Orenda',
      section: 'Referrer',
      firstName: data['First Name'],
      lastName: data['Last Name'],
      referrerEmail: data['Referrer’s Email'],
      Organization: data['Organization'],
      patientFirstName: data['Patient’s First Name'],
      patientLastNameInitial: data['Patient’s Last Name Initials'],
      patientInsurancePlan: data['Patient’s Insurance Plan'],
      phoneNumber: data['Phone Number'],
      numberOwner: data['Numbers Owner'],
      guardianFirstName: data['Guardian’s First Name'],
      guardianLastNameInitial: data['Last Name Initials'],
      contactEmail: data['Contact Email'],
      bestTimeToContact: data['Best time to contact patient'],
      additionalInfo: data['Please place additional information here']
    };

    try {
      await emailjs.send(
        'service_xal9mrc',
        'template_h56f47p',
        templateParams,
        'Wv61Pn9AOeH61J_Jm'
      );

      toast.success('Submitted!');
    } catch (error) {
      console.log(`Email not sent. Error: ${JSON.stringify(error)}}`);
      toast.error('Error!. Please try again');
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <main className="px-5 pb-40 bg-[#E6e4ef]">
      <div className="max-w-7xl mx-auto ~pt-8/14">
        <h1 className="heading ~mb-2/4">
          Refer a Patient to Orenda Psychiatry
        </h1>

        <div className="~mt-8/14 ~text-sm/base">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="~mt-6/8 max-w-[43.13rem] mx-auto"
            >
              <div className="space-y-6">
                <fieldset className="rap-fieldset">
                  <h3 className="mb-10 font-medium ~text-sm/xl">
                    1. Referrer's Information
                  </h3>
                  <div className="~space-y-10/12 ~ps-2/4">
                    {[
                      {
                        label: `Referring Provider's Full Name`,
                        type: 'text',
                        id: 'fullName'
                      },
                      {
                        label: `Referring Provider's License Type`,
                        type: 'text',
                        id: 'providersLicenseType'
                      },
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
                      <InputPro
                        key={field.id}
                        label={field.label}
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        required={true}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset className="rap-fieldset">
                  <h3 className="mb-10 font-medium ~text-sm/xl">
                    2. Referred Patient's Information
                  </h3>
                  <div className="~space-y-10/12 ~ps-2/4">
                    <InputPro
                      label="Patient’s First Name"
                      type="text"
                      id="patientsFirstName"
                      name="patientsFirstName"
                      required={true}
                    />
                    <InputPro
                      label="Patient’s Last Name"
                      type="text"
                      id="patientsLastName"
                      name="patientsLastName"
                      required={true}
                    />
                    <Dropdown
                      label="Age range of Patient"
                      options={[
                        '5 - 12 years',
                        '13 - 17 years',
                        '18 - 64 years',
                        '65 + years'
                      ]}
                      name="patientAgeRange"
                    />
                    <InputPro
                      label="Patient’s Insurance Plan"
                      type="text"
                      id="patientsInsurance"
                      name="patientsInsurance"
                      required={true}
                    />
                  </div>
                </fieldset>

                <fieldset className="rap-fieldset">
                  <h3 className="mb-10 font-medium ~text-sm/xl">
                    3. Patient's Contact Information
                  </h3>
                  <div className="~space-y-10/12 ~ps-2/4">
                    <MinorDropdown
                      label="Is the patient a minor?"
                      options={['Yes', 'No']}
                      name="isPatientMinor"
                    />
                    <InputPro
                      label="DX codes applicable for Patient"
                      type="text"
                      id="patientsDXCodes"
                      name="patientsDXCodes"
                      required={false}
                      optional={'text'}
                    />
                  </div>
                </fieldset>

                <fieldset className="rap-fieldset">
                  <div className="~space-y-10/12">
                    <h3 className="mb-10 font-medium ~text-sm/xl">
                      4. Anything else you'd like us to know?{' '}
                      <small className=" text-gray-500">(optional)</small>
                    </h3>
                    <div className="~ps-2/4">
                      <InputPro
                        key="moreInfo"
                        label="Please place additional information here"
                        type="textarea"
                        id="moreInfo"
                        name="moreInfo"
                        required={false}
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="mt-8">
                <button
                  disabled={isSubmitting}
                  className={`block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple overflow-hidden relative z-[1] group rounded-3xl font-semibold transition-colors duration-300 `}
                  type="submit"
                >
                  <span className="block absolute -top-[1px] -left-[1px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1]" />
                  Submit form
                </button>
              </div>

              <div className="mt-20 ~ps-2/5">
                <p className="~text-sm/base">
                  You can also send a written referral to us using this{' '}
                  <strong>fax line:</strong>
                  <span className="block">+1 (347) 745-0992</span>
                </p>

                <p className="~text-sm/base mt-2">
                  Please download the referral form for fax{' '}
                  <a
                    className="underline font-semibold text-orenda-green underline-offset-2"
                    href="#"
                  >
                    here
                  </a>
                </p>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
};
export default ReferAPatient;
