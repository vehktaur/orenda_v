import img0 from '../../assets/team_members/valerie.png';
import img1 from '../../assets/team_members/sylvia.png';
import img2 from '../../assets/team_members/progress.png';
import img3 from '../../assets/team_members/righteous.png';
import img4 from '../../assets/team_members/rhei.png';
import img5 from '../../assets/team_members/precious.png';
import img6 from '../../assets/team_members/patty.png';
import img7 from '../../assets/team_members/nora.png';
import img8 from '../../assets/team_members/nikko.png';
import img9 from '../../assets/team_members/neil.png';

const TeamInAbout = () => {
  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className='mb-[5rem] text-center px-5'>
      <div className='max-w-[67.75rem] mx-auto '>
          <h2 className='heading ~mb-6/8'>Meet The Team</h2>
          <div className='grid grid-cols-5 md:grid-cols-10 gap-3'>
            {images.map((src, index) => (
                <div key={src} className='rounded-lg overflow-hidden ~xs/xl:~size-[3.2rem]/[5.625rem] bg-[#F1F1F1]'>
                    <img className='w-full h-full object-cover' src={src} alt={`Team member ${index}`} />
                </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default TeamInAbout;
