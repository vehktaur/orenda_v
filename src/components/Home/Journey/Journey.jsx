import React from "react";
import "./Journey.css";
import video from "../../../assets/video.png";
import support from "../../../assets/support.png";
import booking from "../../../assets/booking.png";
import undraw from "../../../assets/undraw.png";
import call from "../../../assets/call.png";
import text from "../../../assets/text.png";
import mail from "../../../assets/mail.png";
import callpurple from "../../../assets/callpurple.png";

const Journey = () => {
  return (
    <div className="journey-container">
      <div className="journey-wrapper">
        <h1>Your Journey with Orenda</h1>
        <div className="icon-cards">
          <div className="icon-prop">
            <div className="icon">
              <img src={booking} alt="" />
            </div>
            <h3>Book your first appointment</h3>
            <p>
              Call or text us to setup with a provider that suits you, at the
              time that works for you.
            </p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img src={video} alt="" />
            </div>
            <h3>Meet with your provider</h3>
            <p>Connect with your provider over a video call.</p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img src={support} alt="" />
            </div>
            <h3>Support when you need it</h3>
            <p>
              Get help outside from our support team and schedule follow-ups at
              your convenience.
            </p>
          </div>
        </div>
        <hr />
        <div className="patient">
          <div className="new-patient">
            <img src={undraw} alt="" />
            <h2>New Patient?</h2>
            <p>To schedule your first appointment;</p>
            <button className="one">
              <img src={callpurple} alt=""  className="color-img"/>
              Call
            </button>
            <button className="two">Book Online</button>
          </div>
          <div className="existing-patient">
            <h2>Existing patient?</h2>
            <p>To schedule a follow-up appointment;</p>
            <button className="call">
              <img src={call} alt="" />
              Call
            </button>
            <button className="text">
              Text <img src={text} alt="" />
            </button>
            <button className="mail">
              Email <img src={mail} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
