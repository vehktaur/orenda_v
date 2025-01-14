import Marquee from "react-fast-marquee";
import metro from "../../assets/metro.png";
import emblem from "../../assets/emblem.png";
import cms from "../../assets/cms.png";
import ghi from "../../assets/ghi.png";
import united from "../../assets/uhc_insurance.svg";
import oscar from "../../assets/oscar_insurance.png";
import aetna from "../../assets/aetna_insurance.svg";
import cigna from "../../assets/cigna_insurance.png";
import anthem from "../../assets/abc_insurance.png";
import tricare from "../../assets/tricare_insurance.png";
import compsych from "../../assets/compsych_insurance.png";
import multiplan from "../../assets/multiplan_insurance.png";
import fidelis from "../../assets/fidelis-care-logo-vector.png";

const Network = () => {
  return (
    <div className="relative border-t-[0rem] border-orenda-purple bg-dotted ~pt-8/16 ~pb-10/20">
      <div className="sm:px-5">
        <div className="~gap-y-4/6">
          <h1 className="mx-auto rounded-lg border border-[#E8DDFF] bg-purple-mist text-center font-heading font-bold text-[#070707] ~text-base/xl ~max-w-[10rem]/[13rem] ~py-2/3">
            In network with
          </h1>

          <div className="~mt-3/5">
            <Marquee speed={90}>
              <div className="~mx-8/16">
                <img className="~w-[7.17rem]/[15.62rem]" src={united} alt="" />
              </div>
              <div className="~mx-8/16">
                <img
                  className="h-8 ~w-[5.55rem]/[10.99rem] sm:h-auto"
                  src={aetna}
                  alt=""
                />
              </div>
              <div className="~mx-8/16">
                <img className="~w-[5.09rem]/[8.39rem]" src={oscar} alt="" />
              </div>
              <div className="~mx-8/16">
                <img className="~w-[4.9rem]/[10.74rem]" src={cigna} alt="" />
              </div>
              <div className="~mx-8/16">
                <img className="~w-[6.25rem]/[16.25rem]" src={anthem} alt="" />
              </div>
              <div className="~mx-8/16">
                <img
                  className="h-8 ~w-[7.21rem]/[15rem] sm:h-auto"
                  src={compsych}
                  alt=""
                />
              </div>
              <div className="~mx-8/16">
                <img className="~w-[3.59rem]/[9.17rem]" src={tricare} alt="" />
              </div>
              <div className="~mx-8/16">
                <img
                  className="~w-[8.58rem]/[17.15rem]"
                  src={multiplan}
                  alt=""
                />
              </div>
            </Marquee>
          </div>

          <h2 className="mx-auto rounded-lg border border-[#D0D0D0] bg-[#F3F3F3] text-center font-heading font-medium text-[#070707] ~text-base/xl ~mt-6/12 ~mb-4/10 ~max-w-[8.4rem]/[11rem] ~py-2/3">
            Out of network
          </h2>

          <div className="hidden items-center justify-center sm:flex sm:~gap-12/16">
            <div>
              <img src={emblem} alt="" className="~w-[9.47rem]/[12.34rem]" />
            </div>
            <div>
              <img src={cms} alt="" className="~w-[2.79rem]/[4.125rem]" />
            </div>
            <div>
              <img src={fidelis} alt="" className="~w-[4rem]/[5rem]" />
            </div>
            <div>
              <img src={ghi} alt="" className="~w-[4.52rem]/[5.68rem]" />
            </div>
            <div>
              <img src={metro} alt="" className="~w-[7.26rem]/[13.18rem]" />
            </div>
          </div>

          <div className="sm:hidden">
            <Marquee play={true} speed={90}>
              <div className="~mx-8/28">
                <img src={emblem} alt="" className="~w-[8.47rem]/[10.25rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={cms} alt="" className="~w-[2.73rem]/[4.125rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={fidelis} alt="" className="~w-[4rem]/[5rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={ghi} alt="" className="~w-[4.62rem]/[5.68rem]" />
              </div>
              <div className="~mx-8/28">
                <img src={metro} alt="" className="w-[8.95rem]" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
