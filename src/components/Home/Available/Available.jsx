import React from "react";
import "./Available.css";
import newyork from "../../../assets/newyork.png";
import newjersey from "../../../assets/newjersey.png";
import massachusetts from "../../../assets/massachusetts.png";
import connecticut from "../../../assets/connecticut.png";

const Available = () => {
  return (
    <div className="available-container">
      <div className="available-wrapper">
        <h1>Available Locations</h1>
        <p>We currently serve in these 4 states</p>
        <div className="avail-img">
          <img src={newyork} alt="" />
          <img src={connecticut} alt="" />
          <img src={newjersey} alt="" />
          <img src={massachusetts} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Available;
