import Input from '../Input';
import Radios from './Radios';

import SelectCheckboxes from './SelectCheckboxes';

const BPStepOne = ({ register, watch, errors, resetField }) => {
  return (
    <div className="space-y-6">
      <fieldset className="fieldset">
        <h3 className="mb-10 font-medium">1. Personal Information</h3>

        <div className="~space-y-10/12">
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

      <SelectCheckboxes
        number="2"
        label="Do you hold a license in any of the following states?"
        options={[
          'New York',
          'New Jersey',
          'Connecticut',
          'Massachusetts',
          'Others'
        ]}
        register={register}
        errors={errors}
        name="States Licensed"
        resetField={resetField}
      />

      <SelectCheckboxes
        number="3"
        label="Do you have DEA in any of the following states?"
        options={[
          'New York',
          'New Jersey',
          'Connecticut',
          'Massachusetts',
          'Others'
        ]}
        register={register}
        errors={errors}
        name="States with DEA"
      />

      <fieldset className="fieldset space-y-14">
        <Radios
          number="4"
          label="Are you PMHNP Board-Certified?"
          register={register}
          errors={errors}
          name="PMHNPCertified"
        />
        <Radios
          number="5"
          label="Are you certified as an FNP, or do you hold any other board certifications?"
          register={register}
          errors={errors}
          name="FNPCertifiedOrOthers"
          moreInfo={true}
        />
        <Radios
          number="6"
          label="Are you comfortable with providing Talk therapy with Medication Management?"
          register={register}
          errors={errors}
          name="comfortableWithTalkTherapy"
        />
      </fieldset>
    </div>
  );
};
export default BPStepOne;
