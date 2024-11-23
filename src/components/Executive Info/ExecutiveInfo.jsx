import { useParams } from 'react-router-dom';
import executives from '../../data/executives';

const ExecutiveInfo = () => {
  const { name } = useParams();

  const executive = executives.find((executive) => executive.name === name);

  return (
    <main className='px-4 sm:~px-6/10 font-dm-sans ~my-7/[5.5rem]'>
      <div className='max-w-7xl mx-auto'>
        <div className='rounded-lg sm:border sm:border-[#EFEBDF]'>
          <div className='flex flex-col md:rounded-t-lg md:flex-row md:~gap-0/[3.5rem] sm:border md:border-[#EFEBDF]'>
            <div className='md:order-last bg-[#f6f7fc] bg-dotted bg-cover rounded-t-lg w-full md:flex sm:flex-col md:justify-center md:items-center md:max-w-[39.25rem] relative ~pt-8/12'>
              <div className='w-4/5 ~max-w-80/[28rem] ~max-h-72/[28rem] md:max-h-none overflow-hidden mx-auto md:mx-0 md:size-[28rem]'>
                <img
                  className={`mx-auto size-full block object-cover`}
                  src={executive.image}
                  alt={executive.name}
                />
              </div>
            </div>
            <div className='md:max-w-[50%] sm:~px-2/8 sm:py-6'>
              <div className='flex justify-between items-center ~mt-[1.5rem]/[2.56rem]'>
                <div className=''>
                  <h1 className='~text-xl/4xl font-bold mb-2'>
                    {executive?.name}
                  </h1>
                  <p className='text-[#7C7C7C] ~text-base/lg font-bold text-left'>
                    <span>{executive.position}</span>
                  </p>
                </div>
              </div>

              <p className='whitespace-pre-line ~text-sm/base ~mt-5/6 '>
                {executive.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ExecutiveInfo;
