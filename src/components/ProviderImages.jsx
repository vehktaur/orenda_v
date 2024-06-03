import img0 from '../assets/providers/0.png';
import img1 from '../assets/providers/1.png';
import img2 from '../assets/providers/2.png';
import img3 from '../assets/providers/3.png';
import img4 from '../assets/providers/4.png';
import img5 from '../assets/providers/5.png';
import img6 from '../assets/providers/6.png';
import img7 from '../assets/providers/7.png';
import img8 from '../assets/providers/8.png';
import img9 from '../assets/providers/9.png';
import img10 from '../assets/providers/10.png';
import img11 from '../assets/providers/11.png';
import img12 from '../assets/providers/12.png';
import img13 from '../assets/providers/13.png';
import img14 from '../assets/providers/14.png';
import img15 from '../assets/providers/15.png';
import img16 from '../assets/providers/16.png';
import img17 from '../assets/providers/17.png';
import img18 from '../assets/providers/18.png';
import img19 from '../assets/providers/19.png';


const ProviderImages = () => {
    const images = [
        img0, img1, img2, img3, img4,
        img5, img6, img7, img8, img9,
        img10, img11, img12, img13, img14,
        img15, img16, img17, img18, img19
      ];

  return (
    <div className="container mx-auto ~p-0/4 max-w-[67.75rem]">
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5">
        {images.map((src, index) => (
          <div key={index} className="bg-[#F1F1F1] ~xs/xl:~size-[3.2rem]/[5.625rem] rounded-lg overflow-hidden flex flex-col justify-end">
            <img
              src={src}
              alt={`Provider ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderImages;
