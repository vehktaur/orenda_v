import { useEffect, useState } from 'react';
import SelectCheckboxes from './SelectCheckboxes';
import Radios from './Radios';
import upload from '../../assets/upload.svg';
const BPStepTwo = ({ register, errors }) => {
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleSelectedFile = (event) => {
    const file = event?.target.files[0];
    setSelectedFileName(file?.name);
  };

  return (
    <div className="space-y-6">
      <SelectCheckboxes
        number="6"
        label="Are you comfortable with any of these condition?"
        options={['Anxiety', 'Depression', 'Maternal/Postpartum care', 'ADHD']}
        register={register}
        errors={errors}
        name="comfortableConditions"
      />

      <SelectCheckboxes
        number="7"
        label="Which of these ages are you comfortable seeing?"
        options={[
          '5 - 13 years',
          '14 - 17 years',
          '18 - 64 years',
          '65+ years'
        ]}
        register={register}
        errors={errors}
        name="agesSeen"
      />

      <fieldset className="fieldset space-y-14">
        <Radios
          number="8"
          label="Do you have any previous experience in mental health?"
          register={register}
          errors={errors}
          name="hasExperienceInMentalHealth"
        />
        <Radios
          number="9"
          label="Do you have any experience with prescription management?"
          register={register}
          errors={errors}
          name="hasExperienceWithPrescriptionManagement"
        />
      </fieldset>

      <fieldset className="fieldset">
        <h3 className="font-medium flex ~gap-1/2 items-baseline">
          <span>10.</span>
          Please upload a copy of your CV/Resume.
        </h3>

        <div className="border-dashed border border-[#D8D8D8] rounded-lg grid place-items-center ~mt-6/10 ~mb-[2.81rem]/[4.06rem]]">
          <div className="max-w-[41.94rem] ~mt-8/[2.62rem] ~mb-8/[2.56rem] text-center grid gap-[0.81rem] justify-items-center">
            <label
              htmlFor="uploadCV"
              className="p-2 bg-[#EAEAEA] rounded-full cursor-pointer"
            >
              <img src={upload} alt="upload file" />
            </label>
            <p className="~text-sm/base">Upload your CV/Resume</p>
            <small className="~text-xs/sm text-[#626262]">
              Pdf & Jpeg only
            </small>
            <label
              htmlFor="uploadCV"
              className="border border-orenda-purple px-4 py-[0.62rem] rounded-3xl text-orenda-purple font-semibold ~text-sm/lg cursor-pointer hover:bg-orenda-purple hover:text-white transition-colors duration-300"
            >
              Choose file
            </label>
            {selectedFileName && (
              <p className="~text-sm/base text-[#5a9154] text-center px-6">
                {selectedFileName}
              </p>
            )}
            <p className="text-sm text-red-500 mt-2">
              {errors?.['CV/Resume']?.message}
            </p>
            <input
              hidden
              type="file"
              id="uploadCV"
              {...register('CV/Resume', {
                onChange: (event) => {
                  handleSelectedFile(event);
                },
                onBlur: (event) => {
                  handleSelectedFile(event);
                },
                required: { value: true, message: 'Please add your CV/Resume' },
                validate: {
                  acceptedFormats: (files) =>
                    ['image/jpeg', 'application/pdf'].includes(
                      files[0]?.type
                    ) || 'Pdf & Jpeg Only!'
                }
              })}
              accept="image/jpeg, application/pdf"
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};
export default BPStepTwo;
