import Marquee from 'react-fast-marquee';
import metro from '../../assets/metro.png';
import emblem from '../../assets/emblem.png';
import cms from '../../assets/cms.png';
import ghi from '../../assets/ghi.png';
import united from '../../assets/uhc_insurance.svg';
import oscar from '../../assets/oscar_insurance.png';
import aetna from '../../assets/aetna_insurance.svg';
import cigna from '../../assets/cigna_insurance.png';
import anthem from '../../assets/abc_insurance.png';
import tricare from '../../assets/tricare_insurance.png';
import compsych from '../../assets/compsych_insurance.png';
import multiplan from '../../assets/multiplan_insurance.png';
import fidelis from '../../assets/fidelis-care-logo-vector.png';

const Network = () => {
  return (
    <div className="~pt-8/12 bg-dotted bg-cover bg-center bg-no-repeat pb-12 mb-4">
      <div className="px-5">
        <h1 className="font-heading text-center ~text-lg/[2rem] font-medium ~mb-4">
          In network with
        </h1>

        <div>
          <Marquee speed={150}>
            <div className="~mx-8/16">
              <img className="~w-[7.17rem]/[10.3rem]" src={united} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[5.55rem]/[6.18rem]" src={aetna} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[5.09rem]/[5.3rem]" src={oscar} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[4.9rem]/[7.89rem]" src={cigna} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[6.25rem]/[10rem]" src={anthem} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[7.21rem]/[7.62rem]" src={compsych} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[3.59rem]/[6.16rem]" src={tricare} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[8.58rem]/[12rem]" src={multiplan} alt="" />
            </div>
            {/* <div className="~mx-8/16">
              <img className="~w-[7.17rem]/[17.3rem]" src={united} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[5.55rem]/[12.18rem]" src={aetna} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[5.09rem]/[9.3rem]" src={oscar} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[4.9rem]/[11.89rem]" src={cigna} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[6.25rem]/[18rem]" src={anthem} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[7.21rem]/[16.62rem]" src={compsych} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[3.59rem]/[10.16rem]" src={tricare} alt="" />
            </div>
            <div className="~mx-8/16">
              <img className="~w-[8.58rem]/[19rem]" src={multiplan} alt="" />
            </div> */}
          </Marquee>
        </div>

        <h2 className="font-heading text-center ~text-lg/[1.75rem] text-[#AEAEAE] font-medium mt-6 ~mb-4/8">
          Out of network
        </h2>

        <div className="hidden md:flex justify-center ~md/2xl:~gap-x-8/[6.25rem] items-center max-w-[65.25rem] mx-auto">
          <div>
            <img src={emblem} alt="" className="~w-[7.47rem]/[18.25rem]" />
          </div>
          <div>
            <img src={cms} alt="" className="~w-[1.73rem]/[4.125rem]" />
          </div>
          <div>
            <img src={fidelis} alt="" className="w-[5rem]" />
          </div>
          <div>
            <img src={ghi} alt="" className="~w-[3.62rem][6.68rem]" />
          </div>
          <div>
            <img src={metro} alt="" className="~w-[7.26rem]/[18.95rem]" />
          </div>
        </div>

        <div className="md:hidden">
          <Marquee play={true} speed={150}>
            <div className="~mx-8/12">
              <img src={emblem} alt="" className="~w-[7.47rem]/[18.25rem]" />
            </div>
            <div className="~mx-8/12">
              <img src={cms} alt="" className="~w-[1.73rem]/[4.125rem]" />
            </div>
            <div className="~mx-8/12">
              <img src={fidelis} alt="" className="w-[5rem]" />
            </div>
            <div className="~mx-8/12">
              <img src={ghi} alt="" className="~w-[3.62rem][6.68rem]" />
            </div>
            <div className="~mx-8/12">
              <img src={metro} alt="" className="~w-[7.26rem]/[18.95rem]" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Network;
