import { useState } from 'react';
import { agesSeen, specialties, states } from '../../data/dataArrays';

const Filters = ({ register, h2, search }) => {
  const [query, setQuery] = useState('');
  let listArray;
  if (h2 === 'Ages Seen') {
    listArray = agesSeen;
  } else if (h2 === 'States') {
    listArray = states;
  } else if (h2 === 'Specialties') {
    listArray = specialties;
  }

  const filteredArray = listArray.filter((item) =>
    item.toLowerCase().includes(query)
  );
  return (
    <div className='space-y-[1.88rem] py-8'>
      <h2 className='font-dm-sans ~text-sm/base font-bold'>{h2}</h2>

      {search && (
        <input
          className='block w-full bg-[#FCFCFC] border border-[#E7E7E7] bg-search bg-no-repeat bg-[left_0.5rem_top_50%] rounded-lg px-4 py-1 font-dm-sans text-sm  placeholder:font-medium placeholder:text-[#878787] outline-none ps-8'
          type='text'
          placeholder='Search'
          value={query}
          onChange={(event) => setQuery(event.target.value.toLowerCase())}
        />
      )}

      <ul
        className={`space-y-[1.88rem] ps-1 max-h-[12rem] ${
          h2 === 'Ages Seen' ? '' : 'overflow-y-auto'
        } scrollbar-thin scrollbar-thumb-[#888] scrollbar-thumb-rounded-lg`}
      >
        {filteredArray.length > 0 ? (
          filteredArray.map((item) => (
            <li key={item}>
              <label className='flex items-center gap-3'>
                <input
                  {...register(h2)}
                  className='block size-[1.125rem] accent-orenda-purple flex-shrink-0'
                  type='checkbox'
                  value={item}
                />{' '}
                <span className='text-sm font-dm-sans font-medium'>{item}</span>
              </label>
            </li>
          ))
        ) : (
          <p className='italic text-sm font-dm-sans'>
            {h2 === 'States' ? 'State' : 'Specialty'} not available
          </p>
        )}
      </ul>
    </div>
  );
};
export default Filters;
