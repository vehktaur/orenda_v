import { useState } from 'react';

const Filters = ({ register, h2, search }) => {
  const [query, setQuery] = useState('');
  let listArray;
  if (h2 === 'Ages Seen') {
    listArray = [
      '5 - 12 years',
      '13 - 17 years',
      '18 - 64 years',
      '65 + years'
    ];
  } else if (h2 === 'States') {
    listArray = [
      'New York',
      'New Jersey',
      'Massachusetts',
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Mexico',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ];
  } else if (h2 === 'Specialties') {
    listArray = [
      'Depression',
      'Anxiety',
      'Obsessive Compulsive Disorder(OCD)',
      'Eating Disorder(s)',
      'Attention-Deficit/Hyperactivity Disorders(ADHD/ADD)',
      'Sleep Disorder',
      'Bipolar Disorder',
      'Post-traumatic Stress Disorder(PTSD)',
      'Maternity/Postpartum',
      'Academic Stress',
      'Addiction/Substance Abuse',
      'Adolescent/Teen Issues',
      'Alcoholism',
      'Anger Management',
      'Anorexia',
      'Anxiety Disorders',
      'Autism Spectrum Disorder(ASD)',
      'Body Dysmorphic Disorder',
      'Burnout',
      'Chronic Pain',
      'Cognitive Behavioural Therapy (CBT)',
      'Couples Therapy',
      'Development Disorders',
      'Domestic Violence',
      'Family Trauma',
      'Gender Affirming Care',
      'Generalized Anxiety Disorder',
      'Genomic Testing',
      'Geripsych',
      'Grief/Grief Counseling',
      'Group therapy',
      'Insomnia',
      'LGBTQ+ Counseling',
      'Life transitions',
      'Major Depressive Disorder(MDD)',
      'Medication Assisted Treatment(MAT)',
      'Medication Management',
      "Men's Mental Health",
      'Mood disorders',
      'Oppositional Defiant Disorder',
      'Pain Management Consultation',
      'Panic Attack',
      'Panic Disorder',
      'Performance Anxiety',
      'Personality Disorder(s)',
      'Postpartum Anxiety',
      'Postpartum Depression',
      'Premenstrual Dysphoric Disorder',
      'Prescription/Refill',
      'Psychiatry Consultation',
      'Self-Harm/Injury',
      'Sexual Dysfunction',
      'Social Anxiety Disorder',
      'Stress Management',
      'Suboxone Management (X Waiver)',
      'Substance Use Disorder(SUD)',
      'Tics/Tourette Syndrome',
      'Trauma',
      "Women's Mental Health Issues",
      'Weight Management',
    ];
  }

  const filteredArray = listArray.filter((item) =>
    item.toLowerCase().includes(query)
  );
  return (
    <div className="space-y-[1.88rem] py-8">
      <h2 className="font-dm-sans ~text-sm/base font-bold">{h2}</h2>

      {search && (
        <input
          className="block w-full bg-[#FCFCFC] border border-[#E7E7E7] bg-search bg-no-repeat bg-[left_0.5rem_top_50%] rounded-lg px-4 py-1 font-dm-sans text-sm  placeholder:font-medium placeholder:text-[#878787] outline-none ps-8"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value.toLowerCase())}
        />
      )}

      <ul className="space-y-[1.88rem] ps-1 max-h-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-[#888] scrollbar-thumb-rounded-lg">
        {filteredArray.length > 0 ? (
          filteredArray.map((item) => (
            <li key={item}>
              <label className="flex items-center gap-3">
                <input
                  {...register(h2)}
                  className="block size-[1.125rem] accent-orenda-purple flex-shrink-0"
                  type="checkbox"
                  value={item}
                />{' '}
                <span className="text-sm font-dm-sans font-medium">{item}</span>
              </label>
            </li>
          ))
        ) : (
          <p className="italic text-sm font-dm-sans">
            {h2 === 'States' ? 'State' : 'Specialty'} not available
          </p>
        )}
      </ul>
    </div>
  );
};
export default Filters;
