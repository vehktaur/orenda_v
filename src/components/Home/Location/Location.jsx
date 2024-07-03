import React from "react";
import "./Location.css";
import newview from "../../../assets/newview.png";
import call from "../../../assets/call.png";
import swirly from "../../../assets/swirly.png";
import ellipcycle from "../../../assets/ellipcycle.png";

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-wrapper">
        <h1>Our Physical location</h1>
        <p>80 5th Avenue, New York, New York, 10011.</p>
        <div className="loc-prop">
         
          <div className="hidden md:block"><img src={newview} alt="" className="newview" /></div>
          <div className="loc-prop-txt text-center md:text-start md:max-w-[32rem] ~pt-[4.5rem]/24 ~pb-8/24">
            <h2 className="~text-lg/2xl ~leading-[2rem]/10 max-w-[27.06rem] mx-auto md:mx-0">
              Physical appointments can be scheduled upon discussion with your
              provider.
            </h2>
            <p >Please call us to confirm!</p>
            <button className="w-full md:max-w-[12.44rem] mx-auto md:mx-0">
              <img src={call} alt="" className="purple" />
              Call now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
