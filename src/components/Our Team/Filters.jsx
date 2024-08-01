import { useState } from 'react';

const Filters = ({ register, h2, search }) => {
  const [query, setQuery] = useState('');
  let listArray;
  if (h2 === 'Ages Seen') {
    listArray = [
      '5 - 13 years',
      '14 - 17 years',
      '18 - 64 years',
      '64 + years'
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
      'ADHD',
      'Adjustment Disorder',
      'Anger Management',
      'Anxiety',
      'Autism',
      'Depression'
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

      <ul className="space-y-[1.88rem] ps-1 max-h-[12rem] overflow-y-auto scrollbar-none">
        {filteredArray.length > 0 ? (
          filteredArray.map((item) => (
            <li key={item}>
              <label className="flex items-center gap-3">
                <input
                  {...register(h2)}
                  className="block size-[1.125rem] accent-orenda-purple"
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
