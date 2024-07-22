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

const Network2 = () => {
  return (
    <div className="pt-10 bg-dotted pb-6 relative border-t-[0rem] border-orenda-purple">
      <div className="px-3 sm:px-5">
        <div className="grid grid-cols-network ~gap-y-4/6">
          <h1 className="font-heading font-bold text-center ~text-[1.1rem]/[2rem] bg-white content-center text-[#36454F] rounded-sm">
            In network with
          </h1>

          <div>
            <Marquee speed={150}>
              <div className="~mx-8/16">
                <img className="~w-[7.17rem]/[10.3rem]" src={united} alt="" />
              </div>
              <div className="~mx-8/16">
                <img
                  className="~w-[5.55rem]/[6.18rem] h-8 sm:h-auto"
                  src={aetna}
                  alt=""
                />
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
                <img
                  className="~w-[7.21rem]/[7.62rem] h-8 sm:h-auto"
                  src={compsych}
                  alt=""
                />
              </div>
              <div className="~mx-8/16">
                <img className="~w-[3.59rem]/[6.16rem]" src={tricare} alt="" />
              </div>
              <div className="~mx-8/16">
                <img className="~w-[8.58rem]/[12rem]" src={multiplan} alt="" />
              </div>
            </Marquee>
          </div>

          <h2 className="font-heading ~text-[0.9rem]/[1.8rem] text-[#AEAEAE] bg-white text-center content-center rounded-sm font-bold">
            Out of network
          </h2>

          <div>
            <Marquee play={true} speed={150}>
              <div className="~mx-8/28">
                <img src={emblem} alt="" className="~w-[7.47rem]/[10.25rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={cms} alt="" className="~w-[1.73rem]/[4.125rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={fidelis} alt="" className="~w-[4rem]/[5rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={ghi} alt="" className="~w-[3.62rem]/[5.68rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={metro} alt="" className="~w-[5.26rem]/[8.95rem]" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network2;
