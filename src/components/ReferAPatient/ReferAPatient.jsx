import { FormProvider, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import InputPro from './InputPro';
import MinorDropdown from './MinorDropdown';
import Dropdown from './Dropdown';
import Successful from '../Contact Us/Successful';
import { specialties } from '../../data/dataArrays';

const ReferAPatient = () => {
  const [modal, setModal] = useState(false);
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
      fullName: data['fullName'],
      referrerEmail: data['refEmail'],
      Organization: data['organization'],
      patientFirstName: data['patientFirstName'],
      patientLastName: data['patientLastName'],
      patientInsurancePlan: data['patientsInsurance'],
      patientNumber: data['patientsPhoneNumber'],
      patientAgeRange: data['patientAgeRange'],
      patientMinor: data['isPatientMinor'],
      patientEmail: data['patientsEmail'],
      patientDxCode: data['patientsDXCodes'],
      guardianFirstName: data['guardiansFName'],
      guardianLastName: data['guardiansLName'],
      guardianPhoneNumber: data['guardiansPhoneNumber'],
      guardianEmail: data['guardiansEmail'],
      referringProviderLicense: data['providersLicenseType'],
      additionalInfo: data['moreInfo']
    };

    try {
      await emailjs.send(
        'service_xal9mrc',
        'template_h56f47p',
        templateParams,
        'Wv61Pn9AOeH61J_Jm'
      );

      setModal(true);
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
    <>
      {modal && (
        <Successful
          title='Thank You for Your Referral to Orenda Psychiatry!'
          content='Thank you for referring a patient to Orenda Psychiatry! A dedicated member of our team will respond to you soon.'
          setModal={setModal}
        />
      )}
      <main className='px-5 pb-40 bg-[#E6e4ef]'>
        <div className='max-w-7xl mx-auto ~pt-8/14'>
          <h1 className='heading ~mb-2/4'>
            Refer a Patient to Orenda Psychiatry
          </h1>

          <div className='~mt-8/14 ~text-sm/base'>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='~mt-6/8 max-w-[43.13rem] mx-auto'
                noValidate
              >
                <div className='space-y-6'>
                  <fieldset className='rap-fieldset'>
                    <h3 className='mb-10 font-medium ~text-sm/xl'>
                      1. Referrer's Information
                    </h3>
                    <div className='~space-y-10/12 ~ps-2/4'>
                      {[
                        {
                          label: `Referring Provider's Full Name`,
                          type: 'text',
                          id: 'fullName'
                        },
                        {
                          label: `Referring Provider's License Type`,
                          type: 'text',
                          id: 'providersLicenseType',
                          placeholder: 'MD, Ph.D., RD, LPC, LCSW etc.'
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
                          placeholder={field.placeholder}
                          required={true}
                        />
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className='rap-fieldset'>
                    <h3 className='mb-10 font-medium ~text-sm/xl'>
                      2. Referred Patient's Information
                    </h3>
                    <div className='~space-y-10/12 ~ps-2/4'>
                      <InputPro
                        label='Patient’s First Name'
                        type='text'
                        id='patientsFirstName'
                        name='patientsFirstName'
                        required={true}
                      />
                      <InputPro
                        label='Patient’s Last Name'
                        type='text'
                        id='patientsLastName'
                        name='patientsLastName'
                        required={true}
                      />
                      <Dropdown
                        label='Age range of Patient'
                        options={[
                          '5 - 12 years',
                          '13 - 17 years',
                          '18 - 64 years',
                          '65 + years'
                        ]}
                        name='patientAgeRange'
                      />
                      <InputPro
                        label='Patient’s Insurance Plan'
                        type='text'
                        id='patientsInsurance'
                        name='patientsInsurance'
                        required={true}
                      />
                    </div>
                  </fieldset>

                  <fieldset className='rap-fieldset'>
                    <h3 className='mb-10 font-medium ~text-sm/xl'>
                      3. Patient's Contact Information
                    </h3>
                    <div className='~space-y-10/12 ~ps-2/4'>
                      <MinorDropdown
                        label='Is the patient a minor?'
                        options={['Yes', 'No']}
                        name='isPatientMinor'
                      />
                      <InputPro
                        label='DX codes applicable for Patient'
                        type='text'
                        id='patientsDXCodes'
                        name='patientsDXCodes'
                        required={false}
                      />
                    </div>
                  </fieldset>

                  <fieldset className='rap-fieldset'>
                    <h3 className='mb-10 font-medium ~text-sm/xl'>
                      4. Requirements{' '}
                      <small className=' text-gray-500'>(optional)</small>
                    </h3>
                    <div className='~ps-2/4'>
                      <div className='~space-y-8/10'>
                        <h4 className='font-medium flex ~gap-1/2 items-baseline ~text-sm/lg'>
                          Would you like to refer to a specific Psych NP at our
                          practice? If so, please provide their name below:
                        </h4>

                        <InputPro
                          key='specificPsych'
                          label='Specific Psych NP (if any)'
                          id='specificPsych'
                          name='specificPsych'
                          required={false}
                        />

                        <div className='~space-y-10/12'>
                          <Dropdown
                            className='~text-sm/lg'
                            label='Required Specialty (Visit Reason)'
                            options={specialties}
                            name='requiredSpecialty'
                            required={false}
                          />

                          <div className='px-2'>
                            <InputPro
                              key='someOtherRequiredSpecialty'
                              label='Other'
                              id='someOtherRequiredSpecialty'
                              name='someOtherRequiredSpecialty'
                              required={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className='rap-fieldset'>
                    <div className='~space-y-10/12'>
                      <h3 className='mb-10 font-medium ~text-sm/xl'>
                        5. Anything else you'd like us to know?{' '}
                        <small className=' text-gray-500'>(optional)</small>
                      </h3>
                      <div className='~ps-2/4'>
                        <InputPro
                          key='moreInfo'
                          label='Please place additional information here'
                          type='textarea'
                          id='moreInfo'
                          name='moreInfo'
                          required={false}
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className='mt-8'>
                  <button
                    disabled={isSubmitting}
                    className={`block w-[80%] ~text-sm/lg mx-auto px-4 py-[0.62rem] text-orenda-purple hover:text-white border border-orenda-purple overflow-hidden relative z-[1] group rounded-3xl font-semibold transition-colors duration-300 `}
                    type='submit'
                  >
                    <span className='block absolute -top-[1px] -left-[1px] h-[calc(100%+2px)] w-0 group-hover:w-[calc(100%+2px)] bg-orenda-purple transition-all duration-500 rounded-3xl z-[-1]' />
                    Submit form
                  </button>
                </div>

                <div className='mt-20 ~ps-2/5'>
                  <p className='~text-sm/base'>
                    You can also send a written referral to us using this{' '}
                    <strong>fax line:</strong>
                    <span className='block'>+1 (347) 745-0992</span>
                  </p>

                  <p className='~text-sm/base mt-2'>
                    Please download the referral form for fax{' '}
                    <a
                      className='underline font-semibold text-orenda-green underline-offset-2'
                      href='#'
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
    </>
  );
};
export default ReferAPatient;
