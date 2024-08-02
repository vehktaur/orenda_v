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
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
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
      'Abandonment issues',
      'Academic Stress',
      'Addiction',
      'Addiction Consultation',
      'Addiction / Substance Abuse',
      'ADHD',
      'Adjustment Disorder',
      'Adolescent / Teen Issues',
      'Alcoholism',
      'Anger Management',
      'Anorexia',
      'Anxiety',
      'Anxiety and Depression',
      'Anxiety and Panic Disorders',
      'Anxiety Disorder',
      'Attention Deficit/Hyperactivity Disorder (ADHD)',
      'Autism Spectrum Disorder (ASD)',
      'Binge Eating Disorder',
      'Bipolar',
      'Bipolar Disorder',
      'Bipolar Disorder (I and II)',
      'Body Dysmorphic Disorder',
      'Bulimia Nervosa',
      'Burnout',
      'Chronic Pain',
      'Couple Therapy',
      'Couples Therapy',
      'Depression',
      'Development Disorders',
      'Disordered Eating',
      'Domestic Violence',
      'Eating Disorder',
      'Family Trauma',
      'Gender Affirming Care',
      'Generalized Anxiety',
      'Generalized Anxiety Disorder',
      'Genomic Testing',
      'Geripsych',
      'Group therapy',
      'Hyperactivity disorders (ADD / ADHD)',
      'Insomnia',
      'LGBTQ+ Counseling',
      'Life transitions',
      'Life transitions into Adulthood',
      'Major Depressive Disorder',
      'Major Depressive Disorder (MDD)',
      'Maternity / Postpartum',
      'Medication Assisted Treatment (MAT)',
      'Medication Management',
      'Medication-Assisted Treatment',
      "Men's Mental Health Issues",
      "Men's Sexual Health",
      'Mood disorders',
      'Mood Swings',
      'Obsessive Compulsive Disorder (OCD)',
      'Oppositional Defiant Disorder',
      'Pain Management Consultation',
      'Panic Attack',
      'Panic Attacks',
      'Panic Disorders',
      'Performance Anxiety',
      'Personality Disorder',
      'Post Traumatic Stress Disorder (PTSD)',
      'Postpartum Anxiety',
      'Postpartum Depression',
      'Pre-College Fears',
      'Premenstrual Dysphoric Disorder',
      'Prescription / Refill',
      'Psychiatry Consultation',
      'PTSD',
      'Schizophrenia'
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
