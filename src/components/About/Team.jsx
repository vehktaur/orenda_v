import img0 from '../../assets/team_members/0.jpg';
import img1 from '../../assets/team_members/1.jpg';
import img2 from '../../assets/team_members/2.jpg';
import img3 from '../../assets/team_members/3.jpg';
import img4 from '../../assets/team_members/4.jpg';
import img5 from '../../assets/team_members/5.jpg';
import img6 from '../../assets/team_members/6.jpg';
import img7 from '../../assets/team_members/7.jpg';
import img8 from '../../assets/team_members/8.jpg';
import img9 from '../../assets/team_members/9.jpg';

const Team = () => {
  const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className='mb-[5rem] text-center px-5'>
      <div className='max-w-[67.75rem] mx-auto '>
          <h2 className='heading ~mb-6/8'>Meet The Team</h2>
          <div className='grid grid-cols-5 md:grid-cols-10 gap-3'>
            {images.map((src, index) => (
                <div key={src} className='rounded-lg overflow-hidden ~xs/xl:~size-[3.2rem]/[5.625rem]'>
                    <img className='w-full h-full object-cover' src={src} alt={`Team member ${index}`} />
                </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Team;
