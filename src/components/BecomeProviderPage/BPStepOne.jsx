import Input from '../Input';
import Radios from './Radios';

import SelectCheckboxes from './SelectCheckboxes';

const BPStepOne = ({ register, watch, errors, resetField }) => {
  const statesLicensed = watch('States Licensed');

  // const enabled =
  //   statesLicensed &&
  //   statesLicensed?.length > 0 &&
  //   ['N/A', 'I am currently a student'].every((option) =>
  //     !statesLicensed.includes(option)
  //   );

  const disabled =
    statesLicensed &&
    ['N/A', 'I am currently a student'].some((option) =>
      statesLicensed.includes(option)
    );
  return (
    <div className='space-y-6'>
      <fieldset className='fieldset'>
        <h3 className='mb-10 font-medium'>1. Personal Information</h3>

        <div className='~space-y-10/12'>
          {[
            { label: 'Full Name', type: 'text', id: 'fullName' },
            { label: 'Add phone number', type: 'tel', id: 'secondName' },
            { label: 'Email Address', type: 'email', id: 'email' }
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

      <fieldset className='fieldset font-dm-sans text-left'>
        <SelectCheckboxes
          number='2'
          label='Do you hold a license in any of the following states?'
          options={[
            'New York',
            'New Jersey',
            'Connecticut',
            'Massachusetts',
            'I am currently a student',
            'N/A',
            'Others'
          ]}
          register={register}
          errors={errors}
          name='States Licensed'
          resetField={resetField}
        />

        {/* {enabled
          ) && (
            <div className='ps-4 py-6 border-l-8 border-l-[#666] border rounded-xl'>
              <Radios
                label='Do you have a DEA in this state?'
                register={register}
                errors={errors}
                name='DEAState'
              />
            </div>
          )} */}
      </fieldset>

      <fieldset className='fieldset font-dm-sans text-left'>
        <SelectCheckboxes
          number='3'
          label='Do you have DEA in any of the following states?'
          options={[
            'New York',
            'New Jersey',
            'Connecticut',
            'Massachusetts',
            'Others'
          ]}
          register={register}
          errors={errors}
          name='States with DEA'
          resetField={resetField}
          disabled={disabled}
        />
      </fieldset>

      <fieldset className='fieldset space-y-14'>
        <Radios
          number='4'
          label='Are you PMHNP Board-Certified?'
          register={register}
          errors={errors}
          name='PMHNPCertified'
        />
        <Radios
          number='5'
          label='Do you hold any additional board certifications, such as FNP, AGACNP, PNP, etc.??'
          register={register}
          errors={errors}
          name='FNPCertifiedOrOthers'
          moreInfo={true}
        />
        <Radios
          number='6'
          label='Are you comfortable with providing Talk therapy with Medication Management?'
          register={register}
          errors={errors}
          name='comfortableWithTalkTherapy'
        />
      </fieldset>
    </div>
  );
};
export default BPStepOne;
